import React from 'react'
import styled from 'styled-components'
import { ClipDown, FadeIn, Translate } from './Animations'

export const Image = ({ image }) => {
  const { url, alt, category, heading } = image
  
  return (
    <Container>
      <Img src={ url } alt={ alt } />
      <HeaderContainer>
        <Header>
          <Category>{ category }</Category>
          <Heading>{ heading }</Heading>
          <Button>Read Story</Button>
        </Header>
      </HeaderContainer>
    </Container>
  )
}

const Container = styled.div``

const Img = styled.img`
  position: absolute;
  object-fit: cover;
  width: 100vw;
  height: 100%;
  z-index: -10;
`

const HeaderContainer = styled.div`
  width: 100vw;
  height: 80%;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 50%;
  height: 100%;
  padding: 5%;
  animation: ${ FadeIn } 6s infinite, ${ Translate } 6s infinite;
`

const Category = styled.span`
  padding-bottom: 20px;
  text-transform: uppercase;
  font-size: 0.95em;
  font-weight: 600;
`

const Heading = styled.h2`
  padding-bottom: 30px;
  font-size: 2.5em;
`

const Button = styled.button`
  width: 50%;
  padding: 13px;
  border-radius: 8px;
  background: #f30b47;
  color: white;
  font-weight: 700;
  font-size: 1em;
  animation: ${ ClipDown } 6s infinite;

  :hover {
    background: #f30b47;
    filter: brightness(120%);
  }
`