import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import CharactersList from './components/characters-list';
import CharactersSearch from './components/characters-search';
import CharactersSorting from './components/characters-sorting';
import CharactersFilterList from './components/characters-filter-list';
import CharactersSelectedFilterList from './components/characters-selected-filter-list';
import { fetchCharactersList } from './actions/characters-list';
import {
  onSearchTextChange,
  setFilters,
  setSelectedFilters,
  setSorting,
} from './actions/characters-search';
import {
  sortingOptions,
} from './constants';

const styles = StyleSheet.create({
  app: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    '@media only screen and (max-width: 768px)': {
      fontSize: '12px',
      flexDirection: 'column',
    },
    display: 'flex',
    flexDirection: 'row',
    margin: '20px',
  },
  filterList: {
    width: '15%',
    '@media only screen and (max-width: 768px)': {
      width: '100%',
    },
  },
  listWrapper: {
    width: '85%',
    display: 'flex',
    flexDirection: 'column',
    '@media only screen and (max-width: 768px)': {
      width: '100%',
    },
  },
  searchAndSort: {
    paddingLeft: '20px',
    paddingRight: '20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    '@media only screen and (max-width: 768px)': {
      flexDirection: 'column',
    },
  },
});

const App = ({
  fetchCharactersList: getCharactersList,
  characters,
  searchText,
  searchTextChanged,
  filters,
  createFilters,
  selectedFilters,
  updateSelectedFilters,
  sorting,
  updateSorting,
}) => {
  const [filteredList, setFilteredList] = useState([...characters]);
  const [filtersCreated, setFiltersCreated] = useState(false);

  useEffect(() => {
    getCharactersList();
  }, []);

  useEffect(() => {
    if (characters.length && !filtersCreated) {
      const characterFilters = { ...filters };
      characters.forEach((character) => {
        Object.keys(characterFilters).forEach((filterKey) => {
          if (characterFilters[filterKey].indexOf(character[filterKey].toLowerCase()) < 0) {
            characterFilters[filterKey].push(character[filterKey].toLowerCase());
          }
        });
      });
      createFilters(characterFilters);
      setFiltersCreated(true);
    }

    const filtered = characters.filter((character) => {
      let toSelect = character.name.toLowerCase().includes(searchText.toLowerCase());
      Object.keys(selectedFilters).forEach((key) => {
        toSelect = toSelect && !(selectedFilters[key] && selectedFilters[key].length
          && selectedFilters[key].indexOf(character[key].toLowerCase()) < 0);
      });
      return toSelect;
    });

    if (sorting === sortingOptions[0]) {
      filtered.sort((a, b) => (a.id - b.id));
    } else {
      filtered.sort((a, b) => (b.id - a.id));
    }

    setFilteredList(filtered);
  }, [searchText, characters, selectedFilters, sorting]);


  return (
    <div className={css(styles.app)}>
      <div className={css(styles.filterList)}>
        <CharactersFilterList
          filters={filters}
          selectedFilters={selectedFilters}
          onFilterChange={updateSelectedFilters}
        />
      </div>
      <div className={css(styles.listWrapper)}>
        <CharactersSelectedFilterList
          selectedFilters={selectedFilters}
          onFilterChange={updateSelectedFilters}
        />
        <div className={css(styles.searchAndSort)}>
          <div className={css(styles.search)}>
            <CharactersSearch text={searchText} onTextChange={searchTextChanged} />
          </div>
          <div className={css(styles.sort)}>
            <CharactersSorting sorting={sorting} onSortChange={updateSorting} />
          </div>
        </div>
        <CharactersList characters={filteredList} />
      </div>
    </div>
  );
};

App.defaultProps = {
  characters: [],
  searchText: '',
  filters: {},
  selectedFilters: {},
  sorting: '',
  fetchCharactersList: () => {},
  searchTextChanged: () => {},
  createFilters: () => {},
  updateSelectedFilters: () => {},
  updateSorting: () => {},
};

App.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object),
  searchText: PropTypes.string,
  filters: PropTypes.object,
  selectedFilters: PropTypes.object,
  fetchCharactersList: PropTypes.func,
  searchTextChanged: PropTypes.func,
  createFilters: PropTypes.func,
  updateSelectedFilters: PropTypes.func,
  sorting: PropTypes.string,
  updateSorting: PropTypes.func,
};

const mapStateToProps = ({
  charactersList: { characters },
  charactersSearch: {
    searchText,
    filters,
    selectedFilters,
    sorting,
  },
}) => ({
  characters,
  searchText,
  filters,
  selectedFilters,
  sorting,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCharactersList: () => dispatch(fetchCharactersList()),
  searchTextChanged: (text) => dispatch(onSearchTextChange(text)),
  createFilters: (filters) => dispatch(setFilters(filters)),
  updateSelectedFilters: (filters) => dispatch(setSelectedFilters(filters)),
  updateSorting: (sorting) => dispatch(setSorting(sorting)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
