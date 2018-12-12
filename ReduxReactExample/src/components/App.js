import React from "react";
import Form from "./Form";
import Display from "./Display";
class App extends React.Component{

render(){
  

    console.log("Display props",this.props);
    return <>
    <Form/>
    <Display/>
    </>
}


}

export default App;