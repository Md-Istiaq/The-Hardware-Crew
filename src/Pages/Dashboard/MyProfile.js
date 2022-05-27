import React  from 'react';
import {useAuthState} from 'react-firebase-hooks/auth'
import auth from '../../_firebase.init'
const MyProfile = () => {
    const [user] = useAuthState(auth)
    console.log(user)
    return (
        <div>
            <h1>Your E-mail{user.email}</h1>
            
        </div>
    );
};

export default MyProfile;