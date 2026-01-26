// ============================================
// STOCK SANDBOX PRO - Enhanced Edition
// ============================================

const STARTING_CASH = 100;
const AUTO_SAVE_INTERVAL = 30000; // 30 seconds

// Comprehensive theme collection
const THEMES = [
  {
    name: 'Cyberpunk',
    colors: {
      '--bg': '#0a0e17',
      '--bg-secondary': '#0f1419',
      '--panel': 'rgba(16,20,32,0.95)',
      '--panel-hover': 'rgba(20,26,40,0.98)',
      '--accent': '#00e5ff',
      '--pos': '#00ff88',
      '--neg': '#ff3b5c',
      '--text': '#e8edf2',
      '--text-dim': '#a8b2bd',
      '--muted': '#7a8a99',
      '--border': 'rgba(255,255,255,0.08)'
    }
  },
  {
    name: 'Synthwave',
    colors: {
      '--bg': '#1a0c2e',
      '--bg-secondary': '#2d0f50',
      '--panel': 'rgba(45,15,80,0.95)',
      '--panel-hover': 'rgba(55,20,95,0.98)',
      '--accent': '#ff00ff',
      '--pos': '#00ffff',
      '--neg': '#ff006e',
      '--text': '#f0e6ff',
      '--text-dim': '#c8b4db',
      '--muted': '#b39ddb',
      '--border': 'rgba(255,0,255,0.15)'
    }
  },
  {
    name: 'Forest',
    colors: {
      '--bg': '#0d1f0f',
      '--bg-secondary': '#12230e',
      '--panel': 'rgba(18,35,20,0.95)',
      '--panel-hover': 'rgba(25,45,28,0.98)',
      '--accent': '#4ade80',
      '--pos': '#86efac',
      '--neg': '#f87171',
      '--text': '#e8f5e9',
      '--text-dim': '#c4e6c8',
      '--muted': '#81c784',
      '--border': 'rgba(74,222,128,0.15)'
    }
  },
  {
    name: 'Ocean',
    colors: {
      '--bg': '#041c2c',
      '--bg-secondary': '#082337',
      '--panel': 'rgba(8,35,55,0.95)',
      '--panel-hover': 'rgba(12,45,70,0.98)',
      '--accent': '#06b6d4',
      '--pos': '#22d3ee',
      '--neg': '#f43f5e',
      '--text': '#e0f2fe',
      '--text-dim': '#bae6fd',
      '--muted': '#67e8f9',
      '--border': 'rgba(6,182,212,0.15)'
    }
  },
  {
    name: 'Sunset',
    colors: {
      '--bg': '#2c1810',
      '--bg-secondary': '#3c1e12',
      '--panel': 'rgba(60,30,18,0.95)',
      '--panel-hover': 'rgba(75,40,25,0.98)',
      '--accent': '#fb923c',
      '--pos': '#fbbf24',
      '--neg': '#ef4444',
      '--text': '#fef3c7',
      '--text-dim': '#fde68a',
      '--muted': '#fed7aa',
      '--border': 'rgba(251,146,60,0.15)'
    }
  },
  {
    name: 'Midnight',
    colors: {
      '--bg': '#0c0c14',
      '--bg-secondary': '#12121c',
      '--panel': 'rgba(18,18,28,0.95)',
      '--panel-hover': 'rgba(25,25,38,0.98)',
      '--accent': '#818cf8',
      '--pos': '#34d399',
      '--neg': '#f472b6',
      '--text': '#e0e7ff',
      '--text-dim': '#c7d2fe',
      '--muted': '#a5b4fc',
      '--border': 'rgba(129,140,248,0.15)'
    }
  },
  {
    name: 'Crimson',
    colors: {
      '--bg': '#1a0a0e',
      '--bg-secondary': '#280f14',
      '--panel': 'rgba(40,15,20,0.95)',
      '--panel-hover': 'rgba(55,20,28,0.98)',
      '--accent': '#f43f5e',
      '--pos': '#fb7185',
      '--neg': '#dc2626',
      '--text': '#ffe4e6',
      '--text-dim': '#fecdd3',
      '--muted': '#fda4af',
      '--border': 'rgba(244,63,94,0.15)'
    }
  },
  {
    name: 'Emerald',
    colors: {
      '--bg': '#051a0f',
      '--bg-secondary': '#0a2314',
      '--panel': 'rgba(10,35,20,0.95)',
      '--panel-hover': 'rgba(15,45,28,0.98)',
      '--accent': '#10b981',
      '--pos': '#34d399',
      '--neg': '#f87171',
      '--text': '#d1fae5',
      '--text-dim': '#a7f3d0',
      '--muted': '#6ee7b7',
      '--border': 'rgba(16,185,129,0.15)'
    }
  },
  {
    name: 'Gold Rush',
    colors: {
      '--bg': '#1a1406',
      '--bg-secondary': '#231908',
      '--panel': 'rgba(35,25,10,0.95)',
      '--panel-hover': 'rgba(45,35,15,0.98)',
      '--accent': '#fbbf24',
      '--pos': '#fcd34d',
      '--neg': '#ef4444',
      '--text': '#fef3c7',
      '--text-dim': '#fde68a',
      '--muted': '#fed7aa',
      '--border': 'rgba(251,191,36,0.15)'
    }
  },
  {
    name: 'Neon Green',
    colors: {
      '--bg': '#0a1a0a',
      '--bg-secondary': '#0f230f',
      '--panel': 'rgba(15,35,15,0.95)',
      '--panel-hover': 'rgba(20,45,20,0.98)',
      '--accent': '#00ff00',
      '--pos': '#7fff00',
      '--neg': '#ff1744',
      '--text': '#e0ffe0',
      '--text-dim': '#c8ffc8',
      '--muted': '#90ee90',
      '--border': 'rgba(0,255,0,0.15)'
    }
  }
];

