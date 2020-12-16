import './App.scss'
import { Hero } from './components/Hero'
import { HeroProvider } from './components/HeroContext'


export const App = () => {
  return (
    <HeroProvider>
      <Hero />
    </HeroProvider>
  )
}
