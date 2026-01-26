// Executive Sports Manager v1.1.1
// Enhanced Game Logic

// ============================================
// GAME STATE
// ============================================
let gameState = {
    accountId: null,
    username: null,
    coachName: null,
    sport: null,
    league: null,
    team: null,
    difficulty: 'normal',
    budget: 50000000,
    day: 1,
    season: 1,
    roster: [],
    facilities: {
        stadium: { level: 1, progress: 0, cost: 5000000 },
        training: { level: 1, progress: 0, cost: 3000000 },
        medical: { level: 1, progress: 0, cost: 2000000 }
    },
    games: [],
    record: { wins: 0, losses: 0, draws: 0 },
    transactions: [],
    inbox: [],
    transferMarket: [],
    standings: [],
    achievements: [],
    settings: {
        autosave: true,
        notifications: true,
        theme: 'dark'
    },
    morale: 75,
    chemistry: 70
};

// ============================================
// GAME DATA
// ============================================
const leagues = {
    soccer: ['Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1'],
    football: ['NFL'],
    hockey: ['NHL'],
    baseball: ['MLB'],
    basketball: ['NBA'],
    tennis: ['ATP Tour'],
    cricket: ['IPL', 'The Hundred']
};

const teams = {
    'Premier League': ['Arsenal', 'Chelsea', 'Liverpool', 'Man City', 'Man United', 'Tottenham', 'Newcastle', 'Brighton', 'Aston Villa', 'West Ham'],
    'La Liga': ['Barcelona', 'Real Madrid', 'Atletico Madrid', 'Sevilla', 'Valencia', 'Villarreal'],
    'Serie A': ['Juventus', 'AC Milan', 'Inter Milan', 'Roma', 'Napoli', 'Lazio'],
    'Bundesliga': ['Bayern Munich', 'Borussia Dortmund', 'RB Leipzig', 'Bayer Leverkusen', 'Union Berlin'],
    'Ligue 1': ['PSG', 'Monaco', 'Lyon', 'Marseille', 'Lille'],
    'NFL': ['Patriots', 'Cowboys', 'Packers', '49ers', 'Chiefs', 'Eagles', 'Steelers', 'Ravens', 'Broncos', 'Seahawks'],
    'NHL': ['Maple Leafs', 'Canadiens', 'Bruins', 'Rangers', 'Blackhawks', 'Red Wings', 'Oilers', 'Penguins'],
    'MLB': ['Yankees', 'Red Sox', 'Dodgers', 'Cubs', 'Cardinals', 'Giants', 'Astros', 'Braves'],
    'NBA': ['Lakers', 'Celtics', 'Warriors', 'Bulls', 'Heat', 'Nets', 'Knicks', 'Mavericks', '76ers', 'Bucks'],
    'ATP Tour': ['Team Federer', 'Team Nadal', 'Team Djokovic', 'Team Murray'],
    'IPL': ['Mumbai Indians', 'Chennai Super Kings', 'Royal Challengers', 'Kolkata Knight Riders'],
    'The Hundred': ['London Spirit', 'Oval Invincibles', 'Manchester Originals', 'Birmingham Phoenix']
};

const positions = {
    soccer: ['GK', 'DEF', 'MID', 'FWD'],
    football: ['QB', 'RB', 'WR', 'TE', 'OL', 'DL', 'LB', 'DB', 'K'],
    hockey: ['G', 'D', 'LW', 'C', 'RW'],
    baseball: ['P', 'C', '1B', '2B', '3B', 'SS', 'OF'],
    basketball: ['PG', 'SG', 'SF', 'PF', 'C'],
    tennis: ['Singles', 'Doubles'],
    cricket: ['Batsman', 'Bowler', 'All-Rounder', 'Wicket-Keeper']
};

