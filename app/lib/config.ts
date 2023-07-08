const BASE_URL = process.env.NEXT_APP_COIN_BASE_URL
const API_KEY = process.env.NEXT_APP_COIN_API_KEY
const HEADERS = { headers: { 'x-access-token': API_KEY } }

export {
  BASE_URL,
  HEADERS,
}