// Comprehensive stock list (250+ stocks)
const STOCKS = [
  // Crypto
  ['BTC-USD','Bitcoin'],['ETH-USD','Ethereum'],['LTC-USD','Litecoin'],['XRP-USD','Ripple'],['ADA-USD','Cardano'],['SOL-USD','Solana'],['DOGE-USD','Dogecoin'],['AVAX-USD','Avalanche'],['MATIC-USD','Polygon'],['LINK-USD','Chainlink'],['DOT-USD','Polkadot'],['SHIB-USD','Shiba Inu'],['UNI-USD','Uniswap'],['ATOM-USD','Cosmos'],['APT-USD','Aptos'],
  // Mega-cap Tech
  ['AAPL','Apple Inc.'],['MSFT','Microsoft Corp.'],['GOOGL','Alphabet Inc.'],['AMZN','Amazon.com Inc.'],['NVDA','NVIDIA Corp.'],['META','Meta Platforms Inc.'],['TSMC','Taiwan Semiconductor'],
  // Large-cap Tech
  ['TSLA','Tesla Inc.'],['INTC','Intel Corp.'],['AMD','Advanced Micro Devices'],['ORCL','Oracle Corp.'],['CSCO','Cisco Systems'],['IBM','IBM Corp.'],['CRM','Salesforce Inc.'],['ADBE','Adobe Inc.'],['PYPL','PayPal Inc.'],['SHOP','Shopify Inc.'],
  // AI & Cloud
  ['PLTR','Palantir Technologies'],['AI','C3.ai Inc.'],['SNOW','Snowflake Inc.'],['WDAY','Workday Inc.'],['DDOG','Datadog Inc.'],['MDB','MongoDB Inc.'],['NET','Cloudflare Inc.'],
  // Semiconductors
  ['QCOM','Qualcomm Inc.'],['BROADCOM','Broadcom Inc.'],['MU','Micron Technology'],['NXPI','NXP Semiconductors'],['ASML','ASML Holding NV'],['MCHP','Microchip Technology'],['AVGO','Broadcom Inc.'],['TXN','Texas Instruments'],['KLAC','KLA Corp.'],
  // Streaming & Media
  ['NFLX','Netflix Inc.'],['DIS','The Walt Disney Co.'],['ROKU','Roku Inc.'],['SPOT','Spotify Technology'],['PARA','Paramount Global'],['WBD','Warner Bros. Discovery'],
  // Gaming
  ['NTDOY','Nintendo Co Ltd.'],['TTWO','Take-Two Interactive'],['ATVI','Activision Blizzard'],['EA','Electronic Arts Inc.'],['RBLX','Roblox Corp.'],['U','Unity Software'],['GME','GameStop Corp.'],
  // Meme Stocks
  ['AMC','AMC Entertainment'],['BB','BlackBerry Limited'],['NOK','Nokia Corp.'],['BBBY','Bed Bath & Beyond'],['EXPR','Express Inc.'],
  // EV & Clean Energy
  ['RIVN','Rivian Automotive'],['LCID','Lucid Group Inc.'],['NIO','NIO Inc.'],['XPEV','XPeng Inc.'],['F','Ford Motor Co.'],['GM','General Motors'],['PLUG','Plug Power Inc.'],['ENPH','Enphase Energy'],['SEDG','SolarEdge Technologies'],
  // Fintech & Payments
  ['SQ','Block Inc.'],['MSTR','MicroStrategy Inc.'],['COIN','Coinbase Global'],['FIS','Fidelity National'],['FISV','Fiserv Inc.'],['V','Visa Inc.'],['MA','Mastercard Inc.'],['HOOD','Robinhood Markets'],['AFRM','Affirm Holdings'],['UPST','Upstart Holdings'],
  // Financial Services
  ['JPM','JPMorgan Chase & Co.'],['BAC','Bank of America Corp.'],['WFC','Wells Fargo & Co.'],['GS','Goldman Sachs Group'],['MS','Morgan Stanley'],['BLK','BlackRock Inc.'],['SCHW','Charles Schwab Inc.'],['BX','Blackstone Inc.'],['KKR','KKR & Co.'],['AXP','American Express Co.'],['C','Citigroup Inc.'],
  // Insurance
  ['BRK.B','Berkshire Hathaway Inc.'],['ACGL','Arch Capital Group'],['CME','CME Group Inc.'],['PRU','Prudential Financial'],['MET','MetLife Inc.'],
  // Healthcare & Pharma
  ['JNJ','Johnson & Johnson'],['PFE','Pfizer Inc.'],['MRNA','Moderna Inc.'],['LLY','Eli Lilly and Co.'],['UNH','UnitedHealth Group'],['ABBV','AbbVie Inc.'],['AMGN','Amgen Inc.'],['TMO','Thermo Fisher Scientific'],['BDX','Becton Dickinson'],['ABT','Abbott Laboratories'],['ISRG','Intuitive Surgical'],['VEEV','Veeva Systems'],['REGN','Regeneron Pharma'],['GILD','Gilead Sciences'],['VRTX','Vertex Pharma'],
  // Biotech
  ['BNTX','BioNTech SE'],['CRSP','CRISPR Therapeutics'],['EDIT','Editas Medicine'],['NTLA','Intellia Therapeutics'],['BEAM','Beam Therapeutics'],
  // Consumer Discretionary
  ['WMT','Walmart Inc.'],['COST','Costco Wholesale'],['TGT','Target Corp.'],['MCD','McDonald\'s Corp.'],['SBUX','Starbucks Corp.'],['NKE','Nike Inc.'],['LULU','Lululemon Athletica'],['TJX','TJX Companies'],['HD','The Home Depot'],['LOW','Lowe\'s Companies'],
  // Food & Beverage
  ['PG','Procter & Gamble'],['KO','The Coca-Cola Co.'],['PEP','PepsiCo Inc.'],['MNST','Monster Beverage'],['KDP','Keurig Dr Pepper'],['GIS','General Mills'],['K','Kellogg Company'],
  // Restaurants
  ['CMG','Chipotle Mexican Grill'],['YUM','Yum! Brands'],['QSR','Restaurant Brands'],['DPZ','Domino\'s Pizza'],['WING','Wingstop Inc.'],
  // E-commerce & Retail
  ['BABA','Alibaba Group'],['JD','JD.com Inc.'],['PDD','Pinduoduo Inc.'],['MELI','MercadoLibre Inc.'],['ETSY','Etsy Inc.'],['W','Wayfair Inc.'],['CHWY','Chewy Inc.'],
  // Travel & Hospitality
  ['ABNB','Airbnb Inc.'],['BKNG','Booking Holdings'],['EXPE','Expedia Group'],['MAR','Marriott International'],['HLT','Hilton Worldwide'],['UAL','United Airlines'],['DAL','Delta Air Lines'],['LUV','Southwest Airlines'],['AAL','American Airlines'],
  // Logistics & Transportation
  ['FDX','FedEx Corp.'],['UPS','United Parcel Service'],['UBER','Uber Technologies'],['LYFT','Lyft Inc.'],['DASH','DoorDash Inc.'],
  // Industrial & Aerospace
  ['CAT','Caterpillar Inc.'],['BA','The Boeing Co.'],['GE','General Electric'],['HON','Honeywell International'],['LMT','Lockheed Martin'],['RTX','Raytheon Technologies'],['GD','General Dynamics'],['NOC','Northrop Grumman'],['DE','Deere & Company'],
  // Energy
  ['XOM','Exxon Mobil Corp.'],['CVX','Chevron Corp.'],['COP','ConocoPhillips'],['SLB','Schlumberger NV'],['EOG','EOG Resources'],['MPC','Marathon Petroleum'],['PSX','Phillips 66'],['VLO','Valero Energy'],
  // Renewables
  ['NEE','NextEra Energy'],['FSLR','First Solar Inc.'],['RUN','Sunrun Inc.'],['NOVA','Sunnova Energy'],
  // Real Estate & REIT
  ['WELL','Welltower Inc.'],['PLD','Prologis Inc.'],['AMT','American Tower Corp.'],['CCI','Crown Castle Inc.'],['EQIX','Equinix Inc.'],['DLR','Digital Realty Trust'],['SPG','Simon Property Group'],['O','Realty Income Corp.'],
  // Materials & Metals
  ['LIN','Linde PLC'],['APD','Air Products & Chemicals'],['FCX','Freeport-McMoRan'],['NEM','Newmont Corp.'],['GOLD','Barrick Gold Corp.'],
  // Telecom
  ['T','AT&T Inc.'],['VZ','Verizon Communications'],['TMUS','T-Mobile US Inc.'],['CMCSA','Comcast Corp.'],['CHTR','Charter Communications'],
  // Cybersecurity
  ['CRWD','CrowdStrike Holdings'],['ZS','Zscaler Inc.'],['PANW','Palo Alto Networks'],['FTNT','Fortinet Inc.'],['OKTA','Okta Inc.'],['CYBR','CyberArk Software'],
  // Software & SaaS
  ['BILL','Bill.com Holdings'],['ZM','Zoom Video'],['DOCU','DocuSign Inc.'],['TEAM','Atlassian Corp.'],['TWLO','Twilio Inc.'],['HUBS','HubSpot Inc.'],['ZEN','Zendesk Inc.'],
  // Semiconductors Equipment
  ['AMAT','Applied Materials'],['LRCX','Lam Research'],['SNPS','Synopsys Inc.'],['CDNS','Cadence Design'],
  // Retail Tech
  ['SOFI','SoFi Technologies'],['LC','LendingClub Corp.'],
  // Luxury & Fashion
  ['LVMUY','LVMH Moët Hennessy'],['ADDYY','Adidas AG'],['TPR','Tapestry Inc.'],['RL','Ralph Lauren Corp.'],
  // International
  ['TSM','Taiwan Semiconductor'],['SAP','SAP SE'],['NVO','Novo Nordisk'],['SONY','Sony Group Corp.'],['TM','Toyota Motor Corp.'],['HMC','Honda Motor Co.'],['TCEHY','Tencent Holdings'],
  // Commodities & Gold
  ['GLD','SPDR Gold Trust'],['SLV','iShares Silver Trust'],['USO','United States Oil Fund'],
  // Volatility & Special
  ['UVXY','ProShares Ultra VIX'],['SQQQ','ProShares UltraPro Short'],['TQQQ','ProShares UltraPro QQQ'],
  // New Tech
  ['ARM','Arm Holdings'],['IONQ','IonQ Inc.'],['RGTI','Rigetti Computing'],['QUBT','Quantum Computing'],
  // Space & Innovation
  ['SPCE','Virgin Galactic'],['RKLB','Rocket Lab USA'],['ASTS','AST SpaceMobile']
];

