const features = [
    {
        title: "Suivez votre progression",
        description: "Il est difficile de se retrouver dans ses lectures, utiliser la sauvegarde intelligente pour ne plus vous perdre",
        image: "progression",
        imagePosition: "left"
    },
    {
        title: "Restez motivé",
        description: "Continuer à lire pour conserver votre série de lecture pour mettre en place une routine dans votre vie de lecteur",
        image: "serie",
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

                </div>
            </div>
        </section>
    )
}