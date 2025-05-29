
console.log(`--------------------Define Vehicle class---------------------`);
class Vehicle {
    constructor(brand,model,color,type,price) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.type = type;
    this.price = price;
}
Details() {
    console.log(`Vehicle Details:Brand:${this.brand},Model:${this.model},Color:${this.color},Type:${this.type},price:${this.price}`);
}   
}
// creating 5 objects of vehicle class //
const vehicle1 = new Vehicle("Car","Toyota","Camry","Black",2020);
const vehicle2 = new Vehicle("Bike","Yamaha","MT-15","Blue",2022);
const vehicle3 = new Vehicle("Truck","Ford","F-150","Red",2019);
const vehicle4 = new Vehicle("SUV","Honda","CR-V","White",2021);
const vehicle5 = new Vehicle("Van","Mercedes","Sprinter","Silver",2018);
// log details//
vehicle1.Details();
vehicle2.Details();
vehicle3.Details();
vehicle4.Details();
vehicle5.Details();

console.log(`----------------------Define college class----------------------`);
class College {
    constructor(name,city,ranking,establishedYear){
        this.name = name;
        this.city = city;
        this.ranking = ranking;
        this.establishedYear = establishedYear;
    }
    display(){
        console.log(`College: ${this.name}, City: ${this.city}, Ranking: ${this.ranking}, Established: ${this.establishedYear} `);
        
    }
}
//creating 4 objects of college class//
const college1 = new College("IIT Bombay","Mumbai",1, 1958);
const college2 = new College("MM Nashik","Nashik",4, 1964);
const college3 = new College("Indira Pune","Pune",9, 1964);
const college4 = new College("Delhi University","Delhi",6, 1922);

college1.display();
college2.display();
college3.display();
college4.display();








