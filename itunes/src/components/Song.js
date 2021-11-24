import React from 'react';

const Song = ({song, id}) => {
    console.log(id)
    return(
        <p><b>#{id}</b> {song.title.label}</p>
    )
};

export default Song;