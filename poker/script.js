// Game State
let gameState = {
    players: [],
    deck: [],
    communityCards: [],
    pot: 0,
    currentBet: 0,
    currentPlayer: 0,
    dealer: 0,
    phase: 'waiting', // waiting, preflop, flop, turn, river, showdown
    settings: {
        startingChips: 1000,
        smallBlind: 10,
        bigBlind: 20,
        numBots: 5,
        difficulty: 'medium',
        speed: 'medium',
        sound: true,
        autoMuck: true
    }
};

// Card suits and ranks
const suits = ['♠', '♥', '♦', '♣'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

// Initialize game
function init() {
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
    }, 150);
}

function setupGame() {
    // Initialize players
    gameState.players = [];
    for (let i = 0; i < gameState.settings.numBots + 1; i++) {
        gameState.players.push({
            id: i,
            name: i === 0 ? 'You' : `Bot ${i}`,
            chips: gameState.settings.startingChips,
            cards: [],
            bet: 0,
            folded: false,
            isHuman: i === 0
        });
    }
    
    // Hide inactive players
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
}

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
    });
    
    // Deal cards
    dealCards();
    
    // Post blinds
    postBlinds();
    
    // Start with player after big blind
    gameState.currentPlayer = (gameState.dealer + 3) % gameState.players.length;
    
    updateUI();
    document.getElementById('new-round-btn').classList.remove('active');
    
    if (!gameState.players[gameState.currentPlayer].isHuman) {
        setTimeout(botAction, 1000);
    }
}

function dealCards() {
    // Deal 2 cards to each player
    for (let i = 0; i < 2; i++) {
        for (let player of gameState.players) {
            player.cards.push(gameState.deck.pop());
        }
    }
}

function postBlinds() {
    const smallBlindPos = (gameState.dealer + 1) % gameState.players.length;
    const bigBlindPos = (gameState.dealer + 2) % gameState.players.length;
    
    gameState.players[smallBlindPos].bet = gameState.settings.smallBlind;
    gameState.players[smallBlindPos].chips -= gameState.settings.smallBlind;
    gameState.pot += gameState.settings.smallBlind;
    
    gameState.players[bigBlindPos].bet = gameState.settings.bigBlind;
    gameState.players[bigBlindPos].chips -= gameState.settings.bigBlind;
    gameState.pot += gameState.settings.bigBlind;
    
    gameState.currentBet = gameState.settings.bigBlind;
}

function playerAction(action) {
    const player = gameState.players[gameState.currentPlayer];
    
    if (action === 'fold') {
        player.folded = true;
        showMessage(`${player.name} folds`);
    } else if (action === 'call') {
        const callAmount = gameState.currentBet - player.bet;
        player.chips -= callAmount;
        player.bet = gameState.currentBet;
        gameState.pot += callAmount;
        showMessage(`${player.name} ${callAmount > 0 ? 'calls $' + callAmount : 'checks'}`);
    } else if (action === 'raise') {
        const raiseAmount = parseInt(document.getElementById('bet-slider').value);
        const totalBet = gameState.currentBet + raiseAmount;
        const amountToAdd = totalBet - player.bet;
        player.chips -= amountToAdd;
        player.bet = totalBet;
        gameState.pot += amountToAdd;
        gameState.currentBet = totalBet;
        showMessage(`${player.name} raises to $${totalBet}`);
        document.getElementById('bet-controls').classList.remove('active');
    }
    
    updateUI();
    nextPlayer();
}

function botAction() {
    const player = gameState.players[gameState.currentPlayer];
    const callAmount = gameState.currentBet - player.bet;
    
    // Simple bot AI
    const rand = Math.random();
    const difficulty = gameState.settings.difficulty;
    
    let foldThreshold = difficulty === 'easy' ? 0.4 : difficulty === 'medium' ? 0.3 : 0.2;
    let raiseThreshold = difficulty === 'easy' ? 0.7 : difficulty === 'medium' ? 0.6 : 0.5;
    
    if (rand < foldThreshold && callAmount > 0) {
        player.folded = true;
        showMessage(`${player.name} folds`);
    } else if (rand > raiseThreshold && player.chips > gameState.currentBet * 2) {
        const raiseAmount = Math.floor(Math.random() * (gameState.currentBet * 2)) + gameState.currentBet;
        const totalBet = Math.min(raiseAmount, player.chips + player.bet);
        const amountToAdd = totalBet - player.bet;
        player.chips -= amountToAdd;
        player.bet = totalBet;
        gameState.pot += amountToAdd;
        gameState.currentBet = totalBet;
        showMessage(`${player.name} raises to $${totalBet}`);
    } else {
        if (callAmount > 0) {
            player.chips -= callAmount;
            player.bet = gameState.currentBet;
            gameState.pot += callAmount;
            showMessage(`${player.name} calls $${callAmount}`);
        } else {
            showMessage(`${player.name} checks`);
        }
    }
    
    updateUI();
    setTimeout(nextPlayer, 1000);
}

