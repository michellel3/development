import './App.css';
import { useState } from "react";
import songData from "./assets/song-data.json";
import Song from "./components/Song";
import Options from "./components/Options";

songData.forEach((song) => {
  song.cover = process.env.PUBLIC_URL + "/" + song.cover;
});

function App() {
  // keep track of liked songs
  const [fav, updateFav] = useState([]);

  const changeFav = (song) => {
    if (fav.includes(song.name)) {
      updateFav(fav.filter(s => s !== song.name))
    } else {
      updateFav([...fav, song.name])
    }
  }

  return (
    <div className="App">
      hello
      <div className='options'>
        <Options />
      </div>
      
      <div className='list'>
        <div className="songs">
            {songData.map((song, index) => ( 
            <Song song={song} fav={fav} changeFav={changeFav}/>
            ))}
        </div>
      </div>

      {/* <div>
        {fav.map((s, index) => (
          <p>{s}</p>
        ))}
      </div> */}
    </div>
  );
}

export default App;
