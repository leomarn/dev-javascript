export class CreateClientDto {
    id?: number;
    name: string;
    contact: string;
    email: string;

    constructor(name: string, contact: string, email: string){
        this.name = name;
        this.contact = contact;
        this.email = email;
    }   
}
