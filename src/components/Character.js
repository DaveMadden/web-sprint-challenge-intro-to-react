// Write your Character component here
import React from 'react';

const Character = (props) => {
    console.log(props);
    const { name } = props.character;
    return (
        <div className='chardiv'>
            <p>{name}</p>
        </div>
    )
}

export default Character;