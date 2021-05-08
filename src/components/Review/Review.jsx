import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Review() {
    
    const feedback = useSelector(store => store.surveyReducer);

    const history = useHistory();
    const submit = () => {
        console.log('In submit');
        axios.post('/feedback', feedback).then((response) => {
            console.log('Back from POST', response);
        }).catch((error) => {
            console.log(error);
            alert('Error in POST', error);
        })

    }

    return (
        <>
            <h2>Review Your Feedback</h2>
            <p>Feelings: {feedback.feeling}</p>
            <p>Understanding: {feedback.understanding}</p>
            <p>Support: {feedback.support}</p>
            <p>Comments: {feedback.comments}</p>
            <br />
        </>
    )

}

export default Review;