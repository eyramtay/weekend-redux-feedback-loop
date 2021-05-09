import { useHistory } from 'react-router-dom';

function Home() {
    
    const history = useHistory();

    function startSurvey() {
        history.push('/feeling');
    }

    return (
        <>
            <h1>Welcome to Prime Feedback</h1>
            <br />
            <button onClick={startSurvey}>Begin Feedback</button>
        </>
    );
}

export default Home;