// Base prices for stocks
const BASE_PRICES = {
  // Crypto
  'BTC-USD': 42000, 'ETH-USD': 2400, 'LTC-USD': 120, 'XRP-USD': 2.5, 'ADA-USD': 1.2, 'SOL-USD': 195, 'DOGE-USD': 0.38, 'AVAX-USD': 36, 'MATIC-USD': 0.95, 'LINK-USD': 28, 'DOT-USD': 8.5, 'SHIB-USD': 0.000025, 'UNI-USD': 12, 'ATOM-USD': 11, 'APT-USD': 9.5,
  // Mega Tech
  'AAPL': 230, 'MSFT': 415, 'GOOGL': 155, 'AMZN': 195, 'NVDA': 875, 'META': 560, 'TSMC': 145,
  // Large Tech
  'TSLA': 275, 'INTC': 32, 'AMD': 225, 'ORCL': 145, 'CSCO': 52, 'IBM': 185, 'CRM': 285, 'ADBE': 620, 'PYPL': 72, 'SHOP': 815,
  // AI & Cloud
  'PLTR': 28, 'AI': 32, 'SNOW': 220, 'WDAY': 285, 'DDOG': 165, 'MDB': 385, 'NET': 95,
  // Semiconductors
  'QCOM': 195, 'BROADCOM': 730, 'MU': 95, 'NXPI': 265, 'ASML': 625, 'MCHP': 105, 'AVGO': 730, 'TXN': 185, 'KLAC': 685,
  // Streaming
  'NFLX': 280, 'DIS': 98, 'ROKU': 72, 'SPOT': 285, 'PARA': 12, 'WBD': 8.5,
  // Gaming
  'NTDOY': 52, 'TTWO': 192, 'ATVI': 82, 'EA': 145, 'RBLX': 42, 'U': 38, 'GME': 28,
  // Meme Stocks
  'AMC': 6.5, 'BB': 4.2, 'NOK': 3.8, 'BBBY': 0.85, 'EXPR': 1.2,
  // EV & Clean
  'RIVN': 18, 'LCID': 4.5, 'NIO': 8.5, 'XPEV': 12, 'F': 12.5, 'GM': 38, 'PLUG': 8, 'ENPH': 125, 'SEDG': 85,
  // Fintech
  'SQ': 185, 'MSTR': 585, 'COIN': 105, 'FIS': 115, 'FISV': 125, 'V': 290, 'MA': 515, 'HOOD': 18, 'AFRM': 35, 'UPST': 45,
  // Finance
  'JPM': 225, 'BAC': 35, 'WFC': 48, 'GS': 385, 'MS': 105, 'BLK': 925, 'SCHW': 85, 'BX': 145, 'KKR': 135, 'AXP': 215, 'C': 62,
  // Insurance
  'BRK.B': 410, 'ACGL': 165, 'CME': 195, 'PRU': 125, 'MET': 78,
  // Healthcare
  'JNJ': 155, 'PFE': 30, 'MRNA': 185, 'LLY': 795, 'UNH': 505, 'ABBV': 215, 'AMGN': 285, 'TMO': 385, 'BDX': 265, 'ABT': 125, 'ISRG': 395, 'VEEV': 125, 'REGN': 685, 'GILD': 95, 'VRTX': 385,
  // Biotech
  'BNTX': 105, 'CRSP': 68, 'EDIT': 28, 'NTLA': 42, 'BEAM': 35,
  // Consumer
  'WMT': 92, 'COST': 725, 'TGT': 92, 'MCD': 295, 'SBUX': 98, 'NKE': 78, 'LULU': 485, 'TJX': 105, 'HD': 430, 'LOW': 105,
  // Food
  'PG': 168, 'KO': 65, 'PEP': 185, 'MNST': 58, 'KDP': 38, 'GIS': 72, 'K': 62,
  // Restaurants
  'CMG': 2085, 'YUM': 145, 'QSR': 78, 'DPZ': 485, 'WING': 285,
  // E-commerce
  'BABA': 92, 'JD': 28, 'PDD': 18, 'MELI': 1685, 'ETSY': 78, 'W': 58, 'CHWY': 65,
  // Travel
  'ABNB': 145, 'BKNG': 3285, 'EXPE': 145, 'MAR': 245, 'HLT': 215, 'UAL': 65, 'DAL': 48, 'LUV': 32, 'AAL': 22,
  // Logistics
  'FDX': 285, 'UPS': 195, 'UBER': 82, 'LYFT': 18, 'DASH': 125,
  // Industrial
  'CAT': 285, 'BA': 185, 'GE': 115, 'HON': 215, 'LMT': 485, 'RTX': 115, 'GD': 285, 'NOC': 535, 'DE': 385,
  // Energy
  'XOM': 115, 'CVX': 165, 'COP': 135, 'SLB': 52, 'EOG': 135, 'MPC': 125, 'PSX': 125, 'VLO': 145,
  // Renewables
  'NEE': 95, 'FSLR': 185, 'RUN': 18, 'NOVA': 12,
  // Real Estate
  'WELL': 95, 'PLD': 165, 'AMT': 285, 'CCI': 175, 'EQIX': 885, 'DLR': 195, 'SPG': 165, 'O': 62,
  // Materials
  'LIN': 425, 'APD': 325, 'FCX': 48, 'NEM': 42, 'GOLD': 18,
  // Telecom
  'T': 22, 'VZ': 45, 'TMUS': 185, 'CMCSA': 48, 'CHTR': 382,
  // Cybersecurity
  'CRWD': 385, 'ZS': 185, 'PANW': 385, 'FTNT': 68, 'OKTA': 88, 'CYBR': 285,
  // Software
  'BILL': 215, 'ZM': 78, 'DOCU': 62, 'TEAM': 215, 'TWLO': 68, 'HUBS': 585, 'ZEN': 95,
  // Semi Equipment
  'AMAT': 185, 'LRCX': 885, 'SNPS': 585, 'CDNS': 285,
  // Retail Tech
  'SOFI': 8.5, 'LC': 12,
  // Luxury
  'LVMUY': 185, 'ADDYY': 125, 'TPR': 45, 'RL': 185,
  // International
  'TSM': 145, 'SAP': 205, 'NVO': 98, 'SONY': 98, 'TM': 185, 'HMC': 32, 'TCEHY': 48,
  // Commodities
  'GLD': 195, 'SLV': 22, 'USO': 78,
  // Volatility
  'UVXY': 8.5, 'SQQQ': 12, 'TQQQ': 68,
  // New Tech
  'ARM': 145, 'IONQ': 12, 'RGTI': 4.5, 'QUBT': 3.2,
  // Space
  'SPCE': 2.8, 'RKLB': 18, 'ASTS': 28
};

// ============================================
// STATE MANAGEMENT
// ============================================
let state = {
  cash: STARTING_CASH,
  holdings: {},
  prices: {},
  history: {},
  refreshInterval: 10000,
  pricetrends: {},
  portfolioHistory: [],
  allTimeHigh: STARTING_CASH,
  lastDayValue: STARTING_CASH,
  watchlist: [],
  theme: 'Cyberpunk',
  volatility: 'medium',
  trendBias: 'neutral',
  crashFrequency: 'never',
  recoverySpeed: 'normal',
  retailInfluence: false,
  inCrash: false,
  crashTimer: 0,
  recoveryProgress: 0,
  sessions: 1,
  lastSaved: null,
  currentFilter: 'all'
};

let refreshTimer = null;
let autoSaveTimer = null;
let bgAnimationFrame = null;

// ============================================
// UTILITY FUNCTIONS
// ============================================
const $ = (id) => document.getElementById(id);

function formatMoney(v) {
  return new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2
  }).format(v);
}

function formatMoneyCompact(v) {
  const absV = Math.abs(v);
  
  if (absV < 1000) {
    return formatMoney(v);
  }
  
  if (absV < 1000000) {
    return formatMoney(v / 1000) + 'K';
  }
  
  if (absV < 1000000000) {
    return formatMoney(v / 1000000) + 'M';
  }
  
  if (absV < 1000000000000) {
    return formatMoney(v / 1000000000) + 'B';
  }
  
  return formatMoney(v / 1000000000000) + 'T';
}

