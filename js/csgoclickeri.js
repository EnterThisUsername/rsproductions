let gameState={username:'',accountCode:'',money:0,clickPower:0.50,moneyPerSecond:0,totalClicks:0,inventory:[],upgrades:{},settings:{sounds:true,animations:true,autosave:true,theme:'default'},jackpot:{pot:0,players:[],timer:60,playerBet:0,playerName:null}};

// Real CS:GO/CS2 Cases Data - Updated January 2026
const cases = [
    // Active/Prime Drop Pool Cases
    {
        id: 1,
        name: "Kilowatt Case",
        price: 2.65,
        icon: "⚡",
        description: "First CS2 case with Kukri Knife & Zeus skin",
        items: [
            { name: "AK-47 | Inheritance", rarity: "covert", type: "weapon", minPrice: 45, maxPrice: 150 },
            { name: "AWP | Chrome Cannon", rarity: "covert", type: "weapon", minPrice: 30, maxPrice: 120 },
            { name: "M4A1-S | Black Lotus", rarity: "classified", type: "weapon", minPrice: 6, maxPrice: 36 },
            { name: "USP-S | Jawbreaker", rarity: "classified", type: "weapon", minPrice: 5, maxPrice: 20 },
            { name: "Zeus x27 | Olympus", rarity: "classified", type: "weapon", minPrice: 3, maxPrice: 11 },
            { name: "MP7 | Just Smile", rarity: "restricted", type: "weapon", minPrice: 1, maxPrice: 5 },
            { name: "Glock-18 | Block-18", rarity: "restricted", type: "weapon", minPrice: 1, maxPrice: 4 },
            { name: "MAC-10 | Light Box", rarity: "restricted", type: "weapon", minPrice: 0.5, maxPrice: 3 },
            { name: "Nova | Dark Sigil", rarity: "restricted", type: "weapon", minPrice: 0.5, maxPrice: 2 },
            { name: "Five-SeveN | Hybrid Hunter", rarity: "restricted", type: "weapon", minPrice: 0.5, maxPrice: 2 },
            { name: "SSG 08 | Dezastre", rarity: "milspec", type: "weapon", minPrice: 0.2, maxPrice: 1 },
            { name: "Dual Berettas | Hideout", rarity: "milspec", type: "weapon", minPrice: 0.2, maxPrice: 1 },
            { name: "UMP-45 | Motorized", rarity: "milspec", type: "weapon", minPrice: 0.2, maxPrice: 1 },
            { name: "Sawed-Off | Analog Input", rarity: "milspec", type: "weapon", minPrice: 0.2, maxPrice: 1 },
            { name: "MAG-7 | BI83 Spectrum", rarity: "milspec", type: "weapon", minPrice: 0.2, maxPrice: 1 },
            { name: "Tec-9 | Slag", rarity: "milspec", type: "weapon", minPrice: 0.2, maxPrice: 1 },
            { name: "P2000 | Ivory", rarity: "milspec", type: "weapon", minPrice: 0.2, maxPrice: 1 },
            { name: "★ Kukri Knife", rarity: "exceedingly", type: "knife", minPrice: 100, maxPrice: 1000 }
        ]
    },
    {
        id: 2,
        name: "Revolution Case",
        price: 2.84,
        icon: "🔫",
        description: "Community designs with M4A4 Temukau",
        items: [
            { name: "M4A4 | Temukau", rarity: "covert", type: "weapon", minPrice: 20, maxPrice: 80 },
            { name: "P250 | Visions", rarity: "covert", type: "weapon", minPrice: 15, maxPrice: 60 },
            { name: "AK-47 | Head Shot", rarity: "classified", type: "weapon", minPrice: 5, maxPrice: 25 },
            { name: "AWP | Duality", rarity: "classified", type: "weapon", minPrice: 4, maxPrice: 20 },
            { name: "P90 | Neoqueen", rarity: "classified", type: "weapon", minPrice: 2, maxPrice: 10 },
            { name: "M4A1-S | Emphorosaur-S", rarity: "restricted", type: "weapon", minPrice: 1, maxPrice: 5 },
            { name: "Glock-18 | Umbral Rabbit", rarity: "restricted", type: "weapon", minPrice: 1, maxPrice: 4 },
            { name: "Desert Eagle | Ocean Drive", rarity: "restricted", type: "weapon", minPrice: 1, maxPrice: 4 },
            { name: "R8 Revolver | Crazy 8", rarity: "restricted", type: "weapon", minPrice: 0.5, maxPrice: 3 },
            { name: "MAC-10 | Sakkaku", rarity: "restricted", type: "weapon", minPrice: 0.5, maxPrice: 2 },
            { name: "P2000 | Wicked Sick", rarity: "milspec", type: "weapon", minPrice: 0.2, maxPrice: 1 },
            { name: "FAMAS | Rapid Eye Movement", rarity: "milspec", type: "weapon", minPrice: 0.2, maxPrice: 1 },
            { name: "Tec-9 | Rebel", rarity: "milspec", type: "weapon", minPrice: 0.2, maxPrice: 1 },
            { name: "Sawed-Off | Apocalypto", rarity: "milspec", type: "weapon", minPrice: 0.2, maxPrice: 1 },
            { name: "UMP-45 | Wild Child", rarity: "milspec", type: "weapon", minPrice: 0.2, maxPrice: 1 },
            { name: "★ Rare Special Item", rarity: "exceedingly", type: "knife", minPrice: 100, maxPrice: 1000 }
        ]
    },
    {
        id: 3,
        name: "Recoil Case",
        price: 2.62,
        icon: "🎯",
        description: "USP-S Printstream & AWP Chromatic",
        items: [
            { name: "USP-S | Printstream", rarity: "covert", type: "weapon", minPrice: 25, maxPrice: 100 },
            { name: "AWP | Chromatic Aberration", rarity: "covert", type: "weapon", minPrice: 15, maxPrice: 60 },
            { name: "AK-47 | Ice Coaled", rarity: "classified", type: "weapon", minPrice: 5, maxPrice: 20 },
            { name: "M4A4 | Poly Mag", rarity: "classified", type: "weapon", minPrice: 3, maxPrice: 12 },
            { name: "R8 Revolver | Grip", rarity: "classified", type: "weapon", minPrice: 2, maxPrice: 8 },
            { name: "P250 | Visions", rarity: "restricted", type: "weapon", minPrice: 1, maxPrice: 4 },
            { name: "Dual Berettas | Flora Carnivora", rarity: "restricted", type: "weapon", minPrice: 1, maxPrice: 3 },
            { name: "MAC-10 | Toybox", rarity: "restricted", type: "weapon", minPrice: 0.5, maxPrice: 2 },
            { name: "MP9 | Mount Fuji", rarity: "restricted", type: "weapon", minPrice: 0.5, maxPrice: 2 },
            { name: "P2000 | Lifted Spirits", rarity: "restricted", type: "weapon", minPrice: 0.5, maxPrice: 2 },
            { name: "Galil AR | Destroyer", rarity: "milspec", type: "weapon", minPrice: 0.2, maxPrice: 1 },
            { name: "M249 | Deep Relief", rarity: "milspec", type: "weapon", minPrice: 0.2, maxPrice: 1 },
            { name: "★ Special Gloves", rarity: "exceedingly", type: "gloves", minPrice: 200, maxPrice: 2000 }
        ]
    },
    {
        id: 4,
        name: "Dreams & Nightmares Case",
        price: 4.02,
        icon: "🌙",
        description: "Community contest winners",
        items: [
            { name: "AK-47 | Nightwish", rarity: "covert", type: "weapon", minPrice: 20, maxPrice: 80 },
            { name: "MP9 | Starlight Protector", rarity: "covert", type: "weapon", minPrice: 15, maxPrice: 60 },
            { name: "USP-S | Ticket to Hell", rarity: "classified", type: "weapon", minPrice: 5, maxPrice: 20 },
            { name: "Dual Berettas | Melondrama", rarity: "classified", type: "weapon", minPrice: 3, maxPrice: 12 },
            { name: "FAMAS | Rapid Eye Movement", rarity: "classified", type: "weapon", minPrice: 2, maxPrice: 10 },
            { name: "G3SG1 | Dream Glade", rarity: "restricted", type: "weapon", minPrice: 1, maxPrice: 4 },
            { name: "M4A1-S | Night Terror", rarity: "restricted", type: "weapon", minPrice: 1, maxPrice: 3 },
            { name: "PP-Bizon | Space Cat", rarity: "restricted", type: "weapon", minPrice: 0.5, maxPrice: 2 },
            { name: "XM1014 | Zombie Offensive", rarity: "restricted", type: "weapon", minPrice: 0.5, maxPrice: 2 },
            { name: "Five-SeveN | Scrawl", rarity: "restricted", type: "weapon", minPrice: 0.5, maxPrice: 2 },
            { name: "MP5-SD | Necro Jr.", rarity: "milspec", type: "weapon", minPrice: 0.2, maxPrice: 1 },
            { name: "P250 | Re.built", rarity: "milspec", type: "weapon", minPrice: 0.2, maxPrice: 1 },
            { name: "★ Rare Special Item", rarity: "exceedingly", type: "knife", minPrice: 100, maxPrice: 1000 }
        ]
    },
    {
        id: 5,
        name: "Fracture Case",
        price: 2.82,
        icon: "💥",
        description: "Glock-18 Vogue & M4A4 Tooth Fairy",
        items: [
            { name: "Glock-18 | Vogue", rarity: "covert", type: "weapon", minPrice: 18, maxPrice: 70 },
            { name: "M4A4 | Tooth Fairy", rarity: "covert", type: "weapon", minPrice: 15, maxPrice: 60 },
            { name: "AK-47 | Legion of Anubis", rarity: "classified", type: "weapon", minPrice: 4, maxPrice: 18 },
            { name: "Desert Eagle | Printstream", rarity: "classified", type: "weapon", minPrice: 3, maxPrice: 15 },
            { name: "Five-SeveN | Fairy Tale", rarity: "classified", type: "weapon", minPrice: 2, maxPrice: 8 },
            { name: "UMP-45 | Fade", rarity: "restricted", type: "weapon", minPrice: 1, maxPrice: 5 },
            { name: "M4A1-S | Printstream", rarity: "restricted", type: "weapon", minPrice: 1, maxPrice: 4 },
            { name: "★ Special Gloves", rarity: "exceedingly", type: "gloves", minPrice: 200, maxPrice: 2000 }
        ]
    },
    {
        id: 6,
        name: "Prisma 2 Case",
        price: 4.14,
        icon: "🌈",
        description: "Colorful community designs",
        items: [
            { name: "M4A1-S | Player Two", rarity: "covert", type: "weapon", minPrice: 10, maxPrice: 40 },
            { name: "Glock-18 | Bullet Queen", rarity: "covert", type: "weapon", minPrice: 8, maxPrice: 35 },
            { name: "P90 | Neoqueen", rarity: "classified", type: "weapon", minPrice: 3, maxPrice: 12 },
            { name: "AK-47 | Phantom Disruptor", rarity: "classified", type: "weapon", minPrice: 2, maxPrice: 10 },
            { name: "★ Rare Special Item", rarity: "exceedingly", type: "knife", minPrice: 100, maxPrice: 1000 }
        ]
    },
    {
        id: 7,
        name: "Shattered Web Case",
        price: 9.39,
        icon: "🕸️",
        description: "Operation case with rare items",
        items: [
            { name: "AK-47 | Slate", rarity: "covert", type: "weapon", minPrice: 15, maxPrice: 55 },
            { name: "AWP | Containment Breach", rarity: "covert", type: "weapon", minPrice: 12, maxPrice: 50 },
            { name: "M4A4 | Emperor", rarity: "classified", type: "weapon", minPrice: 4, maxPrice: 16 },
            { name: "★ Rare Special Item", rarity: "exceedingly", type: "knife", minPrice: 100, maxPrice: 1000 }
        ]
    },
    {
        id: 8,
        name: "CS20 Case",
        price: 3.85,
        icon: "🎂",
        description: "20th Anniversary case",
        items: [
            { name: "AWP | Wildfire", rarity: "covert", type: "weapon", minPrice: 12, maxPrice: 50 },
            { name: "Glock-18 | Sacrifice", rarity: "covert", type: "weapon", minPrice: 10, maxPrice: 40 },
            { name: "M4A1-S | Converter", rarity: "classified", type: "weapon", minPrice: 3, maxPrice: 12 },
            { name: "★ Rare Special Item", rarity: "exceedingly", type: "knife", minPrice: 100, maxPrice: 1000 }
        ]
    },
    {
        id: 9,
        name: "Danger Zone Case",
        price: 4.10,
        icon: "⚠️",
        description: "Battle royale themed case",
        items: [
            { name: "AK-47 | Asiimov", rarity: "covert", type: "weapon", minPrice: 15, maxPrice: 60 },
            { name: "AWP | Neo-Noir", rarity: "covert", type: "weapon", minPrice: 12, maxPrice: 50 },
            { name: "Desert Eagle | Mecha Industries", rarity: "classified", type: "weapon", minPrice: 3, maxPrice: 15 },
            { name: "★ Rare Special Item", rarity: "exceedingly", type: "knife", minPrice: 100, maxPrice: 1000 }
        ]
    },
    {
        id: 10,
        name: "Horizon Case",
        price: 3.75,
        icon: "🌅",
        description: "Desert Eagle Code Red",
        items: [
            { name: "AK-47 | Neon Rider", rarity: "covert", type: "weapon", minPrice: 12, maxPrice: 50 },
            { name: "Desert Eagle | Code Red", rarity: "covert", type: "weapon", minPrice: 10, maxPrice: 45 },
            { name: "AWP | PAW", rarity: "classified", type: "weapon", minPrice: 3, maxPrice: 15 },
            { name: "★ Rare Special Item", rarity: "exceedingly", type: "knife", minPrice: 100, maxPrice: 1000 }
        ]
    },
    {
        id: 11,
        name: "Operation Riptide Case",
        price: 17.51,
        icon: "🌊",
        description: "Recent operation case",
        items: [
            { name: "M4A4 | Spider Lily", rarity: "covert", type: "weapon", minPrice: 20, maxPrice: 80 },
            { name: "AK-47 | Leet Museo", rarity: "covert", type: "weapon", minPrice: 15, maxPrice: 70 },
            { name: "AWP | Duality", rarity: "classified", type: "weapon", minPrice: 5, maxPrice: 20 },
            { name: "★ Rare Special Item", rarity: "exceedingly", type: "knife", minPrice: 150, maxPrice: 1500 }
        ]
    },
    {
        id: 12,
        name: "Operation Broken Fang Case",
        price: 11.42,
        icon: "🐺",
        description: "Sought-after operation case",
        items: [
            { name: "M4A1-S | Printstream", rarity: "covert", type: "weapon", minPrice: 18, maxPrice: 75 },
            { name: "Glock-18 | Neo-Noir", rarity: "covert", type: "weapon", minPrice: 15, maxPrice: 65 },
            { name: "UMP-45 | Gold Bismuth", rarity: "classified", type: "weapon", minPrice: 4, maxPrice: 16 },
            { name: "★ Special Gloves", rarity: "exceedingly", type: "gloves", minPrice: 250, maxPrice: 2500 }
        ]
    },
    {
        id: 13,
        name: "Operation Hydra Case",
        price: 22.05,
        icon: "💧",
        description: "Rare discontinued operation case",
        items: [
            { name: "AK-47 | Orbit Mk01", rarity: "covert", type: "weapon", minPrice: 15, maxPrice: 60 },
            { name: "Five-SeveN | Hyper Beast", rarity: "covert", type: "weapon", minPrice: 12, maxPrice: 50 },
            { name: "AWP | Oni Taiji", rarity: "classified", type: "weapon", minPrice: 4, maxPrice: 18 },
            { name: "★ Special Gloves", rarity: "exceedingly", type: "gloves", minPrice: 250, maxPrice: 2500 }
        ]
    },
    {
        id: 14,
        name: "Spectrum Case",
        price: 6.81,
        icon: "🦋",
        description: "Butterfly Knife case",
        items: [
            { name: "AK-47 | Bloodsport", rarity: "covert", type: "weapon", minPrice: 10, maxPrice: 45 },
            { name: "USP-S | Neo-Noir", rarity: "covert", type: "weapon", minPrice: 8, maxPrice: 40 },
            { name: "M4A1-S | Decimator", rarity: "classified", type: "weapon", minPrice: 3, maxPrice: 12 },
            { name: "★ Butterfly Knife", rarity: "exceedingly", type: "knife", minPrice: 500, maxPrice: 5000 }
        ]
    },
    {
        id: 15,
        name: "Spectrum 2 Case",
        price: 4.10,
        icon: "🦋",
        description: "More Butterfly Knife variants",
        items: [
            { name: "AK-47 | The Empress", rarity: "covert", type: "weapon", minPrice: 12, maxPrice: 50 },
            { name: "P250 | See Ya Later", rarity: "covert", type: "weapon", minPrice: 8, maxPrice: 35 },
            { name: "MAC-10 | Pipe Down", rarity: "classified", type: "weapon", minPrice: 3, maxPrice: 12 },
            { name: "★ Butterfly Knife", rarity: "exceedingly", type: "knife", minPrice: 500, maxPrice: 5000 }
        ]
    },
    {
        id: 16,
        name: "Glove Case",
        price: 6.50,
        icon: "🧤",
        description: "First case with gloves",
        items: [
            { name: "AWP | Mortis", rarity: "covert", type: "weapon", minPrice: 8, maxPrice: 35 },
            { name: "M4A4 | Buzz Kill", rarity: "covert", type: "weapon", minPrice: 6, maxPrice: 30 },
            { name: "USP-S | Cyrex", rarity: "classified", type: "weapon", minPrice: 2, maxPrice: 10 },
            { name: "★ Special Gloves", rarity: "exceedingly", type: "gloves", minPrice: 200, maxPrice: 2000 }
        ]
    },
    {
        id: 17,
        name: "Chroma 3 Case",
        price: 3.10,
        icon: "🎨",
        description: "Colorful Chroma series case",
        items: [
            { name: "M4A1-S | Chantico's Fire", rarity: "covert", type: "weapon", minPrice: 8, maxPrice: 35 },
            { name: "PP-Bizon | Judgement of Anubis", rarity: "covert", type: "weapon", minPrice: 6, maxPrice: 30 },
            { name: "SSG 08 | Ghost Crusader", rarity: "classified", type: "weapon", minPrice: 2, maxPrice: 10 },
            { name: "★ Rare Special Item", rarity: "exceedingly", type: "knife", minPrice: 100, maxPrice: 1000 }
        ]
    },
    {
        id: 18,
        name: "Gamma 2 Case",
        price: 3.25,
        icon: "☢️",
        description: "Gamma Doppler knife finishes",
        items: [
            { name: "FAMAS | Roll Cage", rarity: "covert", type: "weapon", minPrice: 6, maxPrice: 28 },
            { name: "Tec-9 | Fuel Injector", rarity: "covert", type: "weapon", minPrice: 5, maxPrice: 25 },
            { name: "M4A4 | Desolate Space", rarity: "classified", type: "weapon", minPrice: 2, maxPrice: 10 },
            { name: "★ Rare Special Item", rarity: "exceedingly", type: "knife", minPrice: 100, maxPrice: 1000 }
        ]
    },
    {
        id: 19,
        name: "CS:GO Weapon Case",
        price: 85.50,
        icon: "💎",
        description: "Original case - most expensive!",
        items: [
            { name: "AWP | Lightning Strike", rarity: "covert", type: "weapon", minPrice: 50, maxPrice: 200 },
            { name: "AK-47 | Case Hardened", rarity: "classified", type: "weapon", minPrice: 30, maxPrice: 150 },
            { name: "Desert Eagle | Hypnotic", rarity: "classified", type: "weapon", minPrice: 10, maxPrice: 50 },
            { name: "★ Rare Special Item", rarity: "exceedingly", type: "knife", minPrice: 500, maxPrice: 5000 }
        ]
    },
    {
        id: 20,
        name: "Phoenix Case",
        price: 4.00,
        icon: "🔥",
        description: "Classic Phoenix case",
        items: [
            { name: "AK-47 | Redline", rarity: "classified", type: "weapon", minPrice: 5, maxPrice: 25 },
            { name: "AWP | Asiimov", rarity: "covert", type: "weapon", minPrice: 20, maxPrice: 100 },
            { name: "★ Rare Special Item", rarity: "exceedingly", type: "knife", minPrice: 100, maxPrice: 1000 }
        ]
    },
    {
        id: 21,
        name: "Clutch Case",
        price: 5.00,
        icon: "🎯",
        description: "Clutch moment case",
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
        icon: "🗡️",
        description: "Falchion Knife case",
        items: [
            { name: "AK-47 | Aquamarine Revenge", rarity: "covert", type: "weapon", minPrice: 15, maxPrice: 65 },
            { name: "AWP | Hyper Beast", rarity: "covert", type: "weapon", minPrice: 12, maxPrice: 55 },
            { name: "★ Falchion Knife", rarity: "exceedingly", type: "knife", minPrice: 100, maxPrice: 1200 }
        ]
    }
];

