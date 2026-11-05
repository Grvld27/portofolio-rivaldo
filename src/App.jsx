import './App.css'
import Navbar from '../clients/components/navbar'
import Home from '../clients/components/home'
import About from '../clients/components/about'
import Projects from '../clients/components/projects'
import Process from '../clients/components/process'
import Services from '../clients/components/services'
import Contact from '../clients/components/contact'
function App() {
  return (
    <>

<Navbar />
<section id="home">
<Home />
</section>
<section id="about">
<About />
</section>
<section id="project">
<Projects />
</section>
<section id="process">
<Process/>
</section>
<section id="services">
<Services/>
</section>
<section id="contact">
<Contact/>
</section>

<main>

</main>
    </>
  )
}

export default App
