// CS:GO Case Clicker - ULTIMATE EXPANSION
// Trillion-dollar cases + Many new features!

// ======================
// GAME STATE
// ======================

let gameState = {
    username: 'Player',
    money: 10,
    clickPower: 0.5,
    moneyPerSecond: 0,
    totalClicks: 0,
    level: 1,
    xp: 0,
    prestige: 0,
    inventory: [],
    upgrades: {},
    autoCaseOpener: {
        enabled: false,
        caseId: null,
        interval: 5000
    },
    multipliers: {
        click: 1,
        passive: 1,
        luck: 1
    },
    settings: {
        sound: true,
        animations: true,
        autosave: true,
        particles: true,
        theme: 'orange',
        autoSellCommon: false,
        fastMode: false
    },
    jackpot: {
        pot: 0,
        players: [],
        timer: 60,
        playerBet: 0
    },
    crashGame: {
        active: false,
        multiplier: 1.0,
        cashedOut: false
    },
    roulette: {
        spinning: false,
        lastNumber: null
    },
    achievements: {},
    dailyReward: {
        lastClaimed: null,
        streak: 0
    },
    quests: {
        active: [],
        completed: []
    },
    stats: {
        casesOpened: 0,
        moneyEarned: 0,
        itemsSold: 0,
        jackpotsWon: 0,
        coinflipsWon: 0,
        biggestWin: 0,
        totalLost: 0,
        prestigeCount: 0
    }
};

// ======================
// MASSIVE CASES EXPANSION
// ======================

