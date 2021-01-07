import axios from 'axios';

export default axios.create({
  baseURL: 'https://coronavirus-smartable.p.rapidapi.com/stats/v1',
  headers: {
    'x-rapidapi-key': '75d3ac805bmshb2f76976c670329p1ec772jsne5e48f7d4e9e',
    'x-rapidapi-host': 'coronavirus-smartable.p.rapidapi.com',
  },
});

// 'x-rapidapi-key': 'd62e2f9dabmsha2435425d9d702bp1711bfjsnec7454933ff9',