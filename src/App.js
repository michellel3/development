import './App.css';
import { useState } from "react";
import songData from "./assets/song-data.json";
import Song from "./components/Song";

songData.forEach((song) => {
  song.cover = process.env.PUBLIC_URL + "/" + song.cover;
});

function App() {
  return (
    <div className="App">
      hello
      <div className="menu">
          {songData.map((song, index) => ( // TODO: map bakeryData to BakeryItem components
          <Song song={song} />
          ))}
      </div>
    </div>
  );
}

export default App;
