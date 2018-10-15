import React from 'react';

const Profile = ({profile}) => {
    if (profile){
        const {display_name, email, id, href} = profile
        return (
        <div>
            <div>You are:</div>
            <div>{display_name}</div>
            <div>{email}</div>
            <div>{id}</div>
            <div>{href}</div>
        </div>
        );
    }

    return (<div>loading...</div>)
}

export default Profile;