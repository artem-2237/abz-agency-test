import axios from 'axios'

const a = axios.create({
  baseURL: process.env.VUE_APP_API_URL
})

export default a
