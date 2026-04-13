import './index.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Prix from './components/Prix.jsx'
import Temoignages from './components/Temoignages.jsx'
import Footer from './components/Footer.jsx'
import { use } from 'react' 
import { useEffect, useState } from 'react'



function App() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {  
        function handleScroll() {
            setScrolled(window.scrollY > 50);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return <div className="min-h-screen bg-indigo-950 text-white overflow-hidden">
        <Navbar scrolled={scrolled}/>
        <Hero />
        <Features />
        <Prix />
        <Temoignages />
        <Footer />
    </div>
    
}

export default App
