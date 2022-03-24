import { IFilms, Result } from "src/shared/interfaces/IFilms"
import { useState } from "react"
import { Modal } from "./Modal"
import Constants from "src/shared/data/Constants"
import styled from "styled-components"

export const DisplayMovies = (props: { starWarsMovies: IFilms | any }) => {
  const { starWarsMovies } = props
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [choosenMovie, setChoosenMovie] = useState<Result | []>([])

  const handleModalOpen = (movies: Result) => {
    !openModal && setChoosenMovie(movies)
    !openModal && setOpenModal(true)
  }

  return (
    starWarsMovies.results.map((movies: Result, index: number) => (
      <Wrapper key={index} onClick={() => handleModalOpen(movies)}>
        {openModal && <Modal setOpenModal={setOpenModal} movieData={choosenMovie} />}
        <List>
          <Title>{movies.title}</Title>
          <Date>{movies.release_date}</Date>
        </List>
      </Wrapper>
    ))
  )
}

const Wrapper = styled.div`
  height: calc(13vw - 50px);
  width: 100%;
  border-radius: 5%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  animation-name: fromLeftToRight;
  animation-fill-mode: forwards;
  animation-duration: 2s;
  &:hover {
  box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.5);
  cursor: pointer;
  }
  @media only screen and (max-width: ${Constants.MOBILE_WIDTH}px) {
    height: 100px;
  }
`

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  height: 100%;
  text-align: center;
  background-color: ${Constants.SECONDARY_COLOR};
  color: white;
  border-radius: 5%;
  @media only screen and (max-width: ${Constants.MOBILE_WIDTH}px) {
    grid-template-columns: repeat(4, 1fr);
    background-color: ${Constants.PRIMARY_COLOR};
    border-radius: 0;
    height: 100%;
  }
`

const Title = styled.div`
  font-size: 1.4rem;
  grid-column: 1/5;
  align-self: center;
  padding: 1%;
`

const Date = styled.div`
  grid-column: 1/5;
  padding: 4%;
  @media only screen and (max-width: ${Constants.MOBILE_WIDTH}px) {
    margin-left: 50%;
    font-size: 0.8rem;
  }
`