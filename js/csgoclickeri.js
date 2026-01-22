// CS:GO Case Clicker - Ultimate Edition
// Modern, Feature-Rich Implementation

// ======================
// GAME STATE
// ======================

let gameState = {
    username: '',
    accountCode: '',
    money: 0,
    clickPower: 0.5,
    moneyPerSecond: 0,
    totalClicks: 0,
    level: 1,
    xp: 0,
    inventory: [],
    upgrades: {},
    settings: {
        sound: true,
        animations: true,
        autosave: true,
        particles: true,
        theme: 'orange'
    },
    jackpot: {
        pot: 0,
        players: [],
        timer: 60,
        playerBet: 0
    },
    achievements: {},
    dailyReward: {
        lastClaimed: null,
        streak: 0
    },
    stats: {
        casesOpened: 0,
        moneyEarned: 0,
        itemsSold: 0,
        jackpotsWon: 0,
        coinflipsWon: 0
    }
};

// ======================
// REAL CS:GO CASES DATA
// ======================

const cases = [
    {
        id: 1,
        name: "Kilowatt Case",
        price: 2.65,
        image: "caseclicker1/KilowattCase.png",
        description: "First CS2 case with Kukri Knife",
        items: [
            { name: "AK-47 | Inheritance", rarity: "covert", type: "weapon", minPrice: 45, maxPrice: 150 },
            { name: "AWP | Chrome Cannon", rarity: "covert", type: "weapon", minPrice: 30, maxPrice: 120 },
            { name: "M4A1-S | Black Lotus", rarity: "classified", type: "weapon", minPrice: 6, maxPrice: 36 },
            { name: "USP-S | Jawbreaker", rarity: "classified", type: "weapon", minPrice: 5, maxPrice: 20 },
            { name: "Zeus x27 | Olympus", rarity: "classified", type: "weapon", minPrice: 3, maxPrice: 11 },
            { name: "MP7 | Just Smile", rarity: "restricted", type: "weapon", minPrice: 1, maxPrice: 5 },
            { name: "Glock-18 | Block-18", rarity: "restricted", type: "weapon", minPrice: 1, maxPrice: 4 },
            { name: "MAC-10 | Light Box", rarity: "restricted", type: "weapon", minPrice: 0.5, maxPrice: 3 },
            { name: "SSG 08 | Dezastre", rarity: "milspec", type: "weapon", minPrice: 0.2, maxPrice: 1 },
            { name: "★ Kukri Knife", rarity: "exceedingly", type: "knife", minPrice: 100, maxPrice: 1000 }
        ]
    },
    {
        id: 2,
        name: "Revolution Case",
        price: 2.84,
        image: "caseclicker1/RevolutionCase.png",
        description: "Community designs",
        items: [
            { name: "M4A4 | Temukau", rarity: "covert", type: "weapon", minPrice: 20, maxPrice: 80 },
            { name: "P250 | Visions", rarity: "covert", type: "weapon", minPrice: 15, maxPrice: 60 },
            { name: "AK-47 | Head Shot", rarity: "classified", type: "weapon", minPrice: 5, maxPrice: 25 },
            { name: "AWP | Duality", rarity: "classified", type: "weapon", minPrice: 4, maxPrice: 20 },
            { name: "★ Rare Special Item", rarity: "exceedingly", type: "knife", minPrice: 100, maxPrice: 1000 }
        ]
    },
    {
        id: 3,
        name: "Recoil Case",
        price: 2.62,
        image: "caseclicker1/RecoilCase.png",
        description: "USP-S Printstream featured",
        items: [
            { name: "USP-S | Printstream", rarity: "covert", type: "weapon", minPrice: 25, maxPrice: 100 },
            { name: "AWP | Chromatic Aberration", rarity: "covert", type: "weapon", minPrice: 15, maxPrice: 60 },
            { name: "AK-47 | Ice Coaled", rarity: "classified", type: "weapon", minPrice: 5, maxPrice: 20 },
            { name: "★ Special Gloves", rarity: "exceedingly", type: "gloves", minPrice: 200, maxPrice: 2000 }
        ]
    },
    {
        id: 4,
        name: "Dreams & Nightmares Case",
        price: 4.02,
        image: "caseclicker1/Dreams&NightmaresCase.png",
        description: "Community contest winners",
        items: [
            { name: "AK-47 | Nightwish", rarity: "covert", type: "weapon", minPrice: 20, maxPrice: 80 },
            { name: "MP9 | Starlight Protector", rarity: "covert", type: "weapon", minPrice: 15, maxPrice: 60 },
            { name: "USP-S | Ticket to Hell", rarity: "classified", type: "weapon", minPrice: 5, maxPrice: 20 },
            { name: "★ Rare Special Item", rarity: "exceedingly", type: "knife", minPrice: 100, maxPrice: 1000 }
        ]
    },
    {
        id: 5,
        name: "Fracture Case",
        price: 2.82,
        image: "caseclicker1/FractureCase.png",
        description: "Glock-18 Vogue featured",
        items: [
            { name: "Glock-18 | Vogue", rarity: "covert", type: "weapon", minPrice: 18, maxPrice: 70 },
            { name: "M4A4 | Tooth Fairy", rarity: "covert", type: "weapon", minPrice: 15, maxPrice: 60 },
            { name: "AK-47 | Legion of Anubis", rarity: "classified", type: "weapon", minPrice: 4, maxPrice: 18 },
            { name: "★ Special Gloves", rarity: "exceedingly", type: "gloves", minPrice: 200, maxPrice: 2000 }
        ]
    },
    {
        id: 6,
        name: "Prisma 2 Case",
        price: 4.14,
        image: "caseclicker1/Prisma2Case.png",
        description: "Colorful community designs",
        items: [
            { name: "M4A1-S | Player Two", rarity: "covert", type: "weapon", minPrice: 10, maxPrice: 40 },
            { name: "Glock-18 | Bullet Queen", rarity: "covert", type: "weapon", minPrice: 8, maxPrice: 35 },
            { name: "★ Rare Special Item", rarity: "exceedingly", type: "knife", minPrice: 100, maxPrice: 1000 }
        ]
    },
    {
        id: 7,
        name: "Shattered Web Case",
        price: 9.39,
        image: "caseclicker1/ShatteredWebCase.png",
        description: "Operation case",
        items: [
            { name: "AK-47 | Slate", rarity: "covert", type: "weapon", minPrice: 15, maxPrice: 55 },
            { name: "AWP | Containment Breach", rarity: "covert", type: "weapon", minPrice: 12, maxPrice: 50 },
            { name: "★ Rare Special Item", rarity: "exceedingly", type: "knife", minPrice: 100, maxPrice: 1000 }
        ]
    },
    {
        id: 8,
        name: "CS20 Case",
        price: 3.85,
        image: "caseclicker1/CS20Case.png",
        description: "20th Anniversary",
        items: [
            { name: "AWP | Wildfire", rarity: "covert", type: "weapon", minPrice: 12, maxPrice: 50 },
            { name: "Glock-18 | Sacrifice", rarity: "covert", type: "weapon", minPrice: 10, maxPrice: 40 },
            { name: "★ Rare Special Item", rarity: "exceedingly", type: "knife", minPrice: 100, maxPrice: 1000 }
        ]
    },
    {
        id: 9,
        name: "Danger Zone Case",
        price: 4.10,
        image: "caseclicker1/DangerZoneCase.png",
        description: "Battle royale themed",
        items: [
            { name: "AK-47 | Asiimov", rarity: "covert", type: "weapon", minPrice: 15, maxPrice: 60 },
            { name: "AWP | Neo-Noir", rarity: "covert", type: "weapon", minPrice: 12, maxPrice: 50 },
            { name: "★ Rare Special Item", rarity: "exceedingly", type: "knife", minPrice: 100, maxPrice: 1000 }
        ]
    },
    {
        id: 10,
        name: "Horizon Case",
        price: 3.75,
        image: "caseclicker1/HorizonCase.png",
        description: "Desert Eagle Code Red",
        items: [
            { name: "AK-47 | Neon Rider", rarity: "covert", type: "weapon", minPrice: 12, maxPrice: 50 },
            { name: "Desert Eagle | Code Red", rarity: "covert", type: "weapon", minPrice: 10, maxPrice: 45 },
            { name: "★ Rare Special Item", rarity: "exceedingly", type: "knife", minPrice: 100, maxPrice: 1000 }
        ]
    },
    {
        id: 11,
        name: "Operation Riptide Case",
        price: 17.51,
        image: "caseclicker1/OperationRiptideCase.png",
        description: "Premium operation case",
        items: [
            { name: "M4A4 | Spider Lily", rarity: "covert", type: "weapon", minPrice: 20, maxPrice: 80 },
            { name: "AK-47 | Leet Museo", rarity: "covert", type: "weapon", minPrice: 15, maxPrice: 70 },
            { name: "★ Rare Special Item", rarity: "exceedingly", type: "knife", minPrice: 150, maxPrice: 1500 }
        ]
    },
    {
        id: 12,
        name: "Operation Broken Fang Case",
        price: 11.42,
        image: "caseclicker1/OperationBrokenFangCase.png",
        description: "Operation case",
        items: [
            { name: "M4A1-S | Printstream", rarity: "covert", type: "weapon", minPrice: 18, maxPrice: 75 },
            { name: "Glock-18 | Neo-Noir", rarity: "covert", type: "weapon", minPrice: 15, maxPrice: 65 },
            { name: "★ Special Gloves", rarity: "exceedingly", type: "gloves", minPrice: 250, maxPrice: 2500 }
        ]
    },
    {
        id: 13,
        name: "Operation Hydra Case",
        price: 22.05,
        image: "caseclicker1/OperationHydraCase.png",
        description: "Rare operation case",
        items: [
            { name: "AK-47 | Orbit Mk01", rarity: "covert", type: "weapon", minPrice: 15, maxPrice: 60 },
            { name: "Five-SeveN | Hyper Beast", rarity: "covert", type: "weapon", minPrice: 12, maxPrice: 50 },
            { name: "★ Special Gloves", rarity: "exceedingly", type: "gloves", minPrice: 250, maxPrice: 2500 }
        ]
    },
    {
        id: 14,
        name: "Spectrum Case",
        price: 6.81,
        image: "caseclicker1/SpectrumCase.png",
        description: "Butterfly Knife case",
        items: [
            { name: "AK-47 | Bloodsport", rarity: "covert", type: "weapon", minPrice: 10, maxPrice: 45 },
            { name: "USP-S | Neo-Noir", rarity: "covert", type: "weapon", minPrice: 8, maxPrice: 40 },
            { name: "★ Butterfly Knife", rarity: "exceedingly", type: "knife", minPrice: 500, maxPrice: 5000 }
        ]
    },
    {
        id: 15,
        name: "Spectrum 2 Case",
        price: 4.10,
        image: "caseclicker1/Spectrum2Case.png",
        description: "More Butterfly variants",
        items: [
            { name: "AK-47 | The Empress", rarity: "covert", type: "weapon", minPrice: 12, maxPrice: 50 },
            { name: "P250 | See Ya Later", rarity: "covert", type: "weapon", minPrice: 8, maxPrice: 35 },
            { name: "★ Butterfly Knife", rarity: "exceedingly", type: "knife", minPrice: 500, maxPrice: 5000 }
        ]
    },
    {
        id: 16,
        name: "Glove Case",
        price: 6.50,
        image: "caseclicker1/GloveCase.png",
        description: "First glove case",
        items: [
            { name: "AWP | Mortis", rarity: "covert", type: "weapon", minPrice: 8, maxPrice: 35 },
            { name: "M4A4 | Buzz Kill", rarity: "covert", type: "weapon", minPrice: 6, maxPrice: 30 },
            { name: "★ Special Gloves", rarity: "exceedingly", type: "gloves", minPrice: 200, maxPrice: 2000 }
        ]
    },
    {
        id: 17,
        name: "Chroma 3 Case",
        price: 3.10,
        image: "caseclicker1/Chroma3Case.png",
        description: "Chroma series",
        items: [
            { name: "M4A1-S | Chantico's Fire", rarity: "covert", type: "weapon", minPrice: 8, maxPrice: 35 },
            { name: "PP-Bizon | Judgement of Anubis", rarity: "covert", type: "weapon", minPrice: 6, maxPrice: 30 },
            { name: "★ Rare Special Item", rarity: "exceedingly", type: "knife", minPrice: 100, maxPrice: 1000 }
        ]
    },
    {
        id: 18,
        name: "Gamma 2 Case",
        price: 3.25,
        image: "caseclicker1/Gamma2Case.png",
        description: "Gamma Doppler knives",
        items: [
            { name: "FAMAS | Roll Cage", rarity: "covert", type: "weapon", minPrice: 6, maxPrice: 28 },
            { name: "Tec-9 | Fuel Injector", rarity: "covert", type: "weapon", minPrice: 5, maxPrice: 25 },
            { name: "★ Rare Special Item", rarity: "exceedingly", type: "knife", minPrice: 100, maxPrice: 1000 }
        ]
    },
    {
        id: 19,
        name: "CS:GO Weapon Case",
        price: 85.50,
        image: "caseclicker1/CS-GOWeaponCase.png",
        description: "Original legendary case",
        items: [
            { name: "AWP | Lightning Strike", rarity: "covert", type: "weapon", minPrice: 50, maxPrice: 200 },
            { name: "AK-47 | Case Hardened", rarity: "classified", type: "weapon", minPrice: 30, maxPrice: 150 },
            { name: "★ Rare Special Item", rarity: "exceedingly", type: "knife", minPrice: 500, maxPrice: 5000 }
        ]
    },
    {
        id: 20,
        name: "Phoenix Case",
        price: 4.00,
        image: "caseclicker1/PhoenixCase.png",
        description: "Classic Phoenix",
        items: [
            { name: "AWP | Asiimov", rarity: "covert", type: "weapon", minPrice: 20, maxPrice: 100 },
            { name: "AK-47 | Redline", rarity: "classified", type: "weapon", minPrice: 5, maxPrice: 25 },
            { name: "★ Rare Special Item", rarity: "exceedingly", type: "knife", minPrice: 100, maxPrice: 1000 }
        ]
    },
    {
        id: 21,
        name: "Clutch Case",
        price: 5.00,
        image: "caseclicker1/ClutchCase.png",
        description: "Clutch moments",
        items: [
            { name: "M4A4 | Neo-Noir", rarity: "covert", type: "weapon", minPrice: 10, maxPrice: 45 },
            { name: "USP-S | Cortex", rarity: "classified", type: "weapon", minPrice: 3, maxPrice: 15 },
            { name: "★ Special Gloves", rarity: "exceedingly", type: "gloves", minPrice: 200, maxPrice: 2000 }
        ]
    },
    {
        id: 22,
        name: "Falchion Case",
        price: 5.50,
        image: "caseclicker1/FalchionCase.png",
        description: "Falchion Knife",
        items: [
            { name: "AK-47 | Aquamarine Revenge", rarity: "covert", type: "weapon", minPrice: 15, maxPrice: 65 },
            { name: "AWP | Hyper Beast", rarity: "covert", type: "weapon", minPrice: 12, maxPrice: 55 },
            { name: "★ Falchion Knife", rarity: "exceedingly", type: "knife", minPrice: 100, maxPrice: 1200 }
        ]
    }
];