const cases = [
    // === LOW TIER ($0-$10) ===
    {
        id: 1,
        name: "Starter Pack",
        price: 0.50,
        tier: 'low',
        image: "caseclicker1/StarterPack.png",
        description: "Your first case!",
        items: [
            { name: "P250 | Sand Dune", rarity: "milspec", type: "weapon", minPrice: 0.03, maxPrice: 0.10 },
            { name: "Tec-9 | Groundwater", rarity: "milspec", type: "weapon", minPrice: 0.05, maxPrice: 0.15 },
            { name: "★ Random Knife", rarity: "exceedingly", type: "knife", minPrice: 50, maxPrice: 200 }
        ]
    },
    {
        id: 2,
        name: "Kilowatt Case",
        price: 2.65,
        tier: 'low',
        image: "caseclicker1/KilowattCase.png",
        description: "CS2 case",
        items: [
            { name: "AK-47 | Inheritance", rarity: "covert", type: "weapon", minPrice: 45, maxPrice: 150 },
            { name: "AWP | Chrome Cannon", rarity: "covert", type: "weapon", minPrice: 30, maxPrice: 120 },
            { name: "★ Kukri Knife", rarity: "exceedingly", type: "knife", minPrice: 100, maxPrice: 1000 }
        ]
    },
    {
        id: 3,
        name: "Revolution Case",
        price: 2.84,
        tier: 'low',
        image: "caseclicker1/RevolutionCase.png",
        description: "Community designs",
        items: [
            { name: "M4A4 | Temukau", rarity: "covert", type: "weapon", minPrice: 20, maxPrice: 80 },
            { name: "★ Rare Special Item", rarity: "exceedingly", type: "knife", minPrice: 100, maxPrice: 1000 }
        ]
    },
    {
        id: 4,
        name: "Phoenix Case",
        price: 4.00,
        tier: 'low',
        image: "caseclicker1/PhoenixCase.png",
        description: "Classic Phoenix",
        items: [
            { name: "AWP | Asiimov", rarity: "covert", type: "weapon", minPrice: 20, maxPrice: 100 },
            { name: "★ Rare Special Item", rarity: "exceedingly", type: "knife", minPrice: 100, maxPrice: 1000 }
        ]
    },
    
    // === MEDIUM TIER ($10-$100) ===
    {
        id: 5,
        name: "Operation Broken Fang",
        price: 11.42,
        tier: 'medium',
        image: "caseclicker1/OperationBrokenFangCase.png",
        description: "Operation case",
        items: [
            { name: "M4A1-S | Printstream", rarity: "covert", type: "weapon", minPrice: 18, maxPrice: 75 },
            { name: "★ Special Gloves", rarity: "exceedingly", type: "gloves", minPrice: 250, maxPrice: 2500 }
        ]
    },
    {
        id: 6,
        name: "Operation Riptide",
        price: 17.51,
        tier: 'medium',
        image: "caseclicker1/OperationRiptideCase.png",
        description: "Premium operation",
        items: [
            { name: "M4A4 | Spider Lily", rarity: "covert", type: "weapon", minPrice: 20, maxPrice: 80 },
            { name: "★ Rare Knife", rarity: "exceedingly", type: "knife", minPrice: 150, maxPrice: 1500 }
        ]
    },
    {
        id: 7,
        name: "Glove Case",
        price: 25.50,
        tier: 'medium',
        image: "caseclicker1/GloveCase.png",
        description: "First glove case",
        items: [
            { name: "AWP | Mortis", rarity: "covert", type: "weapon", minPrice: 8, maxPrice: 35 },
            { name: "★ Special Gloves", rarity: "exceedingly", type: "gloves", minPrice: 300, maxPrice: 3000 }
        ]
    },
    {
        id: 8,
        name: "Spectrum Collection",
        price: 50.00,
        tier: 'medium',
        image: "caseclicker1/SpectrumCase.png",
        description: "Butterfly knives",
        items: [
            { name: "AK-47 | Bloodsport", rarity: "covert", type: "weapon", minPrice: 10, maxPrice: 45 },
            { name: "★ Butterfly Knife", rarity: "exceedingly", type: "knife", minPrice: 500, maxPrice: 5000 }
        ]
    },
    
    // === HIGH TIER ($100-$1,000) ===
    {
        id: 9,
        name: "CS:GO Weapon Case",
        price: 85.50,
        tier: 'high',
        image: "caseclicker1/CS-GOWeaponCase.png",
        description: "LEGENDARY original!",
        items: [
            { name: "AWP | Lightning Strike", rarity: "covert", type: "weapon", minPrice: 50, maxPrice: 200 },
            { name: "★ Karambit", rarity: "exceedingly", type: "knife", minPrice: 500, maxPrice: 5000 }
        ]
    },
    {
        id: 10,
        name: "Souvenir Dragon Lore",
        price: 250.00,
        tier: 'high',
        image: "caseclicker1/SouvenirPackage.png",
        description: "Dragon Lore!",
        items: [
            { name: "AWP | Dragon Lore", rarity: "exceedingly", type: "weapon", minPrice: 1000, maxPrice: 10000 },
            { name: "M4A4 | Howl", rarity: "covert", type: "weapon", minPrice: 500, maxPrice: 3000 }
        ]
    },
    {
        id: 11,
        name: "Blue Gem Collection",
        price: 500.00,
        tier: 'high',
        image: "caseclicker1/BlueGemCase.png",
        description: "Blue Gems!",
        items: [
            { name: "AK-47 | Blue Gem", rarity: "exceedingly", type: "weapon", minPrice: 2000, maxPrice: 20000 },
            { name: "★ Karambit | Blue Gem", rarity: "exceedingly", type: "knife", minPrice: 5000, maxPrice: 50000 }
        ]
    },
    {
        id: 12,
        name: "Ultimate Collector's",
        price: 1000.00,
        tier: 'high',
        image: "caseclicker1/CollectorsCase.png",
        description: "Rarest items!",
        items: [
            { name: "★ StatTrak™ Karambit | Gamma Doppler", rarity: "exceedingly", type: "knife", minPrice: 10000, maxPrice: 100000 },
            { name: "★ Sport Gloves | Pandora's Box", rarity: "exceedingly", type: "gloves", minPrice: 5000, maxPrice: 50000 }
        ]
    },
    
    // === EPIC TIER ($1K-$10K) ===
    {
        id: 13,
        name: "Legendary Vault",
        price: 2500.00,
        tier: 'epic',
        image: "caseclicker1/LegendaryVault.png",
        description: "EPIC tier unlocked!",
        items: [
            { name: "★ StatTrak™ M9 Bayonet | Crimson Web", rarity: "exceedingly", type: "knife", minPrice: 20000, maxPrice: 150000 },
            { name: "AWP | Gungnir", rarity: "exceedingly", type: "weapon", minPrice: 10000, maxPrice: 80000 },
            { name: "★ Specialist Gloves | Crimson Kimono", rarity: "exceedingly", type: "gloves", minPrice: 15000, maxPrice: 100000 }
        ]
    },
    {
        id: 14,
        name: "Crown Collection",
        price: 5000.00,
        tier: 'epic',
        image: "caseclicker1/CrownCollection.png",
        description: "Crown stickered items!",
        items: [
            { name: "AK-47 | Fire Serpent (4x Crown)", rarity: "exceedingly", type: "weapon", minPrice: 50000, maxPrice: 300000 },
            { name: "M4A4 | Howl (4x Crown)", rarity: "exceedingly", type: "weapon", minPrice: 40000, maxPrice: 250000 },
            { name: "★ Karambit | Fade (Flawless)", rarity: "exceedingly", type: "knife", minPrice: 30000, maxPrice: 200000 }
        ]
    },
    {
        id: 15,
        name: "Professional's Cache",
        price: 7500.00,
        tier: 'epic',
        image: "caseclicker1/ProfessionalCache.png",
        description: "Pro player skins!",
        items: [
            { name: "★ StatTrak™ Karambit | Fade", rarity: "exceedingly", type: "knife", minPrice: 60000, maxPrice: 400000 },
            { name: "AWP | Dragon Lore (Souvenir Signed)", rarity: "exceedingly", type: "weapon", minPrice: 80000, maxPrice: 500000 }
        ]
    },
    
    // === MYTHIC TIER ($10K-$100K) ===
    {
        id: 16,
        name: "Mythic Treasury",
        price: 10000.00,
        tier: 'mythic',
        image: "caseclicker1/MythicTreasury.png",
        description: "MYTHIC RARITY!",
        items: [
            { name: "★ Karambit | Case Hardened (661 Pattern)", rarity: "exceedingly", type: "knife", minPrice: 100000, maxPrice: 800000 },
            { name: "AK-47 | Case Hardened (661 Pattern)", rarity: "exceedingly", type: "weapon", minPrice: 80000, maxPrice: 600000 },
            { name: "★ Sport Gloves | Vice", rarity: "exceedingly", type: "gloves", minPrice: 50000, maxPrice: 400000 }
        ]
    },
    {
        id: 17,
        name: "Sultan's Palace",
        price: 25000.00,
        tier: 'mythic',
        image: "caseclicker1/SultansPalace.png",
        description: "Royal collection!",
        items: [
            { name: "★ StatTrak™ M9 Bayonet | Crimson Web (Factory New)", rarity: "exceedingly", type: "knife", minPrice: 200000, maxPrice: 1500000 },
            { name: "AWP | Medusa (Souvenir)", rarity: "exceedingly", type: "weapon", minPrice: 150000, maxPrice: 1000000 }
        ]
    },
    {
        id: 18,
        name: "Titan Holo Vault",
        price: 50000.00,
        tier: 'mythic',
        image: "caseclicker1/TitanHolo.png",
        description: "Titan Holo stickers!",
        items: [
            { name: "AK-47 | Case Hardened (4x Titan Holo)", rarity: "exceedingly", type: "weapon", minPrice: 500000, maxPrice: 3000000 },
            { name: "AWP | Dragon Lore (4x Titan Holo)", rarity: "exceedingly", type: "weapon", minPrice: 600000, maxPrice: 4000000 }
        ]
    },
    {
        id: 19,
        name: "iBUYPOWER Legacy",
        price: 75000.00,
        tier: 'mythic',
        image: "caseclicker1/IBPLegacy.png",
        description: "iBUYPOWER Holo!",
        items: [
            { name: "M4A4 | Howl (4x iBUYPOWER Holo)", rarity: "exceedingly", type: "weapon", minPrice: 800000, maxPrice: 5000000 },
            { name: "AK-47 | Fire Serpent (4x iBUYPOWER Holo)", rarity: "exceedingly", type: "weapon", minPrice: 1000000, maxPrice: 6000000 }
        ]
    },
    
    // === LEGENDARY TIER ($100K-$1M) ===
    {
        id: 20,
        name: "Museum Piece",
        price: 100000.00,
        tier: 'legendary',
        image: "caseclicker1/MuseumPiece.png",
        description: "LEGENDARY!",
        items: [
            { name: "★ Karambit | Case Hardened (Factory New Blue Gem)", rarity: "exceedingly", type: "knife", minPrice: 1000000, maxPrice: 8000000 },
            { name: "AWP | Dragon Lore (Souvenir Signed Major Winner)", rarity: "exceedingly", type: "weapon", minPrice: 800000, maxPrice: 6000000 }
        ]
    },
    {
        id: 21,
        name: "Billionaire's Bundle",
        price: 250000.00,
        tier: 'legendary',
        image: "caseclicker1/BillionaireBundle.png",
        description: "For the wealthy!",
        items: [
            { name: "★ StatTrak™ Karambit | Crimson Web (0.06 Float)", rarity: "exceedingly", type: "knife", minPrice: 2000000, maxPrice: 15000000 },
            { name: "M4A4 | Howl (Factory New 0.00x Float)", rarity: "exceedingly", type: "weapon", minPrice: 1500000, maxPrice: 10000000 }
        ]
    },
    {
        id: 22,
        name: "Oligarch's Collection",
        price: 500000.00,
        tier: 'legendary',
        image: "caseclicker1/OligarchCollection.png",
        description: "Insane wealth!",
        items: [
            { name: "★ StatTrak™ Karambit | Blue Gem #1 Pattern", rarity: "exceedingly", type: "knife", minPrice: 5000000, maxPrice: 30000000 },
            { name: "AK-47 | Blue Gem #1 Pattern (StatTrak™)", rarity: "exceedingly", type: "weapon", minPrice: 4000000, maxPrice: 25000000 }
        ]
    },
    {
        id: 23,
        name: "Royal Fortune",
        price: 750000.00,
        tier: 'legendary',
        image: "caseclicker1/RoyalFortune.png",
        description: "Royal collection!",
        items: [
            { name: "★ M9 Bayonet | Crimson Web (0.06 Float 3 Webs)", rarity: "exceedingly", type: "knife", minPrice: 8000000, maxPrice: 50000000 },
            { name: "AWP | Gungnir (Factory New 0.00x)", rarity: "exceedingly", type: "weapon", minPrice: 6000000, maxPrice: 40000000 }
        ]
    },
    
    // === GODLY TIER ($1M-$10M) ===
    {
        id: 24,
        name: "God Tier Vault",
        price: 1000000.00,
        tier: 'godly',
        image: "caseclicker1/GodTierVault.png",
        description: "GOD TIER!",
        items: [
            { name: "★ #1 Float Karambit | Fade", rarity: "exceedingly", type: "knife", minPrice: 10000000, maxPrice: 80000000 },
            { name: "AWP | Dragon Lore (#1 Float)", rarity: "exceedingly", type: "weapon", minPrice: 12000000, maxPrice: 100000000 }
        ]
    },
    {
        id: 25,
        name: "Collector's Dream",
        price: 2500000.00,
        tier: 'godly',
        image: "caseclicker1/CollectorsDream.png",
        description: "Dream collection!",
        items: [
            { name: "★ StatTrak™ Karambit | Blue Gem + 4x Titan Holo", rarity: "exceedingly", type: "knife", minPrice: 25000000, maxPrice: 200000000 },
            { name: "AK-47 | #661 Blue Gem + 4x iBP Holo", rarity: "exceedingly", type: "weapon", minPrice: 20000000, maxPrice: 150000000 }
        ]
    },
    {
        id: 26,
        name: "Ultimate Trophy",
        price: 5000000.00,
        tier: 'godly',
        image: "caseclicker1/UltimateTrophy.png",
        description: "Trophy items!",
        items: [
            { name: "★ Karambit | Case Hardened (#1 Blue Gem Pattern)", rarity: "exceedingly", type: "knife", minPrice: 50000000, maxPrice: 400000000 },
            { name: "M4A4 | Howl (0.00 Float + 4x iBP Holo)", rarity: "exceedingly", type: "weapon", minPrice: 40000000, maxPrice: 300000000 }
        ]
    },
    
    // === COSMIC TIER ($10M-$100M) ===
    {
        id: 27,
        name: "Cosmic Cache",
        price: 10000000.00,
        tier: 'cosmic',
        image: "caseclicker1/CosmicCache.png",
        description: "COSMIC LEVEL!",
        items: [
            { name: "★ #1 Karambit | Sapphire (Perfect Float)", rarity: "exceedingly", type: "knife", minPrice: 100000000, maxPrice: 800000000 },
            { name: "AWP | Dragon Lore (Perfect Float + Rare Stickers)", rarity: "exceedingly", type: "weapon", minPrice: 80000000, maxPrice: 600000000 }
        ]
    },
    {
        id: 28,
        name: "Galaxy Collection",
        price: 25000000.00,
        tier: 'cosmic',
        image: "caseclicker1/GalaxyCollection.png",
        description: "Out of this world!",
        items: [
            { name: "★ StatTrak™ Karambit | Emerald (Flawless)", rarity: "exceedingly", type: "knife", minPrice: 250000000, maxPrice: 2000000000 },
            { name: "M4A4 | Howl (Museum Grade)", rarity: "exceedingly", type: "weapon", minPrice: 200000000, maxPrice: 1500000000 }
        ]
    },
    {
        id: 29,
        name: "Nebula Nexus",
        price: 50000000.00,
        tier: 'cosmic',
        image: "caseclicker1/NebulaNexus.png",
        description: "Nebula tier!",
        items: [
            { name: "★ StatTrak™ M9 Bayonet | Ruby (Perfect)", rarity: "exceedingly", type: "knife", minPrice: 500000000, maxPrice: 4000000000 },
            { name: "AWP | Gungnir (Museum Grade)", rarity: "exceedingly", type: "weapon", minPrice: 400000000, maxPrice: 3000000000 }
        ]
    },
    
    // === TRANSCENDENT TIER ($100M-$1B) ===
    {
        id: 30,
        name: "Transcendent Treasure",
        price: 100000000.00,
        tier: 'transcendent',
        image: "caseclicker1/TranscendentTreasure.png",
        description: "TRANSCENDENT!",
        items: [
            { name: "★ #1 Karambit | Ruby (Flawless Gem)", rarity: "exceedingly", type: "knife", minPrice: 1000000000, maxPrice: 8000000000 },
            { name: "AK-47 | Golden #1 Pattern", rarity: "exceedingly", type: "weapon", minPrice: 800000000, maxPrice: 6000000000 }
        ]
    },
    {
        id: 31,
        name: "Immortal's Arsenal",
        price: 250000000.00,
        tier: 'transcendent',
        image: "caseclicker1/ImmortalsArsenal.png",
        description: "Immortal weapons!",
        items: [
            { name: "★ StatTrak™ Karambit | Black Pearl (Perfect)", rarity: "exceedingly", type: "knife", minPrice: 2500000000, maxPrice: 20000000000 },
            { name: "AWP | Dragon Lore (Signed by Legend)", rarity: "exceedingly", type: "weapon", minPrice: 2000000000, maxPrice: 15000000000 }
        ]
    },
    {
        id: 32,
        name: "Divine Vault",
        price: 500000000.00,
        tier: 'transcendent',
        image: "caseclicker1/DivineVault.png",
        description: "Divine items!",
        items: [
            { name: "★ Divine Karambit | Celestial", rarity: "exceedingly", type: "knife", minPrice: 5000000000, maxPrice: 40000000000 },
            { name: "AWP | Medusa (Divine Edition)", rarity: "exceedingly", type: "weapon", minPrice: 4000000000, maxPrice: 30000000000 }
        ]
    },
    
    // === INFINITE TIER ($1B-$1T) ===
    {
        id: 33,
        name: "Infinite Cache",
        price: 1000000000.00,
        tier: 'infinite',
        image: "caseclicker1/InfiniteCache.png",
        description: "INFINITE TIER!",
        items: [
            { name: "★ Infinity Blade | Karambit", rarity: "exceedingly", type: "knife", minPrice: 10000000000, maxPrice: 80000000000 },
            { name: "AWP | Infinity", rarity: "exceedingly", type: "weapon", minPrice: 8000000000, maxPrice: 60000000000 }
        ]
    },
    {
        id: 34,
        name: "Eternal Collection",
        price: 10000000000.00,
        tier: 'infinite',
        image: "caseclicker1/EternalCollection.png",
        description: "Eternal greatness!",
        items: [
            { name: "★ Eternal Karambit | Galaxy", rarity: "exceedingly", type: "knife", minPrice: 100000000000, maxPrice: 800000000000 },
            { name: "M4A4 | Eternal Flame", rarity: "exceedingly", type: "weapon", minPrice: 80000000000, maxPrice: 600000000000 }
        ]
    },
    {
        id: 35,
        name: "Supreme Master Case",
        price: 100000000000.00,
        tier: 'infinite',
        image: "caseclicker1/SupremeMaster.png",
        description: "Supreme power!",
        items: [
            { name: "★ Supreme Karambit | Omega", rarity: "exceedingly", type: "knife", minPrice: 1000000000000, maxPrice: 10000000000000 },
            { name: "AWP | Supreme Divinity", rarity: "exceedingly", type: "weapon", minPrice: 800000000000, maxPrice: 8000000000000 }
        ]
    },
    {
        id: 36,
        name: "ULTIMATE CASE",
        price: 1000000000000.00, // 1 TRILLION!
        tier: 'infinite',
        image: "caseclicker1/UltimateCaseMax.png",
        description: "THE ULTIMATE CASE - $1 TRILLION!",
        items: [
            { name: "★★★ ULTIMATE Karambit | Universe", rarity: "exceedingly", type: "knife", minPrice: 10000000000000, maxPrice: 100000000000000 },
            { name: "AWP | ULTIMATE Dragon God", rarity: "exceedingly", type: "weapon", minPrice: 8000000000000, maxPrice: 80000000000000 },
            { name: "★★★ ULTIMATE Gloves | Infinity", rarity: "exceedingly", type: "gloves", minPrice: 5000000000000, maxPrice: 50000000000000 }
        ]
    }
];

