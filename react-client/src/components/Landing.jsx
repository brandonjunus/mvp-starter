import styled from 'styled-components';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

const LandingPageContainer = styled.div`
    width: 100%;
    // border-style: solid;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: beige;
`

const YourScore = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Playfair+Display');
    font-family: 'Playfair Display', serif;
    font-size: 75px;
    display: block;
`;

const YourHipsterSlogan = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Playfair+Display');
    font-family: 'Playfair Display', serif;
    font-size: 30px;
    display: block;
`;

const Border = styled.div`
    position: relative; 
    // border-style : solid;
    text-align: right;
    display: block;
    width: 80%;
    top: -150px;
`

const StyledLink = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Playfair+Display');
    font-family: 'Playfair Display', serif;    
    font-size: 20px;
`
const Landing = (props) => {
    
    console.log(props);
    const {display_name} = props.profile;
    console.log('displayname', display_name);
    // takes average popularity of all user's top 50 artists and tracks
    let hipsterRating = (100 - (props.artistsAveragePopularity + props.tracksAveragePopularity) / 2).toFixed(2);
    let hipsterSlogan = "Just have your friends call you Mississippi River from now on, you're that mainstream"
    return (
        <LandingPageContainer>
            <Border>
                <YourScore>{display_name ? `${display_name} , y`: 'Y'}our hipster rating is: {hipsterRating} / 100</YourScore>
                <YourHipsterSlogan>{hipsterSlogan}</YourHipsterSlogan>
                <StyledLink>
                    <Link to="/artistsandtracks">Lets see what makes you so basic...</Link>
                </StyledLink>
            </Border>
        </LandingPageContainer>
    )
}

export default Landing;
