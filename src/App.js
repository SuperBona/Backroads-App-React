import About from './components/About'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Tours from './components/Tours'

/* ctrl + D per selezionare manualmente un elemento per tutto il documento
shift + ctrl + L per selezionare quell'eleemento automaticamente in tutto il testo
*/
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Tours></Tours>
      <Footer></Footer>
    </>
  )
}

export default App
