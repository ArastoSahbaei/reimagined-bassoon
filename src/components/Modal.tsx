import { useEffect, useState } from "react"
import { DisplayCharacters } from "./DisplayCharacters"
import { ICharacters } from "src/shared/interfaces/ICharacters"
import { useStarWars } from "src/hooks/useStarWars"
import { Result } from "src/shared/interfaces/IFilms"
import Constants from "src/shared/data/Constants"
import styled from "styled-components"

export const Modal = (props: { setOpenModal: (handler: boolean) => void, movieData: Array<Result> | any }) => {
  const [characters, setCharacters] = useState<Array<ICharacters> | []>([])
  const { getCharacters } = useStarWars()

  useEffect(() => {
    getCharacters(props.movieData.characters, setCharacters)
  }, [])

  return (
    <Wrapper>
      <Exit onClick={() => props.setOpenModal(false)}>Close</Exit>
      <Title>{props.movieData.title}</Title>
      <DisplayCharacters characters={characters} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
 	width: 90%;
	height: 90%;
	position: fixed;
	z-index: 100;
	left: 50%;
	top: 50%;  
  transform: translate(-50%, -50%); 
  background-color: #ecf0f1;
  cursor: auto;
  @media only screen and (max-width: ${Constants.MOBILE_WIDTH}px) {
    width: 100%;
	  height: 100%;
  }
`

const Title = styled.p`
  font-size: 2.4rem;
  margin-top: 5%;
  margin-left: 5%;
  @media only screen and (max-width: ${Constants.MOBILE_WIDTH}px) {
    margin-top: 20%;
  }
`

const Exit = styled.p`
  float: right;
  cursor: pointer;
  font-weight: 700;
  font-size: 1.2rem;
  margin-top: 4%;
  margin-right: 4%;
`