import { BrowserRouter } from "react-router-dom"
import { About, Contact, Hero, Navbar,  Works } from './components'

const App= ()  => {

  return (
  <BrowserRouter>
      <div className="relative z-0 bg-primary text-white ">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-left bg-fixed">
          <Navbar />
          <Hero />
        <About />
        <Works />
        <Contact /> 
      </div>
      </div>
  </BrowserRouter>
     )
}

export default App
