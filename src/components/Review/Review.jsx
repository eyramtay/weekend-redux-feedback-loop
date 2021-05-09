import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Review() {
    
    const feedback = useSelector(store => store.surveyReducer);
    const history = useHistory();
    const dispatch = useDispatch();

    // function feedbackConfirmation() {
        
    //     history.push('/done')
    // }

    function handleSubmit() {
        history.push('/done');
        addFeedback();
        dispatch({
            type: 'RESET_FEEDBACK'
        })
    }

    function addFeedback() {
        
        console.log('In addFeedback');
        axios({
            method: 'POST',
            url: '/feedback',
            data: feedback
        })
            .then((response) => {
            console.log('Added feedback w/ POST', response);
        })
            .catch((error) => {
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
            <button onClick={handleSubmit}>Submit</button>
        </>
    )

}

export default Review;