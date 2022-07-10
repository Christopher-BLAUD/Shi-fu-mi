import Track from '../../assets/golden_dragon.mp3'
import { GameContext } from '../../utils/context'
import { useContext } from 'react'


function Music() {
    const { isMute } = useContext(GameContext)

    return (
        <>
            {isMute === false && <audio src={Track} autoPlay={true} loop={true} preload="auto"></audio>}
        </>
    )
}

export default Music