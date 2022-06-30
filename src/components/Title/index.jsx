import styled from "styled-components"

function Title() {
    return (
        <TitleWrapper>
            <HomeTitle>
                <TitleName delay="1s">SHI</TitleName>
                <TitleName delay="2s">FU</TitleName>
                <TitleName delay="3s">MI</TitleName>
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
    padding: 2px 20px;
    border: 3px solid #ffffff4d;
    margin-top: 30px;
    border-radius: 15px
`

const HomeTitle = styled.h1`
    display: flex;
    flex-direction: column;
`



const TitleName = styled.span`
    margin: 0;
    line-height: 1;
    font-size: 1.7em;
    margin-left: 10px;
    color: #fff;
`

const ScoreBox = styled.div`
    display: flex;
    flex-direction: column;
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