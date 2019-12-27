import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { timeAgo } from './helpers';

const styles = StyleSheet.create({
  card: {
    margin: '5px',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3s',
    width: '23%',
    ':hover': {
      boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
    },
    '@media only screen and (max-width: 768px)': {
      width: '46%',
    },
  },
  imageContainer: {
    position: 'relative',
    marginBottom: '0',
    border: '0',
  },
  image: {
    width: '100%',
  },
  caption: {
    position: 'absolute',
    top: '75%',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: 'white',
    padding: '10px',
  },
  name: {
    fontSize: '22px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    '@media only screen and (max-width: 768px)': {
      fontSize: '14px',
    },
  },
  container: {
    padding: '2px 16px',
    display: 'flex',
    flexDirection: 'column',
  },
  detailsItem: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '7px',
    paddingBottom: '7px',
    ':not(:last-child)': {
      borderBottom: '1px solid black',
    },
  },
  detailsType: {
    width: '30%',
  },
  detailsValue: {
    width: '70%',
    textAlign: 'right',
    color: 'orange',
  },
});

const renderDetails = (character) => {
  const data = [{
    type: 'STATUS',
    value: character.status,
  }, {
    type: 'SPECIES',
    value: character.species,
  }, {
    type: 'GENDER',
    value: character.gender,
  }, {
    type: 'ORIGIN',
    value: character.origin.name,
  }, {
    type: 'LAST LOCATION',
    value: character.location.name,
  }];
  return data.map((el) => (
    <div className={css(styles.detailsItem)} key={`${character.id}-${el.type}`}>
      <div className={css(styles.detailsType)}>{el.type}</div>
      <div className={css(styles.detailsValue)}>{el.value}</div>
    </div>
  ));
};

const CharacterCard = ({
  character,
}) => (
  <div className={css(styles.card)}>
    <div className={css(styles.imageContainer)}>
      <img className={css(styles.image)} src={character.image} alt={character.name} />
      <div className={css(styles.caption)}>
        <div className={css(styles.name)}>
          {character.name}
        </div>
        <div>
          { `id: ${character.id} - created ${timeAgo(character.created)}` }
        </div>
      </div>
    </div>
    <div className={css(styles.container)}>
      {renderDetails(character)}
    </div>
  </div>
);

CharacterCard.defaultProps = {
  character: {},
};

CharacterCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    status: PropTypes.string,
    species: PropTypes.string,
    gender: PropTypes.string,
    origin: PropTypes.object,
    location: PropTypes.object,
    created: PropTypes.string,
  }),
};

export default CharacterCard;
