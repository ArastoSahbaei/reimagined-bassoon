import http from '../SwapiAPI'

const getStarWarsMovies = () => {
  return http.SwapiAPI.get('/films')
}

const getCharacterByID = (id: number) => {
  return http.SwapiAPI.get(`/people/${id}`)
}

export default {
  getStarWarsMovies,
  getCharacterByID
}