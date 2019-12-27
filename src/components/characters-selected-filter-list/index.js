import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  filterList: {
    margin: '15px',
  },
  headline: {
    fontSize: '22px',
    marginBottom: '5px',
  },
  filterValue: {
    marginRight: '5px',
    textTransform: 'capitalize',
  },
  filterButton: {
    backgroundColor: 'grey',
    border: 'none',
    color: 'white',
    padding: '5px 8px',
    fontSize: '16px',
    cursor: 'pointer',
    margin: '5px',
  },
});

const CharactersSelectedFilterList = ({
  selectedFilters,
  onFilterChange,
}) => {
  const [anyFilterSelected, setAnyFilterSelected] = useState(false);

  useEffect(() => {
    setAnyFilterSelected(Object.keys(selectedFilters).some((key) => selectedFilters[key].length));
  }, [selectedFilters]);

  const handleInputChange = (filterKey, index) => {
    const filtersToBeSelected = { ...selectedFilters };
    filtersToBeSelected[filterKey].splice(index, 1);
    onFilterChange(filtersToBeSelected);
  };

  return anyFilterSelected ? (
    <div className={css(styles.filterList)}>
      <div className={css(styles.headline)}>Selected Filters</div>
      <div>
        {
          Object.keys(selectedFilters).map((key) => (
            selectedFilters[key].map((filterValue, index) => (
              <button
                type="button"
                key={`${key}-${filterValue}-selected`}
                onClick={() => handleInputChange(key, index)}
                className={css(styles.filterButton)}
              >
                <span className={css(styles.filterValue)}>{filterValue}</span>
                <i className="fa fa-close" />
              </button>
            ))
          ))
        }
      </div>
    </div>
  ) : null;
};

CharactersSelectedFilterList.defaultProps = {
  selectedFilters: {},
  onFilterChange: () => {},
};

CharactersSelectedFilterList.propTypes = {
  selectedFilters: PropTypes.object,
  onFilterChange: PropTypes.func,
};

export default CharactersSelectedFilterList;
