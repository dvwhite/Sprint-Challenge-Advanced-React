import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  margin: 1%;
  background-color: #333;
  color: #fff;
  opacity: 0.95;
  border: 0;
  border-radius: 10px;
  box-shadow: 0 -1px 0 #e0e0e0, 
              0 0 2px rgba(0, 0, 0, 0.12), 
              0 2px 4px rgba(0, 0, 0, 0.24);
  width: 18rem;
  height: 12rem;
  overflow: hidden;
  word-wrap: break-word;
`

/*
Player shape should look like:
  {
    name: "Alex Morgan"
    country: "United States"
    searches: 100
    id: 0
  }
*/

const PlayerCard = ({ data }) => {
  return (
    <Card id={data.id}>
      <h2>{data.name}</h2>
      <p>Searches: {data.searches}</p> 
      <p>Country: {data.country}</p>
    </Card>
  );
}

export default PlayerCard;