const wears = ['Factory New', 'Minimal Wear', 'Field-Tested', 'Well-Worn', 'Battle-Scarred'];

// Continue in next part...

// ======================
// ENHANCED UPGRADES WITH PRESTIGE
// ======================

const upgradesData = [
    // Click Power Upgrades
    { id: 'better_mouse', name: 'Gaming Setup', desc: 'Better equipment', baseCost: 50, baseIncome: 0, clickBonus: 0.5, icon: '🖱️', multiplier: 1.5, type: 'click' },
    { id: 'gaming_mouse', name: 'Pro Peripherals', desc: 'Professional gear', baseCost: 500, baseIncome: 0, clickBonus: 2, icon: '⚡', multiplier: 1.5, type: 'click' },
    { id: 'auto_clicker', name: 'Click Automation', desc: 'Automated clicking', baseCost: 2500, baseIncome: 0, clickBonus: 5, icon: '🤖', multiplier: 1.5, type: 'click' },
    { id: 'click_macro', name: 'Macro System', desc: 'Advanced macros', baseCost: 10000, baseIncome: 0, clickBonus: 15, icon: '💻', multiplier: 1.5, type: 'click' },
    { id: 'neural_implant', name: 'Neural Link', desc: 'Brain interface', baseCost: 50000, baseIncome: 0, clickBonus: 50, icon: '🧠', multiplier: 1.5, type: 'click' },
    { id: 'quantum_clicker', name: 'Quantum Computer', desc: 'Quantum power', baseCost: 250000, baseIncome: 0, clickBonus: 200, icon: '⚛️', multiplier: 1.5, type: 'click' },
    { id: 'god_clicker', name: 'Divine Clicker', desc: 'Godly power', baseCost: 1000000, baseIncome: 0, clickBonus: 1000, icon: '👑', multiplier: 1.5, type: 'click' },
    { id: 'infinity_clicker', name: 'Infinity Clicker', desc: 'Infinite power', baseCost: 10000000, baseIncome: 0, clickBonus: 10000, icon: '♾️', multiplier: 1.5, type: 'click' },
    
    // Passive Income Upgrades
    { id: 'auto_opener', name: 'Opening Bot', desc: 'Auto opens', baseCost: 100, baseIncome: 1, icon: '📦', multiplier: 1.15, type: 'passive' },
    { id: 'trader', name: 'Market Trader', desc: 'Trades skins', baseCost: 150, baseIncome: 2, icon: '💼', multiplier: 1.15, type: 'passive' },
    { id: 'bot', name: 'Trading Algorithm', desc: 'Auto trades', baseCost: 500, baseIncome: 5, icon: '🤖', multiplier: 1.15, type: 'passive' },
    { id: 'streamer', name: 'Content Creator', desc: 'Stream money', baseCost: 750, baseIncome: 10, icon: '📺', multiplier: 1.15, type: 'passive' },
    { id: 'youtube', name: 'YouTube Channel', desc: 'Video income', baseCost: 2000, baseIncome: 30, icon: '📹', multiplier: 1.15, type: 'passive' },
    { id: 'sponsor', name: 'Sponsorship Deals', desc: 'Brand deals', baseCost: 5000, baseIncome: 75, icon: '💰', multiplier: 1.15, type: 'passive' },
    { id: 'proplayer', name: 'Professional Player', desc: 'Tournaments', baseCost: 50000, baseIncome: 800, icon: '🏆', multiplier: 1.15, type: 'passive' },
    { id: 'team', name: 'Esports Org', desc: 'Own team', baseCost: 250000, baseIncome: 4000, icon: '👥', multiplier: 1.15, type: 'passive' },
    { id: 'casino', name: 'Gaming Casino', desc: 'Casino income', baseCost: 1000000, baseIncome: 16000, icon: '🎰', multiplier: 1.15, type: 'passive' },
    { id: 'empire', name: 'Global Empire', desc: 'Worldwide', baseCost: 10000000, baseIncome: 200000, icon: '👑', multiplier: 1.15, type: 'passive' },
    { id: 'universe', name: 'Universal Corp', desc: 'Universe wide', baseCost: 100000000, baseIncome: 5000000, icon: '🌌', multiplier: 1.15, type: 'passive' },
    { id: 'infinity', name: 'Infinite Machine', desc: 'Endless money', baseCost: 1000000000, baseIncome: 100000000, icon: '♾️', multiplier: 1.15, type: 'passive' },
    
    // Special Multiplier Upgrades
    { id: 'luck_charm', name: 'Lucky Charm', desc: '+10% luck', baseCost: 10000, baseIncome: 0, luckBonus: 0.1, icon: '🍀', multiplier: 2, type: 'special' },
    { id: 'fortune_cookie', name: 'Fortune Cookie', desc: '+25% luck', baseCost: 100000, baseIncome: 0, luckBonus: 0.25, icon: '🥠', multiplier: 2, type: 'special' },
    { id: 'rabbit_foot', name: 'Rabbit\'s Foot', desc: '+50% luck', baseCost: 1000000, baseIncome: 0, luckBonus: 0.5, icon: '🐰', multiplier: 2, type: 'special' },
    { id: 'golden_horseshoe', name: 'Golden Horseshoe', desc: '+100% luck', baseCost: 10000000, baseIncome: 0, luckBonus: 1.0, icon: '🐴', multiplier: 2, type: 'special' }
];

