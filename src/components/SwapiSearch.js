import React from 'react';

const SwapiSearch = ({ searchChange }) => {
  return (
      <div className="row nested">
        <div className="col col-span-12">
          <input autoFocus type='search' onChange={searchChange} />
        </div>
      </div>
  );
}

export default SwapiSearch;