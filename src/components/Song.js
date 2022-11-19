import "./Song.css";

export default function Song(props) {
    const song = props.song;

    return  (
        <div className="Song">
            <img src={song.cover}/>
            <div className="name">
                {song.name}
            </div>
            <div className="artist">
                {song.artist}
            </div>
        </div>
    )
}