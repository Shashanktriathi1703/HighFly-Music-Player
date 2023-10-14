import React from 'react';
import './albumInfo.css';

const AlbumInfo = ({ album }) => {
  console.log(album);

  const artists = [];
  album?.artists?.forEach(element => {
    artists.push(element.name);
  });
  return (
    <div className='albumInfo-card'>
      <div className='albumName-conatiner'>
        <div className='marquee'>
          <p>{album?.name + "-" + artists?.join(", ")}</p>
        </div>
      </div>
      <div className='album-info'>
        <p>{`${album?.name} is an ${album?.album_type} by ${artists?.join(",")} with ${album?.total_tracks} track(s)`}</p>
      </div>
      <div className='album-release'>
        <p>Realease Date: {album?.release_date}</p>
      </div>
    </div>
  )
}

export default AlbumInfo
