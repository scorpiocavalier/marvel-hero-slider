import React, { useContext } from 'react'
import styled from 'styled-components'
import { HeroContext } from './HeroContext'
import { Load } from './Animations'

export const Selector = ({ text, index }) => {
  const { setActiveIndex } = useContext(HeroContext)

  return (
    <Container onClick={ () => setActiveIndex(index)}>
      <Timer></Timer>
      <SelectorText>
        <p>{ text }</p>
      </SelectorText>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 1em;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(40px);
  border: 8px solid transparent;
  background-clip: padding-box;

  :not(:last-child) {
    margin-right: 1vw;
  }
`

const Timer = styled.div`
  width: 0%;
  height: 3px;
  margin-top: 10px;
  background: white;
  animation: ${Load} 6s infinite;
  /* background: #ff0d55; */
`

const SelectorText = styled.div`
  flex: 1;
  color: white;
  padding-top: 20px;

  :hover {
    cursor: pointer;
  }
`