import styled, { keyframes } from 'styled-components'
import Title from '../../components/Title/index'
import PaperIcon from "../../components/GameButton/Paper/index";
import ScissorsIcon from "../../components/GameButton/Scissors/index";
import RockIcon from "../../components/GameButton/Rock/index";
import Rules from '../../components/Rules/index'
import { useContext } from 'react'
import { GameContext } from "../../utils/context";
import { useNavigate } from 'react-router-dom'

function Game() {
    const { setChoice, setComputerChoice } = useContext(GameContext)
    const navigate = useNavigate()

    const sendChoice = (choice) => {
        setChoice(choice)
        setComputerChoice(Math.floor(Math.random() * (4 - 1) + 1))
        navigate('/result')
    }

    return (
        <GameWrapper>
            <Title/>
            <GameContainer>
                <IconWrapper top="0" left="0" delay="200ms" onClick={() => sendChoice('paper')}>
                    <PaperIcon/>
                </IconWrapper>
                <IconWrapper top="0" right="0" delay="600ms" onClick={() => sendChoice('scissors')}>
                    <ScissorsIcon/>
                </IconWrapper>
                <IconWrapper top="250px" delay="1000ms" onClick={() => sendChoice('rock')}>
                    <RockIcon/>
                </IconWrapper>
            </GameContainer>
            <Rules/>
        </GameWrapper>
    )
}

const ShowGame= keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`

const GameWrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    height: 100%;
    width: 100%;
    @media screen and (max-width: 768px) and (orientation: landscape){
        height: auto;
    } 
`

const GameContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
    width: 500px;
    height: 400px;
    margin-top: 100px;
    margin-bottom: 50px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    position: relative;
    @media screen and (max-width: 767px){
        width: 340px;
        height: 250px;
        margin: 70px 0;
    }
`

const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${ShowGame} 1s linear ${props => props.delay} both;
    cursor: pointer;
    transition: all 500ms;
    &:hover{
        transform: scale(1.2);
        @media screen and (max-width: 768px){
        transform: scale(1);
    }
    }
    @media screen and (max-width: 768px){
        position: initial;
        margin: 10px 0;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px){
        margin: 0 10px;
    }
`
export default Game