import React, { Component } from 'react';
import SwapiList from '../components/SwapiList';
import SwapiSearch from '../components/SwapiSearch';

class SwapiApp extends Component {
  constructor() {
    super()
    this.state = {
      people: [],
      loading: true,
      waiting: true
    }
    this.timeout =  0;
  }

  searchRefresh = (event) => {
    let searchText = event.target.value;
    if (this.timeout) clearTimeout(this.timeout)
    if (searchText) {
      this.timeout = setTimeout(() => {
        this.setState({ waiting: false, loading: true })
        this.fetchResults(searchText)
      }, 350);
    } else {
      this.setState({ waiting: true })
    }
  }

  fetchResults = (searchText) => {
    console.log('called')
    fetch('https://swapi.co/api/people/?search=' + searchText).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong');
      }
    })
    .then(people => {
      this.setState({ people: people.results, loading: false})})
    .catch((error) => {
      console.log(error)
    });
  }

  render() {
    const { people, loading, waiting } = this.state;
    console.log('render')
    return (
      <section>
        <div className="container swapi">
          <SwapiSearch searchChange={this.searchRefresh}/>
          {!waiting ? ( 
            !loading ? 
              <SwapiList people={people} /> :
              <div className="row nested">
                <div className="col col-span-12">
                  <h1>Loading...</h1>
                </div>
              </div>) :
            <div className="row nested">
              <div className="col col-span-12">
                <h1>Waiting for input...</h1>
              </div>
            </div>
          }
        </div>
      </section>
    );
  }
};

export default SwapiApp;