//This is my created class for bmi.js
class BMI {

    //Constructor for the class which holds
    //Height and Weight arguments
    constructor(height, weight) {

        this.height = height;
        this.weight = weight;

    }

    //Method to calculate the BMI
    calculateBMI(){

        let bmi= this.weight/(this.height**2);
        //After the return method you should recieve your bmi
        //After calculation is completed
        return bmi;
        
    }

}


//This is the instance of  the class
//It also invokes the BMI Method and
//Prints out the return method
let myBMI = new BMI(2, 90);
console.log(myBMI.calculateBMI());