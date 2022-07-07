import styled, { keyframes } from "styled-components"
import { Link } from 'react-router-dom'
import Seater from "../../components/Seater/index"
import sifu from './assets/sifu.png'

function Home() {
 return (
    <HomeWrapper>
        <IntroContainer>
            <ImgContainer>
                <Img src={sifu} alt="maitre wang"/>
                <SpeechBubble>Bonjour, je suis Maitre Wang. Seras-tu capable de me vaincre ?</SpeechBubble>
            </ImgContainer>
        </IntroContainer>
        <Seater/>
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

const HomeWrapper = styled.main`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: center;
    position: relative;
    height: 100%;
    width: 1000px;
    overflow: hidden;
    @media screen and (max-width: 768px) and (orientation: landscape){
        height: auto;
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
    @media screen and (max-width: 768px) and (orientation: landscape){
        height: 250px;
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
    color: #A16800;
    background-color: #fff;
    width: 255px;
    height: 150px;
    font-weight: 500;
    text-align: center;
    padding:0 50px;
    border-radius: 50%;
    position: absolute;
    top: -0px;
    right: -230px;
    opacity: 0;
    animation: ${Reveal} 2s linear 1s both;
    @media screen and (max-width: 768px){
        background-color: transparent;
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