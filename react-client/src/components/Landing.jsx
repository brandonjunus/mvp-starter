import styled from 'styled-components';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

const Landing = (props) => {
    
    
    return (
        <div>
            <Title>YOUR HIPSTER LEVEL {(props.artistsAveragePopularity + props.tracksAveragePopularity) / 2} / 100</Title>
            <Link to="/profile">Visit profile</Link>
        </div>
    )
}

export default Landing;
