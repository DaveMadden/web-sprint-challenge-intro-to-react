import React from 'react';
import Character from './Character';

const Chars = (props) => {
    // console.log(props.chars);
    return (

        <div className="characters-wrapper">
            characters go here
            {props.chars.map(char =>{
                return <Character character={char} />
            })}
        </div>

    )
}

export default Chars;