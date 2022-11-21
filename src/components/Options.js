import "./Options.css";
import Filter from "./Filter";
import Sort from "./Sort";
import songData from "../assets/song-data.json";

export default function Options(props) {
    const genres = ["Electronic", "Indie", "Pop"]
    const artists = ["Billie Eilish", "Hippo Campus", "ODESZA", "Taylor Swift"]
    const sorting = ["A-Z: Song Name", "Z-A: Song Name", "Duration: Low to High", "Duration: High to Low"]

    let buttonText;
    // user is viewing favorites
    if (props.liked) {
        buttonText = "Browse Songs"
    // user is viewing liked songs
    } else {
        buttonText = "View Liked"
    }

    return  (
        <div className="Options">
            <div className="section">
                Filter
            </div>
            <div className="title">
                GENRE
            </div>

            {genres.map((currGenre, index) => ( 
            <Filter curr={currGenre} type={props.genre} change={props.changeGenre}/>
            ))}

            <div className="title">
                ARTIST
            </div>

            {artists.map((currArtist, index) => ( 
            <Filter curr={currArtist} type={props.artist} change={props.changeArtist}/>
            ))}
            <div className="section">
                Sort
            </div>
            {sorting.map((currSort, index) => ( 
            <Sort currSort={currSort} sort={props.sort} changeSort={props.changeSort}/>
            ))}
            <button className="button" onClick={() => {props.changeLiked()}}>
                {buttonText}
            </button>

            <button className="button" onClick={() => {
                props.sortDisplay(songData, "A-Z: Song Name")
                props.updateGenre([])
                props.updateArtist([])
                props.updateSort("A-Z: Song Name")}}>
                Reset Filters/Sort
            </button>
        </div>
    )
}