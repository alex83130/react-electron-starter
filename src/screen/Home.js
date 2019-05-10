import React from "react";
import {connect} from "react-redux";
import {testAction} from "../Store/Actions";

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.props.onTestAction()
    }
    render() {
        return (
            <h2>Home</h2>
        )
    }
}

const mapStateToProps = state => {
    return {
        testParam : state.commonReducer.testParam
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onTestAction : () => dispatch(testAction())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);