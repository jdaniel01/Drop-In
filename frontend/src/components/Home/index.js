import { useHistory} from 'react-router-dom';
import {useSelector }from 'react-redux'

import './Home.css';

const Home = (params) => {
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);

    return (
        <div className="home-wrapper">
                <div className="link-component">
                    <h2 className="h2">Don't Shred Alone!</h2>
                    <div className="nav-link button" onClick={() => {
                        if (sessionUser){
                            history.push('/events/new')
                        } else {
                            window.alert("You must be logged in to create an Event");
                        }
                    }}>
                        Host A Session
                    </div>
                </div>
        </div>
    )
}


export default Home;
