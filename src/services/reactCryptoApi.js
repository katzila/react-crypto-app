import { apiKey } from "../apiKey"

const BASE_URL = 'https://coinranking1.p.rapidapi.com'

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': apiKey.cryptoKey
}

const getCryptos = async (count) => (
  await fetch(`${BASE_URL}/coins?limit=${count}`, { headers: cryptoApiHeaders }).then((res => res.json()))
)

const getCryptoDetails = async (coinId) => (
  await fetch(`${BASE_URL}/coin/${coinId}}`, { headers: cryptoApiHeaders }).then((res => res.json()))
)

const getCryptoHistory = async ({ coinId, timePeriod }) => (
  await fetch(`${BASE_URL}/coin/${coinId}/history?timePeriod=${timePeriod}}`,{ headers: cryptoApiHeaders }).then((res => res.json()))
)


export { getCryptos, getCryptoDetails, getCryptoHistory }