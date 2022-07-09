import Track from '../../assets/golden_dragon.mp3'
import styled from 'styled-components'
import { useState } from 'react'

function Music() {
    const [isMute, setIsMute] = useState(false)

    return (
        <MusicContainer onClick={() => {
            isMute === false ? setIsMute(true) : setIsMute(false)
            }}>
            <i class="fa-solid fa-volume-xmark"></i>
            {isMute === false && <audio src={Track} autoPlay={true} loop={true}></audio>}
        </MusicContainer>
    )
}

const MusicContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 2px solid #af7317;
    align-self: flex-start;
    margin: 10px;
    position: absolute;
    bottom: 10px;
    left: 0;
    cursor: pointer;
    & i{
        font-size: 18px;
        color: #af7317;
    }
`
export default Music