upgradesData.forEach(u => {
    if (!gameState.upgrades[u.id]) gameState.upgrades[u.id] = 0;
});

// ======================
// ACHIEVEMENTS
// ======================

const achievementsData = [
    { id: 'first_click', name: 'First Click', desc: 'Make your first click', icon: '👆', requirement: 1, type: 'clicks', reward: 100 },
    { id: 'click_100', name: 'Clicking Pro', desc: 'Make 100 clicks', icon: '🖱️', requirement: 100, type: 'clicks', reward: 500 },
    { id: 'click_10000', name: 'Click Master', desc: '10,000 clicks', icon: '⚡', requirement: 10000, type: 'clicks', reward: 10000 },
    { id: 'first_case', name: 'First Case', desc: 'Open your first case', icon: '📦', requirement: 1, type: 'cases', reward: 50 },
    { id: 'case_100', name: 'Case Opener', desc: '100 cases', icon: '🎁', requirement: 100, type: 'cases', reward: 5000 },
    { id: 'case_1000', name: 'Case Addict', desc: '1,000 cases', icon: '🎰', requirement: 1000, type: 'cases', reward: 50000 },
    { id: 'millionaire', name: 'Millionaire', desc: 'Have $1,000,000', icon: '💰', requirement: 1000000, type: 'money', reward: 100000 },
    { id: 'billionaire', name: 'Billionaire', desc: 'Have $1,000,000,000', icon: '💎', requirement: 1000000000, type: 'money', reward: 100000000 },
    { id: 'trillionaire', name: 'Trillionaire', desc: 'Have $1,000,000,000,000', icon: '👑', requirement: 1000000000000, type: 'money', reward: 1000000000000 },
    { id: 'knife_drop', name: 'Knife Drop!', desc: 'Unbox a knife', icon: '🔪', requirement: 1, type: 'knife', reward: 1000 },
    { id: 'expensive_case', name: 'High Roller', desc: 'Open $100+ case', icon: '💎', requirement: 1, type: 'expensive', reward: 10000 },
    { id: 'ultimate_case', name: 'Ultimate Opener', desc: 'Open $1T case', icon: '⭐', requirement: 1, type: 'ultimate', reward: 1000000000000 },
    { id: 'first_prestige', name: 'Prestige', desc: 'Prestige once', icon: '🌟', requirement: 1, type: 'prestige', reward: 0 }
];

