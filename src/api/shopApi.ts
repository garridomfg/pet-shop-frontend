import axios, { AxiosHeaders } from 'axios'
import useAuth from '@/composables/useAuth'

const shopApi = axios.create({
  baseURL: 'http://pet-shop.buckhill.com.hr/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
})

shopApi.interceptors.request.use((config) => {
  const { authToken } = useAuth()

  if (authToken) {
    ;(config.headers as AxiosHeaders).set('Authorization', `Bearer ${authToken.value}`)
  }
  return config
})

export default shopApi
