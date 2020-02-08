import React from "react";

import {Grid,Card,Button,Typography} from "@material-ui/core";

import {connect} from "react-redux";

import {removeSmurf} from "../actions"

const SmurfItem = ({ removeSmurf,smurf}) => {

    const {name, age, height, id,} = smurf;

    const handelRemove = e => {
        removeSmurf(id)
    }

    console.log(id)

    return (
        <Grid item xs={6} sm={3}>
            <Card>
                <Typography variant="h3">{name}</Typography>
                <Typography variant="body1">{age} years old</Typography>
                <Typography variant="body1">{height}</Typography>
                <Button color="secondary" onClick={handelRemove}>Remove</Button>
            </Card>
        </Grid>
    )
}

const mapStatetoProps = state => {
    return {

    }
}

export default connect(mapStatetoProps, {
    removeSmurf
}) (SmurfItem);