achievementsData.forEach(a => {
    if (!gameState.achievements[a.id]) {
        gameState.achievements[a.id] = { unlocked: false, progress: 0 };
    }
});

// ======================
// UTILITY FUNCTIONS
// ======================

function formatMoney(num) {
    if (num >= 1e15) return (num / 1e15).toFixed(2) + 'Qa'; // Quadrillion
    if (num >= 1e12) return (num / 1e12).toFixed(2) + 'T';
    if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
    return num.toFixed(2);
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    const container = document.getElementById('notifications');
    if (container) {
        container.appendChild(notification);
        setTimeout(() => notification.remove(), 3000);
    }
}

function saveGame() {
    if (!gameState.settings.autosave) return;
    try {
        localStorage.setItem('caseclicker_ultimate_save', JSON.stringify(gameState));
    } catch (e) {
        console.error('Save failed:', e);
    }
}

function loadGame() {
    try {
        const saved = localStorage.getItem('caseclicker_ultimate_save');
        if (saved) {
            const loaded = JSON.parse(saved);
            gameState = { ...gameState, ...loaded };
            gameState.moneyPerSecond = calculateMPS();
            gameState.clickPower = calculateClickPower();
            return true;
        }
    } catch (e) {
        console.error('Load failed:', e);
    }
    return false;
}

function calculateMPS() {
    let mps = 0;
    upgradesData.forEach(u => {
        if (u.type === 'passive') {
            const count = gameState.upgrades[u.id] || 0;
            mps += u.baseIncome * count;
        }
    });
    return mps * gameState.multipliers.passive * (1 + gameState.prestige * 0.1);
}

function calculateClickPower() {
    let power = 0.5;
    upgradesData.forEach(u => {
        if (u.type === 'click' && u.clickBonus) {
            const count = gameState.upgrades[u.id] || 0;
            power += u.clickBonus * count;
        }
    });
    return power * gameState.multipliers.click * (1 + gameState.prestige * 0.1);
}

function updateAllDisplays() {
    const elements = {
        'nav-balance': '$' + formatMoney(gameState.money),
        'nav-inventory': '$' + formatMoney(gameState.inventory.reduce((s, i) => s + i.price, 0)),
        'nav-level': gameState.level,
        'nav-username': gameState.username + (gameState.prestige > 0 ? ` [P${gameState.prestige}]` : ''),
        'money-display': '$' + formatMoney(gameState.money),
        'per-click': '$' + formatMoney(gameState.clickPower),
        'per-second': '$' + formatMoney(gameState.moneyPerSecond),
        'total-clicks': gameState.totalClicks.toLocaleString(),
        'inv-total-value': '$' + formatMoney(gameState.inventory.reduce((s, i) => s + i.price, 0)),
        'inv-item-count': `${gameState.inventory.length}/500`
    };
    
    for (const [id, value] of Object.entries(elements)) {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
    }
    
    const welcomeEls = document.querySelectorAll('#welcome-username');
    welcomeEls.forEach(el => el.textContent = gameState.username);
}

// ======================
// AUTO CASE OPENER - ENHANCED VERSION
// ======================

let autoBulkInterval = null;

function toggleAutoBulkOpener() {
    const select = document.getElementById('auto-bulk-case-select');
    const countInput = document.getElementById('auto-bulk-count');
    
    if (!select || !countInput) return;
    
    const caseId = parseInt(select.value);
    const maxCount = parseInt(countInput.value) || 0;
    
    if (autoBulkInterval) {
        // Stop auto opener
        clearInterval(autoBulkInterval);
        autoBulkInterval = null;
        showNotification('Auto opener stopped');
        const btn = document.getElementById('auto-bulk-btn');
        if (btn) btn.textContent = 'Start Auto Opener';
        return;
    }
    
    if (!caseId || maxCount <= 0) {
        showNotification('Select a case and enter count', 'error');
        return;
    }
    
    const caseItem = cases.find(c => c.id === caseId);
    if (!caseItem) return;
    
    showNotification(`Auto opening ${caseItem.name}...`);
    const btn = document.getElementById('auto-bulk-btn');
    if (btn) btn.textContent = 'Stop Auto Opener';
    
    let opened = 0;
    
    autoBulkInterval = setInterval(() => {
        if (opened >= maxCount) {
            clearInterval(autoBulkInterval);
            autoBulkInterval = null;
            showNotification(`Opened ${opened} cases!`, 'success');
            if (btn) btn.textContent = 'Start Auto Opener';
            return;
        }
        
        if (gameState.money < caseItem.price) {
            clearInterval(autoBulkInterval);
            autoBulkInterval = null;
            showNotification(`Ran out of money! Opened ${opened} cases`, 'error');
            if (btn) btn.textContent = 'Start Auto Opener';
            return;
        }
        
        if (gameState.inventory.length >= 500) {
            clearInterval(autoBulkInterval);
            autoBulkInterval = null;
            showNotification(`Inventory full! Opened ${opened} cases`, 'error');
            if (btn) btn.textContent = 'Start Auto Opener';
            return;
        }
        
        // Open case
        openCase(caseId, true); // Silent mode
        opened++;
        
        // Update display every 10 opens
        if (opened % 10 === 0) {
            const status = document.getElementById('auto-bulk-status');
            if (status) status.textContent = `Opened: ${opened}/${maxCount}`;
        }
        
    }, gameState.settings.fastMode ? 50 : 200); // Fast or normal speed
}

// Enhanced open case with silent mode
function openCase(id, silent = false) {
    const caseItem = cases.find(c => c.id === id);
    
    if (!caseItem) return;
    
    if (gameState.money < caseItem.price) {
        if (!silent) showNotification('Not enough money!', 'error');
        return;
    }
    
    if (gameState.inventory.length >= 500) {
        if (!silent) showNotification('Inventory full!', 'error');
        return;
    }
    
    gameState.money -= caseItem.price;
    gameState.stats.casesOpened++;
    
    // Check achievements
    if (caseItem.price >= 100) {
        const ach = gameState.achievements['expensive_case'];
        if (ach && !ach.unlocked) {
            ach.progress = 1;
            checkAchievements();
        }
    }
    
    if (caseItem.price >= 1000000000000) {
        const ach = gameState.achievements['ultimate_case'];
        if (ach && !ach.unlocked) {
            ach.progress = 1;
            checkAchievements();
        }
    }
    
    const rarity = getWeightedRarity();
    const possibleItems = caseItem.items.filter(i => i.rarity === rarity);
    const item = possibleItems.length > 0 
        ? possibleItems[Math.floor(Math.random() * possibleItems.length)]
        : caseItem.items[Math.floor(Math.random() * caseItem.items.length)];
    
    addItemToInventory(item, silent);
    
    if (!silent) {
        updateAllDisplays();
        saveGame();
        checkAchievements();
    }
}