function nextPlayer() {
    const activePlayers = gameState.players.filter(p => !p.folded);
    
    if (activePlayers.length === 1) {
        endRound(activePlayers[0]);
        return;
    }
    
    // Find next active player
    do {
        gameState.currentPlayer = (gameState.currentPlayer + 1) % gameState.players.length;
    } while (gameState.players[gameState.currentPlayer].folded);
    
    // Check if betting round is complete
    const allBetsEqual = activePlayers.every(p => p.bet === gameState.currentBet || p.chips === 0);
    
    if (allBetsEqual && gameState.currentPlayer === (gameState.dealer + 1) % gameState.players.length) {
        nextPhase();
        return;
    }
    
    updateUI();
    
    if (!gameState.players[gameState.currentPlayer].isHuman) {
        setTimeout(botAction, 1000);
    }
}

function nextPhase() {
    // Reset bets
    gameState.players.forEach(p => p.bet = 0);
    gameState.currentBet = 0;
    
    if (gameState.phase === 'preflop') {
        gameState.phase = 'flop';
        gameState.communityCards.push(gameState.deck.pop(), gameState.deck.pop(), gameState.deck.pop());
        showMessage('Flop');
    } else if (gameState.phase === 'flop') {
        gameState.phase = 'turn';
        gameState.communityCards.push(gameState.deck.pop());
        showMessage('Turn');
    } else if (gameState.phase === 'turn') {
        gameState.phase = 'river';
        gameState.communityCards.push(gameState.deck.pop());
        showMessage('River');
    } else if (gameState.phase === 'river') {
        showdown();
        return;
    }
    
    gameState.currentPlayer = (gameState.dealer + 1) % gameState.players.length;
    while (gameState.players[gameState.currentPlayer].folded) {
        gameState.currentPlayer = (gameState.currentPlayer + 1) % gameState.players.length;
    }
    
    updateUI();
    
    if (!gameState.players[gameState.currentPlayer].isHuman) {
        setTimeout(botAction, 1500);
    }
}

function showdown() {
    const activePlayers = gameState.players.filter(p => !p.folded);
    
    // Simple winner determination (random for demo)
    const winner = activePlayers[Math.floor(Math.random() * activePlayers.length)];
    winner.chips += gameState.pot;
    
    showMessage(`${winner.name} wins $${gameState.pot}!`);
    updateUI();
    
    setTimeout(() => {
        gameState.dealer = (gameState.dealer + 1) % gameState.players.length;
        document.getElementById('new-round-btn').classList.add('active');
    }, 3000);
}

function endRound(winner) {
    winner.chips += gameState.pot;
    showMessage(`${winner.name} wins $${gameState.pot}!`);
    updateUI();
    
    setTimeout(() => {
        gameState.dealer = (gameState.dealer + 1) % gameState.players.length;
        document.getElementById('new-round-btn').classList.add('active');
    }, 3000);
}

function updateUI() {
    // Update pot
    document.getElementById('pot-amount').textContent = gameState.pot;
    
    // Update players
    gameState.players.forEach((player, i) => {
        document.getElementById(`chips-${i}`).textContent = player.chips;
        
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
        if (i === gameState.currentPlayer && !player.folded) {
            document.getElementById(`player-${i}`).classList.add('active');
        } else {
            document.getElementById(`player-${i}`).classList.remove('active');
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
    const callAmount = gameState.currentBet - gameState.players[0].bet;
    document.getElementById('call-btn').textContent = callAmount > 0 ? `Call $${callAmount}` : 'Check';
    
    // Update bet slider
    const betSlider = document.getElementById('bet-slider');
    betSlider.max = gameState.players[0].chips;
    betSlider.value = Math.min(gameState.currentBet, gameState.players[0].chips);
    updateBetAmount();
}

function updateBetAmount() {
    const amount = document.getElementById('bet-slider').value;
    document.getElementById('bet-amount').textContent = amount;
}

function showMessage(msg) {
    const msgEl = document.getElementById('message-display');
    msgEl.textContent = msg;
    msgEl.classList.add('active');
    setTimeout(() => {
        msgEl.classList.remove('active');
    }, 2000);
}

function openSettings() {
    document.getElementById('settings-modal').classList.add('active');
}

function closeSettings() {
    document.getElementById('settings-modal').classList.remove('active');
}

function saveSettings() {
    gameState.settings = {
        startingChips: parseInt(document.getElementById('setting-chips').value),
        smallBlind: parseInt(document.getElementById('setting-small-blind').value),
        bigBlind: parseInt(document.getElementById('setting-big-blind').value),
        numBots: parseInt(document.getElementById('setting-bots').value),
        difficulty: document.getElementById('setting-difficulty').value,
        speed: document.getElementById('setting-speed').value,
        sound: document.getElementById('setting-sound').checked,
        autoMuck: document.getElementById('setting-auto-muck').checked
    };
    
    closeSettings();
    setupGame();
}

// Event listeners
document.getElementById('bet-slider').addEventListener('input', updateBetAmount);
document.getElementById('raise-btn').addEventListener('click', () => {
    document.getElementById('bet-controls').classList.toggle('active');
});

// Start game
window.onload = init;