function animateMoneyChange(element, newValue) {
  if (!element || !element.textContent) return;
  const oldValue = element.textContent;
  if (oldValue === newValue) return;
  element.classList.add('money-animating');
  setTimeout(() => {
    element.textContent = newValue;
    element.classList.remove('money-animating');
  }, 300);
}

function showToast(msg, ms = 3000) {
  const toast = $('toast');
  if (!toast) return;
  
  const msgEl = toast.querySelector('.toast-message');
  if (msgEl) msgEl.textContent = msg;
  
  toast.style.display = 'flex';
  setTimeout(() => toast.style.display = 'none', ms);
}

function showSaveIndicator(status) {
  const indicator = $('saveIndicator');
  if (!indicator) return;
  
  const text = $('saveText');
  
  indicator.className = 'save-indicator ' + status;
  indicator.style.display = 'flex';
  
  if (status === 'saving') {
    if (text) text.textContent = 'Saving...';
  } else if (status === 'saved') {
    if (text) text.textContent = 'Auto-saved';
  }
  
  setTimeout(() => {
    indicator.style.display = 'none';
  }, 2000);
}

// ============================================
// LOCAL SAVE SYSTEM
// ============================================
function save() {
  try {
    showSaveIndicator('saving');
    state.lastSaved = new Date().toISOString();
    localStorage.setItem('stockSandboxPro_save', JSON.stringify(state));
    setTimeout(() => showSaveIndicator('saved'), 300);
    updateSaveInfo();
  } catch (e) {
    console.error('Save error:', e);
    showToast('⚠️ Failed to save! Storage may be full.', 5000);
  }
}

function load() {
  try {
    const saved = localStorage.getItem('stockSandboxPro_save');
    if (saved) {
      const loadedState = JSON.parse(saved);
      // Merge loaded state with defaults to handle new properties
      state = { ...state, ...loadedState };
      state.sessions = (state.sessions || 0) + 1;
      showToast('💾 Save loaded! Welcome back!', 3000);
      return true;
    }
    return false;
  } catch (e) {
    console.error('Load error:', e);
    showToast('⚠️ Failed to load save data. Starting fresh.', 5000);
    return false;
  }
}

function clearSave() {
  if (!confirm('⚠️ Are you sure you want to delete all save data? This cannot be undone!')) return;
  try {
    localStorage.removeItem('stockSandboxPro_save');
    showToast('🗑️ Save data cleared! Reloading...', 2000);
    setTimeout(() => location.reload(), 2000);
  } catch (e) {
    console.error('Clear save error:', e);
  }
}

function updateSaveInfo() {
  const lastSavedEl = $('lastSavedTime');
  const sessionsEl = $('totalSessions');
  
  if (lastSavedEl && state.lastSaved) {
    const date = new Date(state.lastSaved);
    lastSavedEl.textContent = date.toLocaleString();
  }
  
  if (sessionsEl) {
    sessionsEl.textContent = state.sessions || 1;
  }
}

function startAutoSave() {
  if (autoSaveTimer) clearInterval(autoSaveTimer);
  autoSaveTimer = setInterval(() => {
    save();
  }, AUTO_SAVE_INTERVAL);
}

function stopAutoSave() {
  if (autoSaveTimer) clearInterval(autoSaveTimer);
}

// ============================================
// THEME SYSTEM
// ============================================
function applyTheme(themeName) {
  const theme = THEMES.find(t => t.name === themeName);
  if (!theme) return;
  
  state.theme = themeName;
  
  for (const [key, value] of Object.entries(theme.colors)) {
    document.documentElement.style.setProperty(key, value);
  }
  
  document.querySelectorAll('.theme-card').forEach(card => {
    card.classList.toggle('active', card.dataset.theme === themeName);
  });
  
  save();
}

function renderThemeGrid() {
  const grid = $('themeGrid');
  if (!grid) return;
  grid.innerHTML = '';
  
  THEMES.forEach(theme => {
    const card = document.createElement('div');
    card.className = 'theme-card';
    card.dataset.theme = theme.name;
    if (state.theme === theme.name) card.classList.add('active');
    
    const preview = document.createElement('div');
    preview.className = 'theme-preview';
    preview.style.background = `linear-gradient(135deg, ${theme.colors['--accent']}, ${theme.colors['--pos']})`;
    
    const name = document.createElement('div');
    name.className = 'theme-name';
    name.textContent = theme.name;
    
    card.appendChild(preview);
    card.appendChild(name);
    card.onclick = () => applyTheme(theme.name);
    
    grid.appendChild(card);
  });
}

// ============================================
// MARKET SIMULATION ENGINE
// ============================================
function getVolatilityMultiplier() {
  switch (state.volatility) {
    case 'low': return 0.3;
    case 'medium': return 1.0;
    case 'high': return 2.0;
    case 'insane': return 4.0;
    case 'irresponsible': return 8.0;
    default: return 1.0;
  }
}

function getTrendBiasValue() {
  switch (state.trendBias) {
    case 'down-only': return -0.01;
    case 'bearish': return -0.002;
    case 'neutral': return 0;
    case 'bullish': return 0.002;
    case 'up-only': return 0.01;
    default: return 0;
  }
}

function getCrashProbability() {
  switch (state.crashFrequency) {
    case 'never': return 0;
    case 'very-rare': return 0.0001;
    case 'rare': return 0.0005;
    case 'occasional': return 0.001;
    case 'frequent': return 0.003;
    case 'very-frequent': return 0.008;
    default: return 0;
  }
}

function getRecoverySpeed() {
  switch (state.recoverySpeed) {
    case 'incredibly-slow': return 0.001;
    case 'slow': return 0.004;
    case 'normal': return 0.008;
    case 'fast': return 0.018;
    case 'incredibly-fast': return 0.04;
    case 'almost-instant': return 0.08;
    default: return 0.008;
  }
}

async function fetchPrices() {
  const out = {};
  const volatilityMult = getVolatilityMultiplier();
  const trendBias = getTrendBiasValue();
  const crashProb = getCrashProbability();
  const recoverySpeed = getRecoverySpeed();
  
  // Check for market crash
  if (!state.inCrash && Math.random() < crashProb) {
    state.inCrash = true;
    state.crashTimer = 0;
    showToast('⚠️ MARKET CRASH! 📉', 4000);
    updateMarketTrendBadge();
  }
  
  // Handle crash recovery
  if (state.inCrash) {
    state.crashTimer++;
    state.recoveryProgress += recoverySpeed;
    if (state.recoveryProgress >= 1) {
      state.inCrash = false;
      state.recoveryProgress = 0;
      showToast('📈 Market recovering...', 3000);
      updateMarketTrendBadge();
    }
  }
  
  STOCKS.forEach(s => {
    const sym = s[0];
    const basePrice = BASE_PRICES[sym] || 50;
    
    if (!state.pricetrends[sym]) {
      state.pricetrends[sym] = 0;
    }
    
    let h = state.history[sym] || [];
    
    if (h.length === 0) {
      h = [Number(basePrice.toFixed(2))];
    } else {
      const lastPrice = h[h.length - 1];
      
      // Mean reversion
      state.pricetrends[sym] *= 0.7;
      
      // Base volatility
      let baseSwing = (Math.random() - 0.5) * 0.1 * volatilityMult;
      
      // Apply trend bias
      baseSwing += trendBias;
      
      // Force direction for extreme modes
      if (state.trendBias === 'down-only' && baseSwing > 0) {
        baseSwing = -Math.abs(baseSwing);
      } else if (state.trendBias === 'up-only' && baseSwing < 0) {
        baseSwing = Math.abs(baseSwing);
      }
      
      // Crash effect
      if (state.inCrash) {
        const crashSeverity = Math.max(0, 1 - state.recoveryProgress);
        baseSwing -= 0.05 * crashSeverity;
      }
      
      // Retail trader influence
      if (state.retailInfluence) {
        const retailNoise = (Math.random() - 0.5) * 0.02;
        baseSwing += retailNoise;
      }
      
      const changePercent = state.pricetrends[sym] + baseSwing;
      let newPrice = lastPrice * (1 + changePercent);
      
      // Prevent prices from going too low
      const minPrice = basePrice * 0.01;
      newPrice = Math.max(minPrice, newPrice);
      
      state.pricetrends[sym] = changePercent * 0.5;
      
      h.push(Number(Math.max(0.01, newPrice).toFixed(2)));
      while (h.length > 60) h.shift();
    }
    
    state.history[sym] = h;
    out[sym] = h[h.length - 1];
  });
  
  state.prices = out;
  save();
  renderStocks();
  renderBalances();
  updateQuickStats();
  updateStockModal();
  updateMiniChart();
  return out;
}

