import { AppContainer } from './App.style'
import NavBar from './components/Navbar/Navbar'
import About from './ui/pages/About/About'
import Home from './ui/pages/Home/Home'
import Service from './ui/pages/Service/Service'

function App() {
  return (
    <AppContainer>
      <NavBar />
      <Home />
      <About />
      <Service />
    </AppContainer>
  )
}

export default App