function addItemToInventory(item, silent = false) {
    const wear = wears[Math.floor(Math.random() * wears.length)];
    let price = Math.random() * (item.maxPrice - item.minPrice) + item.minPrice;
    
    // Apply luck multiplier
    price *= (1 + gameState.multipliers.luck);
    
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
        id: Date.now() + Math.random()
    };
    
    // Auto-sell common items if enabled
    if (gameState.settings.autoSellCommon && item.rarity === 'milspec') {
        gameState.money += price;
        gameState.stats.itemsSold++;
        if (!silent) showNotification('Auto-sold: $' + formatMoney(price));
        return;
    }
    
    gameState.inventory.push(inventoryItem);
    
    // Track biggest win
    if (price > gameState.stats.biggestWin) {
        gameState.stats.biggestWin = price;
    }
    
    if (item.type === 'knife') {
        const ach = gameState.achievements['knife_drop'];
        if (ach && !ach.unlocked) {
            ach.progress = 1;
        }
    }
    
    if (!silent) {
        renderInventory();
        showCaseResult(inventoryItem);
    }
}

function getWeightedRarity() {
    const random = Math.random() * 100;
    const luckBonus = gameState.multipliers.luck * 0.5; // Luck increases rare chance slightly
    
    if (random < (0.26 + luckBonus)) return 'exceedingly';
    if (random < (0.90 + luckBonus)) return 'covert';
    if (random < (4.10 + luckBonus)) return 'classified';
    if (random < (20.08 + luckBonus)) return 'restricted';
    return 'milspec';
}

// Continue in next part...

// ======================
// RENDER FUNCTIONS
// ======================