const wears = ['Factory New', 'Minimal Wear', 'Field-Tested', 'Well-Worn', 'Battle-Scarred'];

// Continue with upgrades, achievements, and functions...

// ======================
// UPGRADES DATA
// ======================

const upgradesData = [
    { id: 'autoclicker', name: 'Auto Clicker', desc: 'Clicks automatically', baseCost: 25, baseIncome: 0.5, icon: '🖱️', multiplier: 1.15 },
    { id: 'trader', name: 'Skin Trader', desc: 'Trades skins', baseCost: 150, baseIncome: 2, icon: '💼', multiplier: 1.15 },
    { id: 'bot', name: 'Trading Bot', desc: 'Automated trades', baseCost: 500, baseIncome: 5, icon: '🤖', multiplier: 1.15 },
    { id: 'streamer', name: 'Streamer', desc: 'Stream earnings', baseCost: 750, baseIncome: 10, icon: '📺', multiplier: 1.15 },
    { id: 'youtube', name: 'YouTuber', desc: 'Content creator', baseCost: 2000, baseIncome: 30, icon: '📹', multiplier: 1.15 },
    { id: 'sponsor', name: 'Sponsorships', desc: 'Brand deals', baseCost: 5000, baseIncome: 75, icon: '💰', multiplier: 1.15 },
    { id: 'analyst', name: 'Match Analyst', desc: 'Team analyst', baseCost: 12000, baseIncome: 180, icon: '📊', multiplier: 1.15 },
    { id: 'coach', name: 'Team Coach', desc: 'Coach pros', baseCost: 25000, baseIncome: 400, icon: '🎓', multiplier: 1.15 },
    { id: 'proplayer', name: 'Pro Player', desc: 'Tournament wins', baseCost: 50000, baseIncome: 800, icon: '🏆', multiplier: 1.15 },
    { id: 'captain', name: 'Team Captain', desc: 'Lead the team', baseCost: 100000, baseIncome: 1600, icon: '⭐', multiplier: 1.15 },
    { id: 'team', name: 'Esports Team', desc: 'Own a team', baseCost: 250000, baseIncome: 4000, icon: '👥', multiplier: 1.15 },
    { id: 'manager', name: 'Team Manager', desc: 'Manage teams', baseCost: 500000, baseIncome: 8000, icon: '📋', multiplier: 1.15 },
    { id: 'casino', name: 'Skin Casino', desc: 'Gambling site', baseCost: 1000000, baseIncome: 16000, icon: '🎰', multiplier: 1.15 },
    { id: 'marketplace', name: 'Marketplace', desc: 'Trading platform', baseCost: 2500000, baseIncome: 40000, icon: '🏪', multiplier: 1.15 },
    { id: 'market', name: 'Market Bot', desc: 'Auto trading', baseCost: 5000000, baseIncome: 80000, icon: '🤖', multiplier: 1.15 },
    { id: 'organization', name: 'Gaming Org', desc: 'Organization', baseCost: 12000000, baseIncome: 200000, icon: '🏢', multiplier: 1.15 },
    { id: 'multiorg', name: 'Multi-Team Org', desc: 'Multiple teams', baseCost: 25000000, baseIncome: 400000, icon: '🌐', multiplier: 1.15 },
    { id: 'tournament', name: 'Major Host', desc: 'Host majors', baseCost: 60000000, baseIncome: 1000000, icon: '🎮', multiplier: 1.15 },
    { id: 'league', name: 'Esports League', desc: 'Own a league', baseCost: 150000000, baseIncome: 2500000, icon: '🌍', multiplier: 1.15 },
    { id: 'broadcaster', name: 'Broadcasting', desc: 'Stream rights', baseCost: 350000000, baseIncome: 6000000, icon: '📡', multiplier: 1.15 },
    { id: 'empire', name: 'Gaming Empire', desc: 'Dominate', baseCost: 800000000, baseIncome: 14000000, icon: '👑', multiplier: 1.15 },
    { id: 'developer', name: 'Game Developer', desc: 'Create games', baseCost: 2000000000, baseIncome: 35000000, icon: '🎨', multiplier: 1.15 },
    { id: 'studio', name: 'Game Studio', desc: 'AAA studio', baseCost: 5000000000, baseIncome: 90000000, icon: '🎬', multiplier: 1.15 },
    { id: 'publisher', name: 'Game Publisher', desc: 'Publish games', baseCost: 12000000000, baseIncome: 220000000, icon: '📦', multiplier: 1.15 },
    { id: 'platform', name: 'Gaming Platform', desc: 'Own platform', baseCost: 30000000000, baseIncome: 550000000, icon: '💻', multiplier: 1.15 },
    { id: 'monopoly', name: 'Gaming Monopoly', desc: 'Control all', baseCost: 75000000000, baseIncome: 1400000000, icon: '💎', multiplier: 1.15 },
    { id: 'conglomerate', name: 'Conglomerate', desc: 'Global empire', baseCost: 200000000000, baseIncome: 3500000000, icon: '🌎', multiplier: 1.15 },
    { id: 'titan', name: 'Industry Titan', desc: 'Ultimate power', baseCost: 500000000000, baseIncome: 9000000000, icon: '⚡', multiplier: 1.15 }
];

