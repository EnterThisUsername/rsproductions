// =================================
// RS POKER PRO v1.1.1
// An RS Productions Game
// =================================

// Game State
let gameState = {
    players: [],
    deck: [],
    communityCards: [],
    pot: 0,
    currentBet: 0,
    currentPlayer: 0,
    dealer: 0,
    phase: 'waiting',
    roundNumber: 1,
    settings: {
        gameMode: 'texas',
        startingChips: 1000,
        smallBlind: 10,
        bigBlind: 20,
        numBots: 5,
        difficulty: 'medium',
        speed: 'medium',
        sound: true,
        autoMuck: true,
        animations: true,
        showOdds: true
    },
    stats: {
        totalWins: 0,
        totalLosses: 0,
        handsPlayed: 0,
        biggestWin: 0,
        bestHand: 'None',
        sessions: []
    }
};

// User Data
let userData = {
    username: '',
    createdAt: null,
    lastPlayed: null
};

// Card Data
const suits = ['♠', '♥', '♦', '♣'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const handRankings = [
    'High Card', 'Pair', 'Two Pair', 'Three of a Kind',
    'Straight', 'Flush', 'Full House', 'Four of a Kind',
    'Straight Flush', 'Royal Flush'
];

// =================================
// INITIALIZATION & USER MANAGEMENT
// =================================

window.onload = function() {
    checkUserData();
};

function checkUserData() {
    const savedUser = localStorage.getItem('rspoker_user');
    const savedSettings = localStorage.getItem('rspoker_settings');
    const savedStats = localStorage.getItem('rspoker_stats');
    
    if (savedUser) {
        userData = JSON.parse(savedUser);
        document.getElementById('welcome-screen').style.display = 'none';
        
        if (savedSettings) {
            gameState.settings = { ...gameState.settings, ...JSON.parse(savedSettings) };
        }
        
        if (savedStats) {
            gameState.stats = JSON.parse(savedStats);
        }
        
        init();
    } else {
        document.getElementById('welcome-screen').style.display = 'flex';
    }
}

function saveUsername() {
    const input = document.getElementById('username-input');
    const username = input.value.trim();
    
    if (username.length < 1) {
        alert('Please enter a valid username');
        return;
    }
    
    userData.username = username;
    userData.createdAt = new Date().toISOString();
    userData.lastPlayed = new Date().toISOString();
    
    localStorage.setItem('rspoker_user', JSON.stringify(userData));
    
    document.getElementById('welcome-screen').style.display = 'none';
    init();
}

function init() {
    // Show loading screen
    document.getElementById('loading-screen').classList.remove('hidden');
    
    // Simulate loading
    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += 10;
        document.getElementById('loading-progress').style.width = progress + '%';
        
        if (progress >= 100) {
            clearInterval(loadingInterval);
            setTimeout(() => {
                document.getElementById('loading-screen').classList.add('hidden');
                document.getElementById('game-container').style.display = 'block';
                setupGame();
            }, 500);
        }
    }, 100);
}

function setupGame() {
    // Update header
    document.getElementById('header-username').textContent = userData.username;
    document.getElementById('user-wins').textContent = gameState.stats.totalWins;
    document.getElementById('user-losses').textContent = gameState.stats.totalLosses;
    document.getElementById('game-mode-display').textContent = getGameModeName();
    document.getElementById('round-number').textContent = gameState.roundNumber;
    
    // Initialize players
    gameState.players = [];
    const numPlayers = gameState.settings.numBots + 1;
    
    for (let i = 0; i < numPlayers; i++) {
        gameState.players.push({
            id: i,
            name: i === 0 ? userData.username : `Bot ${i}`,
            chips: gameState.settings.startingChips,
            cards: [],
            bet: 0,
            folded: false,
            allIn: false,
            isHuman: i === 0
        });
    }
    
    // Hide/show players based on number of bots
    for (let i = 1; i <= 5; i++) {
        const playerEl = document.getElementById(`player-${i}`);
        if (i <= gameState.settings.numBots) {
            playerEl.style.display = 'flex';
        } else {
            playerEl.style.display = 'none';
        }
    }
    
    updateUI();
    document.getElementById('new-round-btn').classList.add('active');
    
    // Load settings into modal
    loadSettingsToModal();
}

