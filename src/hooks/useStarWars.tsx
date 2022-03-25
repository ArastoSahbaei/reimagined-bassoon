import SwapiAPIService from "src/shared/api/services/SwapiAPIService"
import { ICharacters } from "src/shared/interfaces/ICharacters"

export const useStarWars = () => {

  const getCharacters = (list: [string], setLocalComponentState: (prevState: (any)) => void) => {
    list.forEach(async (item: any) => {
      const getID = item.substr(29).replace(/\//g, "")
      try {
        const { data } = await SwapiAPIService.getCharacterByID(getID)
        setLocalComponentState((prevState: [ICharacters]) => [...prevState, data])
      } catch (error) {
        console.log(error)
      }
    })
  }

  const getStarWarsMovies = async (setLocalComponentState: (data: any) => void, setLoading?: (handler: boolean) => void) => {
    try {
      const { data } = await SwapiAPIService.getStarWarsMovies()
      setLocalComponentState(data)
      setLoading && setLoading(false)
    } catch (error) {
      setLoading && setLoading(false)
    }
  }

  return {
    getCharacters,
    getStarWarsMovies
  }
}