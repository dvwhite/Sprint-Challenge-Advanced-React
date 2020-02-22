import React from 'react';
import useData from './../hooks/useData';
import PlayerCard from './PlayerCard';
import axios from 'axios';

class PlayerRanking extends React.Component {
  constructor() {
    super();
    this.state = {
      players: {}
    }
  }

  componentDidMount() {
    // API call to the local Google Data server
    // Get data from the API
    const apiURL = 'http://localhost:5000/api/players';

    axios.get(apiURL)
      .then(res => {
        console.log(res);
        this.setState({...this.state, players: res.data});
      })
      .catch(err => console.error(err))
  }

  render () {
    return (
      <div>
        {
          this.state.players.length > 0 ? 
            this.state.players.map(player => (
              <PlayerCard data={player} />
            ))
            : null
        }
      </div>
    );
  }
}

export default PlayerRanking;