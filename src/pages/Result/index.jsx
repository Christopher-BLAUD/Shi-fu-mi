import styled, { keyframes } from "styled-components"
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PaperIcon from "../../components/GameButton/Paper"
import RockIcon from "../../components/GameButton/Rock"
import ScissorsIcon from "../../components/GameButton/Scissors"
import { useContext } from 'react'
import { GameContext } from "../../utils/context";


function Result() {
    const [isPlayerWin, setIsPlayerWin] = useState(false)
    const [isPlayerOneWin, setIsPlayerOneWin] = useState(false)
    const [isPlayerTwoWin, setIsPlayerTwoWin] = useState(false)
    const { choice, playerOneChoice, playerTwoChoice, setPlayerOneChoice, setPlayerTwoChoice } = useContext(GameContext)
    const {score, setScore, playerOneScore, setPlayerOneScore, playerTwoScore, setPlayerTwoScore} = useContext(GameContext)
    const { computerChoice } = useContext(GameContext)
    let playerOne = localStorage.getItem('playerOne')
    let playerTwo = localStorage.getItem('playerTwo')

    // Gestion des résultats contre l'IA
    useEffect(() => {
        if(choice === 'paper' && computerChoice === 2){
            setIsPlayerWin(false)
            if(score > 0){
                setScore(score - 1)
            }
        } else if(choice === 'paper' && computerChoice === 3){
            setIsPlayerWin(true)
            setScore(score + 1)
        } else if(choice === 'scissors' && computerChoice === 1){
            setIsPlayerWin(true)
            setScore(score + 1)
        } else if(choice === 'scissors' && computerChoice === 3){
            setIsPlayerWin(false)
            if(score > 0){
                setScore(score - 1)
            }
        } else if(choice === 'rock' && computerChoice === 1){
            setIsPlayerWin(false)
            if(score > 0){
                setScore(score - 1)
            }
        } else if(choice === 'rock' && computerChoice === 2){
            setIsPlayerWin(true)
            setScore(score + 1)
        } else if(choice === 'paper' && computerChoice === 1){
            setIsPlayerWin(undefined)
        } else if(choice === 'scissors' && computerChoice === 2){
            setIsPlayerWin(undefined)
        } else if(choice === 'rock' && computerChoice === 3){
            setIsPlayerWin(undefined)
        }
    }, [])

    // Gestion des résultats en multijoueur
    useEffect(() => {
        if(playerOneChoice === "paper" && playerTwoChoice === "scissors"){
            setIsPlayerTwoWin(true)
            setPlayerTwoScore(playerTwoScore + 1)
        } else if (playerOneChoice === "paper" && playerTwoChoice === "rock"){
            setIsPlayerOneWin(true)
            setPlayerOneScore(playerOneScore + 1)
        } else if(playerOneChoice === "paper" && playerTwoChoice === "paper"){
            setIsPlayerOneWin(undefined)
            setIsPlayerTwoWin(undefined)
        } else if(playerOneChoice === "scissors" && playerTwoChoice === "rock"){
            setIsPlayerTwoWin(true)
            setPlayerTwoScore(playerTwoScore + 1)
        } else if(playerOneChoice === "scissors" && playerTwoChoice === "paper"){
            setIsPlayerOneWin(true)
            setPlayerOneScore(playerOneScore + 1)
        } else if(playerOneChoice === "scissors" && playerTwoChoice === "scissors"){
            setIsPlayerOneWin(undefined)
            setIsPlayerTwoWin(undefined)
        } else if(playerOneChoice === "rock" && playerTwoChoice === "paper"){
            setIsPlayerTwoWin(true)
            setPlayerTwoScore(playerTwoScore + 1)
        } else if(playerOneChoice === "rock" && playerTwoChoice === "scissors"){
            setIsPlayerOneWin(true)
            setPlayerOneScore(playerOneScore + 1)
        } else if(playerOneChoice === "rock" && playerTwoChoice === "rock"){
            setIsPlayerOneWin(undefined)
            setIsPlayerTwoWin(undefined)
        }
    }, [])

    // Réinitialise les résultats
    const clearResults = () => {
        setPlayerOneChoice("")
        setPlayerTwoChoice("")
        setIsPlayerOneWin(false)
        setIsPlayerTwoWin(false)
    }

    return (choice !== "" || playerOneChoice !== "") ? (
        <ResultWrapper>
            <Choices>
                <PlayerIconWrapper>
                    {playerOne && <PlayerName>{playerOne}</PlayerName>}
                    {!playerOne && <PlayerName>Vous</PlayerName>}
                    {(isPlayerWin || isPlayerOneWin) && 
                        <ShadowWrapper>
                            <Shadow width="300px" height="300px" shadowColor="#0000002e" zIndex="3" delay="100ms"/>
                            <Shadow width="450px" height="450px" shadowColor="#00000014" zIndex="2" delay="200ms"/>
                            <Shadow width="600px" height="600px" shadowColor="#00000017" zIndex="1" delay="300ms"/>                          
                        </ShadowWrapper>
                    }
                    {(choice === 'paper' || playerOneChoice === 'paper') && <PaperIcon/>}
                    {(choice === 'scissors' || playerOneChoice === 'scissors') && <ScissorsIcon/>}
                    {(choice === "rock" || playerOneChoice === 'rock') && <RockIcon/>}
                </PlayerIconWrapper>
                <ResultText>
                    {(isPlayerWin && !playerOneChoice) && <ResultTitle>VICTOIRE !</ResultTitle>}
                    {(isPlayerWin === false && !playerOneChoice) && <ResultTitle>PERDU...</ResultTitle>}
                    {(isPlayerWin === undefined && !playerOneChoice) && <ResultTitle>ÉGALITÉ</ResultTitle>}
                    {isPlayerOneWin && <ResultTitle>Victoire pour { playerOne }</ResultTitle>}
                    {isPlayerTwoWin && <ResultTitle>Victoire pour { playerTwo }</ResultTitle>}
                    {(isPlayerOneWin === undefined && isPlayerTwoWin === undefined) && <ResultTitle>ÉGALITÉ</ResultTitle>}
                    <Redirect to={"/game"} onClick={clearResults}>Jouer</Redirect>
                </ResultText>
                <ComputerIconWrapper>
                    {playerTwo && <PlayerName>{playerTwo}</PlayerName>}
                    {!playerTwo && <PlayerName>Maitre Wang</PlayerName>}
                    {(isPlayerWin === false && !playerOneChoice) && 
                        <ShadowWrapper>
                            <Shadow width="300px" height="300px" shadowColor="#0000002e" zIndex="3" delay="100ms"/>
                            <Shadow width="450px" height="450px" shadowColor="#00000014" zIndex="2" delay="200ms"/>
                            <Shadow width="600px" height="600px" shadowColor="#00000017" zIndex="1" delay="300ms"/>                    
                        </ShadowWrapper>
                    }
                    {isPlayerTwoWin &&
                        <ShadowWrapper>
                            <Shadow width="300px" height="300px" shadowColor="#0000002e" zIndex="3" delay="100ms"/>
                            <Shadow width="450px" height="450px" shadowColor="#00000014" zIndex="2" delay="200ms"/>
                            <Shadow width="600px" height="600px" shadowColor="#00000017" zIndex="1" delay="300ms"/>                    
                        </ShadowWrapper>
                    }
                    {(computerChoice === 1 || playerTwoChoice === 'paper') && <PaperIcon/>}
                    {(computerChoice === 2 || playerTwoChoice === 'scissors') && <ScissorsIcon/>}
                    {(computerChoice === 3 || playerTwoChoice === 'rock') && <RockIcon/>}
                </ComputerIconWrapper>
            </Choices>
        </ResultWrapper>
    ) : (
        <ResultWrapper>
            <NoResults>Veuillez d'abord jouer pour afficher les résultats</NoResults>
            <Redirect to={"/game"} onClick={clearResults}>JOUER</Redirect>
        </ResultWrapper>
    )
}

