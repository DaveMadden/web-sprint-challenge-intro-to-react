// Write your Character component here
import React, { useState } from 'react';
import styled from 'styled-components';
import MovieList from './MovieList';

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
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background-color: gold;
        color: black;
    }
`


const Character = (props) => {
    const [showDetail, setShowDetail] = useState(false);
    // console.log(props);
    const { name, films } = props.character;
    // console.log(`${name} was in: ${films}`);
    return (
        <StyledChar onClick={() => {setShowDetail(!showDetail)}}>
            <p>{name}</p>
            {showDetail && <MovieList films={films}/>}
        </StyledChar>
    )
}

export default Character;