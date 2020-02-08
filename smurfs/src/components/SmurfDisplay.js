import React, { useEffect } from "react"
import {connect} from "react-redux"
import {fetchSmurfData} from "../actions"

import SmurfItem from "./SmurfItem";

const SmurfDisplay =  props => {

    useEffect(()=>{

        props.fetchSmurfData()

    },[])

    return (
        <div>
            {props.data.map(smurf=> <SmurfItem key={smurf.id} smurf={smurf}/>)}
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