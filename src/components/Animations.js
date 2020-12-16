import { keyframes } from 'styled-components'

export const FadeIn = keyframes`
  0% { opacity: 0; }
  25% { opacity: 1; }
  50% { opacity: 1; }
  60% { opacity: 0; }
  100% { opacity: 0; }
`

export const Translate = keyframes`
  0% { transform: translateX(50%) }
  25% { transform: translateX(0%) }
`

export const Load = keyframes`
  from { width: 0%; }
  to { width: 100%; }
`

export const Slide = index => `translateX(${ index * -100 }vw)`

export const AutoSlide = keyframes`
  0% { transform: translateX(0); }
  10% { transform: translateX(0); }

  20% { transform: translateX(-100vw); }
  30% { transform: translateX(-100vw); }

  40% { transform: translateX(-200vw); }
  50% { transform: translateX(-200vw); }

  60% { transform: translateX(-300vw); }
  70% { transform: translateX(-300vw); }

  80% { transform: translateX(-400vw); }
  90% { transform: translateX(-400vw); }

  100% { transform: translateX(0); }
`

export const ClipDown = keyframes`
  0% { clip-path: inset(0 0 100% 0); }
  25% { clip-path: inset(0 0 100% 0); }
  35% { clip-path: inset(0 0 0 0); }
`

// TODO: Interrupt animation