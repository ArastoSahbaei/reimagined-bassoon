import { useEffect, useState } from "react"
import { DisplayCharacters } from "./DisplayCharacters"
import Constants from "src/shared/data/Constants"
import styled from "styled-components"

export const Modal = (props: { setOpenModal: any, movieData: any }) => {
  const [characters, setCharacters] = useState<any>([])

  useEffect(() => {
    const promiseArray: any = []
    props.movieData.characters.forEach((c: any) => {
      promiseArray.push(fetch(c).then(res => res.json()))
      Promise.all(promiseArray).then(res => {
        setCharacters(res)
      })
    })
  }, [props.movieData.characters])

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