import styled, { keyframes } from "styled-components"
import { Link } from 'react-router-dom'
import sifu from './assets/sifu.png'
import music from '../../assets/golden_dragon.mp3'

function Home() {
 return (
    <HomeWrapper>
        <GoPlay to={'/game'}>Jouer !</GoPlay>
        {/* <audio src={music} autoPlay></audio> */}
        <IntroContainer>
            <ImgContainer>
                <Img src={sifu} alt="maitre wang"/>
                <SpeechBubble>Bonjour, je suis Maitre Wang. Sauras-tu me battre au Shi-Fu-Mi ?</SpeechBubble>
            </ImgContainer>
        </IntroContainer>
    </HomeWrapper>
 )
}

const Reveal = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`

const Audio = styled.audio`
    
`

const HomeWrapper = styled.main`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: center;
    position: relative;
    height: 100%;
    overflow: hidden;
`

const GoPlay = styled(Link)`
    background: linear-gradient(to right, #a8ff78, #78ffd6);
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
    position: absolute;
    top: 70px;
    animation: ${Reveal} 1s linear 3s both;
    &:hover{
        transform: scale(1.1)
    }
    @media screen and (max-width: 768px){
        top: 70px;
    }
    @media screen and (max-width: 768px) and (orientation: landscape){
        top: 206px;
        right: 78px;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px){
        font-size: 30px;
        border-radius: 30px;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
        font-size: 25px;
    }
`

const IntroContainer = styled.section`
    display: flex;    
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`
const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 480px;
    position: relative;
    @media screen and (max-width: 768px){
        width: 340px;
        height: 402px;
        flex-direction: column-reverse;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px){
        width: 460px;
        height: 562px;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
        width: 460px;
        height: 462px;
    }
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`

const SpeechBubble = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    background-color: #fff;
    width: 255px;
    height: 150px;
    font-weight: 500;
    text-align: center;
    padding:0 50px;
    border-radius: 50%;
    position: absolute;
    top: -50px;
    right: -230px;
    opacity: 0;
    animation: ${Reveal} 2s linear 1s both;
    @media screen and (max-width: 768px){
        background-color: transparent;
        color: #fff;
        top: -140px;
        left: 0 
    }
    @media screen and (max-width: 768px) and (orientation: landscape){
        width: 150px;
        top: 44px;
        right: 0;
        left: 240px;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px){
        background-color: transparent;
        color: #fff;
        left: 10px;
        font-size: 25px;
        width: 330px;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape){
        background-color: transparent;
        color: #fff;
        top: -152px;
    }
    &::before{
        content: "";
        width: 30px;
        height: 30px;
        background-color: #fff;
        border-radius: 50%;
        position: absolute;
        left: -10px;
        bottom: 5px;
        @media screen and (max-width: 768px){
            display: none;
        }
        @media screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape){
            display: none;
        }
    }
    &::after{
        content: "";
        width: 20px;
        height: 20px;
        background-color: #fff;
        border-radius: 50%;
        position: absolute;
        left: -30px;
        bottom: -15px;
        @media screen and (max-width: 768px){
            display: none;
        }
        @media screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape){
            display: none;
        }
    }
`

export default Home