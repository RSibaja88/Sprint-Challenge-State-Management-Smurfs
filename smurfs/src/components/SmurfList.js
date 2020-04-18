import React from 'react';
import "./App.css";
import {connect} from 'react-redux';
import {getSmurf} from '../actions/smurfAction';
import './SmurfList.css';


const SmurfList = props => {
    props.getSmurf();
    
    return (
        <div className="smurfCard">
            <div className="container">{props.smurf.map(item => {
                return(
                <div className="smurfs">
                    <div>
                        <h2>{item.name}</h2>
                        <p>Age: {item.age}</p>
                        <p>Height: {item.height}</p>
                    </div>
                </div>
            );
            })}</div>
            </div>
    )
}

const mapStateToProps = state => {
    // console.log("COMING FROM SMURFLIST mapStateToProps: ", state);
    return {
        smurf: state.smurf
    }
}

export default connect(mapStateToProps,{getSmurf})(SmurfList);