// Initialize upgrades
upgradesData.forEach(u => {
    if (!gameState.upgrades[u.id]) gameState.upgrades[u.id] = 0;
});

// ======================
// ACHIEVEMENTS DATA
// ======================

const achievementsData = [
    { id: 'first_click', name: 'First Click', desc: 'Make your first click', icon: '👆', requirement: 1, type: 'clicks' },
    { id: 'click_100', name: 'Clicking Pro', desc: 'Make 100 clicks', icon: '🖱️', requirement: 100, type: 'clicks' },
    { id: 'click_1000', name: 'Click Master', desc: 'Make 1,000 clicks', icon: '⚡', requirement: 1000, type: 'clicks' },
    { id: 'first_case', name: 'First Case', desc: 'Open your first case', icon: '📦', requirement: 1, type: 'cases' },
    { id: 'case_10', name: 'Case Opener', desc: 'Open 10 cases', icon: '🎁', requirement: 10, type: 'cases' },
    { id: 'case_100', name: 'Case Addict', desc: 'Open 100 cases', icon: '🎰', requirement: 100, type: 'cases' },
    { id: 'millionaire', name: 'Millionaire', desc: 'Have $1,000,000', icon: '💰', requirement: 1000000, type: 'money' },
    { id: 'billionaire', name: 'Billionaire', desc: 'Have $1,000,000,000', icon: '💎', requirement: 1000000000, type: 'money' },
    { id: 'knife_drop', name: 'Knife Drop!', desc: 'Unbox a knife', icon: '🔪', requirement: 1, type: 'knife' },
    { id: 'glove_drop', name: 'Glove Drop!', desc: 'Unbox gloves', icon: '🧤', requirement: 1, type: 'glove' },
    { id: 'daily_streak_7', name: 'Week Streak', desc: '7 day login streak', icon: '🔥', requirement: 7, type: 'streak' },
    { id: 'jp_win', name: 'Jackpot Winner', desc: 'Win a jackpot', icon: '🎰', requirement: 1, type: 'jpwins' }
];

