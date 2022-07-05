import { createContext, useState } from "react";

export const GameContext = createContext()

export const GameProvider = ({children}) => {
    const [choice, setChoice] = useState("")
    const [computerChoice, setComputerChoice] = useState(null)
    const [score, setScore] = useState(0)

    return (
        <GameContext.Provider value={{ choice, setChoice, score, setScore, computerChoice, setComputerChoice }}>
            {children}
        </GameContext.Provider>
    )
}