function getGameModeName() {
    const modes = {
        'texas': 'Texas Hold\'em',
        'omaha': 'Omaha',
        'tournament': 'Tournament',
        'speed': 'Speed Poker'
    };
    return modes[gameState.settings.gameMode] || 'Texas Hold\'em';
}

// =================================
// DECK & CARD MANAGEMENT
// =================================

function createDeck() {
    const deck = [];
    for (let suit of suits) {
        for (let rank of ranks) {
            deck.push({ rank, suit });
        }
    }
    return shuffleDeck(deck);
}

function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

// =================================
// GAME FLOW
// =================================

function startNewRound() {
    // Reset round state
    gameState.deck = createDeck();
    gameState.communityCards = [];
    gameState.pot = 0;
    gameState.currentBet = 0;
    gameState.phase = 'preflop';
    
    // Reset players
    gameState.players.forEach(player => {
        player.cards = [];
        player.bet = 0;
        player.folded = false;
        player.allIn = false;
    });
    
    // Deal cards based on game mode
    dealCards();
    
    // Post blinds
    postBlinds();
    
    // Start with player after big blind
    const activePlayers = gameState.players.filter(p => !p.folded);
    gameState.currentPlayer = (gameState.dealer + 3) % activePlayers.length;
    
    // Ensure current player is not folded
    while (gameState.players[gameState.currentPlayer].folded) {
        gameState.currentPlayer = (gameState.currentPlayer + 1) % gameState.players.length;
    }
    
    updateUI();
    updateDealerButton();
    document.getElementById('new-round-btn').classList.remove('active');
    
    // Update stats
    gameState.stats.handsPlayed++;
    saveStats();
    
    if (!gameState.players[gameState.currentPlayer].isHuman) {
        setTimeout(botAction, getActionDelay());
    }
}

function dealCards() {
    const cardsPerPlayer = gameState.settings.gameMode === 'omaha' ? 4 : 2;
    
    for (let i = 0; i < cardsPerPlayer; i++) {
        for (let player of gameState.players) {
            if (!player.folded) {
                player.cards.push(gameState.deck.pop());
            }
        }
    }
}

function postBlinds() {
    const smallBlindPos = (gameState.dealer + 1) % gameState.players.length;
    const bigBlindPos = (gameState.dealer + 2) % gameState.players.length;
    
    const smallBlind = Math.min(gameState.settings.smallBlind, gameState.players[smallBlindPos].chips);
    const bigBlind = Math.min(gameState.settings.bigBlind, gameState.players[bigBlindPos].chips);
    
    gameState.players[smallBlindPos].bet = smallBlind;
    gameState.players[smallBlindPos].chips -= smallBlind;
    gameState.pot += smallBlind;
    
    gameState.players[bigBlindPos].bet = bigBlind;
    gameState.players[bigBlindPos].chips -= bigBlind;
    gameState.pot += bigBlind;
    
    gameState.currentBet = bigBlind;
}

function playerAction(action) {
    const player = gameState.players[gameState.currentPlayer];
    
    if (!player.isHuman) return;
    
    if (action === 'fold') {
        player.folded = true;
        showMessage(`${player.name} folds`, 'fold');
        showPlayerAction(player.id, 'FOLD');
    } else if (action === 'call') {
        const callAmount = Math.min(gameState.currentBet - player.bet, player.chips);
        player.chips -= callAmount;
        player.bet += callAmount;
        gameState.pot += callAmount;
        
        const actionText = callAmount > 0 ? 'CALL' : 'CHECK';
        showMessage(`${player.name} ${callAmount > 0 ? 'calls $' + callAmount : 'checks'}`, 'call');
        showPlayerAction(player.id, actionText);
        
        if (player.chips === 0) {
            player.allIn = true;
            showMessage(`${player.name} is all in!`, 'allin');
        }
    } else if (action === 'raise') {
        const raiseAmount = parseInt(document.getElementById('bet-slider').value);
        const totalBet = gameState.currentBet + raiseAmount;
        const amountToAdd = Math.min(totalBet - player.bet, player.chips);
        
        player.chips -= amountToAdd;
        player.bet += amountToAdd;
        gameState.pot += amountToAdd;
        gameState.currentBet = player.bet;
        
        showMessage(`${player.name} raises to $${player.bet}`, 'raise');
        showPlayerAction(player.id, `RAISE $${raiseAmount}`);
        
        if (player.chips === 0) {
            player.allIn = true;
            showMessage(`${player.name} is all in!`, 'allin');
        }
    }
    
    updateUI();
    setTimeout(nextPlayer, 800);
}

