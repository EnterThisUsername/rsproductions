// ============================================
    // CONFIGURATION & CONSTANTS
    // ============================================
    const STARTING_CASH = 100;
    const AUTO_SAVE_INTERVAL = 30000; // 30 seconds
    
    const THEMES = [
      {
        name: 'Cyberpunk',
        colors: {
          '--bg': '#0a0e17',
          '--panel': 'rgba(16,20,32,0.92)',
          '--panel-hover': 'rgba(20,26,40,0.95)',
          '--accent': '#00e5ff',
          '--pos': '#00ff88',
          '--neg': '#ff3b5c',
          '--text': '#e8edf2',
          '--muted': '#7a8a99',
          '--border': 'rgba(255,255,255,0.08)'
        }
      },
      {
        name: 'Synthwave',
        colors: {
          '--bg': '#1a0c2e',
          '--panel': 'rgba(45,15,80,0.92)',
          '--panel-hover': 'rgba(55,20,95,0.95)',
          '--accent': '#ff00ff',
          '--pos': '#00ffff',
          '--neg': '#ff006e',
          '--text': '#f0e6ff',
          '--muted': '#b39ddb',
          '--border': 'rgba(255,0,255,0.15)'
        }
      },
      {
        name: 'Forest',
        colors: {
          '--bg': '#0d1f0f',
          '--panel': 'rgba(18,35,20,0.92)',
          '--panel-hover': 'rgba(25,45,28,0.95)',
          '--accent': '#4ade80',
          '--pos': '#86efac',
          '--neg': '#f87171',
          '--text': '#e8f5e9',
          '--muted': '#81c784',
          '--border': 'rgba(74,222,128,0.15)'
        }
      },
      {
        name: 'Ocean',
        colors: {
          '--bg': '#041c2c',
          '--panel': 'rgba(8,35,55,0.92)',
          '--panel-hover': 'rgba(12,45,70,0.95)',
          '--accent': '#06b6d4',
          '--pos': '#22d3ee',
          '--neg': '#f43f5e',
          '--text': '#e0f2fe',
          '--muted': '#67e8f9',
          '--border': 'rgba(6,182,212,0.15)'
        }
      },
      {
        name: 'Sunset',
        colors: {
          '--bg': '#2c1810',
          '--panel': 'rgba(60,30,18,0.92)',
          '--panel-hover': 'rgba(75,40,25,0.95)',
          '--accent': '#fb923c',
          '--pos': '#fbbf24',
          '--neg': '#ef4444',
          '--text': '#fef3c7',
          '--muted': '#fed7aa',
          '--border': 'rgba(251,146,60,0.15)'
        }
      },
      {
        name: 'Midnight',
        colors: {
          '--bg': '#0c0c14',
          '--panel': 'rgba(18,18,28,0.92)',
          '--panel-hover': 'rgba(25,25,38,0.95)',
          '--accent': '#818cf8',
          '--pos': '#34d399',
          '--neg': '#f472b6',
          '--text': '#e0e7ff',
          '--muted': '#a5b4fc',
          '--border': 'rgba(129,140,248,0.15)'
        }
      },
      {
        name: 'Arctic',
        colors: {
          '--bg': '#0f1419',
          '--panel': 'rgba(25,30,38,0.92)',
          '--panel-hover': 'rgba(35,42,52,0.95)',
          '--accent': '#60a5fa',
          '--pos': '#10b981',
          '--neg': '#ef4444',
          '--text': '#f0f9ff',
          '--muted': '#94a3b8',
          '--border': 'rgba(96,165,250,0.15)'
        }
      },
      {
        name: 'Crimson',
        colors: {
          '--bg': '#1a0a0e',
          '--panel': 'rgba(40,15,20,0.92)',
          '--panel-hover': 'rgba(55,20,28,0.95)',
          '--accent': '#f43f5e',
          '--pos': '#fb7185',
          '--neg': '#dc2626',
          '--text': '#ffe4e6',
          '--muted': '#fda4af',
          '--border': 'rgba(244,63,94,0.15)'
        }
      },
      {
        name: 'Emerald',
        colors: {
          '--bg': '#051a0f',
          '--panel': 'rgba(10,35,20,0.92)',
          '--panel-hover': 'rgba(15,45,28,0.95)',
          '--accent': '#10b981',
          '--pos': '#34d399',
          '--neg': '#f87171',
          '--text': '#d1fae5',
          '--muted': '#6ee7b7',
          '--border': 'rgba(16,185,129,0.15)'
        }
      },
      {
        name: 'Gold Rush',
        colors: {
          '--bg': '#1a1406',
          '--panel': 'rgba(35,25,10,0.92)',
          '--panel-hover': 'rgba(45,35,15,0.95)',
          '--accent': '#fbbf24',
          '--pos': '#fcd34d',
          '--neg': '#ef4444',
          '--text': '#fef3c7',
          '--muted': '#fde68a',
          '--border': 'rgba(251,191,36,0.15)'
        }
      },
      {
        name: 'Lavender',
        colors: {
          '--bg': '#1a0f1f',
          '--panel': 'rgba(35,20,40,0.92)',
          '--panel-hover': 'rgba(45,28,52,0.95)',
          '--accent': '#c084fc',
          '--pos': '#a78bfa',
          '--neg': '#f472b6',
          '--text': '#f3e8ff',
          '--muted': '#d8b4fe',
          '--border': 'rgba(192,132,252,0.15)'
        }
      },
      {
        name: 'Neon Green',
        colors: {
          '--bg': '#0a1a0a',
          '--panel': 'rgba(15,35,15,0.92)',
          '--panel-hover': 'rgba(20,45,20,0.95)',
          '--accent': '#00ff00',
          '--pos': '#7fff00',
          '--neg': '#ff1744',
          '--text': '#e0ffe0',
          '--muted': '#90ee90',
          '--border': 'rgba(0,255,0,0.15)'
        }
      },
      {
        name: 'Tokyo Night',
        colors: {
          '--bg': '#1a1b26',
          '--panel': 'rgba(30,32,48,0.92)',
          '--panel-hover': 'rgba(40,42,60,0.95)',
          '--accent': '#7aa2f7',
          '--pos': '#9ece6a',
          '--neg': '#f7768e',
          '--text': '#c0caf5',
          '--muted': '#565f89',
          '--border': 'rgba(122,162,247,0.15)'
        }
      },
      {
        name: 'Dracula',
        colors: {
          '--bg': '#282a36',
          '--panel': 'rgba(40,42,54,0.92)',
          '--panel-hover': 'rgba(50,52,64,0.95)',
          '--accent': '#8be9fd',
          '--pos': '#50fa7b',
          '--neg': '#ff5555',
          '--text': '#f8f8f2',
          '--muted': '#6272a4',
          '--border': 'rgba(139,233,253,0.15)'
        }
      },
      {
        name: 'Nord',
        colors: {
          '--bg': '#2e3440',
          '--panel': 'rgba(46,52,64,0.92)',
          '--panel-hover': 'rgba(59,66,82,0.95)',
          '--accent': '#88c0d0',
          '--pos': '#a3be8c',
          '--neg': '#bf616a',
          '--text': '#eceff4',
          '--muted': '#4c566a',
          '--border': 'rgba(136,192,208,0.15)'
        }
      },
      {
        name: 'Monokai',
        colors: {
          '--bg': '#272822',
          '--panel': 'rgba(39,40,34,0.92)',
          '--panel-hover': 'rgba(49,50,44,0.95)',
          '--accent': '#66d9ef',
          '--pos': '#a6e22e',
          '--neg': '#f92672',
          '--text': '#f8f8f2',
          '--muted': '#75715e',
          '--border': 'rgba(102,217,239,0.15)'
        }
      },
      {
        name: 'Gruvbox',
        colors: {
          '--bg': '#282828',
          '--panel': 'rgba(40,40,40,0.92)',
          '--panel-hover': 'rgba(50,48,47,0.95)',
          '--accent': '#fe8019',
          '--pos': '#b8bb26',
          '--neg': '#fb4934',
          '--text': '#ebdbb2',
          '--muted': '#928374',
          '--border': 'rgba(254,128,25,0.15)'
        }
      },
      {
        name: 'Solarized Dark',
        colors: {
          '--bg': '#002b36',
          '--panel': 'rgba(0,43,54,0.92)',
          '--panel-hover': 'rgba(7,54,66,0.95)',
          '--accent': '#2aa198',
          '--pos': '#859900',
          '--neg': '#dc322f',
          '--text': '#fdf6e3',
          '--muted': '#586e75',
          '--border': 'rgba(42,161,152,0.15)'
        }
      },
      {
        name: 'Catppuccin',
        colors: {
          '--bg': '#1e1e2e',
          '--panel': 'rgba(30,30,46,0.92)',
          '--panel-hover': 'rgba(49,50,68,0.95)',
          '--accent': '#89b4fa',
          '--pos': '#a6e3a1',
          '--neg': '#f38ba8',
          '--text': '#cdd6f4',
          '--muted': '#6c7086',
          '--border': 'rgba(137,180,250,0.15)'
        }
      },
      {
        name: 'Rose Pine',
        colors: {
          '--bg': '#191724',
          '--panel': 'rgba(25,23,36,0.92)',
          '--panel-hover': 'rgba(33,32,46,0.95)',
          '--accent': '#c4a7e7',
          '--pos': '#9ccfd8',
          '--neg': '#eb6f92',
          '--text': '#e0def4',
          '--muted': '#6e6a86',
          '--border': 'rgba(196,167,231,0.15)'
        }
      }
    ];
    
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
      ['SQ','Square Inc.'],['SOFI','SoFi Technologies'],['LC','LendingClub Corp.'],
      // Luxury & Fashion
      ['LVMUY','LVMH Moët Hennessy'],['NKE','Nike Inc.'],['ADDYY','Adidas AG'],['LULU','Lululemon'],['TPR','Tapestry Inc.'],['RL','Ralph Lauren Corp.'],
      // International
      ['TSM','Taiwan Semiconductor'],['ASML','ASML Holding'],['SAP','SAP SE'],['NVO','Novo Nordisk'],['SONY','Sony Group Corp.'],['TM','Toyota Motor Corp.'],['HMC','Honda Motor Co.'],['BABA','Alibaba Group'],['TCEHY','Tencent Holdings'],
      // Commodities & Gold
      ['GLD','SPDR Gold Trust'],['SLV','iShares Silver Trust'],['USO','United States Oil Fund'],
      // Volatility & Special
      ['UVXY','ProShares Ultra VIX'],['SQQQ','ProShares UltraPro Short'],['TQQQ','ProShares UltraPro QQQ'],
      // New Tech
      ['ARM','Arm Holdings'],['IONQ','IonQ Inc.'],['RGTI','Rigetti Computing'],['QUBT','Quantum Computing'],
      // Space & Innovation
      ['SPCE','Virgin Galactic'],['RKLB','Rocket Lab USA'],['ASTS','AST SpaceMobile']
    ];
    
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
    
    const CURRENCIES = {USD:1};
    
    // ============================================
    // STATE MANAGEMENT
    // ============================================
    let state = {
      cash: STARTING_CASH,
      holdings: {},
      prices: {},
      history: {},
      currency: 'USD',
      refreshInterval: 10000,
      cheated: false,
      pricetrends: {},
      portfolioHistory: [],
      allTimeHigh: STARTING_CASH,
      lastDayValue: STARTING_CASH,
      watchlist: []
    };
    
    let currentAccount = null;
    let refreshTimer = null;
    let autoSaveTimer = null;
    
    // ============================================
    // UTILITY FUNCTIONS
    // ============================================
    const $ = (id) => document.getElementById(id);
    
    function caesarEncode(str, shift=10){
      return str.split('').map(c=>{
        if(/[a-z]/i.test(c)){
          const code = c.charCodeAt(0);
          const start = /[a-z]/.test(c) ? 97 : 65;
          return String.fromCharCode((code - start + shift) % 26 + start);
        }
        return c;
      }).join('');
    }
    
    function caesarDecode(str, shift=10){
      return str.split('').map(c=>{
        if(/[a-z]/i.test(c)){
          const code = c.charCodeAt(0);
          const start = /[a-z]/.test(c) ? 97 : 65;
          return String.fromCharCode((code - start - shift + 26) % 26 + start);
        }
        return c;
      }).join('');
    }
    
    function generateAccountCode(username){
      const shifted = caesarEncode(username.trim(), 10);
      return btoa(shifted);
    }
    
    function decodeAccountCode(code){
      try {
        const shifted = atob(code.trim());
        return caesarDecode(shifted, 10);
      } catch(e){
        throw new Error('Invalid account code');
      }
    }
    
    function getAccountUsername(){
      if(!currentAccount) return 'Unknown';
      const accountData = getAccount(currentAccount);
      return accountData ? accountData.username : 'Unknown';
    }
    
    function hashCode(s){
      let h=0;
      for(let i=0;i<s.length;i++)
        h=(h<<5)-h + s.charCodeAt(i)|0;
      return h;
    }
    
    function formatMoney(v){
      const cur = state.currency || 'USD';
      return new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: cur,
        maximumFractionDigits: 2
      }).format(v);
    }
    
    function formatMoneyCompact(v){
      const cur = state.currency || 'USD';
      const absV = Math.abs(v);
      
      // Under 1000, show full amount
      if(absV < 1000){
        return new Intl.NumberFormat(undefined, {
          style: 'currency',
          currency: cur,
          maximumFractionDigits: 2
        }).format(v);
      }
      
      // 1K to 999K
      if(absV < 1000000){
        const thousands = v / 1000;
        return new Intl.NumberFormat(undefined, {
          style: 'currency',
          currency: cur,
          maximumFractionDigits: 2
        }).format(thousands) + 'K';
      }
      
      // 1M to 999M
      if(absV < 1000000000){
        const millions = v / 1000000;
        return new Intl.NumberFormat(undefined, {
          style: 'currency',
          currency: cur,
          maximumFractionDigits: 2
        }).format(millions) + 'M';
      }
      
      // 1B to 999B
      if(absV < 1000000000000){
        const billions = v / 1000000000;
        return new Intl.NumberFormat(undefined, {
          style: 'currency',
          currency: cur,
          maximumFractionDigits: 2
        }).format(billions) + 'B';
      }
      
      // 1T to 999T (Trillion)
      if(absV < 1000000000000000){
        const trillions = v / 1000000000000;
        return new Intl.NumberFormat(undefined, {
          style: 'currency',
          currency: cur,
          maximumFractionDigits: 2
        }).format(trillions) + 'T';
      }
      
      // 1Qa to 999Qa (Quadrillion)
      if(absV < 1000000000000000000){
        const quadrillions = v / 1000000000000000;
        return new Intl.NumberFormat(undefined, {
          style: 'currency',
          currency: cur,
          maximumFractionDigits: 2
        }).format(quadrillions) + 'Qa';
      }
      
      // 1Qi to 999Qi (Quintillion)
      if(absV < 1000000000000000000000){
        const quintillions = v / 1000000000000000000;
        return new Intl.NumberFormat(undefined, {
          style: 'currency',
          currency: cur,
          maximumFractionDigits: 2
        }).format(quintillions) + 'Qi';
      }
      
      // 1Sx to 999Sx (Sextillion)
      if(absV < 1000000000000000000000000){
        const sextillions = v / 1000000000000000000000;
        return new Intl.NumberFormat(undefined, {
          style: 'currency',
          currency: cur,
          maximumFractionDigits: 2
        }).format(sextillions) + 'Sx';
      }
      
      // 1Sp to 999Sp (Septillion)
      if(absV < 1000000000000000000000000000){
        const septillions = v / 1000000000000000000000000;
        return new Intl.NumberFormat(undefined, {
          style: 'currency',
          currency: cur,
          maximumFractionDigits: 2
        }).format(septillions) + 'Sp';
      }
      
      // 1Oc to 999Oc (Octillion)
      if(absV < 1000000000000000000000000000000){
        const octillions = v / 1000000000000000000000000000;
        return new Intl.NumberFormat(undefined, {
          style: 'currency',
          currency: cur,
          maximumFractionDigits: 2
        }).format(octillions) + 'Oc';
      }
      
      // 1N+ (Nonillion and beyond)
      const nonillions = v / 1000000000000000000000000000000;
      return new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: cur,
        maximumFractionDigits: 2
      }).format(nonillions) + 'N';
    }
    
    function animateMoneyChange(element, newValue){
      if(!element || !element.textContent) return;
      const oldValue = element.textContent;
      if(oldValue === newValue) return;
      element.classList.add('money-animating');
      setTimeout(() => {
        element.textContent = newValue;
        element.classList.remove('money-animating');
      }, 300);
    }
    
    function showToast(msg, ms=2000){
      const t = $('toast');
      if(!t) return;
      t.textContent = msg;
      t.style.display = 'block';
      setTimeout(() => t.style.display = 'none', ms);
    }
    
    function showSaveIndicator(status){
      const indicator = $('saveIndicator');
      if(!indicator) return;
      
      const text = $('saveText');
      
      indicator.className = 'save-indicator ' + status;
      indicator.style.display = 'flex';
      
      if(status === 'saving'){
        if(text) text.textContent = 'Saving...';
      } else if(status === 'saved'){
        if(text) text.textContent = 'Saved';
      }
      
      setTimeout(() => {
        indicator.style.display = 'none';
      }, 2000);
    }
    
    // ============================================
    // DATABASE SYSTEM (Max 50 accounts)
    // ============================================
    const MAX_ACCOUNTS = 50;
    
    // Generate obfuscated ID from username
    function generateObfuscatedId(username){
      // Create a hash from username
      let hash = 0;
      for(let i = 0; i < username.length; i++){
        const char = username.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32-bit integer
      }
      
      // Make it positive and add timestamp component for uniqueness
      const positiveHash = Math.abs(hash);
      const timestamp = Date.now() % 100000; // Last 5 digits of timestamp
      const combined = positiveHash + timestamp;
      
      // Convert to base36 (0-9, a-z) and add prefix
      const obfuscated = 'RS' + combined.toString(36).toUpperCase();
      
      return obfuscated;
    }
    
    // Validate username
    function validateUsername(username){
      if(!username || typeof username !== 'string'){
        throw new Error('Username is required');
      }
      
      const trimmed = username.trim();
      
      if(trimmed.length < 3){
        throw new Error('Username must be at least 3 characters');
      }
      
      if(trimmed.length > 20){
        throw new Error('Username must be 20 characters or less');
      }
      
      if(!/^[a-zA-Z0-9_]+$/.test(trimmed)){
        throw new Error('Username can only contain letters, numbers, and underscores');
      }
      
      return trimmed;
    }
    
    function initDatabase(){
      try {
        if(!localStorage.getItem('stocksim_db')){
          localStorage.setItem('stocksim_db', JSON.stringify({
            accounts: {},
            accountList: []
          }));
        }
      } catch(e){
        console.error('Failed to initialize database:', e);
        throw new Error('Failed to initialize database. localStorage may be full or disabled.');
      }
    }
    
    function getDatabase(){
      try {
        const data = localStorage.getItem('stocksim_db');
        if(!data){
          throw new Error('Database not found');
        }
        return JSON.parse(data);
      } catch(e){
        console.error('Failed to get database:', e);
        throw new Error('Failed to load database. Data may be corrupted.');
      }
    }
    
    function saveDatabase(db){
      try {
        localStorage.setItem('stocksim_db', JSON.stringify(db));
      } catch(e){
        console.error('Failed to save database:', e);
        if(e.name === 'QuotaExceededError'){
          throw new Error('Storage quota exceeded! Please clear some browser data.');
        }
        throw new Error('Failed to save database.');
      }
    }
    
    function createAccount(username){
      try {
        // Validate username
        const validUsername = validateUsername(username);
        
        const db = getDatabase();
        
        // Check if database is full
        if(db.accountList.length >= MAX_ACCOUNTS){
          throw new Error('Database full! Maximum 50 accounts reached.');
        }
        
        // Check if username already exists
        const existingAccount = db.accountList.find(acc => 
          acc.username.toLowerCase() === validUsername.toLowerCase()
        );
        if(existingAccount){
          throw new Error('Username already taken!');
        }
        
        // Generate obfuscated ID
        let accountId = generateObfuscatedId(validUsername);
        
        // Ensure ID is unique (very rare collision handling)
        let attempts = 0;
        while(db.accounts[accountId] && attempts < 10){
          accountId = generateObfuscatedId(validUsername + attempts);
          attempts++;
        }
        
        if(db.accounts[accountId]){
          throw new Error('Failed to generate unique ID. Please try again.');
        }
        
        // Create new account
        const accountData = {
          id: accountId,
          username: validUsername,
          createdAt: new Date().toISOString(),
          cash: STARTING_CASH,
          holdings: {},
          prices: {},
          history: {},
          currency: 'USD',
          cheated: false,
          pricetrends: {},
          theme: 'Cyberpunk',
          volatility: 'medium',
          trendBias: 'neutral',
          crashFrequency: 'never',
          recoverySpeed: 'normal',
          retailInfluence: false,
          refreshInterval: 10000,
          inCrash: false,
          crashTimer: 0,
          recoveryProgress: 0,
          portfolioHistory: [],
          allTimeHigh: STARTING_CASH,
          lastDayValue: STARTING_CASH,
          watchlist: []
        };
        
        // Add to database
        db.accounts[accountId] = accountData;
        db.accountList.push({
          id: accountId,
          username: validUsername,
          createdAt: accountData.createdAt
        });
        
        saveDatabase(db);
        return accountId;
      } catch(e){
        console.error('Create account error:', e);
        throw e;
      }
    }
    
    function getAccount(accountId){
      try {
        if(!accountId){
          return null;
        }
        const db = getDatabase();
        return db.accounts[accountId] || null;
      } catch(e){
        console.error('Get account error:', e);
        return null;
      }
    }
    
    function updateAccount(accountId, data){
      try {
        if(!accountId || !data){
          return false;
        }
        const db = getDatabase();
        if(db.accounts[accountId]){
          db.accounts[accountId] = {...db.accounts[accountId], ...data};
          saveDatabase(db);
          return true;
        }
        return false;
      } catch(e){
        console.error('Update account error:', e);
        return false;
      }
    }
    
    function deleteAccount(accountId){
      try {
        if(!accountId){
          return false;
        }
        const db = getDatabase();
        if(db.accounts[accountId]){
          delete db.accounts[accountId];
          db.accountList = db.accountList.filter(acc => acc.id !== accountId);
          saveDatabase(db);
          return true;
        }
        return false;
      } catch(e){
        console.error('Delete account error:', e);
        return false;
      }
    }
    
    function getAllAccounts(){
      try {
        const db = getDatabase();
        return db.accountList;
      } catch(e){
        console.error('Get all accounts error:', e);
        return [];
      }
    }
    
    function getDatabaseStats(){
      try {
        const db = getDatabase();
        return {
          totalAccounts: db.accountList.length,
          maxAccounts: MAX_ACCOUNTS,
          slotsAvailable: MAX_ACCOUNTS - db.accountList.length,
          percentFull: Math.round((db.accountList.length / MAX_ACCOUNTS) * 100)
        };
      } catch(e){
        console.error('Get database stats error:', e);
        return {
          totalAccounts: 0,
          maxAccounts: MAX_ACCOUNTS,
          slotsAvailable: MAX_ACCOUNTS,
          percentFull: 0
        };
      }
    }
    
    function findAccountByUsername(username){
      try {
        if(!username){
          return null;
        }
        const db = getDatabase();
        const account = db.accountList.find(acc => 
          acc.username.toLowerCase() === username.toLowerCase()
        );
        return account ? account.id : null;
      } catch(e){
        console.error('Find account by username error:', e);
        return null;
      }
    }
    
    // ============================================
    // DATA PERSISTENCE
    // ============================================
    function save(){
      try {
        if(currentAccount){
          showSaveIndicator('saving');
          const success = updateAccount(currentAccount, state);
          if(success){
            setTimeout(() => showSaveIndicator('saved'), 300);
            renderLeaderboard(); // Update leaderboard after save
          } else {
            console.error('Failed to save account data');
          }
        }
      } catch(e){
        console.error('Save error:', e);
      }
    }
    
    function load(){
      try {
        if(currentAccount){
          const accountData = getAccount(currentAccount);
          if(accountData){
            Object.assign(state, accountData);
            return true;
          } else {
            console.warn('Account data not found for ID:', currentAccount);
            return false;
          }
        }
        return false;
      } catch(e){
        console.error('Load error:', e);
        return false;
      }
    }
    
    function startAutoSave(){
      try {
        if(autoSaveTimer) clearInterval(autoSaveTimer);
        autoSaveTimer = setInterval(() => {
          save();
        }, AUTO_SAVE_INTERVAL);
      } catch(e){
        console.error('Start auto-save error:', e);
      }
    }
    
    function stopAutoSave(){
      try {
        if(autoSaveTimer) clearInterval(autoSaveTimer);
      } catch(e){
        console.error('Stop auto-save error:', e);
      }
    }
    
    // ============================================
    // ACCOUNT MANAGEMENT
    // ============================================
    function showLoginModal(){
      const modal = $('loginModal');
      if(modal){
        modal.classList.add('active');
        // Force reflow to ensure animation works
        modal.offsetHeight;
      }
    }
    
    function closeLoginModal(){
      const modal = $('loginModal');
      if(modal) modal.classList.remove('active');
    }
    
    function openCreateAccountModal(){
      $('createStep1').style.display = 'block';
      $('createStep2').style.display = 'none';
      $('createUsername').value = '';
      $('createAccountModal').classList.add('active');
      closeLoginModal();
    }
    
    function closeCreateAccountModal(){
      $('createAccountModal').classList.remove('active');
    }
    
    function submitCreateAccount(){
      const username = $('createUsername').value.trim();
      if(!username) return showToast('Please enter a username');
      
      try {
        // Initialize database if needed
        initDatabase();
        
        // Check database capacity
        const stats = getDatabaseStats();
        if(stats.slotsAvailable === 0){
          return showToast('Database full! Max 50 accounts reached.', 3000);
        }
        
        // Create account in database
        const accountId = createAccount(username);
        
        // Show account ID
        $('accountCodeDisplay').value = `Account ID: ${accountId}\nUsername: ${username}`;
        $('createStep1').style.display = 'none';
        $('createStep2').style.display = 'block';
        
        // Store for later use
        $('accountCodeDisplay').dataset.accountId = accountId;
        
        showToast(`Account created! (${stats.slotsAvailable - 1} slots remaining)`);
      } catch(e){
        showToast(e.message, 3000);
      }
    }
    
    function copyAccountCode(){
      const code = $('accountCodeDisplay');
      code.select();
      document.execCommand('copy');
      showToast('Account code copied!');
    }
    
    function finishCreateAccount(){
      const accountId = parseInt($('accountCodeDisplay').dataset.accountId);
      currentAccount = accountId;
      localStorage.setItem('lastAccount', currentAccount);
      load();
      closeCreateAccountModal();
      initApp();
    }
    
    function openLoginModal(){
      $('loginCodeInput').value = '';
      $('loginCodeModal').classList.add('active');
      closeLoginModal();
    }
    
    function closeLoginCodeModal(){
      $('loginCodeModal').classList.remove('active');
    }
    
    function submitLogin(){
      const input = $('loginCodeInput').value.trim();
      if(!input) return showToast('Please enter your Account ID or Username');
      
      try {
        initDatabase();
        
        let accountId = input;
        
        // If input doesn't look like an obfuscated ID (starts with RS), search by username
        if(!input.startsWith('RS')){
          accountId = findAccountByUsername(input);
          if(!accountId){
            return showToast('Account not found! Check your username or ID.', 3000);
          }
        }
        
        // Check if account exists
        const accountData = getAccount(accountId);
        if(!accountData){
          return showToast('Account ID not found! Please check your credentials.', 3000);
        }
        
        currentAccount = accountId;
        localStorage.setItem('lastAccount', currentAccount);
        load();
        closeLoginCodeModal();
        initApp();
        showToast(`Welcome back, ${accountData.username}!`);
      } catch(e){
        console.error('Login error:', e);
        showToast('Login failed: ' + e.message, 3000);
      }
    }
    
    
    // ============================================
    // THEME SYSTEM
    // ============================================
    function applyTheme(themeName){
      const theme = THEMES.find(t => t.name === themeName);
      if(!theme) return;
      
      state.theme = themeName;
      
      // Apply CSS variables
      for(const [key, value] of Object.entries(theme.colors)){
        document.documentElement.style.setProperty(key, value);
      }
      
      // Update active state in theme grid
      document.querySelectorAll('.theme-card').forEach(card => {
        card.classList.toggle('active', card.dataset.theme === themeName);
      });
      
      save();
    }
    
    function renderThemeGrid(){
      const grid = $('themeGrid');
      if(!grid) return;
      grid.innerHTML = '';
      
      THEMES.forEach(theme => {
        const card = document.createElement('div');
        card.className = 'theme-card';
        card.dataset.theme = theme.name;
        if(state.theme === theme.name) card.classList.add('active');
        
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
    // SETTINGS SYSTEM
    // ============================================
    function openQuickBuy(){
      $('quickBuyModal').classList.add('active');
      
      // Populate stock suggestions
      const datalist = $('stockSuggestions');
      if(datalist){
        datalist.innerHTML = '';
        STOCKS.forEach(s => {
          const option = document.createElement('option');
          option.value = s[0];
          option.textContent = `${s[0]} - ${s[1]}`;
          datalist.appendChild(option);
        });
      }
    }
    
    function updateQuickBuyPreview(){
      const symbol = $('quickBuySymbol').value.trim().toUpperCase();
      const amount = parseFloat($('quickBuyAmount').value) || 0;
      const preview = $('quickBuyPreview');
      
      if(!symbol || amount <= 0){
        preview.textContent = 'Enter a symbol and amount to see preview';
        return;
      }
      
      const price = state.prices[symbol];
      if(!price){
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
    
    function performQuickBuy(){
      const symbol = $('quickBuySymbol').value.trim().toUpperCase();
      const amount = parseFloat($('quickBuyAmount').value) || 0;
      
      if(!symbol || amount <= 0){
        return showToast('Please enter a valid symbol and amount');
      }
      
      const price = state.prices[symbol];
      if(!price){
        return showToast(`Symbol "${symbol}" not found`);
      }
      
      if(amount > state.cash){
        return showToast('Insufficient funds');
      }
      
      const shares = amount / price;
      trade('buy', symbol, shares);
      
      $('quickBuyModal').classList.remove('active');
      $('quickBuySymbol').value = '';
      $('quickBuyAmount').value = '';
    }
    
    function openPortfolioChart(){
      $('portfolioChartModal').classList.add('active');
      
      // Calculate current value
      const rate = CURRENCIES[state.currency] || 1;
      let total = state.cash * rate;
      for(const sym in state.holdings){
        const qty = state.holdings[sym];
        const price = (state.prices[sym] || 0) * rate;
        total += qty * price;
      }
      
      // Update stats
      const currentValueEl = $('portfolioCurrentValue');
      if(currentValueEl) currentValueEl.textContent = formatMoney(total);
      
      const returnPercent = ((total - STARTING_CASH) / STARTING_CASH * 100).toFixed(2);
      const returnEl = $('portfolioTotalReturn');
      if(returnEl){
        returnEl.textContent = (returnPercent >= 0 ? '+' : '') + returnPercent + '%';
        returnEl.style.color = returnPercent >= 0 ? 'var(--pos)' : 'var(--neg)';
      }
      
      // Draw chart
      const canvas = $('portfolioChartCanvas');
      if(canvas && state.portfolioHistory && state.portfolioHistory.length > 1){
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        drawChart(canvas, state.portfolioHistory);
      }
    }
    
    function openSettings(){
      $('settingsModal').classList.add('active');
      renderThemeGrid();
      loadSettingsToUI();
    }
    
    function closeSettings(){
      $('settingsModal').classList.remove('active');
    }
    
    function loadSettingsToUI(){
      $('volatilitySetting').value = state.volatility || 'medium';
      $('trendBiasSetting').value = state.trendBias || 'neutral';
      $('crashFrequencySetting').value = state.crashFrequency || 'never';
      $('recoverySpeedSetting').value = state.recoverySpeed || 'normal';
      $('retailInfluenceSetting').checked = state.retailInfluence || false;
      $('refreshIntervalSetting').value = state.refreshInterval || 10000;
      $('displayUsername').value = getAccountUsername();
    }
    
    function saveSettings(){
      state.volatility = $('volatilitySetting').value;
      state.trendBias = $('trendBiasSetting').value;
      state.crashFrequency = $('crashFrequencySetting').value;
      state.recoverySpeed = $('recoverySpeedSetting').value;
      state.retailInfluence = $('retailInfluenceSetting').checked;
      
      const newInterval = parseInt($('refreshIntervalSetting').value);
      if(newInterval !== state.refreshInterval){
        state.refreshInterval = newInterval;
        startAutoRefresh();
      }
      
      save();
      showToast('Settings saved!');
      closeSettings();
    }
    
    function resetToDefaults(){
      if(!confirm('Reset all settings to defaults?')) return;
      
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
      showToast('Settings reset to defaults');
    }
    
    function showAccountCode(){
      if(!currentAccount) return;
      const stats = getDatabaseStats();
      const accountData = getAccount(currentAccount);
      const info = `Account ID: ${currentAccount}\nUsername: ${accountData.username}\nCreated: ${new Date(accountData.createdAt).toLocaleDateString()}\n\nDatabase: ${stats.totalAccounts}/${stats.maxAccounts} accounts (${stats.percentFull}% full)`;
      prompt('Your Account Information:', info);
    }
    
    function copyMyAccountCode(){
      if(!currentAccount) return;
      const textarea = document.createElement('textarea');
      textarea.value = `ID: ${currentAccount}`;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      showToast('Account ID copied!');
    }
    
    // ============================================
    // MARKET SIMULATION ENGINE
    // ============================================
    function getVolatilityMultiplier(){
      switch(state.volatility){
        case 'low': return 0.3;
        case 'medium': return 1.0;
        case 'high': return 2.0;
        case 'insane': return 4.0;
        case 'irresponsible': return 8.0;
        default: return 1.0;
      }
    }
    
    function getTrendBiasValue(){
      switch(state.trendBias){
        case 'down-only': return -0.01; // Strong downward force
        case 'bearish': return -0.002;
        case 'neutral': return 0;
        case 'bullish': return 0.002;
        case 'up-only': return 0.01; // Strong upward force
        default: return 0;
      }
    }
    
    function getCrashProbability(){
      switch(state.crashFrequency){
        case 'never': return 0;
        case 'very-rare': return 0.0001;
        case 'rare': return 0.0005;
        case 'occasional': return 0.001;
        case 'frequent': return 0.003;
        case 'very-frequent': return 0.008;
        default: return 0;
      }
    }
    
    function getRecoverySpeed(){
      switch(state.recoverySpeed){
        case 'incredibly-slow': return 0.0005;
        case 'really-slow': return 0.001;
        case 'pretty-slow': return 0.002;
        case 'slow': return 0.004;
        case 'normal': return 0.008;
        case 'slightly-fast': return 0.012;
        case 'fast': return 0.018;
        case 'more-fast': return 0.025;
        case 'incredibly-fast': return 0.04;
        case 'almost-instant': return 0.08;
        default: return 0.008;
      }
    }
    
    // ============================================
    // PRICE ENGINE
    // ============================================
    async function fetchPrices(){
      const out = {};
      const volatilityMult = getVolatilityMultiplier();
      const trendBias = getTrendBiasValue();
      const crashProb = getCrashProbability();
      const recoverySpeed = getRecoverySpeed();
      
      // Check for market crash
      if(!state.inCrash && Math.random() < crashProb){
        state.inCrash = true;
        state.crashTimer = 0;
        showToast('âš ï¸ MARKET CRASH!', 4000);
      }
      
      // Handle crash recovery
      if(state.inCrash){
        state.crashTimer++;
        state.recoveryProgress += recoverySpeed;
        if(state.recoveryProgress >= 1){
          state.inCrash = false;
          state.recoveryProgress = 0;
          showToast('ðŸ“ˆ Market recovering...', 3000);
        }
      }
      
      STOCKS.forEach(s => {
        const sym = s[0];
        const basePrice = BASE_PRICES[sym] || (50 + Math.abs(hashCode(sym)) % 200);
        
        if(!state.pricetrends[sym]) {
          state.pricetrends[sym] = 0;
        }
        
        let h = state.history[sym] || [];
        
        if(h.length === 0) {
          h = [Number(basePrice.toFixed(2))];
        } else {
          const lastPrice = h[h.length - 1];
          
          // Mean reversion
          state.pricetrends[sym] *= 0.7;
          
          // Base volatility
          let baseSwing = (Math.random() - 0.5) * 0.1 * volatilityMult;
          
          // Apply trend bias
          baseSwing += trendBias;
          
          // Force direction for down-only and up-only modes
          if(state.trendBias === 'down-only' && baseSwing > 0){
            baseSwing = -Math.abs(baseSwing);
          } else if(state.trendBias === 'up-only' && baseSwing < 0){
            baseSwing = Math.abs(baseSwing);
          }
          
          // Crash effect
          if(state.inCrash){
            const crashSeverity = Math.max(0, 1 - state.recoveryProgress);
            baseSwing -= 0.05 * crashSeverity;
          }
          
          // Retail trader influence (adds noise)
          if(state.retailInfluence){
            const retailNoise = (Math.random() - 0.5) * 0.02;
            baseSwing += retailNoise;
          }
          
          const changePercent = state.pricetrends[sym] + baseSwing;
          let newPrice = lastPrice * (1 + changePercent);
          
          // Prevent prices from going below a minimum threshold
          const minPrice = basePrice * 0.01; // Can't go below 1% of base price
          newPrice = Math.max(minPrice, newPrice);
          
          state.pricetrends[sym] = changePercent * 0.5;
          
          h.push(Number(Math.max(0.01, newPrice).toFixed(2)));
          while(h.length > 60) h.shift();
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
      return out;
    }
    
    // ============================================
    // RENDERING FUNCTIONS
    // ============================================
    function renderStocks(){
      const list = $('stockList');
      list.innerHTML = '';
      const q = $('search').value.trim().toLowerCase();
      const currencyRate = CURRENCIES[state.currency] || 1;
      
      if(!state.watchlist) state.watchlist = [];
      
      // Sort: watchlisted first, then alphabetically
      const sortedStocks = [...STOCKS].sort((a, b) => {
        const aWatched = state.watchlist.includes(a[0]);
        const bWatched = state.watchlist.includes(b[0]);
        if(aWatched && !bWatched) return -1;
        if(!aWatched && bWatched) return 1;
        return 0;
      });
      
      sortedStocks.forEach(s => {
        const sym = s[0];
        const name = s[1];
        const priceUSD = state.prices[sym] || 0;
        const price = priceUSD * currencyRate;
        
        if(q && !(sym.toLowerCase().includes(q) || name.toLowerCase().includes(q))) return;
        
        let changeHtml = '+0.00%';
        let changeClass = 'pos';
        const h = state.history[sym];
        if(h && h.length >= 2){
          const last = h[h.length - 1];
          const prev = h[h.length - 2];
          const pct = ((last - prev) / prev * 100);
          changeHtml = (pct >= 0 ? '+' : '') + pct.toFixed(2) + '%';
          changeClass = pct >= 0 ? 'pos' : 'neg';
        }
        
        const isWatchlisted = state.watchlist.includes(sym);
        
        const div = document.createElement('div');
        div.className = 'stock' + (isWatchlisted ? ' watchlisted' : '');
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
        
        // Add click handler for stock (not star)
        div.onclick = (e) => {
          if(!e.target.classList.contains('watchlist-star')){
            showStockModal(sym);
          }
        };
        
        // Add click handler for star
        const star = div.querySelector('.watchlist-star');
        star.onclick = (e) => {
          e.stopPropagation();
          toggleWatchlist(sym);
        };
        
        list.appendChild(div);
      });
    }
    
    function renderLeaderboard(){
      const list = $('leaderboardList');
      if(!list) return;
      
      try {
        const db = getDatabase();
        const accounts = [];
        
        // Calculate total value for each account
        for(const accountId in db.accounts){
          const account = db.accounts[accountId];
          let totalValue = account.cash || 0;
          
          // Add portfolio value
          for(const sym in account.holdings){
            const qty = account.holdings[sym] || 0;
            const price = account.prices[sym] || 0;
            totalValue += qty * price;
          }
          
          accounts.push({
            id: accountId,
            username: account.username,
            totalValue: totalValue,
            cash: account.cash || 0,
            holdings: Object.keys(account.holdings || {}).length
          });
        }
        
        // Sort by total value descending
        accounts.sort((a, b) => b.totalValue - a.totalValue);
        
        // Take top 10
        const topAccounts = accounts.slice(0, 10);
        
        if(topAccounts.length === 0){
          list.innerHTML = '<div class="empty-state"><div class="empty-icon">🏆</div><p>No accounts yet</p></div>';
          return;
        }
        
        list.innerHTML = '';
        
        topAccounts.forEach((account, index) => {
          const rank = index + 1;
          const isCurrentUser = account.id === currentAccount;
          
          const item = document.createElement('div');
          item.className = 'leaderboard-item';
          
          const rankDiv = document.createElement('div');
          rankDiv.className = `leaderboard-rank rank-${rank <= 3 ? rank : ''}`;
          if(rank === 1) rankDiv.textContent = '🥇';
          else if(rank === 2) rankDiv.textContent = '🥈';
          else if(rank === 3) rankDiv.textContent = '🥉';
          else rankDiv.textContent = `#${rank}`;
          
          const info = document.createElement('div');
          info.className = 'leaderboard-info';
          
          const username = document.createElement('div');
          username.className = `leaderboard-username ${isCurrentUser ? 'current-user' : ''}`;
          username.textContent = account.username + (isCurrentUser ? ' (You)' : '');
          
          const stats = document.createElement('div');
          stats.className = 'leaderboard-stats';
          stats.textContent = `${account.holdings} holdings`;
          
          info.appendChild(username);
          info.appendChild(stats);
          
          const value = document.createElement('div');
          value.className = 'leaderboard-value';
          value.textContent = formatMoneyCompact(account.totalValue);
          value.title = `Full amount: ${formatMoney(account.totalValue)}`; // Tooltip shows full amount
          
          item.appendChild(rankDiv);
          item.appendChild(info);
          item.appendChild(value);
          
          list.appendChild(item);
        });
        
      } catch(e){
        console.error('Render leaderboard error:', e);
        list.innerHTML = '<div class="empty-state"><div class="empty-icon">⚠️</div><p>Failed to load leaderboard</p></div>';
      }
    }
    
    function toggleWatchlist(sym){
      if(!state.watchlist) state.watchlist = [];
      
      const index = state.watchlist.indexOf(sym);
      if(index > -1){
        state.watchlist.splice(index, 1);
        showToast(`Removed ${sym} from watchlist`);
      } else {
        state.watchlist.push(sym);
        showToast(`Added ${sym} to watchlist`);
      }
      
      save();
      renderStocks();
    }
    
    function renderBalances(){
      const rate = CURRENCIES[state.currency] || 1;
      const cash = state.cash * rate;
      let portfolio = 0;
      for(const sym in state.holdings){
        const qty = state.holdings[sym];
        const price = (state.prices[sym] || 0) * rate;
        portfolio += qty * price;
      }
      const total = cash + portfolio;
      
      // Track portfolio history
      if(!state.portfolioHistory) state.portfolioHistory = [];
      state.portfolioHistory.push(total);
      while(state.portfolioHistory.length > 288) state.portfolioHistory.shift(); // Keep 24h of data (5min intervals)
      
      // Update all-time high
      if(!state.allTimeHigh) state.allTimeHigh = STARTING_CASH;
      if(total > state.allTimeHigh){
        state.allTimeHigh = total;
      }
      
      // Calculate 24h change
      if(!state.lastDayValue) state.lastDayValue = STARTING_CASH;
      const dayChangePercent = ((total - state.lastDayValue) / state.lastDayValue * 100).toFixed(2);
      const dayChangeEl = $('dayChange');
      if(dayChangeEl){
        dayChangeEl.textContent = (dayChangePercent >= 0 ? '+' : '') + dayChangePercent + '%';
        dayChangeEl.style.color = dayChangePercent >= 0 ? 'var(--pos)' : 'var(--neg)';
      }
      
      // Update all-time high display
      const athEl = $('allTimeHigh');
      if(athEl){
        athEl.textContent = formatMoneyCompact(state.allTimeHigh);
        athEl.title = `Full amount: ${formatMoney(state.allTimeHigh)}`;
      }
      
      // Update last day value every ~288 updates (roughly daily)
      if(state.portfolioHistory.length >= 288){
        state.lastDayValue = state.portfolioHistory[0];
      }
      
      // Use compact formatting for display
      animateMoneyChange($('cash'), formatMoneyCompact(cash));
      animateMoneyChange($('portfolio'), formatMoneyCompact(portfolio));
      animateMoneyChange($('total'), formatMoneyCompact(total));
      
      // Store full values for click handlers
      $('cash').dataset.fullValue = formatMoney(cash);
      $('portfolio').dataset.fullValue = formatMoney(portfolio);
      $('total').dataset.fullValue = formatMoney(total);
      
      if(total <= 0.0001){
        triggerReset();
      }
    }
    
    function renderHoldings(){
      const list = $('holdingsList');
      list.innerHTML = '';
      
      if(Object.keys(state.holdings).length === 0){
        list.innerHTML = '<div class="empty-state"><div class="empty-icon">ðŸ“Š</div><p>You don\'t own any stocks yet</p></div>';
        return;
      }
      
      for(const sym in state.holdings){
        const qty = state.holdings[sym];
        const price = state.prices[sym] || 0;
        const value = qty * price * (CURRENCIES[state.currency] || 1);
        const meta = STOCKS.find(s => s[0] === sym);
        const name = meta ? meta[1] : sym;
        
        const card = document.createElement('div');
        card.className = 'holding-card';
        card.innerHTML = `
          <div class="holding-header">
            <h3 class="holding-symbol">${sym}</h3>
            <div class="holding-qty">${Number(qty).toFixed(6)} shares</div>
          </div>
          <div class="holding-value">Value: ${formatMoney(value)}</div>
          <div class="holding-name">${name}</div>
          <div style="display:flex;gap:8px">
            <input type="number" class="form-input" step="0.00001" min="0.00001" placeholder="Qty" id="holdingQty_${sym}" style="flex:1" />
            <button class="btn btn-buy" onclick="buyFromHoldings('${sym}')" style="padding:8px 12px;font-size:12px">Buy</button>
            <button class="btn btn-sell" onclick="sellFromHoldings('${sym}')" style="padding:8px 12px;font-size:12px">Sell</button>
          </div>
          <button class="btn btn-secondary btn-full" onclick="sellAllHolding('${sym}')" style="margin-top:8px;padding:8px;font-size:12px">Sell All (${Number(qty).toFixed(6)})</button>
        `;
        list.appendChild(card);
      }
    }
    
    function updateQuickStats(){
      let maxChange = -Infinity;
      let minChange = Infinity;
      let topGainerSym = '--';
      let topLoserSym = '--';
      
      STOCKS.forEach(s => {
        const sym = s[0];
        const h = state.history[sym];
        if(h && h.length >= 2){
          const last = h[h.length - 1];
          const prev = h[h.length - 2];
          const pct = ((last - prev) / prev * 100);
          if(pct > maxChange){
            maxChange = pct;
            topGainerSym = sym;
          }
          if(pct < minChange){
            minChange = pct;
            topLoserSym = sym;
          }
        }
      });
      
      $('topGainer').textContent = maxChange > -Infinity ? topGainerSym : '--';
      $('topLoser').textContent = minChange < Infinity ? topLoserSym : '--';
    }
    
    // ============================================
    // TRADING
    // ============================================
    function trade(side, sym, qty){
      if(!sym || qty <= 0 || qty < 0.0000001) return showToast('Invalid quantity');
      const price = state.prices[sym] || 0;
      
      if(side === 'buy'){
        const cost = price * qty;
        if(cost > state.cash + 1e-8) return showToast('Insufficient cash');
        state.cash -= cost;
        state.holdings[sym] = (state.holdings[sym] || 0) + qty;
        showToast(`Bought ${qty.toFixed(6)} ${sym}`);
      } else {
        const have = state.holdings[sym] || 0;
        if(qty > have) return showToast('Not enough shares');
        state.holdings[sym] = have - qty;
        if(state.holdings[sym] === 0) delete state.holdings[sym];
        state.cash += price * qty;
        showToast(`Sold ${qty.toFixed(6)} ${sym}`);
      }
      
      save();
      renderBalances();
      renderHoldings();
      renderLeaderboard();
    }
    
    function buyFromHoldings(sym){
      const qtyEl = document.getElementById(`holdingQty_${sym}`);
      const qty = Number(qtyEl && qtyEl.value) || 0;
      if(qty <= 0) return showToast('Enter a valid quantity');
      trade('buy', sym, qty);
      showHoldingsModal();
    }
    
    function sellFromHoldings(sym){
      const qtyEl = document.getElementById(`holdingQty_${sym}`);
      const qty = Number(qtyEl && qtyEl.value) || 0;
      if(qty <= 0) return showToast('Enter a valid quantity');
      trade('sell', sym, qty);
      showHoldingsModal();
    }
    
    function sellAllHolding(sym){
      const qty = state.holdings[sym] || 0;
      if(qty <= 0) return showToast('No shares to sell');
      if(!confirm(`Sell all ${qty.toFixed(6)} shares of ${sym}?`)) return;
      trade('sell', sym, qty);
      showHoldingsModal();
    }
    
    // ============================================
    // MODALS
    // ============================================
    function showHoldingsModal(){
      renderHoldings();
      $('holdingsModal').classList.add('active');
    }
    
    function closeHoldingsModal(){
      $('holdingsModal').classList.remove('active');
    }
    
    function showStockModal(sym){
      $('stockModal').classList.add('active');
      $('modalSym').textContent = sym;
      const meta = STOCKS.find(s => s[0] === sym);
      $('modalName').textContent = meta ? meta[1] : '';
      const price = (state.prices[sym] || 0) * (CURRENCIES[state.currency] || 1);
      $('modalPrice').textContent = formatMoney(price);
      
      // Show current holdings if any
      const holdings = state.holdings[sym] || 0;
      const modalName = $('modalName');
      if(modalName && holdings > 0){
        const holdingValue = holdings * price;
        modalName.innerHTML = (meta ? meta[1] : '') + `<br/><span style="font-size:12px;color:var(--accent)">You own: ${holdings.toFixed(6)} shares (${formatMoney(holdingValue)})</span>`;
      }
      
      const canvas = $('stockCanvas');
      if(canvas){
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        const h = (state.history[sym] || []).slice(-60).map(v => v * (CURRENCIES[state.currency] || 1));
        drawChart(canvas, h);
      }
      
      updateStockModalCost(sym);
    }
    
    function closeStockModal(){
      $('stockModal').classList.remove('active');
    }
    
    function updateStockModal(){
      const modalEl = $('stockModal');
      if(!modalEl.classList.contains('active')) return;
      
      const sym = $('modalSym').textContent;
      if(sym && sym !== '--'){
        const price = (state.prices[sym] || 0) * (CURRENCIES[state.currency] || 1);
        $('modalPrice').textContent = formatMoney(price);
        
        const canvas = $('stockCanvas');
        if(canvas){
          canvas.width = canvas.offsetWidth;
          canvas.height = canvas.offsetHeight;
          const h = (state.history[sym] || []).slice(-60).map(v => v * (CURRENCIES[state.currency] || 1));
          drawChart(canvas, h);
        }
        
        updateStockModalCost(sym);
      }
    }
    
    function updateStockModalCost(sym){
      const qty = Number($('modalQty').value) || 0;
      const basePrice = state.prices[sym] || 0;
      const total = qty * basePrice * (CURRENCIES[state.currency] || 1);
      $('modalTotalCost').textContent = `Total: ${formatMoney(total)}`;
    }
    
    function drawChart(canvas, data){
      if(!canvas || !data || data.length < 2) return;
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
      for(let i = 0; i < 5; i++){
        const y = (i / 4) * h;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
      
      // Draw line
      ctx.lineWidth = 2;
      const gradient = ctx.createLinearGradient(0, 0, w, 0);
      gradient.addColorStop(0, 'rgba(0,229,255,0.8)');
      gradient.addColorStop(1, 'rgba(0,255,136,0.8)');
      ctx.strokeStyle = gradient;
      ctx.beginPath();
      data.forEach((val, i) => {
        const x = (i / (data.length - 1)) * w;
        const y = (1 - (val - min) / range) * h;
        if(i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();
      
      // Fill area
      const fillGradient = ctx.createLinearGradient(0, 0, 0, h);
      fillGradient.addColorStop(0, 'rgba(0,229,255,0.2)');
      fillGradient.addColorStop(1, 'rgba(0,229,255,0)');
      ctx.fillStyle = fillGradient;
      ctx.lineTo(w, h);
      ctx.lineTo(0, h);
      ctx.closePath();
      ctx.fill();
    }
    
    // ============================================
    // AUTO-REFRESH
    // ============================================
    function startAutoRefresh(){
      stopAutoRefresh();
      refreshTimer = setInterval(async () => {
        await fetchPrices();
        $('marketStatus').textContent = 'Updated ' + new Date().toLocaleTimeString();
      }, state.refreshInterval);
    }
    
    function stopAutoRefresh(){
      if(refreshTimer) clearInterval(refreshTimer);
    }
    
    // ============================================
    // RESET
    // ============================================
    async function triggerReset(){
      showToast('Portfolio reached $0. Resetting...', 3000);
      await new Promise(r => setTimeout(r, 1000));
      state.cash = STARTING_CASH;
      state.holdings = {};
      state.prices = {};
      state.pricetrends = {};
      save();
      await fetchPrices();
      renderBalances();
      renderStocks();
      renderHoldings();
    }
    
    // ============================================
    // INITIALIZATION
    // ============================================
    function initUI(){
      try {
        // Add event listeners with null checks
        const search = $('search');
        if(search) search.addEventListener('input', renderStocks);
        
        const viewHoldingsBtn = $('viewHoldingsBtn');
        if(viewHoldingsBtn) viewHoldingsBtn.addEventListener('click', showHoldingsModal);
        
        const closeHoldingsModal = $('closeHoldingsModal');
        if(closeHoldingsModal) closeHoldingsModal.addEventListener('click', () => {
          $('holdingsModal').classList.remove('active');
        });
        
        const holdingsModal = $('holdingsModal');
        if(holdingsModal){
          holdingsModal.addEventListener('click', (e) => {
            if(e.target.id === 'holdingsModal'){
              holdingsModal.classList.remove('active');
            }
          });
        }
        
        const settingsBtn = $('settingsBtn');
        if(settingsBtn) settingsBtn.addEventListener('click', openSettings);
        
        const helpBtn = $('helpBtn');
        if(helpBtn) helpBtn.addEventListener('click', () => {
          showToast(`
Keyboard Shortcuts:
• Ctrl+B: Quick Buy
• Ctrl+H: Holdings
• Ctrl+P: Portfolio Chart
• Ctrl+,: Settings
• /: Search stocks
• Esc: Close modals
          `.trim(), 6000);
        });
        
        const quickBuyBtn = $('quickBuyBtn');
        if(quickBuyBtn) quickBuyBtn.addEventListener('click', openQuickBuy);
        
        const portfolioChartBtn = $('portfolioChartBtn');
        if(portfolioChartBtn) portfolioChartBtn.addEventListener('click', openPortfolioChart);
        
        const closeQuickBuyModal = $('closeQuickBuyModal');
        if(closeQuickBuyModal) closeQuickBuyModal.addEventListener('click', () => {
          $('quickBuyModal').classList.remove('active');
        });
        
        const closePortfolioChartModal = $('closePortfolioChartModal');
        if(closePortfolioChartModal) closePortfolioChartModal.addEventListener('click', () => {
          $('portfolioChartModal').classList.remove('active');
        });
        
        const quickBuySymbol = $('quickBuySymbol');
        const quickBuyAmount = $('quickBuyAmount');
        if(quickBuySymbol) quickBuySymbol.addEventListener('input', updateQuickBuyPreview);
        if(quickBuyAmount) quickBuyAmount.addEventListener('input', updateQuickBuyPreview);
        
        const executeQuickBuy = $('executeQuickBuy');
        if(executeQuickBuy) executeQuickBuy.addEventListener('click', performQuickBuy);
        
        const quickBuyMaxBtn = $('quickBuyMaxBtn');
        if(quickBuyMaxBtn){
          quickBuyMaxBtn.addEventListener('click', () => {
            const amountInput = $('quickBuyAmount');
            if(amountInput){
              amountInput.value = state.cash.toFixed(2);
              updateQuickBuyPreview();
            }
          });
        }
        
        const quitBtn = $('quitBtn');
        if(quitBtn){
          quitBtn.addEventListener('click', () => {
            // Save progress
            save();
            showToast('Progress saved! Redirecting...', 2000);
            
            // Redirect after a short delay to show the save message
            setTimeout(() => {
              window.location.href = 'gamelist.html';
            }, 1000);
          });
        }
        
        // Balance click handlers to show full amounts
        const cashBalance = $('cashBalance');
        if(cashBalance){
          cashBalance.addEventListener('click', () => {
            const fullValue = $('cash').dataset.fullValue;
            if(fullValue){
              showToast(`Cash: ${fullValue}`, 3000);
            }
          });
        }
        
        const portfolioBalance = $('portfolioBalance');
        if(portfolioBalance){
          portfolioBalance.addEventListener('click', () => {
            const fullValue = $('portfolio').dataset.fullValue;
            if(fullValue){
              showToast(`Portfolio: ${fullValue}`, 3000);
            }
          });
        }
        
        const totalBalance = $('totalBalance');
        if(totalBalance){
          totalBalance.addEventListener('click', () => {
            const fullValue = $('total').dataset.fullValue;
            if(fullValue){
              showToast(`Total: ${fullValue}`, 3000);
            }
          });
        }
        
        const closeSettingsModal = $('closeSettingsModal');
        if(closeSettingsModal) closeSettingsModal.addEventListener('click', closeSettings);
        
        const settingsModal = $('settingsModal');
        if(settingsModal){
          settingsModal.addEventListener('click', (e) => {
            if(e.target.id === 'settingsModal') closeSettings();
          });
        }
        
        const closeStockModal = $('closeStockModal');
        if(closeStockModal) closeStockModal.addEventListener('click', closeStockModal);
        
        const stockModal = $('stockModal');
        if(stockModal){
          stockModal.addEventListener('click', (e) => {
            if(e.target.id === 'stockModal'){
              stockModal.classList.remove('active');
            }
          });
        }
        
        const modalQty = $('modalQty');
        if(modalQty){
          modalQty.addEventListener('input', () => {
            const sym = $('modalSym').textContent;
            updateStockModalCost(sym);
          });
        }
        
        const modalBuy = $('modalBuy');
        if(modalBuy){
          modalBuy.addEventListener('click', () => {
            const sym = $('modalSym').textContent;
            const qty = Number($('modalQty').value) || 0;
            if(qty > 0){
              trade('buy', sym, qty);
              const modal = $('stockModal');
              if(modal) modal.classList.remove('active');
            }
          });
        }
        
        const modalMaxBuy = $('modalMaxBuy');
        if(modalMaxBuy){
          modalMaxBuy.addEventListener('click', () => {
            const sym = $('modalSym').textContent;
            const price = state.prices[sym] || 0;
            if(price <= 0){
              showToast('Invalid stock price');
              return;
            }
            const maxShares = state.cash / price;
            const qtyInput = $('modalQty');
            if(qtyInput){
              qtyInput.value = maxShares.toFixed(6);
              updateStockModalCost(sym);
            }
          });
        }
        
        const modalMaxSell = $('modalMaxSell');
        if(modalMaxSell){
          modalMaxSell.addEventListener('click', () => {
            const sym = $('modalSym').textContent;
            const holdings = state.holdings[sym] || 0;
            const qtyInput = $('modalQty');
            if(qtyInput){
              qtyInput.value = holdings.toFixed(6);
              updateStockModalCost(sym);
            }
            if(holdings <= 0){
              showToast('You don\'t own any shares of this stock');
            }
          });
        }
        
        const modalSell = $('modalSell');
        if(modalSell){
          modalSell.addEventListener('click', () => {
            const sym = $('modalSym').textContent;
            const qty = Number($('modalQty').value) || 0;
            if(qty > 0){
              trade('sell', sym, qty);
              const modal = $('stockModal');
              if(modal) modal.classList.remove('active');
            }
          });
        }
        
        // Create particles
        const particles = $('particles');
        if(particles){
          for(let i = 0; i < 20; i++){
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
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
          // Ctrl/Cmd + B = Quick Buy
          if((e.ctrlKey || e.metaKey) && e.key === 'b'){
            e.preventDefault();
            openQuickBuy();
          }
          // Ctrl/Cmd + H = Holdings
          if((e.ctrlKey || e.metaKey) && e.key === 'h'){
            e.preventDefault();
            showHoldingsModal();
          }
          // Ctrl/Cmd + P = Portfolio Chart
          if((e.ctrlKey || e.metaKey) && e.key === 'p'){
            e.preventDefault();
            openPortfolioChart();
          }
          // Ctrl/Cmd + , = Settings
          if((e.ctrlKey || e.metaKey) && e.key === ','){
            e.preventDefault();
            openSettings();
          }
          // Escape = Close modals
          if(e.key === 'Escape'){
            document.querySelectorAll('.modal-overlay.active').forEach(modal => {
              modal.classList.remove('active');
            });
          }
          // / = Focus search
          if(e.key === '/' && !['INPUT', 'TEXTAREA'].includes(e.target.tagName)){
            e.preventDefault();
            const search = $('search');
            if(search) search.focus();
          }
        });
      } catch(e){
        console.error('initUI error:', e);
      }
    }
    
    async function initApp(){
      try {
        initUI();
        applyTheme(state.theme || 'Cyberpunk');
        await fetchPrices();
        renderStocks();
        renderBalances();
        renderHoldings();
        renderLeaderboard();
        startAutoRefresh();
        startAutoSave();
        const marketStatus = $('marketStatus');
        if(marketStatus) marketStatus.textContent = 'Simulated Market';
      } catch(e){
        console.error('initApp error:', e);
        showToast('Failed to initialize app: ' + e.message, 5000);
      }
    }
    
    // ============================================
    // STARTUP
    // ============================================
    (async () => {
      try {
        // Create particles for RS splash
        const rsParticles = $('rsParticles');
        if(rsParticles){
          for(let i = 0; i < 30; i++){
            const particle = document.createElement('div');
            particle.className = 'rs-particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animation = `particleFloat ${2 + Math.random() * 2}s ease-in-out infinite`;
            particle.style.animationDelay = Math.random() * 2 + 's';
            rsParticles.appendChild(particle);
          }
        }
        
        // Show RS splash for 2.5 seconds
        setTimeout(() => {
          const splash = $('rsSplash');
          if(splash) splash.classList.add('hidden');
        }, 2500);
        
        // Then show loading screen and hide after 2 more seconds
        setTimeout(() => {
          const loading = $('loadingScreen');
          if(loading) loading.classList.add('hidden');
        }, 4500);
        
        // Initialize database
        try {
          initDatabase();
        } catch(e){
          console.error('Database initialization failed:', e);
          showToast('Failed to initialize database. Please refresh the page.', 5000);
          return;
        }
        
        // Wait for splash screens to finish before checking login
        setTimeout(async () => {
          try {
            const lastAccount = localStorage.getItem('lastAccount');
            
            if(lastAccount){
              // Check if account exists with this ID
              const accountData = getAccount(lastAccount);
              if(accountData){
                currentAccount = lastAccount;
                load();
                await initApp();
              } else {
                // Invalid account, show login
                console.warn('Invalid saved account, clearing...');
                localStorage.removeItem('lastAccount');
                initUI();
                showLoginModal();
              }
            } else {
              // No saved account, show login
              initUI();
              showLoginModal();
            }
          } catch(e){
            console.error('Startup error:', e);
            initUI();
            showLoginModal();
            showToast('An error occurred. Please try logging in.', 3000);
          }
        }, 4600); // Wait for loading screen to finish
        
      } catch(e){
        console.error('Critical startup error:', e);
        alert('Failed to start application: ' + e.message);
      }
    })();
    
    // Expose functions for onclick handlers
    window.openCreateAccountModal = openCreateAccountModal;
    window.closeCreateAccountModal = closeCreateAccountModal;
    window.submitCreateAccount = submitCreateAccount;
    window.copyAccountCode = copyAccountCode;
    window.finishCreateAccount = finishCreateAccount;
    window.openLoginModal = openLoginModal;
    window.closeLoginCodeModal = closeLoginCodeModal;
    window.submitLogin = submitLogin;
    window.buyFromHoldings = buyFromHoldings;
    window.sellFromHoldings = sellFromHoldings;
    window.sellAllHolding = sellAllHolding;
    window.saveSettings = saveSettings;
    window.resetToDefaults = resetToDefaults;
    window.showAccountCode = showAccountCode;
    window.copyMyAccountCode = copyMyAccountCode;