const firstNames = ['Alex', 'Marcus', 'James', 'David', 'Kevin', 'Ryan', 'John', 'Michael', 'Chris', 'Daniel', 'Tom', 'Jake', 'Luke', 'Matt', 'Sam', 'Ben', 'Max', 'Josh', 'Nick', 'Tyler', 'Connor', 'Ethan', 'Nathan', 'Logan', 'Dylan', 'Mason', 'Lucas', 'Jack', 'Owen', 'Aiden'];
const lastNames = ['Johnson', 'Smith', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Wilson', 'Anderson', 'Taylor', 'Thomas', 'Moore', 'Jackson', 'Martin', 'Lee', 'Walker', 'Hall', 'Allen', 'Young', 'King', 'Wright', 'Lopez', 'Hill', 'Scott', 'Green', 'Adams', 'Baker'];

const achievementDefinitions = [
    { id: 'first_win', name: 'First Victory', desc: 'Win your first game', icon: '🎉', unlocked: false, reward: 1000000 },
    { id: 'win_streak_3', name: 'Hot Streak', desc: 'Win 3 games in a row', icon: '🔥', unlocked: false, reward: 2000000 },
    { id: 'win_streak_5', name: 'Unstoppable', desc: 'Win 5 games in a row', icon: '⚡', unlocked: false, reward: 5000000 },
    { id: 'perfect_season', name: 'Perfect Season', desc: 'Win all games in a season', icon: '👑', unlocked: false, reward: 20000000 },
    { id: 'first_signing', name: 'First Signing', desc: 'Sign your first player', icon: '✍️', unlocked: false, reward: 500000 },
    { id: 'big_spender', name: 'Big Spender', desc: 'Spend over $50M on transfers', icon: '💎', unlocked: false, reward: 3000000 },
    { id: 'bargain_hunter', name: 'Bargain Hunter', desc: 'Sign a player rated 85+ for under $5M', icon: '🤝', unlocked: false, reward: 2500000 },
    { id: 'facility_max', name: 'World Class Facilities', desc: 'Max out all facilities', icon: '🏟️', unlocked: false, reward: 10000000 },
    { id: 'championship', name: 'Champions!', desc: 'Win the league', icon: '🏆', unlocked: false, reward: 25000000 },
    { id: 'dynasty', name: 'Dynasty', desc: 'Win 3 championships', icon: '👑', unlocked: false, reward: 50000000 },
    { id: 'budget_master', name: 'Financial Genius', desc: 'Have over $100M in budget', icon: '💰', unlocked: false, reward: 5000000 },
    { id: 'undefeated_season', name: 'Invincible', desc: 'Go undefeated in a season', icon: '🛡️', unlocked: false, reward: 30000000 },
    { id: 'comeback_king', name: 'Comeback King', desc: 'Win after being in last place', icon: '📈', unlocked: false, reward: 10000000 },
    { id: 'youth_development', name: 'Youth Academy', desc: 'Train a player from 70 to 90 rating', icon: '🌱', unlocked: false, reward: 8000000 },
    { id: 'full_roster', name: 'Squad Complete', desc: 'Have a full roster with 85+ average', icon: '⭐', unlocked: false, reward: 15000000 },
    { id: 'clean_sweep', name: 'Clean Sweep', desc: 'Win by 5+ goals/points in 5 games', icon: '🧹', unlocked: false, reward: 7000000 },
    { id: 'giant_killer', name: 'Giant Killer', desc: 'Beat the #1 ranked team', icon: '⚔️', unlocked: false, reward: 5000000 },
    { id: 'morale_master', name: 'Team Spirit', desc: 'Maintain 90+ morale for 10 days', icon: '😊', unlocked: false, reward: 4000000 },
    { id: 'transfer_profit', name: 'Profit Maker', desc: 'Make $20M profit on transfers', icon: '📊', unlocked: false, reward: 6000000 },
    { id: 'century', name: 'Century Club', desc: 'Reach day 100', icon: '💯', unlocked: false, reward: 10000000 },
    { id: 'legendary_start', name: 'Legendary Manager', desc: 'Complete a season on Legendary difficulty', icon: '🔥', unlocked: false, reward: 40000000 },
    { id: 'master_tactician', name: 'Master Tactician', desc: 'Win 10 games with team chemistry below 50', icon: '🧠', unlocked: false, reward: 12000000 },
    { id: 'speedrun', name: 'Speed Champion', desc: 'Win championship in first season', icon: '⏱️', unlocked: false, reward: 20000000 },
    { id: 'collector', name: 'Collector', desc: 'Have players from 10 different positions', icon: '🎯', unlocked: false, reward: 5000000 },
    { id: 'veteran', name: 'Veteran Manager', desc: 'Complete 5 seasons', icon: '🎖️', unlocked: false, reward: 50000000 }
];

// ============================================
// UTILITY FUNCTIONS
// ============================================
function hashUsername(username) {
    let hash = 0;
    for (let i = 0; i < username.length; i++) {
        hash = ((hash << 5) - hash) + username.charCodeAt(i);
        hash = hash & hash;
    }
    return btoa(Math.abs(hash).toString()).substring(0, 16);
}

function formatMoney(amount) {
    return '$' + (amount / 1000000).toFixed(1) + 'M';
}

function randomName() {
    return firstNames[Math.floor(Math.random() * firstNames.length)] + ' ' + 
           lastNames[Math.floor(Math.random() * lastNames.length)];
}

function randomRating(min = 60, max = 89) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showToast(message) {
    if (!gameState.settings.notifications) return;
    
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function checkAchievement(achievementId) {
    const achievement = gameState.achievements.find(a => a.id === achievementId);
    if (achievement && !achievement.unlocked) {
        achievement.unlocked = true;
        gameState.budget += achievement.reward;
        showToast(`🏆 Achievement Unlocked: ${achievement.name}! +${formatMoney(achievement.reward)}`);
        addTransaction(`Achievement: ${achievement.name}`, achievement.reward);
        saveGame();
        updateUI();
    }
}

// ============================================
// LOGIN FLOW
// ============================================
function handleLogin() {
    const username = document.getElementById('usernameInput').value.trim();
    if (!username) {
        alert('Please enter a username');
        return;
    }

    gameState.username = username;
    gameState.accountId = hashUsername(username);

    const savedData = localStorage.getItem(gameState.accountId);
    if (savedData) {
        gameState = JSON.parse(savedData);
        startGame();
    } else {
        showSetupScreen('sportSelect');
    }
}

function showSetupScreen(screenId) {
    document.getElementById('loginBox').classList.add('hidden');
    document.getElementById('sportSelect').classList.add('hidden');
    document.getElementById('coachNameScreen').classList.add('hidden');
    document.getElementById('leagueSelect').classList.add('hidden');
    document.getElementById('teamSelect').classList.add('hidden');
    document.getElementById(screenId).classList.remove('hidden');
}

function selectSport() {
    const sport = document.getElementById('sportInput').value;
    if (!sport) {
        alert('Please select a sport');
        return;
    }
    gameState.sport = sport;
    showSetupScreen('coachNameScreen');
}

function setCoachName() {
    const name = document.getElementById('coachNameInput').value.trim();
    const difficulty = document.getElementById('difficultyInput').value;
    
    if (!name) {
        alert('Please enter your manager name');
        return;
    }
    
    gameState.coachName = name;
    gameState.difficulty = difficulty;
    
    // Adjust starting budget based on difficulty
    switch(difficulty) {
        case 'easy':
            gameState.budget = 80000000;
            break;
        case 'normal':
            gameState.budget = 50000000;
            break;
        case 'hard':
            gameState.budget = 30000000;
            break;
        case 'legendary':
            gameState.budget = 15000000;
            break;
    }
    
    const leagueSelect = document.getElementById('leagueInput');
    leagueSelect.innerHTML = '<option value="">Choose a league...</option>';
    leagues[gameState.sport].forEach(league => {
        const option = document.createElement('option');
        option.value = league;
        option.textContent = league;
        leagueSelect.appendChild(option);
    });
    
    showSetupScreen('leagueSelect');
}

function selectLeague() {
    const league = document.getElementById('leagueInput').value;
    if (!league) {
        alert('Please select a league');
        return;
    }
    gameState.league = league;
    
    const teamSelect = document.getElementById('teamInput');
    teamSelect.innerHTML = '<option value="">Choose a team...</option>';
    teams[league].forEach(team => {
        const option = document.createElement('option');
        option.value = team;
        option.textContent = team;
        teamSelect.appendChild(option);
    });
    
    showSetupScreen('teamSelect');
}

function selectTeam() {
    const team = document.getElementById('teamInput').value;
    if (!team) {
        alert('Please select a team');
        return;
    }
    gameState.team = team;
    
    generateRoster();
    generateTransferMarket();
    generateSchedule();
    initializeStandings();
    initializeAchievements();
    
    addMessage('Welcome!', `Welcome to ${team}, ${gameState.coachName}! Your journey begins today. Good luck!`, 'news');
    
    saveGame();
    startGame();
}

function startGame() {
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('gameContainer').style.display = 'block';
    updateUI();
}

// ============================================
// GAME GENERATION
// ============================================
function generateRoster() {
    const sportPositions = positions[gameState.sport];
    const rosterSize = gameState.sport === 'soccer' ? 22 : 
                      gameState.sport === 'football' ? 30 : 
                      gameState.sport === 'hockey' ? 23 : 
                      gameState.sport === 'basketball' ? 15 :
                      gameState.sport === 'tennis' ? 8 : 25;
    
    gameState.roster = [];
    for (let i = 0; i < rosterSize; i++) {
        const rating = randomRating(65, 85);
        gameState.roster.push({
            id: Date.now() + i,
            name: randomName(),
            position: sportPositions[Math.floor(Math.random() * sportPositions.length)],
            rating: rating,
            age: Math.floor(Math.random() * 15) + 18,
            value: Math.floor(rating * 500000) + Math.floor(Math.random() * 10000000),
            morale: Math.floor(Math.random() * 20) + 70,
            injured: false,
            injuryDays: 0
        });
    }
}

function generateTransferMarket() {
    const sportPositions = positions[gameState.sport];
    gameState.transferMarket = [];
    for (let i = 0; i < 80; i++) {
        const rating = randomRating(60, 95);
        gameState.transferMarket.push({
            id: Date.now() + 10000 + i,
            name: randomName(),
            position: sportPositions[Math.floor(Math.random() * sportPositions.length)],
            rating: rating,
            age: Math.floor(Math.random() * 18) + 18,
            value: Math.floor(rating * 600000) + Math.floor(Math.random() * 15000000),
            morale: Math.floor(Math.random() * 30) + 60
        });
    }
}

function generateSchedule() {
    const opponents = teams[gameState.league].filter(t => t !== gameState.team);
    gameState.games = [];
    
    const gamesPerSeason = 38;
    for (let i = 0; i < gamesPerSeason; i++) {
        const opponent = opponents[i % opponents.length];
        gameState.games.push({
            id: Date.now() + 20000 + i,
            day: (i + 1) * 7,
            opponent: opponent,
            home: i % 2 === 0,
            played: false,
            result: null,
            score: null
        });
    }
}

function initializeStandings() {
    gameState.standings = teams[gameState.league].map(team => ({
        team: team,
        played: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        points: 0
    }));
}

function initializeAchievements() {
    gameState.achievements = achievementDefinitions.map(a => ({...a}));
}

// ============================================
// UI UPDATES
// ============================================
function updateUI() {
    document.getElementById('teamName').textContent = gameState.team;
    document.getElementById('coachName').textContent = gameState.coachName;
    document.getElementById('leagueName').textContent = gameState.league;
    document.getElementById('budgetDisplay').textContent = formatMoney(gameState.budget);
    document.getElementById('recordDisplay').textContent = 
        `${gameState.record.wins}-${gameState.record.losses}-${gameState.record.draws}`;
    document.getElementById('dayDisplay').textContent = gameState.day;
    document.getElementById('seasonDisplay').textContent = gameState.season;
    
    updateRoster();
    updateTransfers();
    updateFacilities();
    updateGames();
    updateFinance();
    updateStandings();
    updateAchievements();
    updateInbox();
}

function updateRoster() {
    const grid = document.getElementById('rosterGrid');
    grid.innerHTML = '';
    
    gameState.roster.forEach(player => {
        const card = document.createElement('div');
        card.className = 'player-card';
        card.onclick = () => showPlayerModal(player, true);
        
        const injuryBadge = player.injured ? '<span class="badge injury">Injured</span>' : '';
        
        card.innerHTML = `
            <div class="player-header">
                <div class="player-name">${player.name}</div>
                <div class="player-rating">${player.rating}</div>
            </div>
            <div class="player-position">${player.position} ${injuryBadge}</div>
            <div class="player-stats">
                <div class="player-stat"><strong>Age:</strong> ${player.age}</div>
                <div class="player-stat"><strong>Value:</strong> ${formatMoney(player.value)}</div>
            </div>
            <div class="player-stats">
                <div class="player-stat"><strong>Morale:</strong> ${player.morale}</div>
            </div>
        `;
        grid.appendChild(card);
    });
    
    // Update team summary
    const avgRating = gameState.roster.reduce((sum, p) => sum + p.rating, 0) / gameState.roster.length;
    const totalValue = gameState.roster.reduce((sum, p) => sum + p.value, 0);
    
    document.getElementById('teamAverage').textContent = avgRating.toFixed(1);
    document.getElementById('squadSize').textContent = gameState.roster.length;
    document.getElementById('totalValue').textContent = formatMoney(totalValue);
}

function updateTransfers() {
    const grid = document.getElementById('transferGrid');
    const positionFilter = document.getElementById('positionFilter');
    
    if (positionFilter.options.length <= 1) {
        positions[gameState.sport].forEach(pos => {
            const option = document.createElement('option');
            option.value = pos;
            option.textContent = pos;
            positionFilter.appendChild(option);
        });
    }
    
    filterTransfers();
}

function filterTransfers() {
    const grid = document.getElementById('transferGrid');
    const posFilter = document.getElementById('positionFilter').value;
    const maxPrice = parseInt(document.getElementById('maxPriceFilter').value) || Infinity;
    const minRating = parseInt(document.getElementById('minRatingFilter').value) || 0;
    
    grid.innerHTML = '';
    
    const filtered = gameState.transferMarket.filter(player => {
        return (posFilter === 'all' || player.position === posFilter) && 
               player.value <= maxPrice * 1000000 &&
               player.rating >= minRating;
    });
    
    filtered.slice(0, 30).forEach(player => {
        const card = document.createElement('div');
        card.className = 'player-card';
        card.innerHTML = `
            <div class="player-header">
                <div class="player-name">${player.name}</div>
                <div class="player-rating">${player.rating}</div>
            </div>
            <div class="player-position">${player.position}</div>
            <div class="player-stats">
                <div class="player-stat"><strong>Age:</strong> ${player.age}</div>
                <div class="player-stat"><strong>Value:</strong> ${formatMoney(player.value)}</div>
            </div>
            <button class="small" onclick="buyPlayer(${player.id})" style="margin-top: 12px;">
                Sign Player
            </button>
        `;
        grid.appendChild(card);
    });
    
    if (filtered.length === 0) {
        grid.innerHTML = '<p style="text-align: center; color: var(--text-dim); padding: 40px;">No players match your filters</p>';
    }
}

function updateFacilities() {
    const grid = document.getElementById('facilitiesGrid');
    grid.innerHTML = '';
    
    const facilityNames = {
        stadium: '🏟️ Stadium',
        training: '💪 Training Complex',
        medical: '🏥 Medical Facility'
    };
    
    const facilityDesc = {
        stadium: 'Increases match day revenue',
        training: 'Improves player development speed',
        medical: 'Reduces injury duration'
    };
    
    Object.keys(gameState.facilities).forEach(key => {
        const facility = gameState.facilities[key];
        const card = document.createElement('div');
        card.className = 'facility-card';
        card.innerHTML = `
            <div class="facility-header">
                <div>
                    <div class="facility-name">${facilityNames[key]}</div>
                    <div style="color: var(--text-dim); font-size: 0.9rem; margin-top: 5px;">${facilityDesc[key]}</div>
                </div>
                <div class="facility-level">Level ${facility.level}</div>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${facility.progress}%"></div>
            </div>
            <div class="facility-info">
                <div class="upgrade-cost">Upgrade: ${formatMoney(facility.cost)}</div>
                <button class="small" onclick="upgradeFacility('${key}')" ${facility.level >= 10 ? 'disabled' : ''}>
                    ${facility.level >= 10 ? 'Max Level' : 'Upgrade'}
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function updateGames() {
    const list = document.getElementById('gamesList');
    const scheduleList = document.getElementById('scheduleGamesList');
    
    list.innerHTML = '';
    scheduleList.innerHTML = '';
    
    const playedGames = gameState.games.filter(g => g.played).slice(-15).reverse();
    const upcomingGames = gameState.games.filter(g => !g.played).slice(0, 5);
    
    playedGames.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        const matchup = game.home ? 
            `${gameState.team} vs ${game.opponent}` :
            `${game.opponent} vs ${gameState.team}`;
        
        card.innerHTML = `
            <div class="game-teams">
                <div class="game-matchup">${matchup}</div>
                <div class="game-date">Day ${game.day}</div>
            </div>
            <div class="game-score">${game.score}</div>
            <div class="game-result ${game.result}">${game.result.toUpperCase()}</div>
        `;
        list.appendChild(card);
    });
    
    if (playedGames.length === 0) {
        list.innerHTML = '<p style="text-align: center; color: var(--text-dim); padding: 40px;">No games played yet</p>';
    }
    
    upcomingGames.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        const matchup = game.home ? 
            `${gameState.team} vs ${game.opponent}` :
            `${game.opponent} vs ${gameState.team}`;
        
        card.innerHTML = `
            <div class="game-teams">
                <div class="game-matchup">${matchup}</div>
                <div class="game-date">Day ${game.day}</div>
            </div>
            <div style="color: var(--text-dim); margin: 0 35px;">vs</div>
        `;
        scheduleList.appendChild(card);
    });
}

function updateFinance() {
    document.getElementById('financeCurrentBudget').textContent = formatMoney(gameState.budget);
    
    const totalSpent = gameState.transactions
        .filter(t => t.amount < 0)
        .reduce((sum, t) => sum + Math.abs(t.amount), 0);
    const totalIncome = gameState.transactions
        .filter(t => t.amount > 0)
        .reduce((sum, t) => sum + t.amount, 0);
    
    document.getElementById('financeTotalSpent').textContent = formatMoney(totalSpent);
    document.getElementById('financeTotalIncome').textContent = formatMoney(totalIncome);
    
    const list = document.getElementById('transactionsList');
    list.innerHTML = '';
    
    const recentTransactions = gameState.transactions.slice(-25).reverse();
    
    recentTransactions.forEach(transaction => {
        const item = document.createElement('div');
        item.className = 'transaction-item';
        item.innerHTML = `
            <div class="transaction-desc">
                ${transaction.description}
                <div style="font-size: 0.8rem; color: var(--text-dim); margin-top: 4px;">Day ${transaction.day}</div>
            </div>
            <div class="transaction-amount ${transaction.amount > 0 ? 'positive' : 'negative'}">
                ${transaction.amount > 0 ? '+' : ''}${formatMoney(Math.abs(transaction.amount))}
            </div>
        `;
        list.appendChild(item);
    });
    
    if (recentTransactions.length === 0) {
        list.innerHTML = '<p style="text-align: center; color: var(--text-dim); padding: 40px;">No transactions yet</p>';
    }
}

function updateStandings() {
    const table = document.getElementById('standingsTable');
    table.innerHTML = '';
    
    // Sort standings by points, then goal difference
    const sortedStandings = [...gameState.standings].sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        return (b.goalsFor - b.goalsAgainst) - (a.goalsFor - a.goalsAgainst);
    });
    
    // Header
    const header = document.createElement('div');
    header.className = 'standings-row header';
    header.innerHTML = `
        <div>Pos</div>
        <div>Team</div>
        <div>P</div>
        <div>W</div>
        <div>D</div>
        <div>L</div>
        <div>Pts</div>
    `;
    table.appendChild(header);
    
    // Rows
    sortedStandings.forEach((standing, index) => {
        const row = document.createElement('div');
        row.className = 'standings-row' + (standing.team === gameState.team ? ' current-team' : '');
        row.innerHTML = `
            <div class="standings-position">${index + 1}</div>
            <div>${standing.team}</div>
            <div>${standing.played}</div>
            <div>${standing.wins}</div>
            <div>${standing.draws}</div>
            <div>${standing.losses}</div>
            <div style="font-weight: 700;">${standing.points}</div>
        `;
        table.appendChild(row);
    });
}

function updateAchievements() {
    const grid = document.getElementById('achievementsGrid');
    grid.innerHTML = '';
    
    const unlockedCount = gameState.achievements.filter(a => a.unlocked).length;
    document.getElementById('achievementCount').textContent = unlockedCount;
    document.getElementById('achievementTotal').textContent = gameState.achievements.length;
    
    gameState.achievements.forEach(achievement => {
        const card = document.createElement('div');
        card.className = 'achievement-card ' + (achievement.unlocked ? 'unlocked' : 'locked');
        card.innerHTML = `
            <div class="achievement-header">
                <div class="achievement-icon">${achievement.icon}</div>
                <div>
                    <div class="achievement-title">${achievement.name}</div>
                    ${achievement.unlocked ? '<div style="color: var(--accent); font-size: 0.85rem; font-weight: 600;">✓ UNLOCKED</div>' : ''}
                </div>
            </div>
            <div class="achievement-desc">${achievement.desc}</div>
            <div class="achievement-reward">Reward: ${formatMoney(achievement.reward)}</div>
        `;
        grid.appendChild(card);
    });
}

function updateInbox() {
    const list = document.getElementById('inboxList');
    list.innerHTML = '';
    
    const unreadCount = gameState.inbox.filter(m => !m.read).length;
    const badge = document.getElementById('inboxBadge');
    badge.textContent = unreadCount > 0 ? `(${unreadCount})` : '';
    
    gameState.inbox.slice().reverse().forEach(message => {
        const item = document.createElement('div');
        item.className = 'inbox-item' + (message.read ? '' : ' unread');
        item.onclick = () => readMessage(message.id);
        item.innerHTML = `
            <div class="inbox-header">
                <div>
                    <span class="badge ${message.type}">${message.type}</span>
                    <span class="inbox-subject">${message.subject}</span>
                </div>
                <div class="inbox-time">Day ${message.day}</div>
            </div>
            <div class="inbox-preview">${message.preview}</div>
        `;
        list.appendChild(item);
    });
    
    if (gameState.inbox.length === 0) {
        list.innerHTML = '<p style="text-align: center; color: var(--text-dim); padding: 40px;">No messages yet</p>';
    }
}

// ============================================
// GAME ACTIONS
// ============================================
function buyPlayer(playerId) {
    const player = gameState.transferMarket.find(p => p.id === playerId);
    if (!player) return;
    
    if (gameState.budget < player.value) {
        alert('Insufficient budget!');
        return;
    }
    
    gameState.budget -= player.value;
    player.injured = false;
    player.injuryDays = 0;
    gameState.roster.push(player);
    gameState.transferMarket = gameState.transferMarket.filter(p => p.id !== playerId);
    
    addTransaction(`Signed ${player.name}`, -player.value);
    addMessage('Transfer Complete', `Successfully signed ${player.name} (${player.position}, ${player.rating} OVR) for ${formatMoney(player.value)}`, 'transfer');
    showToast(`✍️ Signed ${player.name} for ${formatMoney(player.value)}`);
    
    // Check achievements
    if (gameState.achievements.find(a => a.id === 'first_signing' && !a.unlocked)) {
        checkAchievement('first_signing');
    }
    
    const totalSpent = gameState.transactions
        .filter(t => t.amount < 0 && t.description.includes('Signed'))
        .reduce((sum, t) => sum + Math.abs(t.amount), 0);
    
    if (totalSpent > 50000000) {
        checkAchievement('big_spender');
    }
    
    if (player.rating >= 85 && player.value < 5000000) {
        checkAchievement('bargain_hunter');
    }
    
    saveGame();
    updateUI();
}

function sellPlayer(playerId) {
    const player = gameState.roster.find(p => p.id === playerId);
    if (!player) return;
    
    const sellPrice = Math.floor(player.value * 0.8);
    gameState.budget += sellPrice;
    gameState.roster = gameState.roster.filter(p => p.id !== playerId);
    
    addTransaction(`Sold ${player.name}`, sellPrice);
    addMessage('Player Sold', `Sold ${player.name} for ${formatMoney(sellPrice)}`, 'transfer');
    showToast(`💰 Sold ${player.name} for ${formatMoney(sellPrice)}`);
    
    closeModal();
    saveGame();
    updateUI();
}

function upgradeFacility(facilityKey) {
    const facility = gameState.facilities[facilityKey];
    
    if (facility.level >= 10) {
        alert('Facility is already at max level!');
        return;
    }
    
    if (gameState.budget < facility.cost) {
        alert('Insufficient budget!');
        return;
    }
    
    gameState.budget -= facility.cost;
    facility.level++;
    facility.progress = 0;
    const oldCost = facility.cost;
    facility.cost = Math.floor(facility.cost * 1.5);
    
    addTransaction(`Upgraded ${facilityKey}`, -oldCost);
    addMessage('Facility Upgraded', `${facilityKey} upgraded to level ${facility.level}`, 'news');
    showToast(`🏗️ ${facilityKey} upgraded to level ${facility.level}`);
    
    // Check for max level achievement
    if (Object.values(gameState.facilities).every(f => f.level >= 10)) {
        checkAchievement('facility_max');
    }
    
    saveGame();
    updateUI();
}

function playNextGame() {
    const nextGame = gameState.games.find(g => !g.played);
    if (!nextGame) {
        alert('No more games this season! Start a new season.');
        return;
    }
    
    // Calculate team strength
    const healthyPlayers = gameState.roster.filter(p => !p.injured);
    if (healthyPlayers.length < 11) {
        alert('Not enough healthy players to field a team!');
        return;
    }
    
    const teamStrength = healthyPlayers.reduce((sum, p) => sum + p.rating, 0) / healthyPlayers.length;
    const moraleBonus = gameState.morale / 10;
    const chemistryBonus = gameState.chemistry / 10;
    const homeBonus = nextGame.home ? 5 : 0;
    const facilityBonus = gameState.facilities.training.level * 0.5;
    
    const difficultyModifier = {
        easy: 10,
        normal: 5,
        hard: -5,
        legendary: -10
    }[gameState.difficulty];
    
    const finalStrength = teamStrength + moraleBonus + chemistryBonus + homeBonus + facilityBonus + difficultyModifier;
    const opponentStrength = Math.floor(Math.random() * 25) + 70;
    
    // Simulate score
    const teamScore = Math.max(0, Math.floor(Math.random() * 4) + (finalStrength > opponentStrength ? 2 : 0));
    const oppScore = Math.max(0, Math.floor(Math.random() * 4) + (opponentStrength > finalStrength ? 2 : 0));
    
    nextGame.played = true;
    nextGame.score = nextGame.home ? `${teamScore} - ${oppScore}` : `${oppScore} - ${teamScore}`;
    
    // Update standings
    const teamStanding = gameState.standings.find(s => s.team === gameState.team);
    const oppStanding = gameState.standings.find(s => s.team === nextGame.opponent);
    
    teamStanding.played++;
    oppStanding.played++;
    
    if (nextGame.home) {
        teamStanding.goalsFor += teamScore;
        teamStanding.goalsAgainst += oppScore;
        oppStanding.goalsFor += oppScore;
        oppStanding.goalsAgainst += teamScore;
    } else {
        teamStanding.goalsFor += oppScore;
        teamStanding.goalsAgainst += teamScore;
        oppStanding.goalsFor += teamScore;
        oppStanding.goalsAgainst += oppScore;
    }
    
    let result;
    if (teamScore > oppScore) {
        nextGame.result = 'win';
        gameState.record.wins++;
        teamStanding.wins++;
        teamStanding.points += 3;
        oppStanding.losses++;
        
        const revenue = 3000000 + (gameState.facilities.stadium.level * 500000);
        gameState.budget += revenue;
        addTransaction('Match winnings', revenue);
        addMessage('Victory! 🎉', `Great win against ${nextGame.opponent}! Final score: ${nextGame.score}`, 'news');
        showToast(`🎉 Victory! ${nextGame.score}`);
        
        // Boost morale
        gameState.morale = Math.min(100, gameState.morale + 5);
        
        // Check achievements
        if (gameState.record.wins === 1) {
            checkAchievement('first_win');
        }
        
        // Check win streak
        const lastGames = gameState.games.filter(g => g.played).slice(-3);
        if (lastGames.length === 3 && lastGames.every(g => g.result === 'win')) {
            checkAchievement('win_streak_3');
        }
        
        const lastFiveGames = gameState.games.filter(g => g.played).slice(-5);
        if (lastFiveGames.length === 5 && lastFiveGames.every(g => g.result === 'win')) {
            checkAchievement('win_streak_5');
        }
        
    } else if (teamScore < oppScore) {
        nextGame.result = 'loss';
        gameState.record.losses++;
        teamStanding.losses++;
        oppStanding.wins++;
        oppStanding.points += 3;
        
        addMessage('Defeat 😞', `Tough loss to ${nextGame.opponent}. Score: ${nextGame.score}`, 'news');
        showToast(`😞 Defeat: ${nextGame.score}`);
        
        // Lower morale
        gameState.morale = Math.max(20, gameState.morale - 8);
        
    } else {
        nextGame.result = 'draw';
        gameState.record.draws++;
        teamStanding.draws++;
        teamStanding.points++;
        oppStanding.draws++;
        oppStanding.points++;
        
        const revenue = 1000000 + (gameState.facilities.stadium.level * 300000);
        gameState.budget += revenue;
        addTransaction('Match earnings', revenue);
        addMessage('Draw', `Drew with ${nextGame.opponent}. Score: ${nextGame.score}`, 'news');
        showToast(`Draw: ${nextGame.score}`);
        
        gameState.morale = Math.max(20, gameState.morale - 2);
    }
    
    // Random injuries
    if (Math.random() < 0.1) {
        const unluckyPlayer = healthyPlayers[Math.floor(Math.random() * healthyPlayers.length)];
        unluckyPlayer.injured = true;
        unluckyPlayer.injuryDays = Math.floor(Math.random() * 10) + 5;
        addMessage('Injury Report ⚠️', `${unluckyPlayer.name} injured in the match. Out for ${unluckyPlayer.injuryDays} days.`, 'injury');
    }
    
    gameState.day = nextGame.day;
    
    // Check if season is complete
    if (gameState.games.every(g => g.played)) {
        endSeason();
    }
    
    saveGame();
    updateUI();
}

function endSeason() {
    const standing = gameState.standings.find(s => s.team === gameState.team);
    const position = [...gameState.standings]
        .sort((a, b) => {
            if (b.points !== a.points) return b.points - a.points;
            return (b.goalsFor - b.goalsAgainst) - (a.goalsFor - a.goalsAgainst);
        })
        .findIndex(s => s.team === gameState.team) + 1;
    
    if (position === 1) {
        addMessage('🏆 CHAMPIONS! 🏆', `Congratulations! You won the ${gameState.league}!`, 'news');
        showToast('🏆 CHAMPIONS! You won the league!');
        checkAchievement('championship');
        
        // Check for perfect season
        if (gameState.record.losses === 0 && gameState.record.draws === 0) {
            checkAchievement('perfect_season');
        }
        
        if (gameState.record.losses === 0) {
            checkAchievement('undefeated_season');
        }
        
        if (gameState.season === 1) {
            checkAchievement('speedrun');
        }
    }
    
    // Season completion bonus
    const bonus = 10000000 + (position <= 3 ? (4 - position) * 5000000 : 0);
    gameState.budget += bonus;
    addTransaction(`Season ${gameState.season} completion bonus`, bonus);
    
    // Start new season
    gameState.season++;
    gameState.record = { wins: 0, losses: 0, draws: 0 };
    generateSchedule();
    initializeStandings();
    
    addMessage('New Season!', `Season ${gameState.season} begins. Good luck!`, 'news');
    
    if (gameState.season === 6) {
        checkAchievement('veteran');
    }
}

function restTeam() {
    gameState.day++;
    
    // Boost morale significantly
    gameState.morale = Math.min(100, gameState.morale + 15);
    gameState.chemistry = Math.min(100, gameState.chemistry + 10);
    
    // Heal some injuries
    gameState.roster.forEach(player => {
        if (player.injured) {
            player.injuryDays -= 2;
            if (player.injuryDays <= 0) {
                player.injured = false;
                player.injuryDays = 0;
                addMessage('Recovery', `${player.name} has recovered from injury!`, 'news');
            }
        }
    });
    
    addMessage('Team Rested', 'The team has recovered morale, chemistry, and energy. Some injuries healed.', 'news');
    showToast('🛌 Team rested - Morale and chemistry improved');
    
    saveGame();
    updateUI();
}

function trainTeam() {
    gameState.day++;
    
    // Randomly improve players based on training facility level
    const trainingBonus = gameState.facilities.training.level;
    const playersToImprove = Math.min(5, trainingBonus);
    
    for (let i = 0; i < playersToImprove; i++) {
        const player = gameState.roster[Math.floor(Math.random() * gameState.roster.length)];
        if (player.rating < 99) {
            const oldRating = player.rating;
            player.rating++;
            player.value = Math.floor(player.value * 1.1);
            
            if (oldRating <= 70 && player.rating >= 90) {
                checkAchievement('youth_development');
            }
        }
    }
    
    // Boost chemistry
    gameState.chemistry = Math.min(100, gameState.chemistry + 8);
    
    // Small morale boost
    gameState.morale = Math.min(100, gameState.morale + 3);
    
    addMessage('Training Complete', `Team training improved ${playersToImprove} players and team chemistry.`, 'news');
    showToast(`💪 Training complete - ${playersToImprove} players improved`);
    
    // Check for full roster achievement
    const avgRating = gameState.roster.reduce((sum, p) => sum + p.rating, 0) / gameState.roster.length;
    if (avgRating >= 85) {
        checkAchievement('full_roster');
    }
    
    saveGame();
    updateUI();
}

function advanceTime() {
    gameState.day += 7;
    
    // Weekly income based on facilities
    const weeklyIncome = 2000000 + (gameState.facilities.stadium.level * 500000);
    gameState.budget += weeklyIncome;
    addTransaction('Weekly income', weeklyIncome);
    
    // Update facility progress
    Object.keys(gameState.facilities).forEach(key => {
        gameState.facilities[key].progress = Math.min(100, gameState.facilities[key].progress + 20);
    });
    
    // Heal injuries
    gameState.roster.forEach(player => {
        if (player.injured) {
            player.injuryDays -= 7;
            if (player.injuryDays <= 0) {
                player.injured = false;
                player.injuryDays = 0;
                addMessage('Recovery', `${player.name} has recovered from injury!`, 'news');
            }
        }
    });
    
    // Natural morale/chemistry decay if not managed
    gameState.morale = Math.max(30, gameState.morale - 3);
    gameState.chemistry = Math.max(30, gameState.chemistry - 2);
    
    addMessage('Week Advanced', `Time progressed. Weekly income received: ${formatMoney(weeklyIncome)}`, 'finance');
    showToast(`⏩ Week advanced +${formatMoney(weeklyIncome)}`);
    
    // Check day milestones
    if (gameState.day >= 100) {
        checkAchievement('century');
    }
    
    // Check budget achievement
    if (gameState.budget >= 100000000) {
        checkAchievement('budget_master');
    }
    
    saveGame();
    updateUI();
}

function refreshTransfers() {
    generateTransferMarket();
    showToast('🔄 Transfer market refreshed');
    updateUI();
}

function sortRoster(by) {
    if (by === 'rating') {
        gameState.roster.sort((a, b) => b.rating - a.rating);
    } else if (by === 'position') {
        gameState.roster.sort((a, b) => a.position.localeCompare(b.position));
    }
    updateUI();
}

// ============================================
// HELPER FUNCTIONS
// ============================================
function addTransaction(description, amount) {
    gameState.transactions.push({
        id: Date.now(),
        description: description,
        amount: amount,
        day: gameState.day
    });
}

function addMessage(subject, preview, type) {
    gameState.inbox.push({
        id: Date.now(),
        subject: subject,
        preview: preview,
        type: type,
        day: gameState.day,
        read: false
    });
}

function readMessage(messageId) {
    const message = gameState.inbox.find(m => m.id === messageId);
    if (message) {
        message.read = true;
        saveGame();
        updateUI();
    }
}

function markAllRead() {
    gameState.inbox.forEach(m => m.read = true);
    saveGame();
    updateUI();
}

function showPlayerModal(player, canSell = false) {
    document.getElementById('modalPlayerName').textContent = player.name;
    document.getElementById('modalPlayerContent').innerHTML = `
        <div style="margin-bottom: 25px;">
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
                <div>
                    <div style="color: var(--text-dim); font-size: 0.85rem; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 1px;">Position</div>
                    <div style="font-size: 1.3rem; font-weight: 700;">${player.position}</div>
                </div>
                <div>
                    <div style="color: var(--text-dim); font-size: 0.85rem; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 1px;">Rating</div>
                    <div style="font-size: 1.3rem; font-weight: 700; color: var(--accent);">${player.rating}</div>
                </div>
                <div>
                    <div style="color: var(--text-dim); font-size: 0.85rem; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 1px;">Age</div>
                    <div style="font-size: 1.3rem; font-weight: 700;">${player.age}</div>
                </div>
                <div>
                    <div style="color: var(--text-dim); font-size: 0.85rem; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 1px;">Market Value</div>
                    <div style="font-size: 1.3rem; font-weight: 700;">${formatMoney(player.value)}</div>
                </div>
                <div>
                    <div style="color: var(--text-dim); font-size: 0.85rem; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 1px;">Morale</div>
                    <div style="font-size: 1.3rem; font-weight: 700; color: ${player.morale > 70 ? 'var(--success)' : 'var(--warning)'};">${player.morale}</div>
                </div>
                <div>
                    <div style="color: var(--text-dim); font-size: 0.85rem; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 1px;">Status</div>
                    <div style="font-size: 1.1rem; font-weight: 700; color: ${player.injured ? 'var(--danger)' : 'var(--success)'};">
                        ${player.injured ? `Injured (${player.injuryDays} days)` : 'Healthy'}
                    </div>
                </div>
            </div>
        </div>
        ${canSell ? `
            <button class="danger" onclick="sellPlayer(${player.id})" style="margin-top: 15px;">
                Sell Player (${formatMoney(Math.floor(player.value * 0.8))})
            </button>
        ` : ''}
    `;
    document.getElementById('playerModal').classList.add('active');
}

function closeModal() {
    document.getElementById('playerModal').classList.remove('active');
}

// ============================================
// NAVIGATION
// ============================================
function showPanel(panelName) {
    document.querySelectorAll('.content-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    document.querySelectorAll('.nav-button').forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.getElementById(panelName + 'Panel').classList.add('active');
    event.target.closest('.nav-button').classList.add('active');
}

// ============================================
// SETTINGS & MODALS
// ============================================
function showSettings() {
    document.getElementById('autosaveSetting').value = gameState.settings.autosave;
    document.getElementById('notificationsSetting').value = gameState.settings.notifications;
    document.getElementById('themeSetting').value = gameState.settings.theme;
    document.getElementById('settingsModal').classList.add('active');
}

function closeSettingsModal() {
    document.getElementById('settingsModal').classList.remove('active');
}

function updateSettings() {
    gameState.settings.autosave = document.getElementById('autosaveSetting').value === 'true';
    gameState.settings.notifications = document.getElementById('notificationsSetting').value === 'true';
    gameState.settings.theme = document.getElementById('themeSetting').value;
    saveGame();
}

function confirmReset() {
    if (confirm('Are you sure you want to reset your game? This cannot be undone!')) {
        localStorage.removeItem(gameState.accountId);
        location.reload();
    }
}

function showCredits() {
    document.getElementById('creditsModal').classList.add('active');
}

function closeCreditsModal() {
    document.getElementById('creditsModal').classList.remove('active');
}

function clearAllData() {
    if (confirm('This will delete ALL saved games. Are you sure?')) {
        localStorage.clear();
        location.reload();
    }
}

// ============================================
// SAVE/LOAD
// ============================================
function saveGame() {
    if (gameState.settings.autosave) {
        localStorage.setItem(gameState.accountId, JSON.stringify(gameState));
    }
}

function saveAndExit() {
    saveGame();
    showToast('💾 Game saved successfully');
    setTimeout(() => {
        location.reload();
    }, 1500);
}

// Auto-save every 30 seconds
setInterval(() => {
    if (gameState.accountId && gameState.settings.autosave) {
        saveGame();
    }
}, 30000);

// ============================================
// INITIALIZE
// ============================================
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const autoLogin = urlParams.get('autoLogin');
    
    if (autoLogin) {
        document.getElementById('usernameInput').value = autoLogin;
        handleLogin();
    }
};
