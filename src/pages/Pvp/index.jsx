import styled from "styled-components";
import { Link } from 'react-router-dom'

function Pvp() {
    return (
        <InfoWrapper>
            <InfoContainer>
                <InfoSpeech>Veuillez saisir vos prénoms respectifs</InfoSpeech>
                <InputContainer>
                    <PlayerName required/>
                    <Label>Joueur 1</Label>
                </InputContainer>
                <InputContainer>
                    <PlayerName required/>
                    <Label>Joueur 2</Label>
                </InputContainer>
                <Button to={'/game'}>Jouer</Button>
            </InfoContainer>
        </InfoWrapper>
    )
}

const InfoWrapper = styled.main`

`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const PlayerName = styled.input`
    padding: 10px;
    min-width: 400px;
    border: 2px solid #000;
    background-color: transparent;
    border-radius: 10px;
    outline: none;
    font-family: Gantari, Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
    font-size: 18px;
    &:focus, :valid{
        border: 2px solid #18af00;
    }
    @media screen and (max-width: 768px){
        min-width: 320px;
    }
`

const Label = styled.span`
    position: absolute;
    top: 26%;
    left: 10px;
    font-size: 14px;
    color: #0000008f;
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
        background-color: #FFE9C2;
        padding: 0 10px;
    }
`

const InfoSpeech = styled.p`
    font-size: 20px;
    font-weight: 800;
    margin: 20px 0;
    @media screen and (max-width: 768px){
        font-size: 16px;
    }
`

const Button = styled(Link)`
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
export default Pvp