import axios from "axios";
function fetchUserDetailsAction(url){
    return function(dispatch){
   dispatch({ type:"FETCHING" });
    axios
      .get(url)
      .then(response => {
        
          dispatch({ type:"FETCH_SUCCESS" ,
          userDetails: response.data})
       
      })
      .catch(error => {
        dispatch({ type:"FETCH_ERROR" ,
        error:error.message});
        });
     
    }
  }

export default fetchUserDetailsAction;