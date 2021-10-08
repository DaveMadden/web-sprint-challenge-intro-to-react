import React from 'react';
import Character from './Character';

const Chars = (props) => {
    // console.log(props.chars);
    return (

        <div className="characters-wrapper">
            characters go here
            {props.chars.map(char =>{
                return <Character character={char} key={`${char.birth_year}${char.height}${char.mass}`} />
            })}
        </div>

    )
}

export default Chars;