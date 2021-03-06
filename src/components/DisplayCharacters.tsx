import { ICharacters } from "src/shared/interfaces/ICharacters"
import Constants from "src/shared/data/Constants"
import styled from "styled-components"

export const DisplayCharacters = (props: { characters: Array<ICharacters> | [] }) => {
  return (
    <Wrapper>
      <Title>Characters</Title>
      <Grid>
        {props.characters.map((element: ICharacters, index: number) =>
          <Paragraph key={index}>{element.name}</Paragraph>
        )}
      </Grid>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 95%;
  width: 90%;
  margin: 0 auto;
  @media only screen and (max-width: ${Constants.MOBILE_WIDTH}px) {
    height: 100%;
    width: 100%;
  }
`

const Grid = styled.div`
 height: 59%;
 margin-top: 5%;
 column-count: 3;
 column-fill: auto !important;
 @media only screen and (max-width: ${Constants.MOBILE_WIDTH}px) {
   column-count: 1;
  }
`

const Title = styled.p`
  margin-top: 5%;
  font-size: 2.2rem;
  @media only screen and (max-width: ${Constants.MOBILE_WIDTH}px) {
    display: none;
  }
`

const Paragraph = styled.p`
  font-size: 0.9rem;
  padding: 1.4%;
`