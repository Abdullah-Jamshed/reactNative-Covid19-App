import axios from 'axios';

export default axios.create({
  baseURL: 'https://coronavirus-smartable.p.rapidapi.com/stats/v1',
  headers: {
    'x-rapidapi-key': 'd62e2f9dabmsha2435425d9d702bp1711bfjsnec7454933ff9',
    'x-rapidapi-host': 'coronavirus-smartable.p.rapidapi.com',
  },
})