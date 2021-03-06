import { useEffect, useState } from 'react'
import { DisplayMovies } from './components/DisplayMovies'
import { useStarWars } from './hooks/useStarWars'
import { Spinner } from './components/Spinner'
import { IFilms } from './shared/interfaces/IFilms'
import Constants from './shared/data/Constants'
import styled from 'styled-components'

export const App = () => {
  const [starWarsMovies, setStarWarsMovies] = useState<Array<IFilms> | []>([])
  const [loading, setLoading] = useState<boolean>(true)
  const { getStarWarsMovies } = useStarWars()

  useEffect(() => {
    getStarWarsMovies(setStarWarsMovies, setLoading)
  }, [])

  return (
    <Wrapper>
      <MovieListWrapper>
        {
          loading
            ? <Spinner />
            : <DisplayMovies starWarsMovies={starWarsMovies} />
        }
      </MovieListWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(10, 1fr);
  width: 100%;
  height: 100vh;
`

const MovieListWrapper = styled.div`
  display: grid;
  grid-gap: 80px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-row: 1/10;
  grid-column: 1/5;
  align-self: center;
  justify-self: center;
  @media only screen and (max-width: ${Constants.MOBILE_WIDTH}px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
  }
`