import axios from 'axios'

const SwapiAPI = axios.create({
  baseURL: 'https://swapi.dev/api'
})

export default { SwapiAPI }