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
                    <Cross onClick={() => setIsVisible(false)}><i class="fa-solid fa-xmark"></i></Cross>
                </TitleContainer>
                <PictureContainer>
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
    position: absolute;
    bottom: 20px;
    right: 20px;
    cursor: pointer;
    @media screen and (max-width: 768px){
        margin: 20px 0;
        bottom: 0;
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
    height: 555px;
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
    position: absolute;
    top: 20px;
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
    align-items: center;
    justify-content: center;
    height: 450px;
    width: 450px;
    @media screen and (max-width: 768px){
        width: 320px;
        height: 320px;
    }
`

export default Rules