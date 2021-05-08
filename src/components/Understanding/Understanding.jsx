import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Understanding() {
    // local state for Understanding
    const [understand, setUnderstand] = useState('');

    const dispatch = useDispatch();

    const history = useHistory();

    function handleUnderstanding(event) {
        // setUnderstand(number);
    }

    function sendUnderstanding(score) {
        if ( score > 5 || score < 1 || score === '' ) {
            alert( 'Please enter a number between 1-5' );
            setFeelingScore('');
        } else { 
            dispatch({ type: 'sendUnderstanding', payload: score });
            history.push( '/support' );
        }
    }

    return (
        <>
            <h2>How are you feeling today?</h2>
            <form onSubmit={handleUnderstanding}>
                <input onChange={(event) => setUnderstand(event.target.value)}
                type="number" placeholder="Enter a number 1-5" value={understand} />
                <button type="submit" onClick={() => sendUnderstanding( understand )}>Next</button>
            </form>
        </>
    )
}