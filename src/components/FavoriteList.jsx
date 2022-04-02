import React from 'react';
import { connect } from 'react-redux';
import Character from './Character';
import Empty from './Empty';
import '../assets/styles/components/FavoriteList.scss';

const FavoriteList = (props) => {
  const { favoriteCharacters } = props;

  return (
    <div className="favoriteList">
      {!favoriteCharacters.length ? (
        <Empty />
      ) : (
        favoriteCharacters.map((character) => (
          <Character key={character.data.id} data={character.data} />
        ))
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    favoriteCharacters: state.favoriteCharacters,
  };
};

export default connect(mapStateToProps, null)(FavoriteList);