const wears=['Factory New','Minimal Wear','Field-Tested','Well-Worn','Battle-Scarred'];

const upgradesData=[{id:'autoclicker',name:'Auto Clicker',desc:'Clicks automatically',baseCost:25,baseIncome:0.5,icon:'🖱️',multiplier:1.15},{id:'trader',name:'Skin Trader',desc:'Trades skins',baseCost:150,baseIncome:2,icon:'💼',multiplier:1.15},{id:'bot',name:'Trading Bot',desc:'Automated trades',baseCost:500,baseIncome:5,icon:'🤖',multiplier:1.15},{id:'streamer',name:'Streamer',desc:'Stream earnings',baseCost:750,baseIncome:10,icon:'📺',multiplier:1.15},{id:'youtube',name:'YouTuber',desc:'Content creator',baseCost:2000,baseIncome:30,icon:'📹',multiplier:1.15},{id:'sponsor',name:'Sponsorships',desc:'Brand deals',baseCost:5000,baseIncome:75,icon:'💰',multiplier:1.15},{id:'analyst',name:'Match Analyst',desc:'Team analyst',baseCost:12000,baseIncome:180,icon:'📊',multiplier:1.15},{id:'coach',name:'Team Coach',desc:'Coach pros',baseCost:25000,baseIncome:400,icon:'🎓',multiplier:1.15},{id:'proplayer',name:'Pro Player',desc:'Tournament wins',baseCost:50000,baseIncome:800,icon:'🏆',multiplier:1.15},{id:'captain',name:'Team Captain',desc:'Lead the team',baseCost:100000,baseIncome:1600,icon:'⭐',multiplier:1.15},{id:'team',name:'Esports Team',desc:'Own team',baseCost:250000,baseIncome:4000,icon:'👥',multiplier:1.15},{id:'manager',name:'Team Manager',desc:'Manage team',baseCost:500000,baseIncome:8000,icon:'📋',multiplier:1.15},{id:'casino',name:'Skin Casino',desc:'Gambling site',baseCost:1000000,baseIncome:16000,icon:'🎰',multiplier:1.15},{id:'marketplace',name:'Marketplace',desc:'Trading platform',baseCost:2500000,baseIncome:40000,icon:'🏪',multiplier:1.15},{id:'market',name:'Market Bot',desc:'Auto trading',baseCost:5000000,baseIncome:80000,icon:'🤖',multiplier:1.15},{id:'organization',name:'Gaming Org',desc:'Organization',baseCost:12000000,baseIncome:200000,icon:'🏢',multiplier:1.15},{id:'multiorg',name:'Multi-Team Org',desc:'Multiple teams',baseCost:25000000,baseIncome:400000,icon:'🌐',multiplier:1.15},{id:'tournament',name:'Major Host',desc:'Host majors',baseCost:60000000,baseIncome:1000000,icon:'🎮',multiplier:1.15},{id:'league',name:'Esports League',desc:'Own league',baseCost:150000000,baseIncome:2500000,icon:'🌍',multiplier:1.15},{id:'broadcaster',name:'Broadcasting',desc:'Stream rights',baseCost:350000000,baseIncome:6000000,icon:'📡',multiplier:1.15},{id:'empire',name:'Gaming Empire',desc:'Dominate',baseCost:800000000,baseIncome:14000000,icon:'👑',multiplier:1.15},{id:'developer',name:'Game Developer',desc:'Create games',baseCost:2000000000,baseIncome:35000000,icon:'🎨',multiplier:1.15},{id:'studio',name:'Game Studio',desc:'AAA studio',baseCost:5000000000,baseIncome:90000000,icon:'🎬',multiplier:1.15},{id:'publisher',name:'Game Publisher',desc:'Publish games',baseCost:12000000000,baseIncome:220000000,icon:'📦',multiplier:1.15},{id:'platform',name:'Gaming Platform',desc:'Own platform',baseCost:30000000000,baseIncome:550000000,icon:'💻',multiplier:1.15},{id:'monopoly',name:'Gaming Monopoly',desc:'Control all',baseCost:75000000000,baseIncome:1400000000,icon:'💎',multiplier:1.15},{id:'conglomerate',name:'Conglomerate',desc:'Global empire',baseCost:200000000000,baseIncome:3500000000,icon:'🌎',multiplier:1.15},{id:'titan',name:'Industry Titan',desc:'Ultimate power',baseCost:500000000000,baseIncome:9000000000,icon:'⚡',multiplier:1.15}];

