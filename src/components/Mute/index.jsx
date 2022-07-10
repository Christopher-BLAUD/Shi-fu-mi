import styled from "styled-components";
import { useContext } from 'react'
import { GameContext } from "../../utils/context";

function Mute() {
const {isMute, setIsMute} = useContext(GameContext)
    return (
        <MuteContainer onClick={() => {
            isMute === false ? setIsMute(true) : setIsMute(false)
            }}>
            <i className="fa-solid fa-volume-xmark"></i>
        </MuteContainer>
    )
}

const MuteContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 3px solid #af7317;
    background-color: #ffffff52;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    & i{
        color: #A16800;
    }
    &:hover{
        transform: scale(0.9);
    }
`

export default Mute