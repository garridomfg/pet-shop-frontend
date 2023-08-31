import axios, { AxiosHeaders } from 'axios'

const shopApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

shopApi.interceptors.request.use((config) => {
  const authToken = JSON.parse(localStorage.getItem('token'))

  if (authToken) {
    ;(config.headers as AxiosHeaders).set('Authorization', `Bearer ${authToken}`)
  }
  return config
})

export default shopApi
