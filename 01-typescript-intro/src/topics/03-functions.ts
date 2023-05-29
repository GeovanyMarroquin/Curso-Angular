
function addNumbers(a: number, b: number): number {
    return a + b;
}

const addNumbersArrow = (a: number, b: number): string => `${a + b}`;

function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}

// const result: number = addNumbers(1, 2);
// const result2: string = addNumbersArrow(1, 2);
// const multiplyResult: number = multiply(5);
// console.log({ result, result2, multiplyResult})

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, ammount: number) => {
    return character.hp + ammount >= 100 ? character.hp = 100 : character.hp += ammount;
}

const blackvany: Character = {
    name: "BlackVany",
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
    }
}

healCharacter(blackvany, 10);
healCharacter(blackvany, 30);


blackvany.showHp();
export { }