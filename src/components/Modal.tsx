import { useEffect, useState } from "react"
import { DisplayCharacters } from "./DisplayCharacters"
import { ICharacters } from "src/shared/interfaces/ICharacters"
import { Result } from "src/shared/interfaces/IFilms"
import Constants from "src/shared/data/Constants"
import styled from "styled-components"
import SwapiAPIService from "src/shared/api/services/SwapiAPIService"

export const Modal = (props: { setOpenModal: (handler: boolean) => void, movieData: Result | any }) => {
  const [characters, setCharacters] = useState<any | []>([])

  const getCharacters = () => {
    const promisedArray: ICharacters[] = []
    props.movieData.characters.forEach(async (item: any) => {
      console.log(props.movieData)
      const getID = item.substr(29).replace(/\//g, "")
      try {
        const { data } = await SwapiAPIService.getCharacterByID(getID)
        promisedArray.push(data)
        const promise = await Promise.all(promisedArray)
        setCharacters(promise)
      } catch (error) {
        console.log(error)
      }
    })
  }

  useEffect(() => {
    getCharacters()
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