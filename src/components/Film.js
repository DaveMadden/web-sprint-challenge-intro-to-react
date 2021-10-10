import React from 'react'

const Film = (props) => {
    const { film } = props;
    console.log(`Film props: ${film}`);
    return (
        <li>{film}</li>
    )
}

export default Film;