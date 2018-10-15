import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

const Tracks = ({tracks}) => {
    // console.log('Track Data', tracks);
    if (tracks){
        const {items} = tracks;

        // is there some way to make this algorithm better? 
        let averagePopularityTracks = 0
        items.forEach(track => {averagePopularityTracks += track.popularity});
        averagePopularityTracks = averagePopularityTracks / items.length
        

        const tracksToRender = items.map((track, index) =>
            <li key={index}>
                <div>{track.name}</div>
                <div>Popularity: {track.popularity}</div>
            </li>
        );
        return (
            <div>
                Your Hipster Level based on Tracks: {averagePopularityTracks}
                <div>
                    Your Top Tracks
                    <ol>
                        {tracksToRender} 
                    </ol>    
                </div>
                <Link to="/artists">Visit artists</Link>
            </div>
        );
    }

    return (<div>loading...</div>)
}

export default Tracks;