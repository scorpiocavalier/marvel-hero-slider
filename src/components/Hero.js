import React from 'react'
import styled from 'styled-components'
import { ImageContainer } from './ImageContainer'
import { SelectorsContainer } from './SelectorsContainer'

export const Hero = () => {
  // const [index, setIndex] = useState(0)

  // const setCurrentIndex = newIndex => setIndex(newIndex)

  return (
    <>
      <Container>
        <ImageContainer />
        <SelectorsContainer />
        {/* <ImageContainer index={ index } />
        <SelectorsContainer setCurrentIndex={ setCurrentIndex } /> */}
      </Container>

      {/* <DummyDiv>
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, saepe voluptate eveniet ratione aperiam id voluptatem fuga commodi sapiente tenetur.</h2>
      </DummyDiv> */}
    </>
  )
}

const Container = styled.section`
  // Position relative so that SelectorsContainer can be absolute.
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
`

const DummyDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;
  padding: 20vw;
  background: darkslateblue;
  border: solid white;
`