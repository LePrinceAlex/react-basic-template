import './index.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Prix from './components/Prix.jsx'
import Temoignages from './components/Temoignages.jsx'
import Footer from './components/Footer.jsx'


function App() {
    return <div className="min-h-screen bg-rose-50 text-white overflow-hidden">
        <Navbar />
        <Hero />
        <Features />
        <Prix />
        <Temoignages />
        <Footer />
    </div>
    
}

export default App
