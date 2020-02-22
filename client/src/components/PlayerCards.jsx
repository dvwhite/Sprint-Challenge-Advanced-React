import React, { useEffect } from 'react';
import useData from './../hooks/useData';
import styled from 'styled-components';

// Component imports
import PlayerCard from './PlayerCard';

// Styled components
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

const PlayerCards = (props) => {
  const apiURL = 'http://localhost:5000/api/players';
  const [data, setData] =  useData(apiURL, {});
  
  // Get the API data using the custom hook useData
  useEffect(() => {
    setData(apiURL);
  }, []);
  
  // Returns a styled flex container for Card components
  if (!data) return <h2>Loading...</h2>

  return (
    <Cards>
      {console.log("data:", data)}
      {
        Array.isArray(data) ? 
          data.map(player => (
            <PlayerCard 
              data={player} 
              color='white' 
              bgColor='#333'
            />
          ))
          : null
      }
    </Cards>
  );
}

export default PlayerCards;