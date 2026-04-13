const features = [
    {
        title: "Suivez votre progression",
        description: "Il est difficile de se retrouver dans ses lectures, utiliser la sauvegarde intelligente pour ne plus vous perdre",
        image: "progression.webp",
        imagePosition: "left"
    },
    {
        title: "Restez motivé",
        description: "Continuer à lire pour conserver votre série de lecture pour mettre en place une routine dans votre vie de lecteur",
        image: "serie.jpg",
        imagePosition: "right"
    }
];
export default function Features() {
    return (
        <section 
         id="features" 
         className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12 sm:mb-16 lg-mb-20">
                    <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                        <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">Votre Compagnon</span>
                        <br />
                        <span className="bg-gradient-to-b from-violet-400 to-purple-400 bg-clip-text text-transparent">De Lecture</span>
                    </h2>
                </div>

                <div className="space-y-16 sm:space-y-20 lg:space-y-32">
                    {features.map((feature, index) => (
                        <div key={index} 
                        className={`flex flex-col md:flex-row items-center gap-8 sm:gap-12 
                        ${feature.imagePosition === "right" ? "md:flex-row-reverse" : ""}`}
                        >
                            <div className="flex-1 w-full">
                                <div className="relative group">
                                    <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10">
                                        <div className="flex items-center space-x-1 sm:space-x-2 mb-3 sm:mb-4">
                                            <div className="flex items-center space-x-1 sm:space-x-2">
                                                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                                                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                                                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                                                </div>
                                            <span className="text-gray-400 ml-2 sm:ml-4 text-xs sm:text-sm">{feature.title}</span>
                                        </div>
                                        <div className="flex items-center w-full md:w-sm lg:w-xl text-center lg:text-left">
                                            <img src={`/${feature.image}`} alt={`${feature.title}`}/>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Text section */}
                            <div className="flex-1 w-full">
                                <div className="max-w-lg mx-auto lg-mx-0 text-center md:text-left">
                                    <h3 className="text-4xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray'300 text-base text-xl sm:text-lg leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}