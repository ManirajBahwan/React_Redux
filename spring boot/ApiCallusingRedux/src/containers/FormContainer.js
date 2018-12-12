import React from "react";
import {connect} from "react-redux";
import Form from "../components/Form";

import {incrementAction,decrementAction} from "../actions/counterActions";


function mapDispatchToProps(dispatch){
    console.log("mapDispatchToProps::",this.props);
    return{
        increment:()=>{
            dispatch(incrementAction());
        },
        decrement:()=>{
            dispatch(decrementAction());
        }
    }
}

const FormContainer=connect(null,mapDispatchToProps)(Form);
export default FormContainer;