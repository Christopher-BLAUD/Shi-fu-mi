import Title from "../../components"
import styled from "styled-components"

function Home() {
 return (
    <HomeWrapper>
        <Title/>
    </HomeWrapper>
 )
}

const HomeWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    background: linear-gradient(0deg, rgba(22,26,61,1) 35%, rgba(29,49,82,1) 100%);
`

export default Home