// ============================================
// RENDERING FUNCTIONS
// ============================================
function renderStocks() {
  const list = $('stockList');
  if (!list) return;
  
  list.innerHTML = '';
  const q = $('search').value.trim().toLowerCase();
  const filter = state.currentFilter || 'all';
  
  // Update search clear button
  const clearBtn = $('searchClear');
  if (clearBtn) {
    clearBtn.style.display = q ? 'block' : 'none';
  }
  
  // Filter and sort stocks
  let filteredStocks = [...STOCKS];
  
  // Apply filter
  if (filter === 'watchlist') {
    filteredStocks = filteredStocks.filter(s => state.watchlist.includes(s[0]));
  } else if (filter === 'owned') {
    filteredStocks = filteredStocks.filter(s => state.holdings[s[0]] && state.holdings[s[0]] > 0);
  } else if (filter === 'crypto') {
    filteredStocks = filteredStocks.filter(s => s[0].includes('-USD'));
  } else if (filter === 'gainers') {
    // Sort by % change (descending)
    filteredStocks.sort((a, b) => {
      const changeA = getChange(a[0]);
      const changeB = getChange(b[0]);
      return changeB - changeA;
    });
    filteredStocks = filteredStocks.slice(0, 20);
  } else if (filter === 'losers') {
    // Sort by % change (ascending)
    filteredStocks.sort((a, b) => {
      const changeA = getChange(a[0]);
      const changeB = getChange(b[0]);
      return changeA - changeB;
    });
    filteredStocks = filteredStocks.slice(0, 20);
  }
  
  // Apply search
  if (q) {
    filteredStocks = filteredStocks.filter(s => 
      s[0].toLowerCase().includes(q) || s[1].toLowerCase().includes(q)
    );
  }
  
  // Render stocks
  filteredStocks.forEach(s => {
    const sym = s[0];
    const name = s[1];
    const price = state.prices[sym] || 0;
    
    let changeHtml = '+0.00%';
    let changeClass = 'pos';
    const h = state.history[sym];
    if (h && h.length >= 2) {
      const last = h[h.length - 1];
      const prev = h[h.length - 2];
      const pct = ((last - prev) / prev * 100);
      changeHtml = (pct >= 0 ? '+' : '') + pct.toFixed(2) + '%';
      changeClass = pct >= 0 ? 'pos' : 'neg';
    }
    
    const isWatchlisted = state.watchlist.includes(sym);
    const isOwned = state.holdings[sym] && state.holdings[sym] > 0;
    
    const div = document.createElement('div');
    div.className = 'stock' + (isWatchlisted ? ' watchlisted' : '') + (isOwned ? ' owned' : '');
    div.innerHTML = `
      <span class="watchlist-star ${isWatchlisted ? 'active' : ''}" data-symbol="${sym}">⭐</span>
      <div class="stock-left">
        <div class="stock-icon">${sym.charAt(0)}</div>
        <div class="stock-info">
          <div class="symbol">${sym}</div>
          <div class="stock-name">${name}</div>
        </div>
      </div>
      <div class="stock-right">
        <div class="price">${formatMoney(price)}</div>
        <div class="change ${changeClass}">${changeHtml}</div>
      </div>
    `;
    
    div.onclick = (e) => {
      if (!e.target.classList.contains('watchlist-star')) {
        showStockModal(sym);
      }
    };
    
    const star = div.querySelector('.watchlist-star');
    star.onclick = (e) => {
      e.stopPropagation();
      toggleWatchlist(sym);
    };
    
    list.appendChild(div);
  });
  
  // Show empty state if no results
  if (filteredStocks.length === 0) {
    list.innerHTML = '<div class="empty-state"><div class="empty-icon">🔍</div><p>No stocks found</p></div>';
  }
}

function getChange(sym) {
  const h = state.history[sym];
  if (h && h.length >= 2) {
    const last = h[h.length - 1];
    const prev = h[h.length - 2];
    return ((last - prev) / prev * 100);
  }
  return 0;
}

function toggleWatchlist(sym) {
  if (!state.watchlist) state.watchlist = [];
  
  const index = state.watchlist.indexOf(sym);
  if (index > -1) {
    state.watchlist.splice(index, 1);
    showToast(`📋 Removed ${sym} from watchlist`);
  } else {
    state.watchlist.push(sym);
    showToast(`⭐ Added ${sym} to watchlist`);
  }
  
  save();
  renderStocks();
}

function renderBalances() {
  const cash = state.cash;
  let portfolio = 0;
  for (const sym in state.holdings) {
    const qty = state.holdings[sym];
    const price = state.prices[sym] || 0;
    portfolio += qty * price;
  }
  const total = cash + portfolio;
  
  // Track portfolio history
  if (!state.portfolioHistory) state.portfolioHistory = [];
  state.portfolioHistory.push(total);
  while (state.portfolioHistory.length > 288) state.portfolioHistory.shift();
  
  // Update all-time high
  if (!state.allTimeHigh) state.allTimeHigh = STARTING_CASH;
  if (total > state.allTimeHigh) {
    state.allTimeHigh = total;
  }
  
  // Calculate 24h change
  if (!state.lastDayValue) state.lastDayValue = STARTING_CASH;
  const dayChangePercent = ((total - state.lastDayValue) / state.lastDayValue * 100).toFixed(2);
  const dayChangeEl = $('dayChange');
  if (dayChangeEl) {
    dayChangeEl.textContent = (dayChangePercent >= 0 ? '+' : '') + dayChangePercent + '%';
    dayChangeEl.style.color = dayChangePercent >= 0 ? 'var(--pos)' : 'var(--neg)';
  }
  
  // Update ATH
  const athEl = $('allTimeHigh');
  if (athEl) {
    athEl.textContent = formatMoneyCompact(state.allTimeHigh);
    athEl.title = `Full amount: ${formatMoney(state.allTimeHigh)}`;
  }
  
  // Update performance stats
  const perfTodayEl = $('perfToday');
  if (perfTodayEl) {
    perfTodayEl.textContent = (dayChangePercent >= 0 ? '+' : '') + dayChangePercent + '%';
    perfTodayEl.style.color = dayChangePercent >= 0 ? 'var(--pos)' : 'var(--neg)';
  }
  
  const totalReturn = ((total - STARTING_CASH) / STARTING_CASH * 100).toFixed(2);
  const perfTotalEl = $('perfTotal');
  if (perfTotalEl) {
    perfTotalEl.textContent = (totalReturn >= 0 ? '+' : '') + totalReturn + '%';
    perfTotalEl.style.color = totalReturn >= 0 ? 'var(--pos)' : 'var(--neg)';
  }
  
  // Update last day value periodically
  if (state.portfolioHistory.length >= 288) {
    state.lastDayValue = state.portfolioHistory[0];
  }
  
  // Compact formatting for display
  animateMoneyChange($('cash'), formatMoneyCompact(cash));
  animateMoneyChange($('portfolio'), formatMoneyCompact(portfolio));
  animateMoneyChange($('total'), formatMoneyCompact(total));
  
  // Store full values for tooltips
  $('cash').dataset.fullValue = formatMoney(cash);
  $('portfolio').dataset.fullValue = formatMoney(portfolio);
  $('total').dataset.fullValue = formatMoney(total);
  
  if (total <= 0.01 && cash <= 0.01) {
    triggerReset();
  }
}

