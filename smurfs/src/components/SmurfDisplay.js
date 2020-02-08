import React, { useEffect } from "react"

import {connect} from "react-redux"

const SmurfDisplay =  props => {

    useEffect(()=>{



    },[])

    return (
        <div>
            {}
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        data : state.data,
        isFetching: state.isFetching,
    }
}

export default connect(mapStatetoProps,{})(SmurfDisplay)