import React from 'react';
import { graphql } from 'react-apollo';
import MyQuery1 from './test.gql';

export class Main extends React.Component {
  static displayName = 'Main';

  render() {
    return this.props.data.loading ? (
      <div>
        <img src="http://ispokemongodownornot.com/pikachu.gif" />
        LOADING...
      </div>
    ) : (
      this.props.data.pokemons.map(pokemon => (
        <div key={pokemon.id}>
          <img src={pokemon.image} alt={pokemon.name} width={50} height={50} />
          {pokemon.name}
          {pokemon.evolutions &&
            pokemon.evolutions.map(evolution => (
              <div key={evolution.id}>
                <img
                  src={evolution.image}
                  alt={evolution.id}
                  width={25}
                  height={25}
                />
              </div>
            ))}
        </div>
      ))
    );
  }
}

export default graphql(MyQuery1, {
  options: () => ({
    variables: { number: 150 },
  }),
})(Main);
