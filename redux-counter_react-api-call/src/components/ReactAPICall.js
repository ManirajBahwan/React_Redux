import React from "react";
import axios from "axios";

class ReactAPICall extends React.Component {
  constructor() {
    super();

    this.state = {
      isFetching: false,
      userDetails: {},
      error: ""
    };

    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick() {
    const url = this.urlTextBox.value;

    this.setState({ isFetching: true, userDetails: {}, error: "" });
    axios
      .get(url)
      .then(response => {
        this.setState({
          isFetching: false,
          userDetails: response.data,
          error: ""
        });
      })
      .catch(error => {
        this.setState({
          isFetching: false,
          userDetails: {},
          error: error.message
        });
      });
  }

  render() {
    const { isFetching, userDetails, error } = this.state;

    const userJSX = (
      <ul style={{ color: "green" }}>
        <li>Name: {userDetails.name}</li>
        <li>Company: {userDetails.company}</li>
        <li>
          <img width="200" src={userDetails.avatar_url} alt="Avatar" />
        </li>
      </ul>
    );

    let fetchingJSX = null;
    if (isFetching) {
      fetchingJSX = (
        <h3 style={{ color: "blue" }}>
          Please wait... User details are being fetched!
        </h3>
      );
    }

    return (
      <div>
        <form>
          <input
            type="text"
            size="40"
            defaultValue="https://api.github.com/users/gaearon"
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

        <br />
        <br />

        {userDetails.name ? userJSX : null}

        {fetchingJSX}

        {error && <h3 style={{ color: "red" }}>{error}</h3>}
      </div>
    );
  }
}

export default ReactAPICall;
