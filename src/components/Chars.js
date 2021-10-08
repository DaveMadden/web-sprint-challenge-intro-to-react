import React from 'react';
import Character from './Character';
import styled from 'styled-components';

const StyledChars = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    border: 1px solid ${pr => pr.theme.primaryColor};
    width: 50%;
    margin: auto;
    background-color: ${pr => pr.theme.primaryColor};
    color: ${pr => pr.theme.secondaryColor};
    background-blend-mode: multiply;
    opacity: 0.8;
    
`

const Chars = (props) => {
    // console.log(props.chars);
    return (

        <StyledChars>
            <h1>Star Wars Stuff</h1>
            {props.chars.map(char =>{
                return <Character character={char} key={`${char.birth_year}${char.height}${char.mass}`} />
            })}
        </StyledChars>

    )
}

export default Chars;