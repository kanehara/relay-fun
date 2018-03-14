import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {graphql, QueryRenderer} from 'react-relay';
import environment from './relayEnv';

class App extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query Query {
            genres
          }
        `}
        variables={{}}
        render={({error, props}) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return (
            <React.Fragment>
              {props.genres.map((g, i) => <h1 key={i}>{g}</h1>)}
            </React.Fragment>
          );
        }}
      />
    );
  }
}

export default App;
