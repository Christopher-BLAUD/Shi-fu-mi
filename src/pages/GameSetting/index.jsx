import styled from "styled-components";
import { Link } from 'react-router-dom'

function GameSetting() {
    return (
        <SettingWrapper>
            <TitleGame>
                <TitleWord>SHI</TitleWord>
                <TitleWord marginTop="3px">FU</TitleWord>
                <TitleWord>MI</TitleWord>
            </TitleGame>
            <GameModeContainer>
                <WelcomeMsg>Bienvenue dans Shi fu mi. Veuillez choisir un mode de jeu.</WelcomeMsg>
                <GameMode>
                    <Mode bg="#0fa021" to={'/home-pvp'}>Jouer contre un ami</Mode>
                    <Mode bg="#12127e" to={'/home'} onClick={() => localStorage.clear()}>Jouer contre Maitre Wang</Mode>
                </GameMode>
            </GameModeContainer>
        </SettingWrapper>
    )
}


const SettingWrapper = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const GameModeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    background-color: #fcefd9;
    border-radius: 10px;
    margin: 50px 0;
    @media screen and (max-width: 768px){
        padding: 0;
    }
    @media screen and (max-width: 768px) and (orientation: landscape){
        margin: 100px 0;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px){
        width: 500px;
    }
`

const TitleGame = styled.h1`
    display: flex;
    font-size: 1.7em;
    color: #A16800;
    margin: 20px 0;
`

const TitleWord = styled.span`
    margin: 0;
    font-size: 1.7em;
    margin-top: ${props => props.marginTop};
    color: #A16800;
    @media screen and (max-width: 768px){
        font-size: 35px;
    }
`

const WelcomeMsg = styled.p`
    font-weight: 600;
    font-size: 25px;
    width: 450px;
    text-align: center;
    margin: 10px 0;
    color: #000;
    @media screen and (max-width: 768px){
        font-size: 20px;
        text-align: center;
        padding: 30px 15px;
        width: 300px;
    }
    @media screen and (max-width: 768px) and (orientation: landscape){
        width: 450px;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px){
        width: 450px;
    }
`

const GameMode = styled.div`
    display: flex;
    margin: 20px 0;
    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`

const Mode = styled(Link).attrs(props => ({
    bg: props.bg,    
}))`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 15px;
    border-radius: 25px;
    background-color: ${props =>  props.bg};
    color: #fff;
    margin: 0 50px;
    transition: all 200ms;
    &:hover{
        transform: scale(0.9);
    }
    @media screen and (max-width: 768px){
        min-width: 200px;
        margin: 10px 0;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px){
        margin: 10px 20px;
    }
`
export default GameSetting