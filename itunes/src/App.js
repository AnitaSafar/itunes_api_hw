import React, { useEffect, useState } from 'react';
import SongList from './containers/SongList';
import './App.css';


function App() {
  const [songs, setSongs] = useState([])

  useEffect(() => {
    getSongs();
  }, [])

  const getSongs = function(){
    fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
    .then(response => response.json())
    .then(songs => setSongs(songs))
    console.log(songs)
  }

  return (
    <>
    <h1>Current Top 20 songs - UK </h1>
    <SongList/>
    </>
  );
}

export default App;
