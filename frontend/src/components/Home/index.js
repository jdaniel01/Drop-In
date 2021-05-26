import { useHistory } from 'react-router-dom';
import './Home.css';

const Home = (params) => {
    const history = useHistory();

    return (
        <div className="home-wrapper">
                <div className="link-component">
                    <h2 className="h2">Don't Shred Alone!</h2>
                    <div className="nav-link button" onClick={() => history.push('/events/new')}>
                        Host A Session
                    </div>
                </div>
        </div>
    )
}


export default Home;
