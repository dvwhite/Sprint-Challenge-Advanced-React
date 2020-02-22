import React, { useEffect } from 'react';
import styled from 'styled-components';
import useLocalStorage from './../hooks/useLocalStorage';

const Card = styled.div`
  margin: 1%;
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
const PlayerCard = ({ data, color, bgColor }) => {
  const [isStateful, setIsStateful] = useLocalStorage('isStateful', false);
  return (
    <Card id={data?.id} style={{"backgroundColor": bgColor, "color": color}}>
      <h2 data-testid='name'>{data?.name}</h2>
      <p>Searches: {data?.searches}</p> 
      <p>Country: {data?.country}</p>
    </Card>
  );
}

export default PlayerCard;