import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { sortingOptions } from '../../constants';

const styles = StyleSheet.create({
  sortWrapper: {
    margin: '10px',
    '@media only screen and (max-width: 768px)': {
      margin: '10px 0',
    },
  },
  sortDropdown: {
    height: '40px',
    background: '0 0',
    fontSize: '15px',
    lineHeight: '1.2',
    padding: '0 2px',
    outline: 'none',
    border: 'none',
    borderBottom: '2px solid grey',
    touchAction: 'manipulation',
    width: '100%',
    maxWidth: '300px',
    minWidth: '250px',
    margin: '10px',
    borderRadius: 0,
  },
  headline: {
    fontSize: '22px',
    paddingBottom: '5px',
  },
});

const CharactersSorting = ({
  sorting,
  onSortChange,
}) => (
  <div className={css(styles.sortWrapper)}>
    <div className={css(styles.headline)}>Sort By ID</div>
    <select
      value={sorting}
      onChange={(event) => onSortChange(event.target.value)}
      className={css(styles.sortDropdown)}
    >
      {sortingOptions.map((option) => <option value={option} key={option}>{option}</option>)}
    </select>
  </div>
);

CharactersSorting.defaultProps = {
  sorting: '',
  onSortChange: () => {},
};

CharactersSorting.propTypes = {
  sorting: PropTypes.string,
  onSortChange: PropTypes.func,
};

export default CharactersSorting;
