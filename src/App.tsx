import { AppContainer } from './App.style'
import NavBar from './components/Navbar/Navbar'
import About from './ui/pages/About/About'
import Home from './ui/pages/Home/Home'

function App() {
  return (
    <AppContainer>
      <NavBar />
      <Home />
      <About />
    </AppContainer>
  )
}

export default App
