import "./Body.css";
import { useState } from "react";
import songData from "../assets/song-data.json";
import Song from "./Song";
import Options from "./Options";

export default function Body() {
    // keep track of liked songs
    const [fav, updateFav] = useState([]);
    // keep track of genres checked
    const [genre, updateGenre] = useState([]);
    // keep track of artists checked
    const [artist, updateArtist] = useState([]);
    // keep track of filtered songs
    const [display, updateDisplay] = useState(songData);
    // keep track of sorting method
    const [sort, updateSort] = useState("A-Z: Song Name");

    // updates the state of liked songs
    const changeFav = (song) => {
        if (fav.includes(song.name)) {
            updateFav(fav.filter(s => s !== song.name))
        } else {
            updateFav([...fav, song.name])
        }
    }

    // updates the state of filtered genres
    const changeGenre = (type) => {
        if (genre.includes(type)) {
            updateGenre(genre.filter(x => x !== type))
            removeFilter(type, null)
        } else {
            updateGenre([...genre, type])
            addFilter(type, null)
        }
    }

    // updates the state of filtered artists
    const changeArtist = (type) => {
        if (artist.includes(type)) {
            updateArtist(artist.filter(x => x !== type))
            removeFilter(null, type)
        } else {
            updateArtist([...artist, type])
            addFilter(null, type)
        }
    }

    // updates the state of the sorting method
    const changeSort = (type) => {
        updateSort(type)
    }

    // checking a new filter
    const addFilter = (addG, addA) => {
        let filtered = songData;

        if (addA !== null || artist.length !== 0) {
            filtered = songData.filter(x => artist.includes(x.artist) || x.artist === addA)
        }

        if (addG !== null || genre.length !== 0) {
            filtered = filtered.filter(x => genre.includes(x.genre) || x.genre === addG)
        }
        updateDisplay(filtered)
    }

    // unchecking an existing filter
    const removeFilter = (remG, remA) => {
        // removing the only filter that existed, equivalent to resetting
        if (artist.length + genre.length === 1) {
            updateDisplay(songData)
        } else {
            let filtered = display;
            if (remA !== null) {
                if (artist.length === 1) {
                    filtered = songData.filter(x => genre.includes(x.genre))
                } else {
                    filtered = filtered.filter(x => artist.includes(x.artist) && x.artist !== remA)
                }
            }
    
            if (remG !== null) {
                filtered = filtered.filter(x => genre.includes(x.genre) && x.genre !== remG)
            }
            updateDisplay(filtered)
        }
    }

    const sortDisplay = (songs) => {
        if (display === "A-Z: Song Name") {

        } else if (display === "Z-A: Song Name") {

        } else if (display === "Duration: Low to High") {

        } else {

        }
    }

    return (
    <div className="Body">
        <div className='options'>
            <Options genre={genre} changeGenre={changeGenre} artist={artist} changeArtist={changeArtist} sort={sort} changeSort={changeSort}/>
        </div>
        
        <div className='list'>
            <div className="songs">
                {display.map((song, index) => ( 
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