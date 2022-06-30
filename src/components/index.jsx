import styled from "styled-components"

function Title() {
    return (
        <TitleWrapper>
            <HomeTitle>
                <TitleName>ROCK</TitleName>
                <TitleName>PAPER</TitleName>
                <TitleName>SCISSORS</TitleName>
            </HomeTitle>
            <ScoreBox>
                <ScoreName>SCORE</ScoreName>
                <Score>12</Score>
            </ScoreBox>
        </TitleWrapper>
    )
}

const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 750px;
    border-radius: 5px;
    padding: 10px 20px;
    border: 3px solid #ffffff4d;
    margin-top: 40px;
    border-radius: 15px
`

const HomeTitle = styled.h1`
    display: flex;
    flex-direction: column;
`

const TitleName = styled.span`
    margin: 0;
    line-height: 0.8;
    font-size: 1.7em;
    margin-left: 10px;
    color: #fff;
`

const ScoreBox = styled.div`
    display: flex;flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 110px;
    background-color: #fff;
    border-radius: 7px;
`

const ScoreName = styled.span`
    color: #3C5097;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 2px;
`

const Score = styled.span`
    color: #565469;
    font-size: 3em;
    font-weight: bold;
    line-height: 1;
`

export default Title