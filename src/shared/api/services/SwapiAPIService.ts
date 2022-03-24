import http from '../SwapiAPI'

const getStarWarsMovies = () => {
  return http.SwapiAPI.get('/films')
}

export default {
  getStarWarsMovies
}