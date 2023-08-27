import axios from 'axios'

const productsApi = axios.create({
  baseURL: 'http://pet-shop.buckhill.com.hr/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
})

productsApi.interceptors.request.use((config) => {
  return config
})

export default productsApi
