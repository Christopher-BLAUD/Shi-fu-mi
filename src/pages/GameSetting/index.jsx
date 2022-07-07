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
            <WelcomeMsg>Bienvenue dans l'univers du Shi fu mi. Avant tout, veuillez choisir un mode de jeu.</WelcomeMsg>
            <GameMode>
                <Mode bg="#0fa021" to={'/home-pvp'}>Jouer contre un ami</Mode>
                <Mode bg="#12127e" to={'/home'}>Jouer contre Maitre Wang</Mode>
            </GameMode>
        </SettingWrapper>
    )
}


const SettingWrapper = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    position: relative;
`

const TitleGame = styled.h1`
    display: flex;
    font-size: 1.7em;
    color: #A16800;
    position: absolute;
    top: 20px;
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
    font-family: Kalam, Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 600;
    font-size: 25px;
    margin: 10px 0;
    @media screen and (max-width: 768px){
        font-size: 20px;
        text-align: center;
        padding: 0 15px;
        margin-top: 100px;
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
    @media screen and (max-width: 768px){
        min-width: 200px;
        margin: 10px 0;
    }
`
export default GameSetting