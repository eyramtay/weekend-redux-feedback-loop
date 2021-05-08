import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Support() {

    const [ support, setSupport ] = useState('');

    const history = useHistory();

    const dispatch = useDispatch();

    function handleSupport() {
    
    }

    function sendSupport(score) {
        if ( score > 5 || score < 1 || score === '' ) {
            alert( 'Please enter a number between 1-5' );
            setSupport('');
        } else { 
            dispatch({ type: 'sendSupport', payload: score });
            history.push( '/comments' );
        }
    }

    return (
        <>
            <h2>How are you feeling today?</h2>
            <form onSubmit={handleSupport}>
                <input onChange={(event) => setSupport(event.target.value)}
                type="number" placeholder="Enter a number 1-5" value={support} />
                <button type="submit" onClick={() => sendSupport( support )}>Next</button>
            </form>
        </>
    )

}

export default Support;