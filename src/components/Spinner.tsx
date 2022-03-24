import styled from 'styled-components'
import logo from '../shared/images/logo.gif'

export const Spinner = () => {
  return (
    <Image src={logo} alt={''} />
  )
}

const Image = styled.img`
  position: absolute;
  top: 50%;  
  left: 50%; 
  transform: translate(-50%, -50%); 
`