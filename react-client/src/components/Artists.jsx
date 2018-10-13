import React from 'react';

const Artists = ({artists}) => {
    console.log('artists Data', artists);
    if (artists){
        const {items} = artists;

        
        // is there some way to make this algorithm better? 
        let averagePopularityArtists = 0
        items.forEach(artist => {averagePopularityArtists += artist.popularity});
        averagePopularityArtists = averagePopularityArtists / items.length
        
        console.log(averagePopularityArtists);

        const artistsToRender = items.map((track, index) =>
            <li key={index}>
                <div>{track.name}</div>
                <div>Popularity: {track.popularity}</div>
            </li>
        );

        return (
            <div>
                Your Hipster Level based on Tracks: {averagePopularityArtists}
                <div>
                    Your Top Artists
                    <ol>
                        {artistsToRender} 
                    </ol>    
                </div>
            </div>
        );
    }

    return (<div>loading...</div>)
}

export default Artists;