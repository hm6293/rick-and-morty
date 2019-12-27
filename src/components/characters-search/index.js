import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  searchWrapper: {
    margin: '10px',
    '@media only screen and (max-width: 768px)': {
      margin: '10px 0',
    },
  },
  searchBar: {
    height: '40px',
    background: '0 0',
    fontSize: '15px',
    lineHeight: '1.2',
    padding: '0 2px',
    outline: 'none',
    border: 'none',
    borderBottom: '2px solid grey',
    touchAction: 'manipulation',
    ':focus': {
      borderBottom: '2px solid black',
    },
    width: '100%',
    maxWidth: '300px',
    minWidth: '250px',
    margin: '10px',
    boxSizing: 'border-box',
  },
  headline: {
    fontSize: '22px',
    paddingBottom: '5px',
  },
});

const CharactersSearch = ({
  text,
  onTextChange,
}) => (
  <div className={css(styles.searchWrapper)}>
    <div className={css(styles.headline)}>Search By Name</div>
    <input
      type="text"
      className={css(styles.searchBar)}
      placeholder="Search..."
      value={text}
      onChange={(event) => onTextChange(event.target.value)}
    />
  </div>
);

CharactersSearch.defaultProps = {
  text: '',
  onTextChange: () => {},
};

CharactersSearch.propTypes = {
  text: PropTypes.string,
  onTextChange: PropTypes.func,
};

export default CharactersSearch;
