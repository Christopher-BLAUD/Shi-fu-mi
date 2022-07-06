import styled, { keyframes } from "styled-components"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PaperIcon from "../../components/GameButton/Paper"
import RockIcon from "../../components/GameButton/Rock"
import ScissorsIcon from "../../components/GameButton/Scissors"
import Title from '../../components/Title/index'
import { useContext } from 'react'
import { GameContext } from "../../utils/context";


function Result() {
    const [isPlayerWin, setIsPlayerWin] = useState(false)
    const { choice } = useContext(GameContext)
    const {score, setScore} = useContext(GameContext)
    const { computerChoice } = useContext(GameContext)


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

    return choice !== "" ? (
        <ResultWrapper>
                <Title/>
            <Choices>
                <PlayerIconWrapper>
                    {isPlayerWin && 
                        <ShadowWrapper>
                            <Shadow width="300px" height="300px" shadowColor="#0000002e" zIndex="3" delay="100ms"/>
                            <Shadow width="450px" height="450px" shadowColor="#00000014" zIndex="2" delay="200ms"/>
                            <Shadow width="600px" height="600px" shadowColor="#00000017" zIndex="1" delay="300ms"/>                          
                        </ShadowWrapper>
                    }
                    {choice === 'paper' && <PaperIcon/>}
                    {choice === 'scissors' && <ScissorsIcon/>}
                    {choice === "rock" && <RockIcon/>}
                </PlayerIconWrapper>
                <ResultText>
                    {isPlayerWin && <ResultTitle>VICTOIRE !</ResultTitle>}
                    {isPlayerWin === false && <ResultTitle>Perdu ...</ResultTitle>}
                    {isPlayerWin === undefined && <ResultTitle>Egalité</ResultTitle>}
                    <Redirect to={"/game"}>Jouer</Redirect>
                </ResultText>
                <ComputerIconWrapper>
                {isPlayerWin === false && 
                        <ShadowWrapper>
                            <Shadow width="300px" height="300px" shadowColor="#0000002e" zIndex="3" delay="100ms"/>
                            <Shadow width="450px" height="450px" shadowColor="#00000014" zIndex="2" delay="200ms"/>
                            <Shadow width="600px" height="600px" shadowColor="#00000017" zIndex="1" delay="300ms"/>                    
                        </ShadowWrapper>
                    }
                    {computerChoice === 1 && <PaperIcon/>}
                    {computerChoice === 2 && <ScissorsIcon/>}
                    {computerChoice === 3 && <RockIcon/>}
                </ComputerIconWrapper>
            </Choices>
        </ResultWrapper>
    ) : (
        <ResultWrapper>
            <NoResults>Veuillez d'abord jouer pour afficher les résultats</NoResults>
            <Redirect to={"/game"}>JOUER</Redirect>
        </ResultWrapper>
    )
}

const ResultWrapper = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
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
        margin: 30px 0;
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
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
`

const ComputerIconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
`

const ShadowWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 109px;
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
        margin: 25px 0;
    }
`

const ResultTitle = styled.h2`
    font-size: 40px;
    color: #A16800;
    margin: 0;
    @media screen and (max-width: 768px){
        font-size: 30px;
    }
`

const Redirect = styled(Link)`
    background: linear-gradient(to right, #f12711, #f5af19);
    letter-spacing: 1px;
    color: #000;
    padding: 15px 30px;
    margin: 10px 0;
    font-size: 16px;
    font-weight: 500;
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
        padding: 10px 30px;
    }
`
export default Result