// Initialize achievements
achievementsData.forEach(a => {
    if (!gameState.achievements[a.id]) {
        gameState.achievements[a.id] = { unlocked: false, progress: 0 };
    }
});

// ======================
// UTILITY FUNCTIONS
// ======================

function formatMoney(num) {
    if (num >= 1e12) return (num / 1e12).toFixed(2) + 'T';
    if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
    return num.toFixed(2);
}

function generateAccountCode(username) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let char of username) {
        code += char + chars.charAt(Math.floor(Math.random() * chars.length));
    }
    for (let i = 0; i < 20; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.getElementById('notifications').appendChild(notification);
    
    setTimeout(() => notification.remove(), 3000);
}

function playSound(soundName) {
    if (!gameState.settings.sound) return;
    // Add sound effects here if needed
}

function saveGame() {
    if (!gameState.settings.autosave || !gameState.accountCode) return;
    
    const accounts = JSON.parse(localStorage.getItem('caseclicker_accounts') || '{}');
    accounts[gameState.accountCode] = {
        username: gameState.username,
        gameState: JSON.parse(JSON.stringify(gameState))
    };
    localStorage.setItem('caseclicker_accounts', JSON.stringify(accounts));
}

function calculateMPS() {
    let mps = 0;
    upgradesData.forEach(u => {
        const count = gameState.upgrades[u.id] || 0;
        mps += u.baseIncome * count;
    });
    return mps;
}

