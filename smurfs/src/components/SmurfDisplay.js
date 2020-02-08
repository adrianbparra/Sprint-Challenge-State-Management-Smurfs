import React, { useEffect } from "react"
import {connect} from "react-redux"
import {fetchSmurfData} from "../actions"

import SmurfItem from "./SmurfItem";

import {Grid} from "@material-ui/core";




const SmurfDisplay =  props => {

    useEffect(()=>{

        props.fetchSmurfData()

    },[])

    return (
        <div>
            <h1>My Villagers</h1>
            <Grid container spacing={3}>
            {props.data.map(smurf=> <SmurfItem key={smurf.id} smurf={smurf}/>)}
            </Grid>
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        data : state.data,
        isFetching: state.isFetching,
    }
}

export default connect(mapStatetoProps,{
    fetchSmurfData
})(SmurfDisplay)