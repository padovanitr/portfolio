import { AppContainer } from './App.style'
import Footer from './components/Footer/Footer'
import NavBar from './components/Navbar/Navbar'
import About from './ui/pages/About/About'
import Articles from './ui/pages/Articles/Articles'
import Contact from './ui/pages/Contact/Contact'
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
      <Contact />
      <Footer />
    </AppContainer>
  )
}

export default App
