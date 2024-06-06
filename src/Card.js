import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getData } from "../../Action/Action1";
 
const Card = (props) =>{
    const [val ,setVal] = React.useState('');
    const [data ,setData] = React.useState({});
 
 
    const changeHandler = (event) =>{
        setVal(event.target.value);
        let obj = {"value" : event.target.value, index : Math.random()};
        setData(obj);
    }
    return(<>
        <input value = {val} onChange={(event) =>{changeHandler(event)}}></input>
        <button onClick={()=>{props.getData(data)}}>Add</button>
        {props.data.length !== 0 && props.data.map(item =>{
            return (<h1>{item.value}{item.index}</h1>)
        })}
    </>)
}
const mapStateToProps = (state)=>{
    return {
        data : state.DataReducer.data,
    }
}
 
const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({
        getData
    },dispatch)
 
}
 
export default connect(mapStateToProps ,mapDispatchToProps)(Card);
 