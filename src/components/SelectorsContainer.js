import React from 'react'
import styled from 'styled-components'
import { Selector } from './Selector'

// export const SelectorsContainer = ({ setCurrentIndex }) => {
export const SelectorsContainer = () => {
  const selectorTexts = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, sint!",
    "Remo ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, sint!",
    "Machu Pichu dolor sit amet consectetur adipisicing elit. Nesciunt, sint!",
    "Pichu dolor sit amet consectetur adipisicing elit. Nesciunt, sint!",
    "Pikachu dolor sit amet consectetur adipisicing elit. Nesciunt, sint!",
  ]

  return (
    <Container>
      {
        selectorTexts.map((text, index) =>
          <Selector
            key={ index }
            text={ text }
            index={ index }
            // setActiveIndex={ setActiveIndex }
          ></Selector>
        )
      }
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 20vh;
  padding: 0 5%;
  left: 0;
  bottom: 5vh;
`