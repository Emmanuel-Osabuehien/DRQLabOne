//This is my created class for cars.js
class Vehicle {

    //Constructor for the class which holds
    //Make, Model and Year arguments
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    //Method to ensure the class logs the arguments to console
    Information() {

        console.log(`Make: ${this.make}.`);
        console.log(`Model: ${this.model}.`);
        console.log(`Year: ${this.year}.`);

    }
}

//This is my new class which extends the Vehicle class
class Cars extends Vehicle {

    //A new constructor for the new class which now holds 4 arguments instead of 3
    //It adds the argument'doors' to the previous set of arguments
    constructor(make, model, year, doors) {

        //This super invokes the parent class constructor and
        //pass the arguments 'make, model and year' to the console
        super(make, model, year);
        this.doors = doors;

    }

    //This method to ensure the class logs the new arguments to the console
    Information() {

        super.Information();
        console.log(`Doors: ${this.doors}`);

    }
}

//This is the instance of  the class
//and ensures that the class works directly and especially the 'doors' argument
let myCar = new Cars('VW', 'Passat', 2020, 5);
myCar.Information();

//This is my instance for the original Information method()
//I have already ensured that this works so it is no longer necessary
//As I create a new method but use the function 'extends'


//let myVehicle = new Vehicle('VW', 'Golf', 2000);
//myVehicle.Information();