function renderCases() {
    const grid = document.getElementById('cases-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    // Organize by tier
    const tiers = {
        'low': { title: '💚 Low Tier ($0-$10)', cases: [] },
        'medium': { title: '💙 Medium Tier ($10-$100)', cases: [] },
        'high': { title: '💜 High Tier ($100-$1K)', cases: [] },
        'epic': { title: '🟣 Epic Tier ($1K-$10K)', cases: [] },
        'mythic': { title: '🔴 Mythic Tier ($10K-$100K)', cases: [] },
        'legendary': { title: '🟠 Legendary Tier ($100K-$1M)', cases: [] },
        'godly': { title: '🟡 Godly Tier ($1M-$10M)', cases: [] },
        'cosmic': { title: '🌟 Cosmic Tier ($10M-$100M)', cases: [] },
        'transcendent': { title: '✨ Transcendent ($100M-$1B)', cases: [] },
        'infinite': { title: '♾️ INFINITE TIER ($1B-$1T)', cases: [] }
    };
    
    cases.forEach(c => {
        if (tiers[c.tier]) {
            tiers[c.tier].cases.push(c);
        }
    });
    
    // Render each tier
    for (const [tierKey, tier] of Object.entries(tiers)) {
        if (tier.cases.length === 0) continue;
        
        const header = document.createElement('div');
        header.style.cssText = 'grid-column: 1/-1; margin: 2rem 0 1rem; padding: 1rem; background: rgba(255,255,255,0.05); border-radius: 12px; font-size: 1.5rem; font-weight: 700;';
        header.textContent = tier.title;
        grid.appendChild(header);
        
        tier.cases.forEach(c => {
            const card = document.createElement('div');
            card.className = 'case-card glass-effect';
            
            card.innerHTML = `
                <div class="case-image">
                    <img src="${c.image}" alt="${c.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='📦'">
                </div>
                <div class="case-name">${c.name}</div>
                <div class="case-description">${c.description}</div>
                <div class="case-price">$${formatMoney(c.price)}</div>
                <button class="btn btn-primary" style="margin: 0; padding: 0.5rem; font-size: 0.9rem;" onclick="openCase(${c.id})">Open</button>
            `;
            
            grid.appendChild(card);
        });
    }
    
    // Add auto bulk opener section at top
    const autoSection = document.createElement('div');
    autoSection.style.cssText = 'grid-column: 1/-1; margin-bottom: 2rem;';
    autoSection.className = 'glass-effect';
    autoSection.style.padding = '2rem';
    autoSection.style.borderRadius = '15px';
    autoSection.innerHTML = `
        <h3 style="margin-bottom: 1rem; font-size: 1.5rem;">🤖 Auto Bulk Case Opener</h3>
        <p style="color: var(--text-dim); margin-bottom: 1rem;">Opens cases automatically until money runs out or count reached!</p>
        <div style="display: grid; grid-template-columns: 2fr 1fr auto; gap: 1rem; align-items: end;">
            <div>
                <label style="display: block; margin-bottom: 0.5rem; color: var(--text-dim);">Select Case:</label>
                <select id="auto-bulk-case-select" style="width: 100%; padding: 0.75rem; background: var(--bg-dark); border: 2px solid var(--border); color: var(--text); border-radius: 8px; font-size: 1rem;">
                    <option value="">Choose a case...</option>
                    ${cases.map(c => `<option value="${c.id}">${c.name} - $${formatMoney(c.price)}</option>`).join('')}
                </select>
            </div>
            <div>
                <label style="display: block; margin-bottom: 0.5rem; color: var(--text-dim);">Max Opens:</label>
                <input type="number" id="auto-bulk-count" placeholder="Max cases" value="100" style="width: 100%; padding: 0.75rem; background: var(--bg-dark); border: 2px solid var(--border); color: var(--text); border-radius: 8px; font-size: 1rem;">
            </div>
            <button class="btn btn-primary" id="auto-bulk-btn" onclick="toggleAutoBulkOpener()" style="margin: 0; padding: 0.75rem 2rem; white-space: nowrap;">Start Auto Opener</button>
        </div>
        <div id="auto-bulk-status" style="margin-top: 1rem; font-size: 1.1rem; color: var(--primary); font-weight: 700;"></div>
    `;
    
    grid.insertBefore(autoSection, grid.firstChild);
}

function showCaseResult(item) {
    const modal = document.getElementById('case-opening-modal');
    if (!modal) return;
    
    modal.classList.remove('hidden');
    
    const elements = {
        'result-icon': item.icon,
        'result-name': item.name,
        'result-wear': item.wear,
        'result-price': '$' + formatMoney(item.price)
    };
    
    for (const [id, value] of Object.entries(elements)) {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
    }
    
    const rarityEl = document.getElementById('result-rarity');
    if (rarityEl) {
        rarityEl.textContent = item.rarity.toUpperCase();
        rarityEl.className = 'result-rarity rarity-' + item.rarity;
    }
    
    setTimeout(() => {
        const anim = document.querySelector('.case-opening-animation');
        const result = document.getElementById('case-result');
        if (anim) anim.classList.add('hidden');
        if (result) result.classList.remove('hidden');
    }, 1000);
}

function closeCaseModal() {
    const modal = document.getElementById('case-opening-modal');
    if (modal) modal.classList.add('hidden');
    const anim = document.querySelector('.case-opening-animation');
    const result = document.getElementById('case-result');
    if (anim) anim.classList.remove('hidden');
    if (result) result.classList.add('hidden');
}

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
            <div class="item-price">$${formatMoney(item.price)}</div>
            <button class="btn btn-success" style="margin: 0; padding: 0.5rem;" onclick="sellItem(${index})">Sell</button>
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
    showNotification('Sold for $' + formatMoney(item.price));
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
    showNotification('Sold all for $' + formatMoney(total));
}

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
        
        let effectText = '';
        if (upgrade.type === 'click') {
            effectText = `+$${formatMoney(upgrade.clickBonus)}/click`;
        } else if (upgrade.type === 'passive') {
            effectText = `+$${formatMoney(upgrade.baseIncome)}/s`;
        } else if (upgrade.type === 'special') {
            effectText = `+${(upgrade.luckBonus * 100)}% luck`;
        }
        
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
                <div class="upgrade-income">${effectText}</div>
            </div>
        `;
        
        card.onclick = () => buyUpgrade(upgrade.id);
        grid.appendChild(card);
    });
}

function buyUpgrade(upgradeId) {
    const upgrade = upgradesData.find(u => u.id === upgradeId);
    if (!upgrade) return;
    
    const count = gameState.upgrades[upgradeId] || 0;
    const cost = Math.floor(upgrade.baseCost * Math.pow(upgrade.multiplier, count));
    
    if (gameState.money >= cost) {
        gameState.money -= cost;
        gameState.upgrades[upgradeId] = count + 1;
        
        // Update multipliers for special upgrades
        if (upgrade.type === 'special' && upgrade.luckBonus) {
            gameState.multipliers.luck += upgrade.luckBonus;
        }
        
        gameState.moneyPerSecond = calculateMPS();
        gameState.clickPower = calculateClickPower();
        
        updateAllDisplays();
        renderUpgrades();
        saveGame();
        showNotification('Purchased ' + upgrade.name);
    } else {
        showNotification('Not enough money!', 'error');
    }
}

function handleClick(event) {
    gameState.money += gameState.clickPower;
    gameState.totalClicks++;
    gameState.stats.moneyEarned += gameState.clickPower;
    
    const button = document.getElementById('click-button');
    if (button) {
        const rect = button.getBoundingClientRect();
        const floatingMoney = document.createElement('div');
        floatingMoney.className = 'floating-money';
        floatingMoney.textContent = '+$' + formatMoney(gameState.clickPower);
        floatingMoney.style.left = (event.clientX - rect.left - 40) + 'px';
        floatingMoney.style.top = (event.clientY - rect.top - 20) + 'px';
        floatingMoney.style.position = 'absolute';
        button.appendChild(floatingMoney);
        setTimeout(() => floatingMoney.remove(), 1000);
    }
    
    updateAllDisplays();
    checkAchievements();
}

// ======================
// JACKPOT WITH HIGH BIDS
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
        
        updateJackpot();
    }, 1000);
}

function enterJackpot() {
    const input = document.getElementById('jp-bet-amount');
    if (!input) return;
    
    const amount = parseFloat(input.value);
    
    if (!amount || amount <= 0) {
        showNotification('Enter valid amount', 'error');
        return;
    }
    
    if (amount > gameState.money) {
        showNotification('Not enough money', 'error');
        return;
    }
    
    gameState.money -= amount;
    gameState.jackpot.playerBet += amount;
    
    gameState.jackpot.players.push({
        name: gameState.username,
        bet: amount,
        isBot: false
    });
    
    gameState.jackpot.pot += amount;
    
    updateAllDisplays();
    updateJackpot();
    saveGame();
    showNotification('Entered: $' + formatMoney(amount));
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
    
    if (winner && !winner.isBot && winner.name === gameState.username) {
        gameState.money += totalPot;
        gameState.stats.jackpotsWon++;
        if (totalPot > gameState.stats.biggestWin) {
            gameState.stats.biggestWin = totalPot;
        }
        showNotification('🎉 WON $' + formatMoney(totalPot), 'success');
        checkAchievements();
    } else if (winner) {
        showNotification(winner.name + ' won $' + formatMoney(totalPot));
    }
    
    gameState.jackpot.players = [];
    gameState.jackpot.pot = 0;
    gameState.jackpot.playerBet = 0;
    
    updateJackpot();
    saveGame();
}

function updateJackpot() {
    const elements = {
        'jp-pot': '$' + formatMoney(gameState.jackpot.pot),
        'jp-players': gameState.jackpot.players.length.toString(),
        'jp-chance': (gameState.jackpot.pot > 0 ? (gameState.jackpot.playerBet / gameState.jackpot.pot * 100).toFixed(2) : '0') + '%'
    };
    
    for (const [id, value] of Object.entries(elements)) {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
    }
    
    const listEl = document.getElementById('jp-players-list');
    if (!listEl) return;
    
    listEl.innerHTML = '';
    gameState.jackpot.players.forEach(player => {
        const entry = document.createElement('div');
        entry.className = 'jp-player';
        entry.innerHTML = `
            <span class="jp-player-name">${player.name}</span>
            <span class="jp-player-bet">$${formatMoney(player.bet)}</span>
        `;
        listEl.appendChild(entry);
    });
}

function generateBotPlayers() {
    const botNames = ['Mega_Whale', 'Diamond_Hands', 'Crypto_King', 'High_Roller99', 'Lucky_Billionaire', 'Skin_Baron', 'Trade_Tycoon', 'Casino_Boss', 'Money_Printer', 'Rich_Gamer'];
    
    setInterval(() => {
        if (Math.random() < 0.3 && gameState.jackpot.players.length < 20) {
            // VERY HIGH BIDS - scales with game progress
            const baseBet = 1000;
            const scaledBet = baseBet * (1 + gameState.prestige * 10);
            const botBet = Math.random() * scaledBet * 10 + scaledBet;
            
            gameState.jackpot.players.push({
                name: botNames[Math.floor(Math.random() * botNames.length)] + Math.floor(Math.random() * 1000),
                bet: botBet,
                isBot: true
            });
            
            gameState.jackpot.pot += botBet;
            updateJackpot();
        }
    }, 2000);
}

// Continue in next part...

// ======================
// OTHER GAME FUNCTIONS
// ======================

function flipCoin(side) {
    const input = document.getElementById('flip-amount');
    if (!input) return;
    
    const amount = parseFloat(input.value);
    
    if (!amount || amount <= 0) {
        showNotification('Enter valid amount', 'error');
        return;
    }
    
    if (amount > gameState.money) {
        showNotification('Not enough money', 'error');
        return;
    }
    
    gameState.money -= amount;
    updateAllDisplays();
    
    const coin = document.getElementById('coin');
    if (coin) coin.classList.add('flipping');
    
    setTimeout(() => {
        if (coin) coin.classList.remove('flipping');
        
        const win = Math.random() < 0.5;
        
        if (win) {
            const winAmount = amount * 1.95;
            gameState.money += winAmount;
            gameState.stats.coinflipsWon++;
            showNotification('Won $' + formatMoney(winAmount), 'success');
        } else {
            gameState.stats.totalLost += amount;
            showNotification('Lost!', 'error');
        }
        
        updateAllDisplays();
        saveGame();
    }, 1000);
}

function renderAchievements() {
    const grid = document.getElementById('achievements-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    achievementsData.forEach(achievement => {
        const state = gameState.achievements[achievement.id];
        if (!state) return;
        
        const card = document.createElement('div');
        card.className = `achievement-card glass-effect ${state.unlocked ? 'unlocked' : 'locked'}`;
        
        const progress = Math.min((state.progress / achievement.requirement) * 100, 100);
        
        card.innerHTML = `
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-info">
                <div class="achievement-name">${achievement.name}</div>
                <div class="achievement-description">${achievement.desc}</div>
                ${achievement.reward > 0 ? `<div style="color: var(--success); margin-top: 0.5rem;">Reward: $${formatMoney(achievement.reward)}</div>` : ''}
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
        if (!state || state.unlocked) return;
        
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
            case 'prestige':
                progress = gameState.prestige;
                break;
        }
        
        state.progress = progress;
        
        if (progress >= achievement.requirement && !state.unlocked) {
            state.unlocked = true;
            gameState.money += achievement.reward;
            showNotification('🏆 ' + achievement.name + '! +$' + formatMoney(achievement.reward), 'success');
        }
    });
    
    renderAchievements();
}

