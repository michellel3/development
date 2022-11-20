import "./Options.css";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import Filter from "./Filter";

export default function Options(props) {
    const genres = ["Pop", "Electronic", "Indie"]
    const artists = ["Taylor Swift", "Billie Eilish", "ODESZA", "Hippo Campus"]

    return  (
        <div className="Options">
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
        </div>
    )
}