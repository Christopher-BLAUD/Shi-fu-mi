import styled from 'styled-components'
import Title from '../../components/Title/index'
import PaperIcon from "../../components/GameButton/Paper/index";
import ScissorsIcon from "../../components/GameButton/Scissors/index";
import RockIcon from "../../components/GameButton/Rock/index";
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
                <IconWrapper top="0" left="0" onClick={() => sendChoice('paper')}>
                    <PaperIcon/>
                </IconWrapper>
                <IconWrapper top="0" right="0" onClick={() => sendChoice('scissors')}>
                    <ScissorsIcon/>
                </IconWrapper>
                <IconWrapper top="250px" onClick={() => sendChoice('rock')}>
                    <RockIcon/>
                </IconWrapper>
            </GameContainer>
        </GameWrapper>
    )
}


const GameWrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 768px){
        height: 100vh;
    }
`

const GameContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 500px;
    height: 400px;
    margin-top: 100px;
    margin-bottom: 50px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    position: relative;
    @media screen and (max-width: 768px){
        flex-direction: column;
        width: 340px;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px){
        flex-direction: row;
    }
`

const IconWrapper = styled.div.attrs(props => ({
    top: props.top,
    left: props.left,
    right: props.right
}))`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
    right: ${props => props.right};
    cursor: pointer;
    transition: all 500ms;
    &:hover{
        transform: scale(1.2);
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