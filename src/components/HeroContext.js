import React, { createContext, useState } from 'react'

export const HeroContext = createContext()

export const HeroProvider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <HeroContext.Provider value={ { activeIndex, setActiveIndex } }>
      { children }
    </HeroContext.Provider>
  )
}