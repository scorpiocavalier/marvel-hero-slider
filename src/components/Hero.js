import React from 'react'
import styled from 'styled-components'
import { ImageContainer } from './ImageContainer'
import { SelectorsContainer } from './SelectorsContainer'

export const Hero = () => {
  return (
    <Container>
      <ImageContainer />
      <SelectorsContainer />
    </Container>
  )
}

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
`