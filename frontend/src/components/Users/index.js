import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProfile } from '../../store/users';
import './Profile.css';
import { render } from 'react-dom';
import profileImage from './images/color-toboggan.jpg';

const Profile = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    const profile = useSelector(state => state.profile);

    useEffect(() => {
        dispatch(getProfile(id))
    }, [dispatch, id])



    return (
        <div className="body-wrapper">

            <div className="profile-wrapper">
                <h1>{profile?.user?.username}</h1>
                <div className="image-wrapper">
                    <img src={profileImage}/>
                </div>
                <div className="trick-list">
                    <h3>Tricks Known: {profile?.trickList?.length}</h3>
                    {profile?.trickList?.map(trick => <div key={trick.id}>{trick.name}</div>)}
                </div>
                <div className="session-list">
                    <h3>Upcoming Sessions: {profile?.sessions?.length}</h3>
                    {profile?.sessions?.map(session =>

                        <div key={session.id} className="session-detail" onClick={() => history.push(`/events/${session.event_id}`)}>
                            <div className="detail-container">
                                <h2 >ToDo: Fetch session details for session id: {session?.id}</h2>
                            </div>
                        </div>

                    )}
                </div>
            </div>
        </div>
    );

}

export default Profile;