function renderHoldings() {
  const list = $('holdingsList');
  if (!list) return;
  
  list.innerHTML = '';
  
  const holdings = Object.keys(state.holdings).filter(sym => state.holdings[sym] > 0);
  
  if (holdings.length === 0) {
    list.innerHTML = '<div class="empty-state"><div class="empty-icon">📊</div><p>You don\'t own any stocks yet</p></div>';
    return;
  }
  
  // Update summary
  let totalValue = 0;
  holdings.forEach(sym => {
    const qty = state.holdings[sym];
    const price = state.prices[sym] || 0;
    totalValue += qty * price;
  });
  
  const totalPositionsEl = $('totalPositions');
  if (totalPositionsEl) totalPositionsEl.textContent = holdings.length;
  
  const portfolioValueEl = $('portfolioValue');
  if (portfolioValueEl) portfolioValueEl.textContent = formatMoney(totalValue);
  
  const totalReturnPct = ((totalValue - STARTING_CASH) / STARTING_CASH * 100).toFixed(2);
  const totalReturnEl = $('totalReturn');
  if (totalReturnEl) {
    totalReturnEl.textContent = (totalReturnPct >= 0 ? '+' : '') + totalReturnPct + '%';
    totalReturnEl.style.color = totalReturnPct >= 0 ? 'var(--pos)' : 'var(--neg)';
  }
  
  // Render holdings
  holdings.forEach(sym => {
    const qty = state.holdings[sym];
    const price = state.prices[sym] || 0;
    const value = qty * price;
    const meta = STOCKS.find(s => s[0] === sym);
    const name = meta ? meta[1] : sym;
    
    const card = document.createElement('div');
    card.className = 'holding-card';
    card.innerHTML = `
      <div class="holding-header">
        <h3 class="holding-symbol">${sym}</h3>
        <div class="holding-qty">${Number(qty).toFixed(6)} shares</div>
      </div>
      <div class="holding-value">${formatMoney(value)}</div>
      <div class="holding-name">${name}</div>
      <div style="display:flex;gap:8px;margin-top:12px">
        <input type="number" class="form-input" step="0.00001" min="0.00001" placeholder="Qty" id="holdingQty_${sym}" style="flex:1" />
        <button class="btn btn-buy" onclick="buyFromHoldings('${sym}')" style="padding:10px 16px;font-size:13px">Buy</button>
        <button class="btn btn-sell" onclick="sellFromHoldings('${sym}')" style="padding:10px 16px;font-size:13px">Sell</button>
      </div>
      <button class="btn btn-secondary btn-full" onclick="sellAllHolding('${sym}')" style="margin-top:8px;padding:10px;font-size:13px">Sell All (${Number(qty).toFixed(6)})</button>
    `;
    list.appendChild(card);
  });
}

function updateQuickStats() {
  let maxChange = -Infinity;
  let minChange = Infinity;
  let topGainerSym = '--';
  let topLoserSym = '--';
  
  STOCKS.forEach(s => {
    const sym = s[0];
    const h = state.history[sym];
    if (h && h.length >= 2) {
      const last = h[h.length - 1];
      const prev = h[h.length - 2];
      const pct = ((last - prev) / prev * 100);
      if (pct > maxChange) {
        maxChange = pct;
        topGainerSym = sym;
      }
      if (pct < minChange) {
        minChange = pct;
        topLoserSym = sym;
      }
    }
  });
  
  const gainerEl = $('topGainer');
  if (gainerEl) {
    gainerEl.textContent = topGainerSym;
    gainerEl.title = maxChange > -Infinity ? `+${maxChange.toFixed(2)}%` : '';
  }
  
  const loserEl = $('topLoser');
  if (loserEl) {
    loserEl.textContent = topLoserSym;
    loserEl.title = minChange < Infinity ? `${minChange.toFixed(2)}%` : '';
  }
}

function updateMarketTrendBadge() {
  const badge = $('marketTrendBadge');
  if (!badge) return;
  
  if (state.inCrash) {
    badge.textContent = '⚠️ Crashing';
    badge.style.background = 'rgba(255,59,92,0.2)';
    badge.style.color = 'var(--neg)';
    badge.style.borderColor = 'var(--neg)';
  } else {
    const bias = state.trendBias;
    if (bias === 'down-only' || bias === 'bearish') {
      badge.textContent = '📉 Bearish';
      badge.style.background = 'rgba(255,59,92,0.15)';
      badge.style.color = 'var(--neg)';
    } else if (bias === 'up-only' || bias === 'bullish') {
      badge.textContent = '📈 Bullish';
      badge.style.background = 'rgba(0,255,136,0.15)';
      badge.style.color = 'var(--pos)';
    } else {
      badge.textContent = '⚖️ Neutral';
      badge.style.background = 'rgba(0,229,255,0.15)';
      badge.style.color = 'var(--accent)';
    }
  }
}

