import { apiKey } from "../apiKey"

const BASE_URL = 'https://bing-news-search1.p.rapidapi.com'

const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': apiKey.newsKey
}

const getCryptoNews = async ({ newsCategory, count }) => (
    await fetch(`${BASE_URL}/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`, { headers: cryptoNewsHeaders }).then((res => res.json()))
)

export { getCryptoNews }