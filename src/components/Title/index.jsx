import styled from "styled-components"
import { useContext } from 'react'
import { GameContext } from "../../utils/context";

function Title() {
    const { score } = useContext(GameContext)

    return (
        <TitleWrapper>
            <HomeTitle>
                <TitleName>SHI</TitleName>
                <TitleName marginTop="3px" color="#644d29">FU</TitleName>
                <TitleName>MI</TitleName>
            </HomeTitle>
            <ScoreBox>
                <ScoreName>SCORE</ScoreName>
                <Score>{ score }</Score>
            </ScoreBox>
        </TitleWrapper>
    )
}

const TitleWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 750px;
    border-radius: 5px;
    padding: 2px 20px;
    background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
    border-radius: 15px;
    transform: perspective(800px) rotateX(20deg);
    box-shadow: 0px 8px 10px #4c3a3a;
    margin-top: 20px;
    @media screen and (max-width: 768px){
        flex-direction: column;
        width: 240px;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px){
        flex-direction: row;
        width: 550px;
    }
`

const HomeTitle = styled.h1`
    display: flex;
`



const TitleName = styled.span`
    margin: 0;
    font-size: 1.7em;
    margin-top: ${props => props.marginTop};
    color: #FFA500;
    text-shadow: 0px 8px 10px #4c3a3a;
    @media screen and (max-width: 768px){
        font-size: 35px;
    }
`

const ScoreBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 110px;
    margin: 10px 0;
    border: 3px solid #FFA500;
    border-radius: 7px;
    @media screen and (max-width: 768px){
        width: 115px;
        height: 90px;
    }
`

const ScoreName = styled.span`
    color: #FFA500;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 2px;
`

const Score = styled.span`
    color: #fff;
    font-size: 3em;
    font-weight: bold;
    line-height: 1;
    @media screen and (max-width: 768px){
        font-size: 2em;
        margin-top: 10px;
    }
`


export default Title