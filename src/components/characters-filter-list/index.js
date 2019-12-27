import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  filterList: {
    margin: '20px',
  },
  headline: {
    fontSize: '22px',
    paddingBottom: '15px',
  },
  subHeadline: {
    fontSize: '18px',
    textTransform: 'capitalize',
    paddingBottom: '10px',
    fontWeight: 'bold',
  },
  filterBox: {
    margin: '10px',
    padding: '5px',
    border: '1px solid grey',
  },
  inputBox: {
    marginRight: '5px',
  },
  filterValue: {
    textTransform: 'capitalize',
  },
});

const CharactersFilterList = ({
  filters,
  selectedFilters,
  onFilterChange,
}) => {
  const [selecFilters, setSelecFilters] = useState({ ...selectedFilters });

  const handleInputChange = (event, filterKey, filterValue) => {
    const filtersToBeSelected = { ...selectedFilters };
    const index = selectedFilters[filterKey] ? selectedFilters[filterKey].indexOf(filterValue) : -1;
    if (event.target.checked && index < 0) {
      if (!filtersToBeSelected[filterKey]) {
        filtersToBeSelected[filterKey] = [];
      }
      filtersToBeSelected[filterKey].push(filterValue);
    } else if (!event.target.checked && filtersToBeSelected[filterKey] && index > -1) {
      filtersToBeSelected[filterKey].splice(index, 1);
    }
    setSelecFilters(filtersToBeSelected);
    onFilterChange(filtersToBeSelected);
  };

  return (
    <div className={css(styles.filterList)}>
      <div className={css(styles.headline)}>Filters</div>
      {
        Object.keys(filters).map((key) => (
          <div key={key} className={css(styles.filterBox)}>
            <div className={css(styles.subHeadline)}>{key}</div>
            {
              filters[key].map((filterValue) => (
                <div key={`${key}-${filterValue}`}>
                  <input
                    name={`${key}-${filterValue}`}
                    type="checkbox"
                    className={css(styles.inputBox)}
                    checked={
                      selecFilters[key] && selecFilters[key].indexOf(filterValue) > -1
                    }
                    onChange={(event) => handleInputChange(event, key, filterValue)}
                  />
                  <span className={css(styles.filterValue)}>{filterValue}</span>
                </div>
              ))
            }
          </div>
        ))
      }
    </div>
  );
};

CharactersFilterList.defaultProps = {
  filters: {},
  selectedFilters: {},
  onFilterChange: () => {},
};

CharactersFilterList.propTypes = {
  filters: PropTypes.object,
  selectedFilters: PropTypes.object,
  onFilterChange: PropTypes.func,
};

export default CharactersFilterList;
