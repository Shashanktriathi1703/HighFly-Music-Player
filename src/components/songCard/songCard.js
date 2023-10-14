import React from "react";
import AlbumImage from "./albumimage";
import AlbumInfo from "./albuminfo";
import "./songCard.css";
const SongCard = ({ album }) => {
  
  return (
    <div className="songCard-body flex">
      <AlbumImage url = {album?.images[0]?.url} />
      <AlbumInfo album = {album} />
    </div>
  )
}

export default SongCard
