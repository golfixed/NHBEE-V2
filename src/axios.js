import Axios from 'axios'

const axios = Axios.create({
  baseURL: 'http://nhbee.kmutt.ac.th/api/',
  timeout: 10000
})

export default axios
