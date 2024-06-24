import React from "react";
import "./SongRow.css";

function SongRow({ track }) {
  return (
    <div className="songRow">
      {/* Display album cover image */}
      <img src={track.album.images[0].url} alt="" className="songRow__album" />
      <div className="songRow__info">
        {/* Display track name */}
        <h1>{track.name}</h1>
        {/* Display artist names and album name */}
        <p>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;

/*
Explanation:

1. **Imports**: 
   - React for creating the component.
   - CSS file for styling the component.

2. **Function SongRow**:
   - The SongRow component is defined. It takes a single prop, `track`, which contains information about a song.

3. **Album Cover Image**:
   - An `img` tag is used to display the album cover image. The `src` attribute is set to the URL of the album cover image, which is accessed from `track.album.images[0].url`.

4. **Song Information**:
   - A `div` with the className `songRow__info` contains the song's name and other information.
   - The song's name is displayed inside an `h1` tag.
   - The `p` tag displays the names of the artists and the album name. The `map` function is used to get the names of the artists from the `track.artists` array, and the `join` function is used to join the artist names with a comma and space. The album name is accessed from `track.album.name`.

5. **Export**:
   - The SongRow component is exported as the default export from the module, making it available for use in other parts of the application.
*/