function botAction() {
    const player = gameState.players[gameState.currentPlayer];
    if (player.folded || player.allIn) {
        nextPlayer();
        return;
    }
    
    const callAmount = gameState.currentBet - player.bet;
    const potOdds = callAmount / (gameState.pot + callAmount);
    
    // Enhanced bot AI based on difficulty
    const difficulty = gameState.settings.difficulty;
    let foldThreshold, raiseThreshold, aggressiveness;
    
    switch(difficulty) {
        case 'easy':
            foldThreshold = 0.5;
            raiseThreshold = 0.8;
            aggressiveness = 0.3;
            break;
        case 'medium':
            foldThreshold = 0.4;
            raiseThreshold = 0.7;
            aggressiveness = 0.5;
            break;
        case 'hard':
            foldThreshold = 0.3;
            raiseThreshold = 0.6;
            aggressiveness = 0.7;
            break;
        case 'expert':
            foldThreshold = 0.25;
            raiseThreshold = 0.55;
            aggressiveness = 0.85;
            break;
        default:
            foldThreshold = 0.4;
            raiseThreshold = 0.7;
            aggressiveness = 0.5;
    }
    
    const rand = Math.random();
    const handStrength = evaluateHandStrength(player.cards, gameState.communityCards);
    
    // Decision making
    if (callAmount > player.chips * 0.5 && handStrength < 0.5 && rand < foldThreshold) {
        player.folded = true;
        showMessage(`${player.name} folds`, 'fold');
        showPlayerAction(player.id, 'FOLD');
    } else if (rand > raiseThreshold && player.chips > gameState.currentBet * 2 && handStrength > 0.4) {
        const raiseMultiplier = 1 + (aggressiveness * Math.random());
        const raiseAmount = Math.min(
            Math.floor(gameState.currentBet * raiseMultiplier),
            player.chips - callAmount
        );
        
        if (raiseAmount > 0) {
            const totalBet = gameState.currentBet + raiseAmount;
            const amountToAdd = Math.min(totalBet - player.bet, player.chips);
            
            player.chips -= amountToAdd;
            player.bet += amountToAdd;
            gameState.pot += amountToAdd;
            gameState.currentBet = player.bet;
            
            showMessage(`${player.name} raises to $${player.bet}`, 'raise');
            showPlayerAction(player.id, `RAISE $${raiseAmount}`);
            
            if (player.chips === 0) player.allIn = true;
        } else {
            // Fall back to call
            const amount = Math.min(callAmount, player.chips);
            player.chips -= amount;
            player.bet += amount;
            gameState.pot += amount;
            showMessage(`${player.name} ${amount > 0 ? 'calls $' + amount : 'checks'}`, 'call');
            showPlayerAction(player.id, amount > 0 ? 'CALL' : 'CHECK');
        }
    } else {
        // Call or check
        const amount = Math.min(callAmount, player.chips);
        player.chips -= amount;
        player.bet += amount;
        gameState.pot += amount;
        showMessage(`${player.name} ${amount > 0 ? 'calls $' + amount : 'checks'}`, 'call');
        showPlayerAction(player.id, amount > 0 ? 'CALL' : 'CHECK');
        
        if (player.chips === 0) player.allIn = true;
    }
    
    updateUI();
    setTimeout(nextPlayer, getActionDelay());
}

function evaluateHandStrength(playerCards, communityCards) {
    // Simplified hand strength evaluation (0-1)
    const allCards = [...playerCards, ...communityCards];
    if (allCards.length < 2) return Math.random() * 0.3;
    
    // Basic evaluation based on high cards and pairs
    const rankValues = { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14 };
    let strength = 0;
    
    // Check for pairs
    const rankCounts = {};
    allCards.forEach(card => {
        rankCounts[card.rank] = (rankCounts[card.rank] || 0) + 1;
    });
    
    const hasPair = Object.values(rankCounts).some(count => count >= 2);
    const hasTrips = Object.values(rankCounts).some(count => count >= 3);
    
    if (hasTrips) strength = 0.7;
    else if (hasPair) strength = 0.5;
    else {
        // High card strength
        const highCard = Math.max(...playerCards.map(c => rankValues[c.rank]));
        strength = (highCard / 14) * 0.4;
    }
    
    return Math.min(strength + (Math.random() * 0.15), 1);
}

