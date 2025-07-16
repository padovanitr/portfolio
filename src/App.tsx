import { AppContainer } from './App.style'
import Footer from './ui/components/Footer/Footer'
import NavBar from './ui/components/Navbar/Navbar'
import About from './ui/pages/About/About'
import Articles from './ui/pages/Articles/Articles'
import Contact from './ui/pages/Contact/Contact'
import Home from './ui/pages/Home/Home'
import Experience from './ui/pages/Experience/Experience'
import Projects from './ui/pages/Projects/Projects'

function App() {
  return (
    <AppContainer>
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Articles />
      <Contact />
      <Footer />
    </AppContainer>
  )
}

export default App
