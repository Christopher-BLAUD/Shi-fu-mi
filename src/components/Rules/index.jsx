import styled, { keyframes } from "styled-components";
import { useState } from "react";
import RulesImg from './assets/rules.png'

function Rules() {
    const [isVisible, setIsVisible] = useState(false)
    return isVisible ? (
        <RulesWrapper>
            <Container>
                <TitleContainer>
                    <Title>RÈGLES</Title>
                    <Cross onClick={() => setIsVisible(false)}><i className="fa-solid fa-xmark"></i></Cross>
                </TitleContainer>
                <PictureContainer>
                    <Caption>Instructions : à tour de rôle, chaque joueur sélectionne une icône</Caption>
                    <Picture src={RulesImg} />
                </PictureContainer>
            </Container>
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
    background-color: #ffffff52;
    color: #A16800;
    font-weight: bold;
    border-radius: 10px;
    margin: 10px;
    align-self: flex-end;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    &:hover{
        transform: scale(0.9);
    }
`

const RulesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #000000cf;
    position: absolute;
    z-index: 1000;
    height: 100%;
    width: 100%;
    padding: 45px 0;
    top: 0;
    left: 0;
    animation: ${ShowModal} 500ms ease-in-out both;

`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    background-color: #fff;
    position: relative;
    @media screen and (max-width: 768px){
        width: 330px;
    }
`

const Title = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
`

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: calc(100% - 40px);
    padding: 0 20px;
    margin: 20px 0;
`

const Cross = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    transition: all .3s;
    &:hover{
        transform: rotate(360deg);
    }
    cursor: pointer;
    & i{
        font-size: 2em;

    }
`

const Picture = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
`

const PictureContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 450px;
    width: 450px;
    @media screen and (max-width: 768px){
        width: 320px;
        height: 320px;
    }
`
const Caption = styled.p`
    font-weight: 500;
`
export default Rules