function nextPlayer() {
    const activePlayers = gameState.players.filter(p => !p.folded && !p.allIn);
    
    if (activePlayers.length === 1) {
        const winner = gameState.players.find(p => !p.folded);
        endRound(winner);
        return;
    }
    
    // Find next active player
    let attempts = 0;
    do {
        gameState.currentPlayer = (gameState.currentPlayer + 1) % gameState.players.length;
        attempts++;
        if (attempts > gameState.players.length) break;
    } while (gameState.players[gameState.currentPlayer].folded || gameState.players[gameState.currentPlayer].allIn);
    
    // Check if betting round is complete
    const maxBet = Math.max(...gameState.players.filter(p => !p.folded).map(p => p.bet));
    const allBetsEqual = gameState.players.filter(p => !p.folded && !p.allIn).every(p => p.bet === maxBet || p.chips === 0);
    
    if (allBetsEqual) {
        nextPhase();
        return;
    }
    
    updateUI();
    
    if (!gameState.players[gameState.currentPlayer].isHuman) {
        setTimeout(botAction, getActionDelay());
    }
}

function nextPhase() {
    // Reset bets for next round
    gameState.players.forEach(p => p.bet = 0);
    gameState.currentBet = 0;
    
    if (gameState.phase === 'preflop') {
        gameState.phase = 'flop';
        for (let i = 0; i < 3; i++) {
            gameState.communityCards.push(gameState.deck.pop());
        }
        showMessage('Flop', 'phase');
    } else if (gameState.phase === 'flop') {
        gameState.phase = 'turn';
        gameState.communityCards.push(gameState.deck.pop());
        showMessage('Turn', 'phase');
    } else if (gameState.phase === 'turn') {
        gameState.phase = 'river';
        gameState.communityCards.push(gameState.deck.pop());
        showMessage('River', 'phase');
    } else if (gameState.phase === 'river') {
        showdown();
        return;
    }
    
    // Find first non-folded player after dealer
    gameState.currentPlayer = (gameState.dealer + 1) % gameState.players.length;
    while (gameState.players[gameState.currentPlayer].folded || gameState.players[gameState.currentPlayer].allIn) {
        gameState.currentPlayer = (gameState.currentPlayer + 1) % gameState.players.length;
    }
    
    updateUI();
    
    if (!gameState.players[gameState.currentPlayer].isHuman) {
        setTimeout(botAction, getActionDelay() * 1.5);
    }
}

function showdown() {
    gameState.phase = 'showdown';
    const activePlayers = gameState.players.filter(p => !p.folded);
    
    // Evaluate hands
    const results = activePlayers.map(player => ({
        player,
        handRank: evaluatePokerHand(player.cards, gameState.communityCards)
    }));
    
    // Sort by hand strength
    results.sort((a, b) => b.handRank.value - a.handRank.value);
    
    const winner = results[0].player;
    const winningHand = results[0].handRank.name;
    
    winner.chips += gameState.pot;
    
    // Update stats
    if (winner.isHuman) {
        gameState.stats.totalWins++;
        if (gameState.pot > gameState.stats.biggestWin) {
            gameState.stats.biggestWin = gameState.pot;
        }
        const handRankIndex = handRankings.indexOf(winningHand);
        const currentBestIndex = handRankings.indexOf(gameState.stats.bestHand);
        if (handRankIndex > currentBestIndex) {
            gameState.stats.bestHand = winningHand;
        }
    } else {
        gameState.stats.totalLosses++;
    }
    
    saveStats();
    
    showMessage(`${winner.name} wins $${gameState.pot} with ${winningHand}!`, 'win');
    
    updateUI();
    
    setTimeout(() => {
        gameState.dealer = (gameState.dealer + 1) % gameState.players.length;
        gameState.roundNumber++;
        document.getElementById('round-number').textContent = gameState.roundNumber;
        document.getElementById('new-round-btn').classList.add('active');
        updateDealerButton();
        
        // Update header stats
        document.getElementById('user-wins').textContent = gameState.stats.totalWins;
        document.getElementById('user-losses').textContent = gameState.stats.totalLosses;
    }, 3000);
}

