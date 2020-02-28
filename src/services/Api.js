import axios from 'axios'

const api = axios.create({
  baseURL: 'http://172.16.19.153:5000/api/v1'
})

export default api;