import { useHistory } from 'react-router-dom';

function submittedConfirmation() {

    const history = useHistory();

    function restartSurvey() {
        // dispatch({
        //     type: 'CLEAR',
        // })
        history.push('/')
    }

    return (
        <>
            <h1>Thank you!</h1>
            <p>Your feedback has been submitted.</p><br /><br />
            <button onClick={restartSurvey}>Restart Feedback</button>
        </>
    );
}

export default submittedConfirmation;