function endRound(winner) {
    winner.chips += gameState.pot;
    
    // Update stats
    if (winner.isHuman) {
        gameState.stats.totalWins++;
        if (gameState.pot > gameState.stats.biggestWin) {
            gameState.stats.biggestWin = gameState.pot;
        }
    } else {
        gameState.stats.totalLosses++;
    }
    
    saveStats();
    
    showMessage(`${winner.name} wins $${gameState.pot}!`, 'win');
    updateUI();
    
    setTimeout(() => {
        gameState.dealer = (gameState.dealer + 1) % gameState.players.length;
        gameState.roundNumber++;
        document.getElementById('round-number').textContent = gameState.roundNumber;
        document.getElementById('new-round-btn').classList.add('active');
        updateDealerButton();
        
        // Update header stats
        document.getElementById('user-wins').textContent = gameState.stats.totalWins;
        document.getElementById('user-losses').textContent = gameState.stats.totalLosses;
    }, 3000);
}

// =================================
// HAND EVALUATION
// =================================

function evaluatePokerHand(playerCards, communityCards) {
    const allCards = [...playerCards, ...communityCards];
    
    // Simplified poker hand evaluation
    const rankValues = { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14 };
    
    // Count ranks and suits
    const rankCounts = {};
    const suitCounts = {};
    
    allCards.forEach(card => {
        rankCounts[card.rank] = (rankCounts[card.rank] || 0) + 1;
        suitCounts[card.suit] = (suitCounts[card.suit] || 0) + 1;
    });
    
    const counts = Object.values(rankCounts).sort((a, b) => b - a);
    const isFlush = Object.values(suitCounts).some(count => count >= 5);
    
    // Check for straight
    const uniqueRanks = Object.keys(rankCounts).map(r => rankValues[r]).sort((a, b) => a - b);
    let isStraight = false;
    for (let i = 0; i <= uniqueRanks.length - 5; i++) {
        if (uniqueRanks[i+4] - uniqueRanks[i] === 4) {
            isStraight = true;
            break;
        }
    }
    
    // Determine hand
    if (isStraight && isFlush) {
        const highCard = Math.max(...uniqueRanks);
        if (highCard === 14) return { name: 'Royal Flush', value: 10 };
        return { name: 'Straight Flush', value: 9 };
    }
    if (counts[0] === 4) return { name: 'Four of a Kind', value: 8 };
    if (counts[0] === 3 && counts[1] === 2) return { name: 'Full House', value: 7 };
    if (isFlush) return { name: 'Flush', value: 6 };
    if (isStraight) return { name: 'Straight', value: 5 };
    if (counts[0] === 3) return { name: 'Three of a Kind', value: 4 };
    if (counts[0] === 2 && counts[1] === 2) return { name: 'Two Pair', value: 3 };
    if (counts[0] === 2) return { name: 'Pair', value: 2 };
    
    return { name: 'High Card', value: 1 };
}

// =================================
// UI UPDATES
// =================================

