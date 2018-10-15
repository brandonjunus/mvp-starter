import React from 'react';

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
            </div>
        );
    }

    return (<div>loading...</div>)
}

export default Tracks;