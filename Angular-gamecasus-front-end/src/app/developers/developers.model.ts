export class Developers {
    public id: number;
    public name: string;
    public age: number;

    constructor(values ={}) {
        Object.assign(this, values);
    }
}