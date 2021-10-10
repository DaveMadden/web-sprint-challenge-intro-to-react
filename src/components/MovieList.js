import React from 'react';

import Film from './Film';
// import styled from 'styled-components';

// const StyledChar = styled.div`
//     display:flex;
//     flex-direction: column;
//     justify-content: center;
//     border-radius: 10px;
//     border: 1px solid ${pr => pr.theme.secondaryColor};
//     width: 80%;
//     margin: auto;
//     background-color: ${pr => pr.theme.primaryColor};
//     color: ${pr => pr.theme.secondaryColor};
//     margin: 5px auto;
    
//     &:hover {
//         transition: all 0.2s ease-in-out;
//         background-color: gold;
//         color: black;
//     }
// `


const MovieList = (props) => {
    const films = props.films;
    console.log(films[0]);
    return (
        <ul>
            {films.map(film => {
                return <Film film={film} key={film}/>
            })}
        </ul>
    );
};

export default MovieList;