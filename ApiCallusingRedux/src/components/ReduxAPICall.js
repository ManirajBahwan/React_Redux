import React from "react";
import {connect} from "react-redux";

class ReduxAPICall extends React.Component{

constructor(){
    super();
    this.buttonClick=this.buttonClick.bind(this);
}
 buttonClick(){
const url=this.urlTextBox.value;
alert("url::"+url);
this.props.fetchUser(url);
}

render(){
    const { isFetching, userDetails, error } = this.props;
    

    const userJSX = (
      <ul style={{ color: "green" }}>
        <li>Name: {userDetails.name}</li>
        <li>Company: {userDetails.company}</li>
        <li>
          <img width="200" src={userDetails.avatar_url} alt="Avatar" />
        </li>
      </ul>
    );
    let fetchingJSX =null;
     
    if (isFetching) {
        fetchingJSX = (
        <h3 style={{ color: "blue" }}>
          Please wait... User details are being fetched!
        </h3>
      );
    }
    return <div>
        <form>
        <input
            type="text"
            size="40"
            defaultValue="https://api.github.com/users/atmos"
            ref={node => {
              this.urlTextBox = node;
            }}
          />
          &nbsp;&nbsp;
          <input
            type="button"
            value="Get User Details"
            onClick={this.buttonClick}
          />
          </form>
          <br/>
          <br/>
        {userDetails.name ? userJSX : null}

        {fetchingJSX}

       {error && <h3 style={{ color: "red" }}>{error}</h3>}
    </div>
}

}
ReduxAPICall.defaultProps={
    isFetching: true , userDetails: {name:"maniraj",company:"Freelancer"}, error: ""
}

export default ReduxAPICall;