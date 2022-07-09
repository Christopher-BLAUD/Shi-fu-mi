import { createContext, useState } from "react";

export const GameContext = createContext()

export const GameProvider = ({children}) => {
    const [choice, setChoice] = useState("")
    const [playerOneChoice, setPlayerOneChoice] = useState("")
    const [playerTwoChoice, setPlayerTwoChoice] = useState("")
    const [computerChoice, setComputerChoice] = useState(null)
    const [score, setScore] = useState(0)
    const [playerOneScore, setPlayerOneScore] = useState(0)
    const [playerTwoScore, setPlayerTwoScore] = useState(0)
    const [isMute, setIsMute] = useState(false)

    return (
        <GameContext.Provider value={
            { 
                choice, setChoice,
                score, setScore, 
                computerChoice, setComputerChoice, 
                playerOneScore, setPlayerOneScore, 
                playerTwoScore, setPlayerTwoScore,
                playerOneChoice, setPlayerOneChoice,
                playerTwoChoice, setPlayerTwoChoice,
                isMute, setIsMute
            }}>
            {children}
        </GameContext.Provider>
    )
}