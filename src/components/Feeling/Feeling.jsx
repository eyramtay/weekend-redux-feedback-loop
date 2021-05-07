import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function Feeling() {

    // local state for feelings score
    const [ feelingScore, setFeelingScore ] = useState('');
    const [ numberCheck, setNumberCheck ] = useState('');

    const history = useHistory();

    const dispatch = useDispatch();

    function handleNext(event) {
        let number = Number( event.target.value );
            setFeelingScore( number );
    }

    function sendFeeling(score) {
        dispatch({ type: 'sendFeeling' });
        history.push( '/understanding' );
    }

    return (
        <>
            <h2>How are you feeling today?</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={(event) => setFeelingScore(event.target.value)}
                type="number" placeholder="Enter a number 1-5" value={feelingScore} />
                <button type="submit">Next</button>
            </form>
        </>
    )
}