function updateUI() {
    // Update pot
    document.getElementById('pot-amount').textContent = gameState.pot;
    
    // Update players
    gameState.players.forEach((player, i) => {
        document.getElementById(`chips-${i}`).textContent = player.chips;
        document.getElementById(`name-${i}`).textContent = player.name;
        
        // Update bet display
        const betEl = document.getElementById(`bet-${i}`);
        if (player.bet > 0) {
            betEl.textContent = `Bet: $${player.bet}`;
        } else {
            betEl.textContent = '';
        }
        
        // Update cards
        const cardsContainer = document.getElementById(`cards-${i}`);
        cardsContainer.innerHTML = '';
        
        if (player.cards.length > 0 && !player.folded) {
            player.cards.forEach(card => {
                const cardEl = document.createElement('div');
                cardEl.className = 'card';
                
                if (player.isHuman || gameState.phase === 'showdown') {
                    cardEl.classList.add(card.suit === '♥' || card.suit === '♦' ? 'red' : 'black');
                    cardEl.innerHTML = `<span class="rank">${card.rank}</span><span class="suit">${card.suit}</span>`;
                } else {
                    cardEl.classList.add('back');
                }
                
                cardsContainer.appendChild(cardEl);
            });
        }
        
        // Highlight active player
        const playerEl = document.getElementById(`player-${i}`);
        if (i === gameState.currentPlayer && !player.folded && !player.allIn) {
            playerEl.classList.add('active');
        } else {
            playerEl.classList.remove('active');
        }
        
        // Mark folded players
        if (player.folded) {
            playerEl.classList.add('folded');
        } else {
            playerEl.classList.remove('folded');
        }
    });
    
    // Update community cards
    const communityContainer = document.getElementById('community-cards');
    communityContainer.innerHTML = '';
    gameState.communityCards.forEach(card => {
        const cardEl = document.createElement('div');
        cardEl.className = 'card ' + (card.suit === '♥' || card.suit === '♦' ? 'red' : 'black');
        cardEl.innerHTML = `<span class="rank">${card.rank}</span><span class="suit">${card.suit}</span>`;
        communityContainer.appendChild(cardEl);
    });
    
    // Update call button
    const humanPlayer = gameState.players[0];
    const callAmount = gameState.currentBet - humanPlayer.bet;
    const callBtn = document.getElementById('call-btn');
    callBtn.querySelector('.btn-text').textContent = callAmount > 0 ? `Call $${callAmount}` : 'Check';
    
    // Update bet slider
    const betSlider = document.getElementById('bet-slider');
    betSlider.max = humanPlayer.chips;
    betSlider.min = Math.min(gameState.settings.bigBlind, humanPlayer.chips);
    betSlider.value = Math.min(gameState.currentBet, humanPlayer.chips);
    updateBetAmount();
    
    // Update hand rank for human player
    if (humanPlayer.cards.length > 0) {
        const handEval = evaluatePokerHand(humanPlayer.cards, gameState.communityCards);
        document.getElementById('hand-rank').textContent = handEval.name;
    }
    
    // Enable/disable buttons
    const isHumanTurn = gameState.currentPlayer === 0 && !humanPlayer.folded;
    document.getElementById('fold-btn').disabled = !isHumanTurn;
    document.getElementById('call-btn').disabled = !isHumanTurn;
    document.getElementById('raise-btn').disabled = !isHumanTurn || humanPlayer.chips <= callAmount;
}

function updateDealerButton() {
    const dealerBtn = document.getElementById('dealer-button');
    const dealerPlayer = document.getElementById(`player-${gameState.dealer}`);
    
    if (dealerPlayer) {
        const rect = dealerPlayer.getBoundingClientRect();
        const tableRect = document.querySelector('.poker-table').getBoundingClientRect();
        
        dealerBtn.style.left = (rect.left - tableRect.left + rect.width / 2 - 25) + 'px';
        dealerBtn.style.top = (rect.top - tableRect.top - 40) + 'px';
    }
}

function updateBetAmount() {
    const amount = document.getElementById('bet-slider').value;
    document.getElementById('bet-amount').textContent = amount;
}

function quickBet(percentage) {
    const humanPlayer = gameState.players[0];
    const amount = Math.floor(humanPlayer.chips * percentage);
    document.getElementById('bet-slider').value = amount;
    updateBetAmount();
}

function showMessage(msg, type = '') {
    const msgEl = document.getElementById('message-toast');
    msgEl.textContent = msg;
    msgEl.classList.add('active');
    setTimeout(() => {
        msgEl.classList.remove('active');
    }, 2000);
}

function showPlayerAction(playerId, action) {
    const actionEl = document.getElementById(`action-${playerId}`);
    actionEl.textContent = action;
    setTimeout(() => {
        actionEl.textContent = '';
    }, 2000);
}

function getActionDelay() {
    const speeds = { 'fast': 1000, 'medium': 1500, 'slow': 2500 };
    return speeds[gameState.settings.speed] || 1500;
}

// =================================
// SETTINGS
// =================================

function openSettings() {
    document.getElementById('settings-modal').classList.add('active');
}

function closeSettings() {
    document.getElementById('settings-modal').classList.remove('active');
}