function updateAllDisplays() {
    // Top nav
    document.getElementById('nav-balance').textContent = '$' + formatMoney(gameState.money);
    const invValue = gameState.inventory.reduce((s, i) => s + i.price, 0);
    document.getElementById('nav-inventory').textContent = '$' + formatMoney(invValue);
    document.getElementById('nav-level').textContent = gameState.level;
    document.getElementById('nav-username').textContent = gameState.username;
    
    // Home tab
    document.getElementById('money-display').textContent = '$' + formatMoney(gameState.money);
    document.getElementById('per-click').textContent = '$' + gameState.clickPower.toFixed(2);
    document.getElementById('per-second').textContent = '$' + formatMoney(gameState.moneyPerSecond);
    document.getElementById('total-clicks').textContent = gameState.totalClicks.toLocaleString();
    
    // Inventory
    document.getElementById('inv-total-value').textContent = '$' + formatMoney(invValue);
    document.getElementById('inv-item-count').textContent = `${gameState.inventory.length}/500`;
    
    // Welcome
    const welcomeEls = document.querySelectorAll('#welcome-username');
    welcomeEls.forEach(el => el.textContent = gameState.username);
}

// ======================
// AUTH FUNCTIONS
// ======================

function showLogin() {
    document.getElementById('auth-main').classList.add('hidden');
    document.getElementById('auth-login').classList.remove('hidden');
    document.getElementById('auth-register').classList.add('hidden');
}

function showRegister() {
    document.getElementById('auth-main').classList.add('hidden');
    document.getElementById('auth-login').classList.add('hidden');
    document.getElementById('auth-register').classList.remove('hidden');
}

function showAuthMain() {
    document.getElementById('auth-main').classList.remove('hidden');
    document.getElementById('auth-login').classList.add('hidden');
    document.getElementById('auth-register').classList.add('hidden');
    document.getElementById('account-code-display').classList.add('hidden');
}

function createAccount() {
    const username = document.getElementById('register-username').value.trim();
    
    if (!username) {
        showNotification('Please enter a username', 'error');
        return;
    }
    
    if (username.length < 3) {
        showNotification('Username must be at least 3 characters', 'error');
        return;
    }
    
    const accounts = JSON.parse(localStorage.getItem('caseclicker_accounts') || '{}');
    
    if (Object.keys(accounts).length >= 50) {
        showNotification('Maximum 50 accounts reached', 'error');
        return;
    }
    
    const accountCode = generateAccountCode(username);
    gameState.username = username;
    gameState.accountCode = accountCode;
    
    document.getElementById('code-text').textContent = accountCode;
    document.getElementById('account-code-display').classList.remove('hidden');
    
    accounts[accountCode] = {
        username: username,
        gameState: JSON.parse(JSON.stringify(gameState))
    };
    localStorage.setItem('caseclicker_accounts', JSON.stringify(accounts));
    
    showNotification('Account created! Save your code!');
    
    setTimeout(() => startGame(), 3000);
}

function loginAccount() {
    const code = document.getElementById('login-code').value.trim();
    
    if (!code) {
        showNotification('Please enter your account code', 'error');
        return;
    }
    
    const accounts = JSON.parse(localStorage.getItem('caseclicker_accounts') || '{}');
    
    if (accounts[code]) {
        gameState = accounts[code].gameState;
        gameState.moneyPerSecond = calculateMPS();
        startGame();
        showNotification('Welcome back, ' + gameState.username + '!');
    } else {
        showNotification('Invalid account code', 'error');
    }
}

function copyCode() {
    const code = document.getElementById('code-text').textContent;
    navigator.clipboard.writeText(code).then(() => {
        showNotification('Code copied to clipboard!');
    }).catch(() => {
        showNotification('Failed to copy code', 'error');
    });
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        saveGame();
        location.reload();
    }
}

function resetAccount() {
    if (confirm('WARNING: This will delete ALL your progress! Are you sure?')) {
        if (confirm('This cannot be undone. Continue?')) {
            const accounts = JSON.parse(localStorage.getItem('caseclicker_accounts') || '{}');
            delete accounts[gameState.accountCode];
            localStorage.setItem('caseclicker_accounts', JSON.stringify(accounts));
            location.reload();
        }
    }
}

