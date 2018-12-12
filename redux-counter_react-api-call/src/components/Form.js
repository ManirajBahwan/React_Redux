import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form>
        <input type="button" onClick={this.props.increment} value="Increment" />
        &nbsp;&nbsp;
        <input type="button" onClick={this.props.decrement} value="Decrement" />
      </form>
    );
  }
}

export default Form;
