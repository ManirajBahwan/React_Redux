import React from "react";
//import Form from "./Form";
//import Display from "./Display";
import FormContainer from "../containers/FormContainer";
import DisplayContainer from "../containers/DisplayContainer";
class App extends React.Component{

render(){
  

    console.log("Display props",this.props);
    return <>
    <FormContainer/>
    <DisplayContainer/>
    </>
}


}

export default App;