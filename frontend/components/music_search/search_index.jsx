import React from 'react';
import SearchIndexItem from './search_index_item';

export default ({searchItems, firstTime, searchVal, currentUser, clearState}) => {
  if (searchVal === "") return null;
  let songs = [];
  let artists = [];
  let albums = [];

  searchItems.forEach(
    (item) => {
      if (item.type === "song") {
        songs.push(item);
      } else if (item.type === "artist") {
        artists.push(item);
      } else if (item.type === "album") {
        albums.push(item);
      }
    }
  );

  let songsUl;
  let artistsUl;
  let albumsUl;
  let songsHeader;
  let artistsHeader;
  let albumsHeader;

  if (firstTime === false) songsHeader = <h3>Songs</h3>;
  if (songs.length !== 0) {
    songsUl =
    <ul>
      <li className="Header">Songs</li>
      {songs.map(
        (item) => (<SearchIndexItem currentUser={currentUser}
          item={item} key={item.id} clearState={clearState}/>)
      )}
    </ul>;
  } else if (firstTime === false){
    songsUl =
    <ul>
      <li className="Header">Songs</li>
      <li>No matchings songs</li>
    </ul>;
  }

  if (firstTime === false) artistsHeader = <h3>Artists</h3>;
  if (artists.length !== 0) {
    artistsUl =
    <ul>
      <li className="Header">Artists</li>
      {artists.map(
        (item) => (<SearchIndexItem currentUser={currentUser}
          item={item} key={item.id} clearState={clearState}/>)
      )}
    </ul>;
  } else if (firstTime === false){
    artistsUl =
    <ul>
      <li className="Header">Artists</li>
      <li>No matchings artists</li>
    </ul>;
  }

  if (firstTime === false) albumsHeader = <h3>Albums</h3>;
  if (albums.length !== 0) {
    albumsUl =
    <ul>
      <li className="Header">Albums</li>
      {albums.map(
        (item) => (<SearchIndexItem currentUser={currentUser}
          item={item} key={item.id} clearState={clearState}/>)
      )}
    </ul>;
  } else if (firstTime === false){
    albumsUl =
    <ul>
      <li className="Header">Albums</li>
      <li>No matchings albums</li>
    </ul>;
  }

  return(
    <div className="SearchIndex">
      {songsUl}
      {artistsUl}
      {albumsUl}
    </div>
  );
};
