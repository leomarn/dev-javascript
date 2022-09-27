export class VeiculosDTO {
    id?: number;
    image?: string;
    model: string;
    color: string;
    price: number;
    description: string;
    status: boolean;

    constructor(model: string, color: string, price: number,description: string,status: boolean){
        this.model = model;
        this.color = color;
        this.price = price;
        this.description = description;
        this.status = status;
    }
}