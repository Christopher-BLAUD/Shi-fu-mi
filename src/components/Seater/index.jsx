import styled, { keyframes } from "styled-components"
import { Link } from 'react-router-dom'


function Seater() {
    return (
            <SeaterWrapper>
                <GoPlay to={'/game'}>Jouer !</GoPlay>
            </SeaterWrapper>
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

const SeaterWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 450px;
    height: 150px;
    background-color: #d4975f;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    @media screen and (max-width: 768px){
        width: 320px;
        height: 150px;
    }
    @media screen and (max-width: 768px) and (orientation: landscape){
        height: 130px;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px){
        width: 450px;
    }
`
const GoPlay = styled(Link)`
    background-color: #12127e;
    color: #fff;
    padding: 15px 30px;
    font-size: 16px;
    font-weight: 700;
    border: none;
    border-radius: 25px;
    max-width: 400px;
    cursor: pointer;
    transition: all 200ms;
    text-decoration: none;
    animation: ${Reveal} 1s linear 3s both;
    &:hover{
        transform: scale(1.1)
    }
    @media screen and (max-width: 768px){
        
    }
    @media screen and (max-width: 768px) and (orientation: landscape){
       
    }
    @media screen and (min-width: 768px) and (max-width: 1024px){
        
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
       
    }
`
export default Seater