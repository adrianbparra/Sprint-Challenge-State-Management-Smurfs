import React, { useState } from "react";

import {connect} from "react-redux";

import {addSmurfCharacter} from "../actions";

import {Button, TextField} from "@material-ui/core";

const SmurfForm = props => {

    const [smurfData, setSmurfData] = useState({
        name: "",
        age: "",
        height: "",
      });

    const handleChange = e => {

        console.log(e.target.value)
        setSmurfData({
            ...smurfData,
            [e.target.name] : e.target.value
        })

    }

    const handleSubmit = e => {

        e.preventDefault();
        console.log(smurfData)
        if(smurfData.name || smurfData.age || smurfData.height) {
            console.log("posting?")
            props.addSmurfCharacter(smurfData)
        }
    }

    return (
        <div>
            <div>
                <h1>Add more Smurf Villagers</h1>
            </div>
            <form onSubmit={handleSubmit}>

                <TextField 
                    id="filled-basic"
                    variant="filled"
                    label="Name"
                    name="name"
                    value= {smurfData.name}
                    onChange={handleChange}
                />

                <TextField
                    id="filled-basic"
                    variant="filled"
                    label="Age"
                    type="text"
                    name="age"
                    value={smurfData.age}
                    onChange={handleChange}
                />
                <TextField
                    id="filled-basic"
                    variant="filled"
                    label="Height"
                    type="text"
                    name="height"
                    value={smurfData.height}
                    onChange={handleChange}
                />

                <Button variant="contained" onClick={handleSubmit}>Add</Button>
                    
            </form>
        </div>
    )
}

const mapStatetoProps = state=> {
    return {

    }
}

export default connect(mapStatetoProps, {
    addSmurfCharacter,
})(SmurfForm);