import React from 'react';
import Song from '../components/Song';

const SongList = ({songs}) => {
    const allSongs = songs.map((song, index) => {
        
        return <Song song={song} key={index} id={index+1}/>
        
    
    });

    return(
        <ul>
        {allSongs}
        </ul>
    )
};

export default SongList;
