// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledChar = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    border: 1px solid ${pr => pr.theme.secondaryColor};
    width: 80%;
    margin: auto;
    background-color: ${pr => pr.theme.primaryColor};
    color: ${pr => pr.theme.secondaryColor};
    margin: 5px auto;
    &:hover{
        transition: all 0.2s ease-in-out;
        background-color: ${pr => pr.theme.secondaryColor};
        color: black;
    }
`


const Character = (props) => {
    console.log(props);
    const { name } = props.character;
    return (
        <StyledChar>
            <p>{name}</p>
        </StyledChar>
    )
}

export default Character;