import React from "react";

import FormContainer from "../containers/FormContainer";
import DisplayContainer from "../containers/DisplayContainer";
import ReactAPICall from "./ReactAPICall";

function App() {
  return (
    <>
      <FormContainer />
      <DisplayContainer />
      <hr />
      <ReactAPICall />
    </>
  );
}

export default App;