function exportSave() {
    const saveData = JSON.stringify(gameState);
    const blob = new Blob([saveData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `caseclicker_save_${gameState.username}.json`;
    a.click();
    showNotification('Save exported!');
}


// ======================
// GAME START
// ======================

function startGame() {
    document.getElementById('auth-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    
    // Apply theme
    document.body.setAttribute('data-theme', gameState.settings.theme);
    
    // Render everything
    renderCases();
    renderInventory();
    renderUpgrades();
    renderAchievements();
    updateAllDisplays();
    updateLeaderboard();
    checkDailyReward();
    
    // Start timers
    startJackpotTimer();
    startPassiveIncome();
    startAutoSave();
    generateBotPlayers();
    
    // Init particles
    if (gameState.settings.particles) {
        initParticles();
    }
}

// ======================
// CLICKER FUNCTIONS
// ======================

function handleClick(event) {
    gameState.money += gameState.clickPower;
    gameState.totalClicks++;
    gameState.stats.moneyEarned += gameState.clickPower;
    
    // Floating money animation
    const button = document.getElementById('click-button');
    const rect = button.getBoundingClientRect();
    const floatingMoney = document.createElement('div');
    floatingMoney.className = 'floating-money';
    floatingMoney.textContent = '+$' + gameState.clickPower.toFixed(2);
    floatingMoney.style.left = (event.clientX - rect.left - 40) + 'px';
    floatingMoney.style.top = (event.clientY - rect.top - 20) + 'px';
    floatingMoney.style.position = 'absolute';
    button.appendChild(floatingMoney);
    
    setTimeout(() => floatingMoney.remove(), 1000);
    
    updateAllDisplays();
    checkAchievements();
    playSound('click');
}

// Setup click button
document.addEventListener('DOMContentLoaded', () => {
    const clickButton = document.getElementById('click-button');
    if (clickButton) {
        clickButton.addEventListener('click', handleClick);
    }
});

// ======================
// CASES FUNCTIONS
// ======================

function renderCases() {
    const grid = document.getElementById('cases-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    cases.forEach(c => {
        const card = document.createElement('div');
        card.className = 'case-card glass-effect';
        card.onclick = () => openCase(c.id);
        
        card.innerHTML = `
            <div class="case-image">
                <img src="${c.image}" alt="${c.name}" onerror="this.style.display='none'">
            </div>
            <div class="case-name">${c.name}</div>
            <div class="case-description">${c.description}</div>
            <div class="case-price">$${c.price.toFixed(2)}</div>
        `;
        
        grid.appendChild(card);
    });
}

function openCase(id) {
    const caseItem = cases.find(c => c.id === id);
    
    if (!caseItem) return;
    
    if (gameState.money < caseItem.price) {
        showNotification('Not enough money!', 'error');
        return;
    }
    
    if (gameState.inventory.length >= 500) {
        showNotification('Inventory full!', 'error');
        return;
    }
    
    gameState.money -= caseItem.price;
    gameState.stats.casesOpened++;
    
    // Determine rarity
    const rarity = getWeightedRarity();
    
    // Get item
    const possibleItems = caseItem.items.filter(i => i.rarity === rarity);
    if (possibleItems.length === 0) return;
    
    const item = possibleItems[Math.floor(Math.random() * possibleItems.length)];
    const wear = wears[Math.floor(Math.random() * wears.length)];
    const price = Math.random() * (item.maxPrice - item.minPrice) + item.minPrice;
    
    let icon = '🔫';
    if (item.type === 'knife') icon = '🔪';
    else if (item.type === 'gloves') icon = '🧤';
    
    const inventoryItem = {
        name: item.name,
        price: price,
        rarity: item.rarity,
        type: item.type,
        wear: wear,
        icon: icon,
        id: Date.now()
    };
    
    gameState.inventory.push(inventoryItem);
    
    updateAllDisplays();
    renderInventory();
    saveGame();
    checkAchievements();
    
    // Show result
    showCaseResult(inventoryItem);
}

function getWeightedRarity() {
    const random = Math.random() * 100;
    if (random < 0.26) return 'exceedingly'; // 0.26%
    if (random < 0.90) return 'covert'; // 0.64%
    if (random < 4.10) return 'classified'; // 3.2%
    if (random < 20.08) return 'restricted'; // 15.98%
    return 'milspec'; // 79.92%
}

function showCaseResult(item) {
    const modal = document.getElementById('case-opening-modal');
    modal.classList.remove('hidden');
    
    document.getElementById('result-icon').textContent = item.icon;
    document.getElementById('result-name').textContent = item.name;
    document.getElementById('result-wear').textContent = item.wear;
    document.getElementById('result-price').textContent = '$' + item.price.toFixed(2);
    
    const rarityEl = document.getElementById('result-rarity');
    rarityEl.textContent = item.rarity.toUpperCase();
    rarityEl.className = 'result-rarity rarity-' + item.rarity;
    
    // Show result after animation
    setTimeout(() => {
        document.querySelector('.case-opening-animation').classList.add('hidden');
        document.getElementById('case-result').classList.remove('hidden');
    }, 2000);
}

function closeCaseModal() {
    const modal = document.getElementById('case-opening-modal');
    modal.classList.add('hidden');
    document.querySelector('.case-opening-animation').classList.remove('hidden');
    document.getElementById('case-result').classList.add('hidden');
}

// ======================
// INVENTORY FUNCTIONS
// ======================

function renderInventory() {
    const grid = document.getElementById('inventory-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    if (gameState.inventory.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-dim);">No items in inventory</div>';
        return;
    }
    
    gameState.inventory.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'inventory-item glass-effect';
        
        card.innerHTML = `
            <div class="item-icon">${item.icon}</div>
            <div class="item-name">${item.name}</div>
            <div class="item-wear">${item.wear}</div>
            <div class="item-rarity rarity-${item.rarity}">${item.rarity}</div>
            <div class="item-price">$${item.price.toFixed(2)}</div>
            <button class="btn btn-success" onclick="sellItem(${index})">Sell</button>
        `;
        
        grid.appendChild(card);
    });
}

function sellItem(index) {
    const item = gameState.inventory[index];
    gameState.money += item.price;
    gameState.stats.itemsSold++;
    gameState.inventory.splice(index, 1);
    
    renderInventory();
    updateAllDisplays();
    saveGame();
    showNotification('Sold for $' + item.price.toFixed(2));
}

function sellAllItems() {
    if (gameState.inventory.length === 0) {
        showNotification('No items to sell', 'error');
        return;
    }
    
    if (!confirm(`Sell all ${gameState.inventory.length} items?`)) return;
    
    const total = gameState.inventory.reduce((sum, item) => sum + item.price, 0);
    gameState.money += total;
    gameState.stats.itemsSold += gameState.inventory.length;
    gameState.inventory = [];
    
    renderInventory();
    updateAllDisplays();
    saveGame();
    showNotification('Sold all items for $' + formatMoney(total));
}

// ======================
// UPGRADES FUNCTIONS
// ======================

