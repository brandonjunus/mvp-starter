import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Profile from './components/Profile.jsx';
import Tracks from './components/Tracks.jsx';
import Artists from './components/Artists.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      profile: null,
      tracks: null,
      tracksAveragePopularity: null,
      artists: null,
      artistsAveragePopularity: null, 
    }
  }

  findAveragePopularityOfItems(items){
    let averagePopularity = 0
    items.forEach(item => {averagePopularity += item.popularity});
    averagePopularity = averagePopularity / items.length;
    return averagePopularity;
  }

  componentDidMount() {
    let access_token = window.location.hash.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1];

    // user data
    $.ajax({
      url: 'https://api.spotify.com/v1/me',
      headers: {
        'Authorization':`Bearer ${access_token}`,
      }, 
      success: (data) => {
        this.setState({profile: data});
        console.log('got profile', this.state);
      },
      error: (err) => {
        console.log('err', err);
      }
    });

    // top artists
    $.ajax({
      url: 'https://api.spotify.com/v1/me/top/artists',
      headers: {
        'Authorization':`Bearer ${access_token}`,
      }, 
      data: {
        'limit' : 50,
        'time_range': 'long_term'
      },
      success: (data) => {
        this.setState({
          artists: data,
          artistsAveragePopularity: this.findAveragePopularityOfItems(data.items)
        });
        console.log('got artists', this.state);
      },
      error: (err) => {
        console.log('err', err);
      }
    });

    // top tracks
    $.ajax({
      url: 'https://api.spotify.com/v1/me/top/tracks',
      headers: {
        'Authorization':`Bearer ${access_token}`,
      }, 
      data: {
        'limit' : 50,
        'time_range': 'long_term'
      },
      success: (data) => {
        this.setState({
          tracks: data,
          tracksAveragePopularity: this.findAveragePopularityOfItems(data.items)
        });
        console.log('got tracks', this.state);
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (
    <div>
      <div>
        <h1>YOUR HIPSTER LEVEL {(this.state.artistsAveragePopularity + this.state.tracksAveragePopularity) / 2} / 100</h1>
        <Profile profile={this.state.profile}/>
        <br />
        <Tracks tracks={this.state.tracks}/>
        <br />
        <Artists artists={this.state.artists}/>
      </div>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));