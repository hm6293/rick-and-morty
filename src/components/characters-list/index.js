import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import CharacterCard from '../character-card';

const styles = StyleSheet.create({
  list: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
  },
});

const CharactersList = ({
  characters,
}) => (
  <div className={css(styles.list)}>
    {
    characters.length ? characters
      .map((character) => (
        <CharacterCard
          className={css(styles.listChild)}
          key={character.id}
          character={character}
        />
      )) : null
    }
  </div>
);

CharactersList.defaultProps = {
  characters: [],
};

CharactersList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object),
};

export default CharactersList;