function renderUpgrades() {
    const grid = document.getElementById('upgrades-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    upgradesData.forEach(upgrade => {
        const count = gameState.upgrades[upgrade.id] || 0;
        const cost = Math.floor(upgrade.baseCost * Math.pow(upgrade.multiplier, count));
        const canAfford = gameState.money >= cost;
        
        const card = document.createElement('div');
        card.className = `upgrade-card glass-effect ${canAfford ? '' : 'locked'}`;
        card.onclick = () => buyUpgrade(upgrade.id);
        
        card.innerHTML = `
            <div class="upgrade-header">
                <div class="upgrade-title">
                    <i>${upgrade.icon}</i>
                    <span>${upgrade.name}</span>
                </div>
                <div class="upgrade-count">×${count}</div>
            </div>
            <div class="upgrade-description">${upgrade.desc}</div>
            <div class="upgrade-footer">
                <div class="upgrade-cost">$${formatMoney(cost)}</div>
                <div class="upgrade-income">+$${formatMoney(upgrade.baseIncome)}/s</div>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

function buyUpgrade(upgradeId) {
    const upgrade = upgradesData.find(u => u.id === upgradeId);
    const count = gameState.upgrades[upgradeId] || 0;
    const cost = Math.floor(upgrade.baseCost * Math.pow(upgrade.multiplier, count));
    
    if (gameState.money >= cost) {
        gameState.money -= cost;
        gameState.upgrades[upgradeId] = count + 1;
        gameState.moneyPerSecond = calculateMPS();
        
        updateAllDisplays();
        renderUpgrades();
        saveGame();
        showNotification('Purchased ' + upgrade.name);
        playSound('purchase');
    }
}

// ======================
// JACKPOT FUNCTIONS
// ======================

function startJackpotTimer() {
    setInterval(() => {
        gameState.jackpot.timer--;
        
        if (gameState.jackpot.timer <= 0) {
            resolveJackpot();
            gameState.jackpot.timer = 60;
        }
        
        const timerEl = document.getElementById('jackpot-timer');
        if (timerEl) timerEl.textContent = gameState.jackpot.timer;
    }, 1000);
}

function enterJackpot() {
    const amount = parseFloat(document.getElementById('jp-bet-amount').value);
    
    if (!amount || amount <= 0) {
        showNotification('Enter a valid amount', 'error');
        return;
    }
    
    if (amount > gameState.money) {
        showNotification('Not enough money', 'error');
        return;
    }
    
    gameState.money -= amount;
    gameState.jackpot.playerBet += amount;
    
    const player = {
        name: gameState.username,
        bet: amount,
        isBot: false
    };
    
    gameState.jackpot.players.push(player);
    gameState.jackpot.pot += amount;
    
    updateAllDisplays();
    updateJackpot();
    showNotification('Entered jackpot with $' + amount.toFixed(2));
}

function resolveJackpot() {
    if (gameState.jackpot.players.length === 0) return;
    
    const totalPot = gameState.jackpot.pot;
    const random = Math.random() * totalPot;
    
    let cumulative = 0;
    let winner = null;
    
    for (let player of gameState.jackpot.players) {
        cumulative += player.bet;
        if (random <= cumulative) {
            winner = player;
            break;
        }
    }
    
    if (winner) {
        if (!winner.isBot && winner.name === gameState.username) {
            gameState.money += totalPot;
            gameState.stats.jackpotsWon++;
            showNotification('You won the jackpot! +$' + formatMoney(totalPot), 'success');
            checkAchievements();
        } else {
            showNotification(winner.name + ' won the jackpot!');
        }
    }
    
    gameState.jackpot.players = [];
    gameState.jackpot.pot = 0;
    gameState.jackpot.playerBet = 0;
    
    updateJackpot();
    saveGame();
}

function updateJackpot() {
    document.getElementById('jp-pot').textContent = '$' + formatMoney(gameState.jackpot.pot);
    document.getElementById('jp-players').textContent = gameState.jackpot.players.length;
    
    const playerBet = gameState.jackpot.playerBet || 0;
    const chance = gameState.jackpot.pot > 0 ? (playerBet / gameState.jackpot.pot * 100).toFixed(2) : 0;
    document.getElementById('jp-chance').textContent = chance + '%';
    
    const list = document.getElementById('jp-players-list');
    if (!list) return;
    
    list.innerHTML = '';
    gameState.jackpot.players.forEach(player => {
        const entry = document.createElement('div');
        entry.className = 'jp-player';
        entry.innerHTML = `
            <span class="jp-player-name">${player.name}</span>
            <span class="jp-player-bet">$${player.bet.toFixed(2)}</span>
        `;
        list.appendChild(entry);
    });
}

function generateBotPlayers() {
    const botNames = ['xXProXx', 'SniperKing', 'CasualGamer', 'LuckyShot', 'NoobMaster', 'Headshot99', 'SkinLord', 'TradeMaster', 'CaseKing', 'EZMoney'];
    
    setInterval(() => {
        if (Math.random() < 0.15 && gameState.jackpot.players.length < 15) {
            const bot = {
                name: botNames[Math.floor(Math.random() * botNames.length)] + Math.floor(Math.random() * 1000),
                bet: Math.random() * 200 + 20,
                isBot: true
            };
            
            gameState.jackpot.players.push(bot);
            gameState.jackpot.pot += bot.bet;
            updateJackpot();
        }
    }, 3000);
}

// ======================
// COINFLIP FUNCTIONS
// ======================

function flipCoin(side) {
    const amount = parseFloat(document.getElementById('flip-amount').value);
    
    if (!amount || amount <= 0) {
        showNotification('Enter a valid amount', 'error');
        return;
    }
    
    if (amount > gameState.money) {
        showNotification('Not enough money', 'error');
        return;
    }
    
    gameState.money -= amount;
    updateAllDisplays();
    
    const coin = document.getElementById('coin');
    coin.classList.add('flipping');
    
    setTimeout(() => {
        coin.classList.remove('flipping');
        
        const win = Math.random() < 0.5;
        
        if (win) {
            const winAmount = amount * 1.95;
            gameState.money += winAmount;
            gameState.stats.coinflipsWon++;
            showNotification('You won $' + winAmount.toFixed(2) + '!', 'success');
        } else {
            showNotification('You lost!', 'error');
        }
        
        updateAllDisplays();
        saveGame();
        checkAchievements();
    }, 1000);
}

// ======================
// ACHIEVEMENTS FUNCTIONS
// ======================

function renderAchievements() {
    const grid = document.getElementById('achievements-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    achievementsData.forEach(achievement => {
        const state = gameState.achievements[achievement.id];
        const card = document.createElement('div');
        card.className = `achievement-card glass-effect ${state.unlocked ? 'unlocked' : 'locked'}`;
        
        const progress = Math.min((state.progress / achievement.requirement) * 100, 100);
        
        card.innerHTML = `
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-info">
                <div class="achievement-name">${achievement.name}</div>
                <div class="achievement-description">${achievement.desc}</div>
                <div class="achievement-progress">
                    <div class="achievement-progress-bar" style="width: ${progress}%"></div>
                </div>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

function checkAchievements() {
    achievementsData.forEach(achievement => {
        const state = gameState.achievements[achievement.id];
        if (state.unlocked) return;
        
        let progress = 0;
        
        switch (achievement.type) {
            case 'clicks':
                progress = gameState.totalClicks;
                break;
            case 'cases':
                progress = gameState.stats.casesOpened;
                break;
            case 'money':
                progress = gameState.money;
                break;
            case 'jpwins':
                progress = gameState.stats.jackpotsWon;
                break;
            case 'streak':
                progress = gameState.dailyReward.streak;
                break;
        }
        
        state.progress = progress;
        
        if (progress >= achievement.requirement) {
            state.unlocked = true;
            showNotification('Achievement unlocked: ' + achievement.name + '!', 'success');
            playSound('achievement');
        }
    });
    
    renderAchievements();
}

// ======================
// LEADERBOARD FUNCTIONS
// ======================

function updateLeaderboard() {
    const list = document.getElementById('leaderboard-list');
    if (!list) return;
    
    const accounts = JSON.parse(localStorage.getItem('caseclicker_accounts') || '{}');
    const leaderboardData = [];
    
    for (const [code, data] of Object.entries(accounts)) {
        leaderboardData.push({
            username: data.username || 'Unknown',
            money: data.gameState.money || 0,
            code: code
        });
    }
    
    leaderboardData.sort((a, b) => b.money - a.money);
    const top20 = leaderboardData.slice(0, 20);
    
    list.innerHTML = '';
    
    if (top20.length === 0) {
        list.innerHTML = '<div style="text-align: center; padding: 2rem; color: var(--text-dim);">No players yet</div>';
        return;
    }
    
    top20.forEach((player, index) => {
        const rank = index + 1;
        const isCurrentPlayer = player.code === gameState.accountCode;
        
        const entry = document.createElement('div');
        entry.className = `leaderboard-entry ${rank <= 3 ? 'rank-' + rank : ''} ${isCurrentPlayer ? 'current-player' : ''}`;
        
        let rankDisplay = rank;
        if (rank === 1) rankDisplay = '🥇';
        else if (rank === 2) rankDisplay = '🥈';
        else if (rank === 3) rankDisplay = '🥉';
        
        entry.innerHTML = `
            <div class="leaderboard-rank">${rankDisplay}</div>
            <div class="leaderboard-name">${player.username}${isCurrentPlayer ? ' (You)' : ''}</div>
            <div class="leaderboard-value">$${formatMoney(player.money)}</div>
        `;
        
        list.appendChild(entry);
    });
}

function refreshLeaderboard() {
    updateLeaderboard();
    showNotification('Leaderboard refreshed!');
}

// ======================
// DAILY REWARD FUNCTIONS
// ======================

function checkDailyReward() {
    const now = new Date().toDateString();
    const lastClaimed = gameState.dailyReward.lastClaimed;
    
    const rewardEl = document.getElementById('daily-reward');
    if (!rewardEl) return;
    
    if (lastClaimed !== now) {
        rewardEl.style.display = 'flex';
    } else {
        rewardEl.style.display = 'none';
    }
}

function claimDailyReward() {
    const now = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    
    if (gameState.dailyReward.lastClaimed === yesterday) {
        gameState.dailyReward.streak++;
    } else if (gameState.dailyReward.lastClaimed !== now) {
        gameState.dailyReward.streak = 1;
    }
    
    gameState.dailyReward.lastClaimed = now;
    
    const reward = 100 * gameState.dailyReward.streak;
    gameState.money += reward;
    
    updateAllDisplays();
    saveGame();
    checkDailyReward();
    checkAchievements();
    
    showNotification(`Day ${gameState.dailyReward.streak} reward claimed: $${reward}!`, 'success');
}

// ======================
// TAB SWITCHING
// ======================

function switchTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected tab
    const selectedTab = document.getElementById('tab-' + tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // Update nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const selectedBtn = document.querySelector(`.nav-btn[data-tab="${tabName}"]`);
    if (selectedBtn) {
        selectedBtn.classList.add('active');
    }
}

// ======================
// SETTINGS FUNCTIONS
// ======================

function changeTheme(theme) {
    gameState.settings.theme = theme;
    document.body.setAttribute('data-theme', theme);
    
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const selectedBtn = document.querySelector(`.theme-btn[data-theme="${theme}"]`);
    if (selectedBtn) {
        selectedBtn.classList.add('active');
    }
    
    saveGame();
    showNotification('Theme changed to ' + theme);
}

// Settings toggles
document.addEventListener('DOMContentLoaded', () => {
    const settingsInputs = ['sound', 'animations', 'autosave', 'particles'];
    
    settingsInputs.forEach(setting => {
        const input = document.getElementById('setting-' + setting);
        if (input) {
            input.checked = gameState.settings[setting];
            input.addEventListener('change', (e) => {
                gameState.settings[setting] = e.target.checked;
                saveGame();
                
                if (setting === 'particles') {
                    if (e.target.checked) {
                        initParticles();
                    } else {
                        // Clear particles
                    }
                }
            });
        }
    });
});

// ======================
// PASSIVE INCOME & AUTO-SAVE
// ======================

function startPassiveIncome() {
    setInterval(() => {
        gameState.money += gameState.moneyPerSecond / 10;
        gameState.stats.moneyEarned += gameState.moneyPerSecond / 10;
        updateAllDisplays();
    }, 100);
}

function startAutoSave() {
    setInterval(() => {
        if (gameState.settings.autosave) {
            saveGame();
        }
    }, 30000);
}

// ======================
// PARTICLES SYSTEM
// ======================

function initParticles() {
    const canvas = document.getElementById('particles');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    
    for (let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: Math.random() * 2 - 1,
            vy: Math.random() * 2 - 1,
            size: Math.random() * 2 + 1
        });
    }
    
    function animate() {
        if (!gameState.settings.particles) return;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(255, 107, 0, 0.5)';
        
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            
            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// ======================
// INITIALIZATION
// ======================

window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('auth-screen').classList.remove('hidden');
    }, 2500);
});

window.addEventListener('beforeunload', () => {
    saveGame();
});

// Filter functionality
document.addEventListener('DOMContentLoaded', () => {
    // Case filters
    document.querySelectorAll('.filter-bar .filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.parentElement.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            const filter = e.target.getAttribute('data-filter');
            filterCases(filter);
        });
    });
});

function filterCases(filter) {
    const cases = document.querySelectorAll('.case-card');
    
    cases.forEach(card => {
        const priceText = card.querySelector('.case-price').textContent;
        const price = parseFloat(priceText.replace('$', ''));
        
        let show = true;
        
        if (filter === 'cheap' && price > 5) show = false;
        if (filter === 'mid' && (price < 5 || price > 10)) show = false;
        if (filter === 'expensive' && price < 10) show = false;
        
        card.style.display = show ? 'block' : 'none';
    });
}

console.log('CS:GO Case Clicker - Ultimate Edition loaded!');
