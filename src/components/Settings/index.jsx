import styled from "styled-components"
import { Link } from 'react-router-dom'

function SettingsButton() {
    return (
        <Settings to={'/'} onClick={() => localStorage.clear()}><i className="fa-solid fa-gear"></i></Settings>
    )
}

const Settings = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    border: 3px solid #af7317;
    background-color: #ffffff52;
    color: #A16800;
    font-weight: bold;
    border-radius: 50%;
    margin: 10px;
    cursor: pointer;
    text-decoration: none;
    transition: all 200ms ease-in-out;
    &:hover{
        transform:  rotate(360deg);
    }
    & i{
        font-size: 1.1em;
    }
`

export default SettingsButton