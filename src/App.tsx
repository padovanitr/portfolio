import { AppContainer } from './App.style'
import NavBar from './components/Navbar/Navbar'
import About from './ui/pages/About/About'
import Articles from './ui/pages/Articles/Articles'
import Home from './ui/pages/Home/Home'
import Service from './ui/pages/Service/Service'

function App() {
  return (
    <AppContainer>
      <NavBar />
      <Home />
      <About />
      <Service />
      <Articles />
    </AppContainer>
  )
}

export default App
