import React from "react";


const SmurfItem = ({smurf}) => {

    const {name, age, height, id,} = smurf;

    return (
        <div>
            <h2>{name}</h2>
            <p>{age} years old</p>
            <p>{height}</p>
        </div>
    )
}

export default SmurfItem;