import { Check, Star } from "lucide-react"

const prix = [
    {
        name: "Free",
        price: "0",
        description: "Essayer la version gratuite",
        features: [
            "Gestion de votre bibliothèque",
            "Ajout de marques pages",
            "Accès à la recherche de livres"
        ],
        mostPopular: false
    },
    {
        name: "Premium",
        price: "3.99",
        description: "Parfait pour les lecteurs aguerris",
        features: [
            "Toutes les fonctionnalités gratuites",
            "Nombre de bibliothèque illimitée",
            "Ajout rapide par code barre",
            "Système de recommandation",
            "Zéro pub"
        ],
        mostPopular: true
    },
    {
        name: "Sans pub",
        price: "0.99",
        description: "Retrait permanente de pub",
        features: [
            "Toutes les fonctionnalités gratuites",
            "Zéro pub"
        ],
        mostPopular: false
    }
]

export default function Prix() {
    return (
        <section id="prix" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12 sm:mb-16 lg-mb-20">
                    <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                        <span className="bg-gradient-to-b from-violet-400 to-purple-400 bg-clip-text text-transparent">Plan Tarifaire</span>
                        <br />                        
                        <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">Simple et Transparent</span>
                    </h2>
                    <p className="text-gray-400 txet-base text-xl sm:text-lg max-w-2xl mx-auto">
                        Choisissez la version qui vous convient le mieux. La version Premium inclut un essai de 7 jours gratuits.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6">
                    {prix.map((price, index) => (
                        <div key={index} className={`relative bg-purple-900/40 backdrop-blur-sm border rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-300 overflow-visible group flex flex-col h-full 
                            ${price.mostPopular 
                                ? "border-violet-500 shadow-2xl shadow-violet-500/50 lg:scale-105" 
                                : "border-purple-800 hover:border-purple-700"}`}
                        >
                                          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 pointer-events-none rounded-lg"/>
                            {price.mostPopular && (
                                <div className="absolute -top-2 sm:-top-3 left-1/2 -translate-x-1/2 z-10">
                                    <div className="flex items-center space-x-1 px-3 sm:px-4 py-1 sm:py-1.5 bg-gradient-to-b from-violet-500 to-purple-500 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                                        <Star className="w-3 h-3 sm:w-3 sm:h-3 fill-white" />
                                        <span>Le plus populaire</span>
                                    </div>
                                </div>
                            )}
                            <div className="text-center mb-6 sm:mb-8">
                                <h3 className="text-xl sm:text-2xl font-bold mb-2">{price.name}</h3>
                                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">{price.description}</p>
                                <div className="flex items-baseline justify-center">
                                    <span className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                                        {price.price}€
                                    </span>
                                    <span className="text-gray-400 ml-1 sm:ml-2 text-sm sm:text-base">/mois</span>
                                </div>
                            </div>
                            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-row">
                                {price.features.map((feature, featureindex) => (
                                    <li key={featureindex} className="flex items-start space-x-2 sm:space-x-3">
                                        <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-violet-500/20 flex items-center justify-center mt-0.5">
                                            <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-violet-400" />
                                        </div>
                                        <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button 
                                className={`w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold transition-all duration-300 mt-auto hover:scale-102 cursor-pointer text-sm sm:text-base
                                    ${price.mostPopular 
                                        ? "bg-gradient-to-b from-violet-500 to-purple-500" 
                                        : "bg-white/5 border border-white/10 hover:bg-white/10"}`}>
                                <span>Voir la démo</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}