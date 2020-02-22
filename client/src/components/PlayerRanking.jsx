import React from 'react';
import useData from './../hooks/useData';
import PlayerCard from './PlayerCard';
import axios from 'axios';
import styled from 'styled-components';

const Cards = styled.div`
  background: url("https://images.unsplash.com/photo-1552667466-07770ae110d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 75%
  
  @media (max-width: 1000px) {
    width: 80%;
  }

  @media (max-width: 700px) {
    width: 90%;
  }

  @media (max-width: 400px) {
    width: 95%;
  }
`

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
      <Cards>
        {
          this.state.players.length > 0 ? 
            this.state.players.map(player => (
              <PlayerCard data={player} />
            ))
            : null
        }
      </Cards>
    );
  }
}

export default PlayerRanking;