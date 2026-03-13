
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { useState } from "react";


export default function Navbar() {
    
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-rose-300/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
                    <div className="flex items-center space-x-1 group cursor-pointer">
                        <div>
                            <img src="/book.webp" alt="myownlibrary" className="w-6 sm:w-8"/>
                        </div>
                            <span className="text-lg sm:text-xl md:text-2xl font-medium">
                                <span className="text-pink-800">myOwn</span>
                                <span className="text-green-600">LIBRARY</span>
                            </span>
                    </div>

                    {/* Nav Links */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        <a href="#features" className="text-pink-900 hover:text-pink-700 text-sm lg:text-base">Fonctionnalités</a>
                        <a href="#prix" className="text-pink-900 hover:text-pink-700 text-sm lg:text-base">Prix</a>
                        <a href="#temoignages" className="text-pink-900 hover:text-pink-700 text-sm lg:text-base">Témoignages</a>
                    </div>

                    <button className="md:hidden items-center px-2 text-pink-900 hover:text-pink-700" onClick={() => setMobileMenuOpen((prev) => !prev)}>
                        {mobileMenuOpen ?
                        <X className="w-5 h-5 sm:w-6 sm:h-6"/>
                        :
                        <Menu className="w-5 h-5 sm:w-6 sm:h-6"/>
                        }
                    </button>
                </div>
            </div>

            {mobileMenuOpen && 
                <div className="md:hidden flex bg-rose-300/10 backdrop-blur-lg border-t border-rose-100 animate-in slide-in-from-top duration-300">
                    <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
                        <a 
                            href="#features" 
                            className="block text-pink-900 hover:text-pink-700 text-sm lg:text-base"
                            onClick={() => setMobileMenuOpen(false)}>Fonctionnalités</a>
                        <a 
                            href="#prix" 
                            className="block text-pink-900 hover:text-pink-700 text-sm lg:text-base"
                            onClick={() => setMobileMenuOpen(false)}>Prix</a>
                        <a 
                            href="#temoignages" 
                            className="block text-pink-900 hover:text-pink-700 text-sm lg:text-base"
                            onClick={() => setMobileMenuOpen(false)}>Témoignages</a>
                    </div>
                </div>
            }
        </nav>
    )
}