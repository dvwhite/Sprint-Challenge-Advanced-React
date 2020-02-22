import React from 'react';

const PlayerCard = ({ data }) => {
  return (
    <div>
      <h2>Name: {data.name}</h2>
    </div>
  );
}

export default PlayerCard;