
export class Person {
    // public name: string;
    // public address: string;

    constructor(
        public firstName: string,
        public lastName: string,
        public address: string = "Default"
    ) { }
}

// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string,
//         public address: string
//     ) {
//         super(realName, address)
//     }
// }

export class Hero {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        protected person: Person
    ) {
    }
}

const tony = new Person("Tony", "Stark", "PenDx");
const ironman = new Hero("Ironman", 25, "PenDx", tony);
console.log(ironman);