const ResultWrapper = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 60px 0;
`

const NoResults = styled.p`
    display: flex;
    justify-content: center;
    color: #A16800;
    font-size: 18px;
    @media screen and (max-width: 768px){
        text-align: center;
        margin: 30px 0;
    }
`
const ShowResult = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`
const Choices = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    animation: ${ShowResult} 1s linear both;
    @media screen and (max-width: 767px){
        flex-direction: column;
    }
    @media screen and (max-width: 767px) and (orientation: landscape){
        flex-direction: row;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px){
        flex-direction: row;
        margin: 100px 0;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
        margin: 100px 0;
    }
`

const PlayerIconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
`

const ComputerIconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
    @media screen and (max-width: 768px){
        flex-direction: column-reverse;
    }
    @media screen and (max-width: 768px) and (orientation: landscape){
        flex-direction: column;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px){
        flex-direction: column;
    }
`

const ShadowWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 0;
    top: 87px;
    @media screen and (max-width: 768px){
        display: none;
    }
`

const show = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`

const Shadow = styled.div.attrs(props => ({
    shadowColor: props.shadowColor,
    width: props.width,
    height: props.height,
    zIndex: props.zIndex,
    delay: props.delay
}))`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    border-radius: 50%;
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.shadowColor};
    z-index: ${props => props.zIndex};
    animation: ${show} 500ms ease-in ${props => props.delay} alternate-reverse infinite;
`

const ResultText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px 100px; 
    position: relative;
    z-index: 100;
    @media screen and (max-width: 768px){
        margin: 40px 0;
    }
`

const ResultTitle = styled.h2`
    font-size: 40px;
    color: #A16800;
    margin: 0;
    text-align: center;
    @media screen and (max-width: 768px){
        font-size: 38px;
    }
`

const Redirect = styled(Link)`
    background: linear-gradient(to right, #f12711, #f5af19);
    color: #fff;
    padding: 15px 30px;
    margin: 10px 0;
    font-size: 16px;
    font-weight: 600;
    border: none;
    border-radius: 25px;
    max-width: 400px;
    cursor: pointer;
    transition: all 200ms;
    text-decoration: none;
    &:hover{
        transform: scale(1.1)
    }
    &:hover{
        transform: scale(1.1)
    }
    @media screen and (max-width: 768px){
        padding: 10px 50px;
    }
`

const PlayerName = styled.span`
    color: #f12711;
    font-size: 20px;
    font-weight: 600;
    font-family: Gantari, Verdana, Geneva, Tahoma, sans-serif;
    margin: 40px 0;
    @media screen and (max-width: 768px){
        margin: 20px 0;
    }
`
export default Result