function updateLeaderboard() {
    const list = document.getElementById('leaderboard-list');
    if (!list) return;
    
    list.innerHTML = `
        <div class="leaderboard-entry current-player">
            <div class="leaderboard-rank">🏆</div>
            <div class="leaderboard-name">${gameState.username}${gameState.prestige > 0 ? ' [P' + gameState.prestige + ']' : ''}</div>
            <div class="leaderboard-value">$${formatMoney(gameState.money)}</div>
        </div>
        <div style="text-align: center; color: var(--text-dim); margin-top: 2rem; padding: 2rem;">
            <h3 style="margin-bottom: 1rem;">Your Stats</h3>
            <p>Clicks: ${gameState.totalClicks.toLocaleString()}</p>
            <p>Cases Opened: ${gameState.stats.casesOpened.toLocaleString()}</p>
            <p>Items Sold: ${gameState.stats.itemsSold}</p>
            <p>Jackpots Won: ${gameState.stats.jackpotsWon}</p>
            <p>Biggest Win: $${formatMoney(gameState.stats.biggestWin)}</p>
            <p>Prestige Level: ${gameState.prestige}</p>
        </div>
    `;
}

function refreshLeaderboard() {
    updateLeaderboard();
    showNotification('Refreshed!');
}

function checkDailyReward() {
    const now = new Date().toDateString();
    const rewardEl = document.getElementById('daily-reward');
    if (!rewardEl) return;
    
    if (gameState.dailyReward.lastClaimed !== now) {
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
    
    const baseReward = 100;
    const reward = baseReward * gameState.dailyReward.streak * (1 + gameState.prestige);
    gameState.money += reward;
    
    updateAllDisplays();
    saveGame();
    checkDailyReward();
    showNotification(`Day ${gameState.dailyReward.streak}: $${formatMoney(reward)}!`, 'success');
}

function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    const selectedTab = document.getElementById('tab-' + tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const selectedBtn = document.querySelector(`.nav-btn[data-tab="${tabName}"]`);
    if (selectedBtn) {
        selectedBtn.classList.add('active');
    }
}

function changeTheme(theme) {
    gameState.settings.theme = theme;
    document.body.setAttribute('data-theme', theme);
    
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const selectedBtn = document.querySelector(`.theme-btn[data-theme="${theme}"]`);
    if (selectedBtn) selectedBtn.classList.add('active');
    
    saveGame();
    showNotification('Theme: ' + theme);
}

function resetProgress() {
    if (confirm('Delete ALL progress? Cannot be undone!')) {
        localStorage.removeItem('caseclicker_ultimate_save');
        location.reload();
    }
}

function exportSave() {
    const data = JSON.stringify(gameState, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `caseclicker_ultimate_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showNotification('Exported!');
}

function importSave() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                gameState = JSON.parse(event.target.result);
                gameState.moneyPerSecond = calculateMPS();
                gameState.clickPower = calculateClickPower();
                saveGame();
                location.reload();
            } catch {
                showNotification('Invalid file', 'error');
            }
        };
        reader.readAsText(file);
    };
    input.click();
}

// ======================
// PRESTIGE SYSTEM
// ======================

function prestige() {
    if (gameState.money < 1000000000000) { // 1 Trillion requirement
        showNotification('Need $1T to prestige!', 'error');
        return;
    }
    
    if (!confirm('Prestige? You will lose everything but gain permanent 10% boost to all income!')) {
        return;
    }
    
    gameState.prestige++;
    gameState.stats.prestigeCount++;
    
    // Reset progress
    gameState.money = 10;
    gameState.inventory = [];
    gameState.upgrades = {};
    upgradesData.forEach(u => {
        gameState.upgrades[u.id] = 0;
    });
    
    // Recalculate
    gameState.moneyPerSecond = calculateMPS();
    gameState.clickPower = calculateClickPower();
    
    showNotification(`🌟 Prestige ${gameState.prestige}! +10% boost!`, 'success');
    
    updateAllDisplays();
    renderUpgrades();
    renderInventory();
    saveGame();
    
    // Check achievement
    const ach = gameState.achievements['first_prestige'];
    if (ach && !ach.unlocked) {
        ach.progress = 1;
        checkAchievements();
    }
}

// ======================
// GAME LOOP & INITIALIZATION
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

function initParticles() {
    const canvas = document.getElementById('particles');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    
    for (let i = 0; i < 50; i++) {
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
        ctx.fillStyle = 'rgba(255, 107, 0, 0.3)';
        
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

function startGame() {
    console.log('Starting Ultimate CS:GO Clicker...');
    
    const gameScreen = document.getElementById('game-screen');
    if (gameScreen) {
        gameScreen.classList.remove('hidden');
    }
    
    document.body.setAttribute('data-theme', gameState.settings.theme || 'orange');
    
    upgradesData.forEach(u => {
        if (!gameState.upgrades[u.id]) gameState.upgrades[u.id] = 0;
    });
    
    achievementsData.forEach(a => {
        if (!gameState.achievements[a.id]) {
            gameState.achievements[a.id] = { unlocked: false, progress: 0 };
        }
    });
    
    renderCases();
    renderInventory();
    renderUpgrades();
    renderAchievements();
    updateAllDisplays();
    updateLeaderboard();
    checkDailyReward();
    
    startJackpotTimer();
    startPassiveIncome();
    startAutoSave();
    generateBotPlayers();
    
    if (gameState.settings.particles) {
        initParticles();
    }
    
    console.log('Game started! 36 cases, $1T max!');
}

window.addEventListener('load', () => {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
        }
        
        const loaded = loadGame();
        const gameScreen = document.getElementById('game-screen');
        if (gameScreen) {
            gameScreen.classList.remove('hidden');
        }
        
        startGame();
        
        if (loaded) {
            showNotification('Welcome back!');
        } else {
            showNotification('Welcome to Ultimate CS:GO Clicker!');
        }
    }, 2500);
});

window.addEventListener('beforeunload', saveGame);

document.addEventListener('DOMContentLoaded', () => {
    const clickBtn = document.getElementById('click-button');
    if (clickBtn) {
        clickBtn.addEventListener('click', handleClick);
    }
    
    const settingsInputs = ['sound', 'animations', 'autosave', 'particles', 'autoSellCommon', 'fastMode'];
    settingsInputs.forEach(setting => {
        const input = document.getElementById('setting-' + setting);
        if (input) {
            input.checked = gameState.settings[setting];
            input.addEventListener('change', (e) => {
                gameState.settings[setting] = e.target.checked;
                saveGame();
                if (setting === 'particles' && e.target.checked) {
                    initParticles();
                }
            });
        }
    });
});

console.log('🚀 CS:GO ULTIMATE CLICKER LOADED!');
console.log('📦 36 Cases from $0.50 to $1 TRILLION');
console.log('🤖 Auto Bulk Case Opener');
console.log('🌟 Prestige System');
console.log('♾️ Items worth up to $100 TRILLION!');
