import "./Options.css";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import Filter from "./Filter";
import Sort from "./Sort";

export default function Options(props) {
    const genres = ["Pop", "Electronic", "Indie"]
    const artists = ["Taylor Swift", "Billie Eilish", "ODESZA", "Hippo Campus"]
    const sorting = ["A-Z: Song Name", "Z-A: Song Name", "Duration: Low to High", "Duration: High to Low"]

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
        </div>
    )
}