// ============================================
// CHART RENDERING
// ============================================
function drawChart(canvas, data) {
  if (!canvas || !data || data.length < 2) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);
  
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = Math.max(1e-6, max - min);
  
  // Draw grid
  ctx.strokeStyle = 'rgba(255,255,255,0.05)';
  ctx.lineWidth = 1;
  for (let i = 0; i < 5; i++) {
    const y = (i / 4) * h;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }
  
  // Determine line color based on trend
  const isPositive = data[data.length - 1] > data[0];
  const lineColor = isPositive ? 'rgba(0,255,136,0.8)' : 'rgba(255,59,92,0.8)';
  const fillColor1 = isPositive ? 'rgba(0,255,136,0.2)' : 'rgba(255,59,92,0.2)';
  const fillColor2 = isPositive ? 'rgba(0,255,136,0)' : 'rgba(255,59,92,0)';
  
  // Draw line
  ctx.lineWidth = 2;
  ctx.strokeStyle = lineColor;
  ctx.beginPath();
  data.forEach((val, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = (1 - (val - min) / range) * h;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();
  
  // Fill area
  const fillGradient = ctx.createLinearGradient(0, 0, 0, h);
  fillGradient.addColorStop(0, fillColor1);
  fillGradient.addColorStop(1, fillColor2);
  ctx.fillStyle = fillGradient;
  ctx.lineTo(w, h);
  ctx.lineTo(0, h);
  ctx.closePath();
  ctx.fill();
}

function updateMiniChart() {
  const canvas = $('miniChart');
  if (!canvas || !state.portfolioHistory || state.portfolioHistory.length < 2) return;
  
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  drawChart(canvas, state.portfolioHistory);
}

// ============================================
// TRADING FUNCTIONS
// ============================================
function trade(side, sym, qty) {
  if (!sym || qty <= 0 || qty < 0.0000001) return showToast('⚠️ Invalid quantity');
  const price = state.prices[sym] || 0;
  
  if (side === 'buy') {
    const cost = price * qty;
    if (cost > state.cash + 1e-8) return showToast('⚠️ Insufficient cash');
    state.cash -= cost;
    state.holdings[sym] = (state.holdings[sym] || 0) + qty;
    showToast(`✅ Bought ${qty.toFixed(6)} ${sym} @ ${formatMoney(price)}`);
  } else {
    const have = state.holdings[sym] || 0;
    if (qty > have) return showToast('⚠️ Not enough shares');
    state.holdings[sym] = have - qty;
    if (state.holdings[sym] === 0) delete state.holdings[sym];
    state.cash += price * qty;
    showToast(`✅ Sold ${qty.toFixed(6)} ${sym} @ ${formatMoney(price)}`);
  }
  
  save();
  renderBalances();
  renderHoldings();
  renderStocks();
}

function buyFromHoldings(sym) {
  const qtyEl = document.getElementById(`holdingQty_${sym}`);
  const qty = Number(qtyEl && qtyEl.value) || 0;
  if (qty <= 0) return showToast('⚠️ Enter a valid quantity');
  trade('buy', sym, qty);
  showHoldingsModal();
}

function sellFromHoldings(sym) {
  const qtyEl = document.getElementById(`holdingQty_${sym}`);
  const qty = Number(qtyEl && qtyEl.value) || 0;
  if (qty <= 0) return showToast('⚠️ Enter a valid quantity');
  trade('sell', sym, qty);
  showHoldingsModal();
}

function sellAllHolding(sym) {
  const qty = state.holdings[sym] || 0;
  if (qty <= 0) return showToast('⚠️ No shares to sell');
  if (!confirm(`Sell all ${qty.toFixed(6)} shares of ${sym}?`)) return;
  trade('sell', sym, qty);
  showHoldingsModal();
}

// ============================================
// MODALS
// ============================================
function showStockModal(sym) {
  $('stockModal').classList.add('active');
  $('modalSym').textContent = sym;
  const meta = STOCKS.find(s => s[0] === sym);
  const nameEl = $('modalName');
  if (nameEl) {
    nameEl.textContent = meta ? meta[1] : '';
    
    // Show holdings info if owned
    const holdings = state.holdings[sym] || 0;
    if (holdings > 0) {
      const price = state.prices[sym] || 0;
      const holdingValue = holdings * price;
      nameEl.innerHTML = (meta ? meta[1] : '') + `<br/><span style="font-size:12px;color:var(--accent)">You own: ${holdings.toFixed(6)} shares (${formatMoney(holdingValue)})</span>`;
    }
  }
  
  const price = state.prices[sym] || 0;
  $('modalPrice').textContent = formatMoney(price);
  
  const canvas = $('stockCanvas');
  if (canvas) {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const h = (state.history[sym] || []).slice(-60);
    drawChart(canvas, h);
  }
  
  updateStockModalCost(sym);
}

function updateStockModal() {
  const modalEl = $('stockModal');
  if (!modalEl.classList.contains('active')) return;
  
  const sym = $('modalSym').textContent;
  if (sym && sym !== '--') {
    const price = state.prices[sym] || 0;
    $('modalPrice').textContent = formatMoney(price);
    
    const canvas = $('stockCanvas');
    if (canvas) {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const h = (state.history[sym] || []).slice(-60);
      drawChart(canvas, h);
    }
    
    updateStockModalCost(sym);
  }
}

function updateStockModalCost(sym) {
  const qty = Number($('modalQty').value) || 0;
  const basePrice = state.prices[sym] || 0;
  const total = qty * basePrice;
  $('modalTotalCost').textContent = formatMoney(total);
}

function showHoldingsModal() {
  renderHoldings();
  $('holdingsModal').classList.add('active');
}

function openSettings() {
  $('settingsModal').classList.add('active');
  renderThemeGrid();
  loadSettingsToUI();
  updateSaveInfo();
}

function loadSettingsToUI() {
  $('volatilitySetting').value = state.volatility || 'medium';
  $('trendBiasSetting').value = state.trendBias || 'neutral';
  $('crashFrequencySetting').value = state.crashFrequency || 'never';
  $('recoverySpeedSetting').value = state.recoverySpeed || 'normal';
  $('retailInfluenceSetting').checked = state.retailInfluence || false;
  $('refreshIntervalSetting').value = state.refreshInterval || 10000;
}

function saveSettings() {
  state.volatility = $('volatilitySetting').value;
  state.trendBias = $('trendBiasSetting').value;
  state.crashFrequency = $('crashFrequencySetting').value;
  state.recoverySpeed = $('recoverySpeedSetting').value;
  state.retailInfluence = $('retailInfluenceSetting').checked;
  
  const newInterval = parseInt($('refreshIntervalSetting').value);
  if (newInterval !== state.refreshInterval) {
    state.refreshInterval = newInterval;
    startAutoRefresh();
  }
  
  save();
  updateMarketTrendBadge();
  showToast('✅ Settings saved!');
  $('settingsModal').classList.remove('active');
}

function resetToDefaults() {
  if (!confirm('Reset all settings to defaults?')) return;
  
  state.volatility = 'medium';
  state.trendBias = 'neutral';
  state.crashFrequency = 'never';
  state.recoverySpeed = 'normal';
  state.retailInfluence = false;
  state.refreshInterval = 10000;
  state.theme = 'Cyberpunk';
  
  applyTheme('Cyberpunk');
  loadSettingsToUI();
  startAutoRefresh();
  save();
  updateMarketTrendBadge();
  showToast('↺ Settings reset to defaults');
}

// Quick Buy Modal
function openQuickBuy() {
  $('quickBuyModal').classList.add('active');
  
  const datalist = $('stockSuggestions');
  if (datalist) {
    datalist.innerHTML = '';
    STOCKS.forEach(s => {
      const option = document.createElement('option');
      option.value = s[0];
      option.textContent = `${s[0]} - ${s[1]}`;
      datalist.appendChild(option);
    });
  }
}

function updateQuickBuyPreview() {
  const symbol = $('quickBuySymbol').value.trim().toUpperCase();
  const amount = parseFloat($('quickBuyAmount').value) || 0;
  const preview = $('quickBuyPreview');
  
  if (!symbol || amount <= 0) {
    preview.textContent = 'Enter a symbol and amount to see preview';
    preview.style.color = 'var(--text-dim)';
    return;
  }
  
  const price = state.prices[symbol];
  if (!price) {
    preview.textContent = `Symbol "${symbol}" not found`;
    preview.style.color = 'var(--neg)';
    return;
  }
  
  const shares = amount / price;
  const stockInfo = STOCKS.find(s => s[0] === symbol);
  const stockName = stockInfo ? stockInfo[1] : symbol;
  
  preview.style.color = 'var(--text)';
  preview.innerHTML = `
    <strong>${stockName} (${symbol})</strong><br/>
    Price: ${formatMoney(price)}<br/>
    Shares: ${shares.toFixed(6)}<br/>
    Total Cost: ${formatMoney(amount)}
  `;
}

function performQuickBuy() {
  const symbol = $('quickBuySymbol').value.trim().toUpperCase();
  const amount = parseFloat($('quickBuyAmount').value) || 0;
  
  if (!symbol || amount <= 0) {
    return showToast('⚠️ Please enter a valid symbol and amount');
  }
  
  const price = state.prices[symbol];
  if (!price) {
    return showToast(`⚠️ Symbol "${symbol}" not found`);
  }
  
  if (amount > state.cash) {
    return showToast('⚠️ Insufficient funds');
  }
  
  const shares = amount / price;
  trade('buy', symbol, shares);
  
  $('quickBuyModal').classList.remove('active');
  $('quickBuySymbol').value = '';
  $('quickBuyAmount').value = '';
}

// Portfolio Chart Modal
function openPortfolioChart() {
  $('portfolioChartModal').classList.add('active');
  
  let total = state.cash;
  for (const sym in state.holdings) {
    const qty = state.holdings[sym];
    const price = state.prices[sym] || 0;
    total += qty * price;
  }
  
  const currentValueEl = $('portfolioCurrentValue');
  if (currentValueEl) currentValueEl.textContent = formatMoney(total);
  
  const returnPercent = ((total - STARTING_CASH) / STARTING_CASH * 100).toFixed(2);
  const returnEl = $('portfolioTotalReturn');
  if (returnEl) {
    returnEl.textContent = (returnPercent >= 0 ? '+' : '') + returnPercent + '%';
    returnEl.style.color = returnPercent >= 0 ? 'var(--pos)' : 'var(--neg)';
  }
  
  const canvas = $('portfolioChartCanvas');
  if (canvas && state.portfolioHistory && state.portfolioHistory.length > 1) {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    drawChart(canvas, state.portfolioHistory);
  }
}

// ============================================
// AUTO-REFRESH
// ============================================
function startAutoRefresh() {
  stopAutoRefresh();
  refreshTimer = setInterval(async () => {
    await fetchPrices();
    $('marketStatus').textContent = 'Updated ' + new Date().toLocaleTimeString();
  }, state.refreshInterval);
}

function stopAutoRefresh() {
  if (refreshTimer) clearInterval(refreshTimer);
}

// ============================================
// RESET FUNCTION
// ============================================
async function triggerReset() {
  showToast('⚠️ Portfolio reached $0. Resetting...', 3000);
  await new Promise(r => setTimeout(r, 1000));
  state.cash = STARTING_CASH;
  state.holdings = {};
  state.prices = {};
  state.pricetrends = {};
  state.portfolioHistory = [];
  state.allTimeHigh = STARTING_CASH;
  state.lastDayValue = STARTING_CASH;
  save();
  await fetchPrices();
  renderBalances();
  renderStocks();
  renderHoldings();
}

function resetProgress() {
  if (!confirm('⚠️ Are you sure you want to reset all progress? This cannot be undone!')) return;
  
  state = {
    cash: STARTING_CASH,
    holdings: {},
    prices: {},
    history: {},
    refreshInterval: 10000,
    pricetrends: {},
    portfolioHistory: [],
    allTimeHigh: STARTING_CASH,
    lastDayValue: STARTING_CASH,
    watchlist: [],
    theme: state.theme || 'Cyberpunk',
    volatility: state.volatility || 'medium',
    trendBias: state.trendBias || 'neutral',
    crashFrequency: state.crashFrequency || 'never',
    recoverySpeed: state.recoverySpeed || 'normal',
    retailInfluence: state.retailInfluence || false,
    inCrash: false,
    crashTimer: 0,
    recoveryProgress: 0,
    sessions: 1,
    lastSaved: null,
    currentFilter: 'all'
  };
  
  save();
  showToast('↺ Progress reset! Reloading...', 2000);
  setTimeout(() => location.reload(), 2000);
}

// ============================================
// BACKGROUND ANIMATION
// ============================================
function initBackgroundAnimation() {
  const canvas = $('bgCanvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const particles = [];
  const particleCount = 50;
  
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 1
    });
  }
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0,229,255,0.3)';
      ctx.fill();
    });
    
    // Draw connections
    particles.forEach((p1, i) => {
      particles.slice(i + 1).forEach(p2 => {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(0,229,255,${0.15 * (1 - dist / 150)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });
    });
    
    bgAnimationFrame = requestAnimationFrame(animate);
  }
  
  animate();
  
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// ============================================
// UI INITIALIZATION
// ============================================
function initUI() {
  // Search
  $('search').addEventListener('input', renderStocks);
  
  // Search clear
  $('searchClear').addEventListener('click', () => {
    $('search').value = '';
    renderStocks();
  });
  
  // Filter tabs
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.currentFilter = tab.dataset.filter;
      renderStocks();
    });
  });
  
  // Holdings modal
  $('viewHoldingsBtn').addEventListener('click', showHoldingsModal);
  $('closeHoldingsModal').addEventListener('click', () => {
    $('holdingsModal').classList.remove('active');
  });
  
  // Settings modal
  $('settingsBtn').addEventListener('click', openSettings);
  $('closeSettingsModal').addEventListener('click', () => {
    $('settingsModal').classList.remove('active');
  });
  
  // Stock modal
  $('closeStockModal').addEventListener('click', () => {
    $('stockModal').classList.remove('active');
  });
  $('modalQty').addEventListener('input', () => {
    const sym = $('modalSym').textContent;
    updateStockModalCost(sym);
  });
  $('modalBuy').addEventListener('click', () => {
    const sym = $('modalSym').textContent;
    const qty = Number($('modalQty').value) || 0;
    if (qty > 0) {
      trade('buy', sym, qty);
      $('stockModal').classList.remove('active');
    }
  });
  $('modalSell').addEventListener('click', () => {
    const sym = $('modalSym').textContent;
    const qty = Number($('modalQty').value) || 0;
    if (qty > 0) {
      trade('sell', sym, qty);
      $('stockModal').classList.remove('active');
    }
  });
  $('modalMaxBuy').addEventListener('click', () => {
    const sym = $('modalSym').textContent;
    const price = state.prices[sym] || 0;
    if (price <= 0) return showToast('⚠️ Invalid stock price');
    const maxShares = state.cash / price;
    $('modalQty').value = maxShares.toFixed(6);
    updateStockModalCost(sym);
  });
  $('modalMaxSell').addEventListener('click', () => {
    const sym = $('modalSym').textContent;
    const holdings = state.holdings[sym] || 0;
    $('modalQty').value = holdings.toFixed(6);
    updateStockModalCost(sym);
    if (holdings <= 0) {
      showToast('⚠️ You don\'t own any shares of this stock');
    }
  });
  
  // Quick Buy modal
  $('quickBuyBtn').addEventListener('click', openQuickBuy);
  $('closeQuickBuyModal').addEventListener('click', () => {
    $('quickBuyModal').classList.remove('active');
  });
  $('quickBuySymbol').addEventListener('input', updateQuickBuyPreview);
  $('quickBuyAmount').addEventListener('input', updateQuickBuyPreview);
  $('executeQuickBuy').addEventListener('click', performQuickBuy);
  $('quickBuyMaxBtn').addEventListener('click', () => {
    $('quickBuyAmount').value = state.cash.toFixed(2);
    updateQuickBuyPreview();
  });
  
  // Portfolio Chart modal
  $('portfolioChartBtn').addEventListener('click', openPortfolioChart);
  $('closePortfolioChartModal').addEventListener('click', () => {
    $('portfolioChartModal').classList.remove('active');
  });
  
  // Balance click handlers
  $('cashBalance').addEventListener('click', () => {
    showToast(`💵 Cash: ${$('cash').dataset.fullValue}`, 3000);
  });
  $('portfolioBalance').addEventListener('click', () => {
    showToast(`📊 Portfolio: ${$('portfolio').dataset.fullValue}`, 3000);
  });
  $('totalBalance').addEventListener('click', () => {
    showToast(`💰 Total Value: ${$('total').dataset.fullValue}`, 3000);
  });
  
  // Help button
  $('helpBtn').addEventListener('click', () => {
    showToast(`⌨️ Keyboard Shortcuts:
• Ctrl+B: Quick Buy
• Ctrl+H: Holdings
• Ctrl+P: Portfolio Chart
• Ctrl+,: Settings
• /: Search stocks
• Esc: Close modals`, 6000);
  });
  
  // Reset button
  $('resetBtn').addEventListener('click', resetProgress);
  
  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
      e.preventDefault();
      openQuickBuy();
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'h') {
      e.preventDefault();
      showHoldingsModal();
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
      e.preventDefault();
      openPortfolioChart();
    }
    if ((e.ctrlKey || e.metaKey) && e.key === ',') {
      e.preventDefault();
      openSettings();
    }
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach(modal => {
        modal.classList.remove('active');
      });
    }
    if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
      e.preventDefault();
      $('search').focus();
    }
  });
  
  // Modal overlay click to close
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
      }
    });
  });
  
  // Create static particles
  const particles = $('particles');
  if (particles) {
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.width = (Math.random() * 4 + 2) + 'px';
      particle.style.height = particle.style.width;
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 20 + 's';
      particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
      particles.appendChild(particle);
    }
  }
}

