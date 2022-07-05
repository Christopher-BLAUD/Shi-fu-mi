import { Link } from 'react-router-dom'
import styled from 'styled-components'

function RedirectButton() {
    return (
        <>
         <Redirect to={""}>JOUER</Redirect>
        </>
    )
}

const Redirect = styled(Link)`
background-color: #be7400;
padding: 15px 30px;
margin-top: 20px;
font-size: 16px;
color: #fff;
border: none;
border-radius: 25px;
max-width: 400px;
cursor: pointer;
transition: all 200ms;
text-decoration: none;
&:hover{
    transform: scale(1.1)
}
`

export default RedirectButton