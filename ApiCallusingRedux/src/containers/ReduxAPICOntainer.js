import {connect} from "react-redux";
import ReduxAPICall from "../components/ReduxAPICall";
import fetchUserDetails from "../actions/fetchUserDetailsAction";

function mapStateToProps(state){
    return {
        isFetching: state.user.isFetching ,
         userDetails: state.user.userDetails, 
         error: state.user.error
    }
    }

    function mapDispatchToProps(dispatch){
        return {
            fetchUser:(url)=>{
                dispatch(fetchUserDetails(url));
            }
        }
    }

    const ReduxAPICallContainer= connect(mapStateToProps,mapDispatchToProps)(ReduxAPICall);
export default ReduxAPICallContainer;