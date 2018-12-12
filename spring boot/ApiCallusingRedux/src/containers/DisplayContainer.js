import {connect} from "react-redux";
import Display from "../components/Display";
function mapStateToProps(state){

    return {
        val:state.counter.count
    }
}
const DisplayContainer=connect(mapStateToProps)(Display);
export default DisplayContainer;