function loadSettingsToModal() {
    document.getElementById('setting-game-mode').value = gameState.settings.gameMode;
    document.getElementById('setting-chips').value = gameState.settings.startingChips;
    document.getElementById('setting-small-blind').value = gameState.settings.smallBlind;
    document.getElementById('setting-big-blind').value = gameState.settings.bigBlind;
    document.getElementById('setting-bots').value = gameState.settings.numBots;
    document.getElementById('setting-difficulty').value = gameState.settings.difficulty;
    document.getElementById('setting-speed').value = gameState.settings.speed;
    document.getElementById('setting-sound').checked = gameState.settings.sound;
    document.getElementById('setting-auto-muck').checked = gameState.settings.autoMuck;
    document.getElementById('setting-animations').checked = gameState.settings.animations;
    document.getElementById('setting-show-odds').checked = gameState.settings.showOdds;
    document.getElementById('setting-username').value = userData.username;
}

function saveSettings() {
    const newUsername = document.getElementById('setting-username').value.trim();
    if (newUsername && newUsername !== userData.username) {
        userData.username = newUsername;
        localStorage.setItem('rspoker_user', JSON.stringify(userData));
        document.getElementById('header-username').textContent = newUsername;
        if (gameState.players[0]) {
            gameState.players[0].name = newUsername;
            document.getElementById('name-0').textContent = newUsername;
        }
    }
    
    gameState.settings = {
        gameMode: document.getElementById('setting-game-mode').value,
        startingChips: parseInt(document.getElementById('setting-chips').value),
        smallBlind: parseInt(document.getElementById('setting-small-blind').value),
        bigBlind: parseInt(document.getElementById('setting-big-blind').value),
        numBots: parseInt(document.getElementById('setting-bots').value),
        difficulty: document.getElementById('setting-difficulty').value,
        speed: document.getElementById('setting-speed').value,
        sound: document.getElementById('setting-sound').checked,
        autoMuck: document.getElementById('setting-auto-muck').checked,
        animations: document.getElementById('setting-animations').checked,
        showOdds: document.getElementById('setting-show-odds').checked
    };
    
    localStorage.setItem('rspoker_settings', JSON.stringify(gameState.settings));
    
    closeSettings();
    setupGame();
    showMessage('Settings saved!');
}

function resetStats() {
    if (confirm('Are you sure you want to reset all statistics?')) {
        gameState.stats = {
            totalWins: 0,
            totalLosses: 0,
            handsPlayed: 0,
            biggestWin: 0,
            bestHand: 'None',
            sessions: []
        };
        saveStats();
        document.getElementById('user-wins').textContent = 0;
        document.getElementById('user-losses').textContent = 0;
        showMessage('Statistics reset!');
    }
}

function clearAllData() {
    if (confirm('This will delete ALL your data including username, settings, and statistics. Are you sure?')) {
        localStorage.removeItem('rspoker_user');
        localStorage.removeItem('rspoker_settings');
        localStorage.removeItem('rspoker_stats');
        location.reload();
    }
}

// =================================
// STATISTICS
// =================================

function openStats() {
    updateStatsDisplay();
    document.getElementById('stats-modal').classList.add('active');
}

function closeStats() {
    document.getElementById('stats-modal').classList.remove('active');
}

function updateStatsDisplay() {
    document.getElementById('stat-total-wins').textContent = gameState.stats.totalWins;
    document.getElementById('stat-total-losses').textContent = gameState.stats.totalLosses;
    document.getElementById('stat-biggest-win').textContent = '$' + gameState.stats.biggestWin;
    
    const totalGames = gameState.stats.totalWins + gameState.stats.totalLosses;
    const winRate = totalGames > 0 ? Math.round((gameState.stats.totalWins / totalGames) * 100) : 0;
    document.getElementById('stat-win-rate').textContent = winRate + '%';
    
    document.getElementById('stat-hands-played').textContent = gameState.stats.handsPlayed;
    document.getElementById('stat-best-hand').textContent = gameState.stats.bestHand;
}

function saveStats() {
    localStorage.setItem('rspoker_stats', JSON.stringify(gameState.stats));
}

// =================================
// EVENT LISTENERS
// =================================

document.getElementById('bet-slider').addEventListener('input', updateBetAmount);

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (gameState.currentPlayer === 0 && !gameState.players[0].folded) {
        if (e.key === 'f') playerAction('fold');
        if (e.key === 'c') playerAction('call');
        if (e.key === 'r') playerAction('raise');
    }
});

// Window resize handler for dealer button
window.addEventListener('resize', () => {
    if (gameState.players.length > 0) {
        updateDealerButton();
    }
});