// ============================================
// APP INITIALIZATION
// ============================================
async function initApp() {
  initUI();
  applyTheme(state.theme || 'Cyberpunk');
  await fetchPrices();
  renderStocks();
  renderBalances();
  renderHoldings();
  updateMarketTrendBadge();
  startAutoRefresh();
  startAutoSave();
  initBackgroundAnimation();
  $('marketStatus').textContent = 'Live Market';
}

// ============================================
// STARTUP SEQUENCE
// ============================================
(async () => {
  // Create particles for RS splash
  const rsParticles = $('rsParticles');
  if (rsParticles) {
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'rs-particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animation = `particleFloat ${2 + Math.random() * 2}s ease-in-out infinite`;
      particle.style.animationDelay = Math.random() * 2 + 's';
      rsParticles.appendChild(particle);
    }
  }
  
  // Show RS splash
  setTimeout(() => {
    $('rsSplash').classList.add('hidden');
  }, 2500);
  
  // Update loading progress
  const loadingProgress = $('loadingProgress');
  const loadingText = $('loadingText');
  
  const steps = [
    'Initializing market data...',
    'Loading stock prices...',
    'Checking for save data...',
    'Preparing interface...'
  ];
  
  let currentStep = 0;
  const stepInterval = setInterval(() => {
    if (currentStep < steps.length) {
      loadingText.textContent = steps[currentStep];
      loadingProgress.style.width = ((currentStep + 1) / steps.length * 100) + '%';
      currentStep++;
    } else {
      clearInterval(stepInterval);
    }
  }, 500);
  
  // Hide loading screen
  setTimeout(() => {
    $('loadingScreen').classList.add('hidden');
  }, 4500);
  
  // Start app
  setTimeout(async () => {
    // Try to load saved data
    const hasData = load();
    
    if (!hasData) {
      showToast('🎉 Welcome to Stock Sandbox Pro! Your progress will be saved automatically.', 5000);
    }
    
    await initApp();
  }, 4600);
})();

// Expose functions for HTML onclick handlers
window.saveSettings = saveSettings;
window.resetToDefaults = resetToDefaults;
window.buyFromHoldings = buyFromHoldings;
window.sellFromHoldings = sellFromHoldings;
window.sellAllHolding = sellAllHolding;
