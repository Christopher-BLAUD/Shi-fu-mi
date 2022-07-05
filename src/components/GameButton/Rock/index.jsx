import styled from "styled-components";

function RockIcon() {
    return (
        <RockIconWrapper>
            <IconBox>
                <Icon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><path fill="#3B4262" d="M45.06 12.22c-.642-8.096-9.734-7.269-9.734-7.269-3.837-6.765-9.832-1.865-9.832-1.865-4.606-6.63-10.38-.486-10.38-.486-9.957-1.074-9.571 7.066-9.571 7.066-.234 2.588 1.403 10.593 1.403 10.593-1.477-4.614-4.68-.784-4.68-.784-3.94 6.078-.975 9.405-.975 9.405 5.33 6.246 16.688 13.743 16.688 13.743 4.113 2.356 2.373 4.457 2.373 4.457l24.876-4.11.571-4.718c3.782-11.436-.739-26.032-.739-26.032z"/></svg>            
                </Icon>
            </IconBox>
        </RockIconWrapper>
    )
}

const RockIconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 100;
`

const IconBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 180px;
    height: 180px;
    background-color: #8b00a1;
    box-shadow: 0px -8px 2px #00000069 inset;
    transition: all .5s;
    @media screen and (max-width: 768px){
        width: 150px;
        height: 150px;
    }
`

const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 130px;
    height: 130px;
    background-color: #fff;
    box-shadow: 0px 6px 2px #00000069 inset;
    @media screen and (max-width: 768px){
        width: 100px;
        height: 100px;
    }
`

export default RockIcon