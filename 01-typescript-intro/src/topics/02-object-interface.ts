
interface Character {
    name: string;
    hp: number;
    skills: string[],
    hometown?: string
}


const skills: string[] = ["Bash", "Counter", "Healing"];

const blackvani: Character = {
    name: "Blackvani",
    hp: 100,
    skills  ,
}

blackvani.hometown = "SS";

console.table(blackvani);


export { }