import React from 'react';

const SwapiListCard = ({ name, birth_year, gender }) => {
  return (
    <div>
      <div>
        <h2>{name}</h2>
        <p>{birth_year}</p>
        <p>{gender}</p>
      </div>
    </div>
  );
}

export default SwapiListCard;