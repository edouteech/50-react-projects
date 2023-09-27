import { apiOptions, matchesType } from "@/types"

const options:apiOptions =  {
  next: { revalidate: 30 },
  headers: {
    "X-Auth-Token": process.env.API_TOKEN,
    "Content-Type": "application/json",
  },
}

const todayDate = new Date()
// const getDateMonth = new Date(todayDate.getTime());
// getDateMonth.setDate(todayDate.getDate() - 1);
// const year = getDateMonth.getFullYear()
// const month = String(getDateMonth.getMonth() + 1).padStart(2, '0');
// const day = String(getDateMonth.getDate()).padStart(2, '0');

const MyDate = (days = 0) => {
  const todayDate = new Date()
  const getDateMonth = new Date(todayDate.getTime());
  getDateMonth.setDate(todayDate.getDate() - days);
  const year = getDateMonth.getFullYear()
  const month = String(getDateMonth.getMonth() + 1).padStart(2, '0');
  const day = String(getDateMonth.getDate()).padStart(2, '0');
  return [year, month, day].join('-');
}

const yesterday = MyDate(1);
const today = MyDate(0);
const ten_day = MyDate(3);

export const getMatchesFootball = async () => {
  const matchData = await fetch('https://api.football-data.org/v4/matches',options)
  return matchData.json()
}
  
export const getMatchesFootballFinished = async () => {
  const matchData = await fetch(`https://api.football-data.org/v4/matches?date=${yesterday}`,options)
  return matchData.json()
}

export const getNewsInfo = async () => {
  const newsData = await fetch(`https://newsapi.org/v2/everything?apiKey=${process.env.API_TOKEN_NEWS}&q=soccer&pageSize=5`,{next:{revalidate:30}})
  return newsData.json()
}

export const filterLeague = async (id: string) => {
  try {
    console.log(`https://api.football-data.org/v4/competitions/${id}/matches?dateFrom=${ten_day}0&dateTo=${today}`);
    
    const response = await fetch(`https://api.football-data.org/v4/competitions/${id}/matches`, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const matchData = await response.json();
    // console.log(matchData);
    return matchData
  } catch (error) {
    console.error('Error fetching data:', error);
    return 'no matches availables'
  }
}
// export const filterLeague = async (id:string) => {
//   // https://api.football-data.org/v4/competitions/2021/matches
//   // const getEnglishLeague = await getMatchesFootball()
//   // const filterPremierLeague:matchesType[] = getEnglishLeague?.matches
//   // const getData = filterPremierLeague.filter((item) => item.competition.name === filterData)
//   const matchData = await fetch(`https://api.football-data.org/v4/competitions/2021/matches`,options)
//   // return matchData.json()
//   console.log(matchData.json());
//   // const matchJson = matchData.json()
//   // const matches:matchesType[] = matchJson?.matches
//   // const getData = filterPremierLeague.filter((item) => item.competition && item.competition.name === filterData);
//   // return matches
// }