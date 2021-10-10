import React from 'react';

import Film from './Film';
import styled from 'styled-components';

const StyledList = styled.ol`
    font-size: 0.5rem;
    text-align: left;
    margin-top: -10px;
`


const MovieList = (props) => {
    const films = props.films;
    console.log(films[0]);
    return (
        <StyledList>
            {films.map(film => {
                return <Film film={film} key={film}/>
            })}
        </StyledList>
    );
};

export default MovieList;