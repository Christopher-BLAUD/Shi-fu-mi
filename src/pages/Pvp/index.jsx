import styled from "styled-components"
import { useNavigate } from 'react-router-dom'
import { useState } from "react"
import SettingButton from '../../components/Settings/index'
import Mute from "../../components/Mute"


function Pvp() {
const [playerOne, setPlayerOne] = useState('')
const [playerTwo, setPlayerTwo] = useState('')
const [isInfoCompleted, setIsInfoCompleted] = useState(true)
let navigate = useNavigate();

const setPlayers = () => {
    if(playerOne !== '' && playerTwo !== ''){
        setIsInfoCompleted(true)
        localStorage.setItem('playerOne', playerOne.toUpperCase());
        localStorage.setItem('playerTwo', playerTwo.toUpperCase());
        navigate('/game', {replace: true})
    } else{
        setIsInfoCompleted(false)
    }
}

    return (
        <InfoWrapper>
            <InfoContainer>
                <InfoSpeech>Entrez vos prénoms</InfoSpeech>
                {isInfoCompleted ? (
                    <InputContainer>
                        <PlayerName borderColor="#af7317" onChange={(e) => setPlayerOne(e.target.value)} required/>
                        <Label color="#af73179e">Joueur 1</Label>          
                    </InputContainer>
                ) : (
                    <InputContainer>
                        <PlayerName borderColor="red" onChange={(e) => setPlayerOne(e.target.value)} required/>
                        <Label color="red">Joueur 1</Label>          
                    </InputContainer>
                )}
                {isInfoCompleted ? (
                    <InputContainer>
                        <PlayerName borderColor="#af7317" onChange={(e) => setPlayerTwo(e.target.value)} required/>
                        <Label color="#af73179e">Joueur 2</Label>          
                    </InputContainer>
                ) : (
                    <InputContainer>
                        <PlayerName borderColor="red" onChange={(e) => setPlayerTwo(e.target.value)} required/>
                        <Label color="red">Joueur 2</Label>          
                    </InputContainer>
                )}
                <Button onClick={setPlayers}>Jouer</Button>
            <SettingButton/>
            <Mute/>
            </InfoContainer>
        </InfoWrapper>
    )
}

const InfoWrapper = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fcefd9;
    border-radius: 10px;
    border: 3px solid #fff;
    padding: 15px 50px;
    @media screen and (max-width: 768px){
        padding: 10px;
    }
`

const PlayerName = styled.input.attrs(props => ({
    borderColor: props.borderColor
}))`
    padding: 10px;
    min-width: 400px;
    border: 2px solid ${props => props.borderColor};
    background-color: transparent;
    border-radius: 15px;
    outline: none;
    font-family: Gantari, Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
    font-size: 18px;
    &:focus, :valid{
        border: 2px solid #18af00;
    }
    @media screen and (max-width: 768px){
        min-width: 270px;
    }
`

const Label = styled.span.attrs(props => ({
    color: props.color
}))`
    position: absolute;
    top: 26%;
    left: 10px;
    font-size: 14px;
    font-weight: 700;
    color: ${props => props.color};
    transition: all 200ms ease-in-out;
`

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 15px 0;
    position: relative;
    & input:focus ~ span, input:valid ~ span{
        transform: translateY(-20px);
        font-size: 12px;
        color: #18af00;
        background-color: #fcefd9;
        padding: 0 10px;
    }
`

const InfoSpeech = styled.p`
    font-size: 20px;
    font-weight: 600;
    margin: 20px 0;
    @media screen and (max-width: 768px){
        font-size: 16px;
    }
`

const Button = styled.button`
    background-color: #00ad00;
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
        transform: scale(0.9)
    }
    @media screen and (max-width: 768px){
        padding: 10px 50px;
    }
`
export default Pvp