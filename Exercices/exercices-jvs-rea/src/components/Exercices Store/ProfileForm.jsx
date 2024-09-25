
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateName, updateEmail, updateBio, resetProfile } from './profileSlice';

const ProfileForm = () => {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.profile);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <h2>Profile Form</h2>
            <input 
                type="text"
                placeholder="Name"
                value={profile.name}
                onChange={(e) => dispatch(updateName(e.target.value))}
            />
            <input
                type="email"
                placeholder="Email"
                value={profile.email}
                onChange={(e) => dispatch(updateEmail(e.target.value))}
            />
            <textarea
                placeholder="Bio"
                value={profile.bio}
                onChange={(e) => dispatch(updateBio(e.target.value))}
            />
            <button onClick={() => dispatch(resetProfile())}>Reset Profile</button>
            <br/>
            <div>
                <strong>Name:</strong> {profile.name}
            </div>
            <div>
                <strong>Email:</strong> {profile.email}
            </div>
            <div>
                <strong>Bio:</strong> {profile.bio}
            </div>
        </div>
    );
};

export default ProfileForm;