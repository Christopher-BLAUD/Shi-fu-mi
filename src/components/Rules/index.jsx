import styled, { keyframes } from "styled-components";
import { useState } from "react";
import PaperImg from '../GameButton/Paper/assets/icon-paper.svg'
import ScissorsImg from '../GameButton/Scissors/assets/icon-scissors.svg'
import RockImg from '../GameButton/Rock/assets/icon-rock.svg'

function Rules() {
    const [isVisible, setIsVisible] = useState(false)

    return isVisible ? (
        <RulesWrapper>
            <RulesContainer>
                <RulesTitle>RÈGLES</RulesTitle>
                <Cross onClick={() => setIsVisible(false)}/>
                <RulesIconContainer top="143px" left="40px">
                    <RulesIcon bg={PaperImg}/>  
                </RulesIconContainer>
                <Caption>Plus fort que</Caption>
                <Arrow top="-50px" arrowHead="45deg"/>
                <RulesIconContainer top="143px" right="40px">
                    <RulesIcon bg={ScissorsImg}/>
                </RulesIconContainer>
                <Arrow top="54px" left="-67px" arrowRotate="236deg" arrowHead="45deg"/>
                <RulesIconContainer top="370px">
                    <RulesIcon bg={RockImg}/>
                </RulesIconContainer>
                <Arrow top="46px" right="-67px" arrowRotate="125deg" arrowHead="45deg"/>
            </RulesContainer>
        </RulesWrapper>
    ) : (
        <RulesLink onClick={() => setIsVisible(true)}>RÈGLES</RulesLink>
    )
}

const ShowModal = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`

const RulesLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 45px;
    border: 3px solid #af7317;
    color: #fff;
    font-weight: bold;
    border-radius: 10px;
    position: absolute;
    bottom: 20px;
    right: 20px;
    cursor: pointer;
    @media screen and (max-width: 768px){
        position: initial;
        margin: 20px 0;
    }
`

const RulesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #000000db;
    position: absolute;
    z-index: 200;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    animation: ${ShowModal} 500ms ease-in-out both;
`

const RulesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 555px;
    background-color: #fff;
    position: relative;
    @media screen and (max-width: 768px){
        width: 330px;
    }
`

const RulesTitle = styled.h2`
    position: absolute;
    top: 10px;
    left: 30px;
    font-size: 30px;
`

const RulesIconContainer = styled.div.attrs(props => ({
    top: props.top,
    left: props.left,
    right: props.right
}))`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
    right: ${props => props.right};
    background-color: #B4B7C9;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    @media screen and (max-width: 768px){
        width: 110px;
        height: 110px;
    }
`

const RulesIcon = styled.div.attrs(props => ({
    bg: props.bg
}))`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 115px;
    height: 115px;
    background: url(${props => props.bg}), #fff;
    background-repeat: no-repeat;
    background-position: center;
    opacity: .5;
    @media screen and (max-width: 768px){
        width: 80px;
        height: 80px;
    }
`

const Arrow = styled.div.attrs(props => ({
    top: props.top,
    left: props.left,
    right: props.right,
    arrowRotate: props.arrowRotate,
    arrowHead: props.arrowHead
}))`
    width: 70px;
    background-color: #B4B7C9;
    height: 7px;
    position: relative;
    top: ${props => props.top};
    left: ${props => props.left};
    right: ${props => props.right};
    transform: rotate(${props => props.arrowRotate});
    &::before{
        content: " ";
        position: absolute;
        top: -10px;
        width: 20px;
        height: 20px;
        border-left: 7px solid #B4B7C9;
        border-bottom: 7px solid #B4B7C9;
        transform: rotate(${props => props.arrowHead});
    }
`
const Caption = styled.span`
    position: absolute;
    margin-top: 15px;
    font-weight: bold;
`

const Cross = styled.div`
    width: 50px;
    height: 50px;
    position: absolute;
    top: 30px;
    right: 30px;
    transition: all .3s;
    cursor: pointer;
    &:hover{
        transform: scale(1.2)
    }
    &::before{
        content: "";
        position: absolute;
        top: 50%;
        left: 20%;
        width: 30px;
        height: 3px;
        transform: rotate(45deg);
        background-color: #000;
    }
    &::after{
        content: "";
        position: absolute;
        top: 50%;
        left: 20%;
        width: 30px;
        height: 3px;
        transform: rotate(-45deg);
        background-color: #000;
    }
`

export default Rules