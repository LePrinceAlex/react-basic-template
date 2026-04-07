import { ArrowRight, ChevronDown, Play, Sparkles } from "lucide-react";
import { act, useEffect, useState } from "react"
import SyntaxHighlighter from "react-syntax-highlighter";
import { contentExamples, floatCards } from "../data/ContentExamples";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Hero() {
    const [mousePosition, setMousPosition] = useState({x: 0, y: 0})
    const [activeTab, setActiveTab] = useState("Feature 1");


    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousPosition({x: e.clientX, y: e.clientY});
        }

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        }
    }, []);

    const activeCard = floatCards[activeTab];

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 opacity-30" 
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(156, 59, 246, 0.15), transparent 40%)`,
                }}
            />

            <div className="max-w-7xl mx-auto text-center relative w-full">
                <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 text-center lg:text-left gap-6 sm:gap-8 lg:gap-12 items-center relative">
                    <div>
                        <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-purple-500/20 rounded-full mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700">
                            <Sparkles  className="w-4 h-4 text-purple-400"/>
                            <span className="text-xs sm:text-sm text-purple-200">Introducing myOwnLIBRARY</span>
                        </div>

                        <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-100 leading-tight">
                            <span className="bg-gradient-to-r from-white via-purple-100 to-violet-100 bg-clip-text text-transparent block mb-1 sm:mb-2">Liser, Sauvegarder</span>
                            <span className="bg-gradient-to-b from-purple-400 via-violet-300 to-purple-400 bg-clip-text text-transparent block mb-1 sm:mb-2">Recommencer</span>
                            <span className="bg-gradient-to-r from-white via-purple-100 to-violet-100 bg-clip-text text-transparent block mb-1 sm:mb-2">Avec myOwnLIBRARY</span>
                        </h1>

                        <p className="text-md sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto lg-mx-0 mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-700 delay-200 leading-relaxed">
                            Rendez vos lectures plus ludiques et durables, 
                            pré-enregistrer les futures histoires qui vous feront vibrer 
                            et gardez un oeil sur votre progression.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12 animate-in slide-in-from-bottom duration-700 delay-300">
                            <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-b from-purple-600 to-purple-400 rounded-lg font-semibold text-sm sm:text-base tansition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2">
                                <span>Télécharger l'application</span>
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"/>
                            </button>

                            <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold text-sm sm:text-base tansition-all duration-300 hover:bg-white/10 flex items-center justify-center space-x-2">
                                <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 duration-200 transition-colors">
                                    <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-white"/>
                                </div>
                                <span>Voir la démo</span>
                            </button>
                        </div>
                    </div>
                    <div className="relative order-2 w-full">
                        <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10">
                            <div className="bg-gradient-to-br from-gray-900/20 to gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] sm:h-[350px] lg:h-[450px] border border-white/5">
                                <div className="flex items-center justify-between px-3 sm:px-4 py-3 sm:py-5 bg-white/5 backdrop-blur-sm border-b border-white/10">
                                    <div className="flex items-center space-x-2">
                                        <div className="flex items-center space-x-1 sm:space-x-2">
                                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <span className="text-xs sm:text-sm text-gray-300">myOwnLIBRARY</span>
                                    </div>
                                    <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400"/>
                                </div>
                                
                                <div className="p-3 sm:p-4 relative h-full">
                                    {/* TAB Cnntent */}
                                    <div className="flex space-x-1 sm:space-x-2 mb-3 sm:mb-4 overflow-x-auto">
                                        <button className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border 
                                            ${activeTab === "Feature 1" 
                                                ? "bg-indigo-500/30 text-white border-indigo-400/20/" 
                                                : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"} 
                                            transition-all duration-200 wjitespace-nowrap`} onClick={() => setActiveTab("Feature 1")}
                                            >
                                                Feature 1
                                        </button>
                                        <button className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border 
                                            ${activeTab === "Feature 2" 
                                                ? "bg-indigo-500/30 text-white border-indigo-400/20/" 
                                                : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"} 
                                            transition-all duration-200 wjitespace-nowrap`} onClick={() => setActiveTab("Feature 2")}
                                            >
                                                Feature 2
                                        </button>
                                    </div>

                                    {/* Feature Cnntent */}
                                    <div className="relative overflow-hidden flex-grow">
                                        <SyntaxHighlighter language="javascript" style={nightOwl} 
                                            customStyle={{
                                                margin: 0, 
                                                borderRadius: "8px", 
                                                fontSize: "11px", 
                                                lineHeight:"1.4", 
                                                height: "100%", 
                                                border: "1px solid #1e1e1e"
                                            }}>
                                            {contentExamples[activeTab]}
                                        </SyntaxHighlighter>
                                    </div>
                                </div>
                            </div>
                            <div className={`hidden lg:block absolute bottom-4 right-4 transform translate-x-8 translate-y-8 w-72 ${activeCard.bgColor} backdrop-blur-xl rounded-lg p-4 border border-white/20`}>
                                <div className="flex items-center space-x-2 mb-2">
                                    <div className={`w-6 h-6 ${activeCard.iconColor} flex items-center justify-center text-sm font-bold}`}>{activeCard.icon}</div>
                                    <span className={`text-sm font-medium ${activeCard.titleColor}`}>{activeCard.title}</span>
                                </div>
                                <div className={`text-sm text-left ${activeCard.contentColor}`}>{activeCard.content}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </section>
    )
}