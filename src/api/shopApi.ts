import axios from 'axios'

const shopApi = axios.create({
  baseURL: 'http://pet-shop.buckhill.com.hr/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
})

shopApi.interceptors.request.use((config) => {
  return config
})

export default shopApi
