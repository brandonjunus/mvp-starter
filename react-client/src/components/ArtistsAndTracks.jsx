import styled from 'styled-components';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

const Border = styled.div`
    border-style : solid;
    display: flex;
`

const ArtistImage = styled.img`
    height: 160px;
    width: 160px;
`
const AlbumImage = styled.img`
    height: 160px;
    width: 160px;
`

const ArtistsAndTracksContainer = styled.div`
    display: flex;
    width: auto;
`
const Artists = styled.div`
    width: 50%
`
const Artist = styled.li`
    margin-bottom: 20px;
    list-style: none;
`

const Tracks = styled.ul`
    width: 50%;
`

const Track = styled.li`
    margin-bottom: 20px;
    list-style: none;
`

const TrackInfo = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Playfair+Display;
    font-family: 'Playfair Display', serif;
`
const ArtistInfo = styled.div`

`

const ArtistUnorderedList = styled.ul`
    list-style: none;
`

const ArtistsAndTracks = (props) => {
    const {artists, profile, tracks, artistsAveragePopularity, tracksAveragePopularity} = props;
    const artistItems = artists.items;
    const trackItems = tracks.items;
    if (artists, profile, tracks, artistsAveragePopularity, tracksAveragePopularity){
        const artistsToRender = artistItems.map((artist, index) =>
            <Artist key={index}>
                <Border>
                    <ArtistImage src={artist.images[2].url}></ArtistImage>
                    <ArtistInfo>
                        <div>{artist.name}</div>
                        <div>Hipster Level: {100 - artist.popularity}</div>
                    </ArtistInfo>
                </Border>
            </Artist>
        )
        const tracksToRender = trackItems.map((track, index) =>
            <Track key={index}>
                <Border>
                    <AlbumImage src={track.album.images[1].url}></AlbumImage>
                    <TrackInfo>
                        <TrackInfo>{track.name}</TrackInfo >
                        <div>Hipster Level: {100 - track.popularity}</div>
                        <div>{track.artists.map((artist, index) => <div key={index}>{artist.name}</div>)}</div>
                    </TrackInfo>
                </Border>
            </Track>
        );
        return (
            <ArtistsAndTracksContainer>
                <Artists>
                    Your Hipster Level based on Tracks: {100 - artistsAveragePopularity}
                    <div>
                        Your Top Artists
                        <ul>
                            {artistsToRender} 
                        </ul>    
                    </div>
                </Artists>
                <Tracks>
                    Your Hipster Level based on Tracks: {100 - artistsAveragePopularity}
                    <div>
                        Your Top Tracks
                        <ul>
                            {tracksToRender} 
                        </ul>    
                    </div>
                </Tracks>
            </ArtistsAndTracksContainer>
        );
    }

    return (<div>Loading...</div>)
}

export default ArtistsAndTracks;