
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    autor: string
    year: number
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Solia",
    details: {
        autor: "Bad Bunny",
        year: 2020
    }
}

const { song,songDuration: duration, details} = audioPlayer;
const {autor} = details;

// console.log("Song: ", audioPlayer.song);
// console.log("Duration: ", duration);
// console.log("Autor: ", autor);


const dbz: string[] = ["Goku", "Vegeta", "Trunks"];
const [,,trunks = "No encontrado"] = dbz;
console.log("personaje 3:", trunks);