upgradesData.forEach(u=>{if(!gameState.upgrades[u.id])gameState.upgrades[u.id]=0;});

function generateAccountCode(username){const chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';let code='';for(let char of username){code+=char+chars.charAt(Math.floor(Math.random()*chars.length));}for(let i=0;i<20;i++){code+=chars.charAt(Math.floor(Math.random()*chars.length));}return code;}

function showMainMenu(){document.getElementById('main-menu').style.display='block';document.getElementById('login-form').style.display='none';document.getElementById('register-form').style.display='none';}

function showLoginPrompt(){document.getElementById('main-menu').style.display='none';document.getElementById('login-form').style.display='block';document.getElementById('register-form').style.display='none';}

function showCreatePrompt(){document.getElementById('main-menu').style.display='none';document.getElementById('login-form').style.display='none';document.getElementById('register-form').style.display='block';document.getElementById('new-account-code').style.display='none';}

function copyCode(){const code=document.getElementById('account-code-display').textContent;navigator.clipboard.writeText(code).then(()=>{showNotification('Code copied to clipboard!');}).catch(()=>{showNotification('Failed to copy code','error');});}

function createAccount(){const username=document.getElementById('register-username').value.trim();if(!username){showNotification('Enter a username!','error');return;}if(username.length<3){showNotification('Username must be 3+ characters!','error');return;}const accounts=JSON.parse(localStorage.getItem('caseclicker_accounts')||'{}');const accountsList=Object.values(accounts);if(accountsList.length>=50){showNotification('Maximum 50 accounts reached!','error');return;}const accountCode=generateAccountCode(username);gameState.username=username;gameState.accountCode=accountCode;document.getElementById('account-code-display').textContent=accountCode;document.getElementById('new-account-code').style.display='block';accounts[accountCode]={username:username,gameState:JSON.parse(JSON.stringify(gameState))};localStorage.setItem('caseclicker_accounts',JSON.stringify(accounts));showNotification('Account created! Copy your code!');setTimeout(()=>{startGame();},5000);}

function loginAccount(){const code=document.getElementById('login-code').value.trim();if(!code){showNotification('Enter your account code!','error');return;}const accounts=JSON.parse(localStorage.getItem('caseclicker_accounts')||'{}');if(accounts[code]){gameState=accounts[code].gameState;gameState.moneyPerSecond=calculateMPS();startGame();showNotification('Welcome back, '+gameState.username+'!');}else{showNotification('Invalid account code!','error');}}

function logout(){if(confirm('Logout?')){saveGame();location.reload();}}

function startGame(){document.getElementById('auth-screen').classList.remove('active');document.getElementById('game-container').style.display='block';document.getElementById('user-badge').textContent=gameState.username;renderCases();renderUpgrades();renderInventory();updateAllDisplays();updateLeaderboard();startJackpotTimer();generateBotPlayers();if(gameState.settings.theme){document.body.className=gameState.settings.theme==='default'?'':'theme-'+gameState.settings.theme;document.querySelectorAll('.theme-btn').forEach((btn,i)=>{const themes=['default','blue','green','purple','red'];btn.classList.toggle('active',themes[i]===gameState.settings.theme);});}}

function handleClick(event){gameState.money+=gameState.clickPower;gameState.totalClicks++;const clickButton=document.getElementById('click-button');const rect=clickButton.getBoundingClientRect();const floatingMoney=document.createElement('div');floatingMoney.className='floating-money';floatingMoney.textContent='+$'+gameState.clickPower.toFixed(2);floatingMoney.style.left=(event.clientX-rect.left-40)+'px';floatingMoney.style.top=(event.clientY-rect.top-20)+'px';floatingMoney.style.position='absolute';clickButton.appendChild(floatingMoney);setTimeout(()=>floatingMoney.remove(),1000);updateAllDisplays();}

function calculateMPS(){let mps=0;upgradesData.forEach(u=>{const count=gameState.upgrades[u.id]||0;mps+=u.baseIncome*count;});return mps;}

function updateAllDisplays(){document.getElementById('money-display').textContent='$'+formatMoney(gameState.money);document.getElementById('wallet').textContent='$'+formatMoney(gameState.money);document.getElementById('per-click').textContent='$'+gameState.clickPower.toFixed(2);document.getElementById('per-second').textContent='$'+formatMoney(gameState.moneyPerSecond);document.getElementById('total-clicks').textContent=gameState.totalClicks.toLocaleString();const invValue=gameState.inventory.reduce((s,i)=>s+i.price,0);document.getElementById('inv-value').textContent='$'+formatMoney(invValue);document.getElementById('inventory-total').textContent='$'+formatMoney(invValue);document.getElementById('inv-space').textContent=gameState.inventory.length+'/500';}

function formatMoney(num){if(num>=1e12)return(num/1e12).toFixed(2)+'T';if(num>=1e9)return(num/1e9).toFixed(2)+'B';if(num>=1e6)return(num/1e6).toFixed(2)+'M';if(num>=1e3)return(num/1e3).toFixed(2)+'K';return num.toFixed(2);}

function renderCases(){const grid=document.getElementById('cases-grid');grid.innerHTML='';cases.forEach(c=>{grid.innerHTML+=`<div class="card" onclick="openCaseDirectly(${c.id})"><div class="case-image">${c.icon}</div><div class="card-header"><div class="card-title">${c.name}</div></div><div class="card-content" style="font-size: 0.85rem; color: var(--text-dim);">${c.description}</div><div class="card-footer"><div class="card-price">$${c.price.toFixed(2)}</div></div></div>`;});}

function getWeightedRarity(){const random=Math.random()*100;if(random<0.26)return'exceedingly';if(random<0.90)return'covert';if(random<4.10)return'classified';if(random<20.08)return'restricted';return'milspec';}

function openCaseDirectly(id){const caseItem=cases.find(c=>c.id===id);if(gameState.money<caseItem.price){showNotification('Not enough money!','error');return;}if(gameState.inventory.length>=500){showNotification('Inventory full!','error');return;}gameState.money-=caseItem.price;updateAllDisplays();const rarity=getWeightedRarity();const possibleItems=caseItem.items.filter(i=>i.rarity===rarity);if(possibleItems.length===0){showNotification('Error: No items for rarity!','error');return;}const item=possibleItems[Math.floor(Math.random()*possibleItems.length)];const wear=wears[Math.floor(Math.random()*wears.length)];const price=Math.random()*(item.maxPrice-item.minPrice)+item.minPrice;let icon='🔫';if(item.type==='knife')icon='🔪';else if(item.type==='gloves')icon='🧤';gameState.inventory.push({name:item.name,price:price,rarity:item.rarity,type:item.type,wear:wear,icon:icon,id:Date.now()});renderInventory();updateAllDisplays();saveGame();showResultModal({fullName:item.name,wear:wear,price:price,type:item.type,icon:icon,rarity:rarity});}

function showResultModal(item){document.getElementById('result-icon').textContent=item.icon;document.getElementById('result-name').textContent=item.fullName;document.getElementById('result-wear').textContent=item.wear;document.getElementById('result-price').textContent='$'+item.price.toFixed(2);const rarityEl=document.getElementById('result-rarity');rarityEl.textContent=item.rarity.toUpperCase();const rarityColors={'consumer':'#b0c3d9','industrial':'#5e98d9','milspec':'#4b69ff','restricted':'#8847ff','classified':'#d32ce6','covert':'#eb4b4b','exceedingly':'#e4ae39','contraband':'#ffd700'};rarityEl.style.background=rarityColors[item.rarity]||'#666';rarityEl.style.color='white';rarityEl.style.padding='0.5rem 1rem';rarityEl.style.borderRadius='8px';document.getElementById('result-modal').classList.add('active');}

function closeResultModal(){document.getElementById('result-modal').classList.remove('active');}

function renderInventory(){const grid=document.getElementById('inventory-grid');grid.innerHTML='';if(gameState.inventory.length===0){grid.innerHTML='<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-dim); font-size: 1.2rem;">No items in inventory</div>';return;}gameState.inventory.forEach((item,index)=>{const itemDiv=document.createElement('div');itemDiv.className=`inventory-item rarity-${item.rarity}`;itemDiv.innerHTML=`<div class="item-icon">${item.icon}</div><div class="item-name" style="font-size: 0.85rem; margin-bottom: 0.3rem;">${item.name}</div><div class="item-wear" style="font-size: 0.75rem; color: var(--text-dim); margin-bottom: 0.5rem;">${item.wear||'N/A'}</div><div class="item-price">$${item.price.toFixed(2)}</div><button class="sell-btn" onclick="sellItem(${index})">Sell</button>`;grid.appendChild(itemDiv);});}

function sellItem(index){const item=gameState.inventory[index];gameState.money+=item.price;gameState.inventory.splice(index,1);renderInventory();updateAllDisplays();saveGame();showNotification('Sold for $'+item.price.toFixed(2)+'!');}

function filterInventory(type){document.querySelectorAll('.inventory-filters .filter-btn').forEach(btn=>btn.classList.remove('active'));event.target.classList.add('active');const items=document.querySelectorAll('.inventory-item');items.forEach(item=>{const price=parseFloat(item.querySelector('.item-price').textContent.replace('$',''));const itemName=item.querySelector('.item-name')?item.querySelector('.item-name').textContent:'';let show=false;if(type==='all')show=true;else if(type==='weapon'&&itemName.includes('|'))show=true;else if(type==='knife'&&(itemName.includes('Knife')||itemName.includes('Daggers')||itemName.includes('Karambit')||itemName.includes('Bayonet')))show=true;else if(type==='gloves'&&itemName.includes('Gloves'))show=true;else if(type==='low'&&price<10)show=true;else if(type==='medium'&&price>=10&&price<100)show=true;else if(type==='high'&&price>=100)show=true;item.style.display=show?'block':'none';});}

function renderUpgrades(){const container=document.getElementById('upgrades-container');container.innerHTML='';upgradesData.forEach(upgrade=>{const count=gameState.upgrades[upgrade.id]||0;const cost=Math.floor(upgrade.baseCost*Math.pow(upgrade.multiplier,count));const canAfford=gameState.money>=cost;const card=document.createElement('div');card.className='card upgrade-card'+(canAfford?'':' locked');card.onclick=()=>buyUpgrade(upgrade.id);card.innerHTML=`<div class="card-header"><div class="card-title">${upgrade.icon} ${upgrade.name}</div><div class="card-badge">×${count}</div></div><div class="card-content">${upgrade.desc}</div><div class="card-footer"><div class="card-price">$${formatMoney(cost)}</div><div class="card-stat">+$${formatMoney(upgrade.baseIncome)}/s</div></div>`;container.appendChild(card);});}

function buyUpgrade(upgradeId){const upgrade=upgradesData.find(u=>u.id===upgradeId);const count=gameState.upgrades[upgradeId]||0;const cost=Math.floor(upgrade.baseCost*Math.pow(upgrade.multiplier,count));if(gameState.money>=cost){gameState.money-=cost;gameState.upgrades[upgradeId]=count+1;gameState.moneyPerSecond=calculateMPS();updateAllDisplays();renderUpgrades();saveGame();showNotification('Purchased '+upgrade.name+'!');}}

function generateBotPlayers(){const botNames=['xXProXx','SniperKing','CasualGamer','LuckyShot','NoobMaster','Headshot99','SkinLord'];setInterval(()=>{if(Math.random()<0.15&&gameState.jackpot.players.length<15){const bot={name:botNames[Math.floor(Math.random()*botNames.length)]+Math.floor(Math.random()*1000),bet:Math.random()*200+20,isBot:true};gameState.jackpot.players.push(bot);gameState.jackpot.pot+=bot.bet;updateJackpot();}},2000);}

function startJackpotTimer(){setInterval(()=>{gameState.jackpot.timer--;if(gameState.jackpot.timer<=0){resolveJackpot();gameState.jackpot.timer=60;}document.getElementById('jackpot-timer').textContent=gameState.jackpot.timer;},1000);}

function enterJackpotWithMoney(){const amount=parseFloat(document.getElementById('jackpot-bet-amount').value);if(!amount||amount<=0){showNotification('Enter valid amount!','error');return;}if(amount>gameState.money){showNotification('Not enough money!','error');return;}gameState.money-=amount;gameState.jackpot.playerBet=amount;gameState.jackpot.playerName=gameState.username;const player={name:gameState.username,bet:amount,isBot:false};gameState.jackpot.players.push(player);gameState.jackpot.pot+=amount;updateAllDisplays();updateJackpot();showNotification('Entered jackpot with $'+amount.toFixed(2)+'!');}

function resolveJackpot(){if(gameState.jackpot.players.length===0)return;const totalPot=gameState.jackpot.pot;let winnerIndex=-1;const random=Math.random()*totalPot;let cumulative=0;for(let i=0;i<gameState.jackpot.players.length;i++){cumulative+=gameState.jackpot.players[i].bet;if(random<=cumulative){winnerIndex=i;break;}}if(winnerIndex>=0){const winner=gameState.jackpot.players[winnerIndex];if(!winner.isBot&&winner.name===gameState.username){gameState.money+=totalPot;showNotification('You won the jackpot! +$'+formatMoney(totalPot));updateAllDisplays();}else{showNotification(winner.name+' won the jackpot!');}}gameState.jackpot.players=[];gameState.jackpot.pot=0;gameState.jackpot.playerBet=0;gameState.jackpot.playerName=null;updateJackpot();saveGame();}

function updateJackpot(){document.getElementById('pot-value').textContent='$'+formatMoney(gameState.jackpot.pot);document.getElementById('player-count').textContent=gameState.jackpot.players.length;const playerBet=gameState.jackpot.playerBet||0;const chance=gameState.jackpot.pot>0?(playerBet/gameState.jackpot.pot*100).toFixed(2):0;document.getElementById('your-chance').textContent=chance+'%';document.getElementById('player-bet-value').textContent='$'+formatMoney(playerBet);const playersList=document.getElementById('players-list');playersList.innerHTML='';gameState.jackpot.players.forEach(player=>{const entry=document.createElement('div');entry.style.cssText='background: var(--bg-dark); padding: 0.8rem; border-radius: 5px; margin-bottom: 0.5rem; display: flex; justify-content: space-between;';entry.innerHTML=`<span>${player.name}</span><span style="color: var(--green); font-weight: 700;">$${player.bet.toFixed(2)}</span>`;playersList.appendChild(entry);});}

function flipCoin(side){const amount=parseFloat(document.getElementById('flip-amount').value);if(!amount||amount<=0){showNotification('Enter valid amount!','error');return;}if(amount>gameState.money){showNotification('Not enough money!','error');return;}gameState.money-=amount;updateAllDisplays();const coin=document.getElementById('coin');coin.style.animation='none';setTimeout(()=>{coin.style.animation='spin 1s ease-in-out';},10);setTimeout(()=>{const win=Math.random()<0.5;if(win){const winAmount=amount*1.9;gameState.money+=winAmount;showNotification('You won $'+winAmount.toFixed(2)+'!');}else{showNotification('You lost!','error');}updateAllDisplays();saveGame();},1000);}

function toggleSetting(element,setting){element.classList.toggle('active');gameState.settings[setting]=element.classList.contains('active');saveGame();}

function changeTheme(theme,event){document.body.className=theme==='default'?'':'theme-'+theme;document.querySelectorAll('.theme-btn').forEach(btn=>btn.classList.remove('active'));if(event&&event.target)event.target.classList.add('active');gameState.settings.theme=theme;saveGame();}

function clearSave(){if(confirm('Delete all progress?')){localStorage.removeItem('caseclicker_accounts');location.reload();}}

function switchTab(tab){document.querySelectorAll('.tab-content').forEach(t=>t.classList.remove('active'));document.querySelectorAll('.nav-btn').forEach(btn=>btn.classList.remove('active'));document.getElementById(tab+'-tab').classList.add('active');const targetBtn=Array.from(document.querySelectorAll('.nav-btn')).find(btn=>btn.textContent.toLowerCase().includes(tab.toLowerCase()));if(targetBtn)targetBtn.classList.add('active');}

function saveGame(){if(gameState.settings.autosave&&gameState.accountCode){const accounts=JSON.parse(localStorage.getItem('caseclicker_accounts')||'{}');accounts[gameState.accountCode]={username:gameState.username,gameState:JSON.parse(JSON.stringify(gameState))};localStorage.setItem('caseclicker_accounts',JSON.stringify(accounts));}}

setInterval(()=>{if(gameState.settings.autosave&&gameState.accountCode){saveGame();}},30000);

setInterval(()=>{gameState.money+=gameState.moneyPerSecond/10;updateAllDisplays();},100);

setInterval(()=>{renderUpgrades();},2000);

setInterval(()=>{if(document.getElementById('leaderboard-tab').classList.contains('active')){updateLeaderboard();}},5000);

function showNotification(message,type='success'){const notification=document.createElement('div');notification.className='notification'+(type==='error'?' error':'');notification.textContent=message;document.body.appendChild(notification);setTimeout(()=>notification.remove(),3000);}

function updateLeaderboard(){const accounts=JSON.parse(localStorage.getItem('caseclicker_accounts')||'{}');const leaderboardData=[];for(const[code,data]of Object.entries(accounts)){leaderboardData.push({username:data.username||'Unknown',money:data.gameState.money||0,code:code});}leaderboardData.sort((a,b)=>b.money-a.money);const top20=leaderboardData.slice(0,20);const leaderboardList=document.getElementById('leaderboard-list');if(!leaderboardList)return;leaderboardList.innerHTML='';if(top20.length===0){leaderboardList.innerHTML='<div style="text-align: center; padding: 2rem; color: var(--text-dim);">No players yet</div>';return;}top20.forEach((player,index)=>{const rank=index+1;const isCurrentPlayer=player.code===gameState.accountCode;const entry=document.createElement('div');entry.className='leaderboard-entry'+(rank===1?' rank-1':rank===2?' rank-2':rank===3?' rank-3':'')+(isCurrentPlayer?' current-player':'');let rankDisplay=rank;if(rank===1)rankDisplay='🥇';else if(rank===2)rankDisplay='🥈';else if(rank===3)rankDisplay='🥉';entry.innerHTML=`<div class="leaderboard-rank">${rankDisplay}</div><div class="leaderboard-name">${player.username}${isCurrentPlayer?' (You)':''}</div><div class="leaderboard-money">$${formatMoney(player.money)}</div>`;leaderboardList.appendChild(entry);});}

function refreshLeaderboard(){updateLeaderboard();showNotification('Leaderboard refreshed!');}

window.addEventListener('load',()=>{setTimeout(()=>{document.getElementById('splash-screen').style.display='none';document.getElementById('auth-screen').classList.add('active');},3000);});

window.addEventListener('beforeunload',saveGame);
