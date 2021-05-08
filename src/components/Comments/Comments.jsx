import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Comments() {

    const [comments, setComments] = useState('');

    const dispatch = useDispatch();

    const history = useHistory();

    function handleComments(event) {
        
    }

    function sendComments(string) {
        
        dispatch({ type: 'sendComments', payload: string });
        history.push( '/review' );
    }
    

    return (
        <>
            <h2>Feel free to share any comments you may have:</h2>
            <form onSubmit={handleComments}>
                <input onChange={(event) => setComments(event.target.value)}
                type="text" placeholder="Comments (optional)" value={comments} />
                <button type="submit" onClick={() => sendComments( comments )}>Next</button>
            </form>
        </>
    )
};

export default Comments;