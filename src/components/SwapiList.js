import React from 'react';
import SwapiListCard from './SwapiListCard';

const SwapiList = ({ people }) => {
  return (
    <div className="row nested">
      <div className="col col-span-12">
      {
        people.length > 0 ? people.slice(0, 5).map((user, i) => {
          return (
            <SwapiListCard
              key={i}
              name={user.name}
              birth_year={user.birth_year}
              gender={user.gender}
            />
          );
        }) : (<h2>No results found :(</h2>)
      }
      {people.length > 5 ? (<h2>and more {people.length - 5} restults...</h2>) : null}
      </div>
    </div>
  );
}

export default SwapiList;