import {connect} from "react-redux";
import Display from "../components/Display";
function mapStateToProps(state){

    return {
        val:state.count
    }
}
const DisplayContainer=connect(mapStateToProps)(Display);
export default DisplayContainer;