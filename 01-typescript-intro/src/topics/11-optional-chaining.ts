

export interface Passanger {
    name: string;
    children?: string[],
}

const passanger1: Passanger = {
    name: "Jose",
}

const passanger2: Passanger = {
    name: "Pedro",
    children: ["peneman", "Hijo"]
}

const printChildrem = (passanger: Passanger) =>{
    const howManyChilder = passanger.children?.length || 0;
    console.log(passanger.name, howManyChilder);
}

printChildrem(passanger1);