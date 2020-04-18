import React, {useState} from 'react';
import {connect} from 'react-redux';
import {postSmurf} from "../actions/smurfAction";
import './SmurfForm.css' 

const SmurfForm = (props) => {
    const [newSmurf, setSmurf] = useState({
        name: '',
        age: '',
        height: ''
    })

    const handleChanges = (e) => {
        setSmurf({ ...newSmurf, [ e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.postSmurf(newSmurf);
        setSmurf({
            name: '',
            age: '',
            height: '',
            id: Date.now()
        })
    
    }

    return (
        <div>
            <h1>Create a Smurf!</h1>
            <form>
                <input name='name'
                    onChange={handleChanges}
                    name='name'
                    type='text'
                    placeholder='Type Smurf Name'
                    value={newSmurf.name} />
                <input name='age'
                    onChange={handleChanges}
                    name='age'
                    type='text'
                    placeholder='Type Age'
                    value={newSmurf.age} />
                <input name='height'
                    onChange={handleChanges}
                    name='height'
                    type='text'
                    placeholder='Type Height'
                    value={newSmurf.height} />
                <button type='submit' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        isFetchingData: state.isFetchingData
    };
};

export default connect(mapStatetoProps,{ postSmurf })(SmurfForm);