export default function Navbar() {
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
                </div>
            </div>
        </nav>
    )
}