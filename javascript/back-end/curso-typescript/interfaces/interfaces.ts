interface masterPerson {
    name: string
    age?: number
    [prop: string]: any
}
interface functionHello extends masterPerson {
    (objectInterface: any): void
}
class person implements masterPerson {
    constructor (public name: string, public age?: number, public height?: number){}
}
let helloPeople: functionHello
helloPeople = (person: masterPerson) => {
    let msg
    if(person.name){
        msg = `Name: ${person.name}`
        if(person.age){
            msg += `, Age: ${person.age}`
            if(person.height){
                msg += `, Height: ${person.height}`
            }
        }
    }
    return console.log(msg) 
}


const old1Person = new person('Jurunel')
const old2Person = new person('Astrofina', 29)
const newPerson = new person('Juscivladson', 29, 1.72)

helloPeople(old1Person)
helloPeople(old2Person)
helloPeople(newPerson)