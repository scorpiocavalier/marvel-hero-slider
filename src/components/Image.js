import React from 'react'
import styled from 'styled-components'
import { ClipDown, FadeIn, Translate, ZoomIn } from './Animations'

export const Image = ({ image }) => {
  const { url, alt, category, heading } = image

  return (
    <Container>
      <ImageContainer>
        <Img src={ url } alt={ alt } />
      </ImageContainer>
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

const Container = styled.div`
  height: 100%;
  position: relative;
`

const ImageContainer = styled.div`
  height: 100%;
  overflow: hidden;
`

const Img = styled.img`
  object-fit: cover;
  width: 100vw;
  height: 100%;
  z-index: -10;
  animation: ${ ZoomIn } 6s infinite;
`

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 70%;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 50%;
  height: 100%;
  padding-left: 5%;
  animation:
    ${ FadeIn } 6s infinite,
    ${ Translate } 6s infinite;
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