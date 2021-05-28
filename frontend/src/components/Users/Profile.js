import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import 'Profile.css';

const Profile = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const {id} = useParams();

    const profile = useSelector(state => state.Profile);

    useEffect(() => {
        dispatch(getProfile(id))
    }, [dispatch, id])

    return (
        <div>
            Test: {profile.username}
        </div>
    );

}
