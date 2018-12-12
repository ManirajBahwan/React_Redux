import React from "react";
//import {connect} from "react-redux";

class Display extends React.Component{

render(){
  const {val}=this.props;

    console.log("Display props",this.props);
    return <>
    <h1>{val}</h1>
    </>
}


}
export default Display;