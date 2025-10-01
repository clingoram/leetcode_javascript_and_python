export class Vehicle {
    /**
     * 
     * @param {string} brand 
     * @param {string} type 
     */
    constructor(brand,type){
        this.brand = brand;
        this.type = type;
    }

    startEngine(){
        console.log(`This car is a ${this.brand} ${this.model}.`);
    }
}