import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Support() {

    const [ support, setSupport ] = useState('');

    const history = useHistory();

    const dispatch = useDispatch();

    function handleSupport(score) {
    
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


    

}

export default Support;