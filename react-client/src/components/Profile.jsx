import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

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
            <Link to="/tracks">Visit tracks</Link>
        </div>
        );
    }

    return (<div>loading...</div>)
}

export default Profile;