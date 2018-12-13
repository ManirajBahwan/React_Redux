import React from "react";
//import {connect} from "react-redux";
class Form extends React.Component{

   /* constructor(){
        super();
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
    }

    increment(){
        console.log("incrementing...");
        const {dispatch}=this.props;
        dispatch({type:"INCREMENT"});

    }
decrement(){
    console.log("decrementing..");
    const {dispatch}=this.props;
    dispatch({type:"DECREMENT"});

}*/

    render(){
        console.log("Form props",this.props);
        return <form>
            <input type="button" onClick={this.props.increment} value="Incremnt"/>&nbsp;&nbsp;&nbsp;
            <input type="button" onClick={this.props.decrement} value="Decrement"/>
        </form>
    }
}
//const FormConnector=connect()(Form);
export default Form;