import React, { useContext } from 'react'
import styled from 'styled-components'
import { HeroContext } from './HeroContext'
import { AutoSlide } from './Animations'
import { Image } from './Image'

export const ImageContainer = () => {
  const { activeIndex } = useContext(HeroContext)

  const images = [
    {
      url: "/hero-1.jpg",
      alt: "hero-1",
      heading: "Lorem ipsum dolor sit amet.",
      category: "Category 1"
    },
    {
      url: "/hero-2.jpg",
      alt: "hero-2",
      heading: "Lorem ipsum dolor sit amet.",
      category: "Category 2"
    },
    {
      url: "/hero-3.jpg",
      alt: "hero-3",
      heading: "Lorem ipsum dolor sit amet.",
      category: "Category 3"
    },
    {
      url: "/hero-4.jpg",
      alt: "hero-4",
      heading: "Lorem ipsum dolor sit amet.",
      category: "Category 4"
    },
    {
      url: "/hero-5.jpg",
      alt: "hero-5",
      heading: "Lorem ipsum dolor sit amet.",
      category: "Category 5"
    },
  ]

  return (
    <Container activeIndex={ activeIndex }>
      { images.map((image, index) => <Image key={ index } image={ image } />) }
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  color: white;
  animation: ${ AutoSlide } 30s infinite;
`