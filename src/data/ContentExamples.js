export const contentExamples = {
 "Feature 1": `import { useState } from "react";
import { CodeFlow } from "@codeflow/ai";

function App() {
  const [code, setCode] = useState("");

  const handleAICompletion = async () => {
    const suggestion = await CodeFlow.complete(code);
    setCode(suggestion);
  };

  return (
    <div className="app">
      <CodeEditor 
        onChange={setCode} 
        onAI={handleAICompletion} 
      />
    </div>
  );
}`,
"Feature 2":`import { useState, useEffect } from "react";
import { CodeFlow } from "@codeflow/ai";

export default function Hero() {
  const [isTyping, setIsTyping] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleAISuggestion = async () => {
    const suggestion = await CodeFlow.suggest("hero component");
    return suggestion;
  };

  return (
    <section className="hero">
      <h1 className="text-4xl font-bold">
        {isTyping ? "AI-Powered Development" : "Loading..."}
      </h1>
      <button onClick={handleAISuggestion}>
        Get AI Suggestion
      </button>
    </section>
  );
}`,
};

export const floatCards = {
  "Feature 1": {
    bgColor: "bg-blue-500/20",
    textColor: "text-blue-200",
    iconColor: "text-blue-400",
    contentColor: "text-blue-300",
    icon: "🔥",
    title : "Suis ta progression !",
    content: "Tu peux suivre ta progression et rester motivé grâce à ta série de lecture"
  },
  "Feature 2": {
    bgColor: "bg-emerald-500/20",
    textColor: "text-emerald-200",
    iconColor: "text-emerald-400",
    contentColor: "text-emerald-300",
    icon: "🕮",
    title : "Organises tes prochaines lectures",
    content: "En utilisant la liste et les recommandations, tu peux préparer tes prochaines lectures facilement"
  }
}