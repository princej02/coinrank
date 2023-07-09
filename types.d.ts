// export type Coin = {
//   uuid: string;
//   symbol: string;
//   name: string;
//   color: string;
//   iconUrl: string;
//   marketCap: string;
//   price: string;
//   btcPrice: string;
//   listedAt: number;
//   change: string;
//   rank: number;
//   sparkline: string[];
//   lowVolume: boolean
//   coinrankingUrl: string;
//   "24hVolume": string;
// }

export type GetCoinsResponse = {
  status: string;
  data: {
    stats: {
      total: number;
      totalCoins: number;
      totalMarkets: number;
      totalExchanges: number;
      totalMarketCap: string;
      total24hVolume: string;
    };
    coins: Coin[];
  };
}

type CoinLinks = {
  name: string;
  url: string;
  type: string;
}

type CoinSupply = {
  confirmed: boolean;
  supplyAt: number;
  circulating: string;
  total: string;
  max: string;
}

type CoinAllTimeHigh = {
  price: string;
  timestamp: number;
}

type CoinNotice = {
  type: string;
  value: string;
}

export type Coin = {
  uuid: string;
  symbol: string;
  name: string;
  description: string;
  color: string;
  iconUrl: string;
  websiteUrl: string;
  links: CoinLinks[];
  supply: CoinSupply;
  "24hVolume": string;
  marketCap: string;
  fullyDilutedMarketCap: string;
  price: string;
  btcPrice: string;
  priceAt: number;
  change: string;
  rank: number;
  numberOfMarkets: number;
  numberOfExchanges: number;
  sparkline: string[];
  allTimeHigh: CoinAllTimeHigh;
  coinrankingUrl: string;
  lowVolume: boolean;
  listedAt: number;
  notices: CoinNotice[];
  tags: string[];
}

type GetCoinResponse = {
  status: string;
  data: {
    coin: Coin;
  };
}

export type PriceHistoryResponse = {
  status: string;
  data: {
    change: string;
    history: {
      price: string;
      timestamp: number;
    }[];
  };
};