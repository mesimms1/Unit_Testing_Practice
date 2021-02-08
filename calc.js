/*This class should have a memory property that stores the most recent calculation along with several methods.
Each method should work as described in its respective comment and should throw a descriptive error if the input is invalid.*/
class Calc {

    //Constructs a Calc with an undefined memory property
    constructor() {
        this.memory = undefined;
    }

    //Clears the memory property
    clearMem() {
        this.memory = undefined;
    }

    //Adds two numbers together, defaults the second value to the memory property
    add(value1, value2 = this.memory) {
        if(value2!==undefined) {
        this.memory = value1 + value2;
        console.log(`${value1} + ${value2} = ${this.memory}`);
        return this.memory;
        } else {
             console.log(new Error('Must input two values to add'));
        }
    }

    //Subtracts one number from another number, defaults the second value to the memory property
    subtract(value1, value2 = this.memory) {
        if(value2!==undefined) {
            this.memory = value2 - value1;
            console.log(`${value2} - ${value1} = ${this.memory}`);
            return this.memory;
            } else {
                 console.log(new Error('Must input two values to subtract'));
            }
    }

    //Multiplies two numbers together, defaults the second value to the memory property
    multiply(value1, value2 = this.memory) {
        if(value2!==undefined) {
            this.memory = value1 * value2;
            console.log(`${value1} x ${value2} = ${this.memory}`);
            return this.memory;
            } else {
                 console.log(new Error('Must input two values to multiply'));
            }
    }

    //Divides one number by another, defaults second value to the memory property
    divide(value1, value2 = this.memory) {
        if(value2!==undefined) {
            this.memory = value1 / value2;
            console.log(`${value1} / ${value2} = ${this.memory}`);
            return this.memory;
            } else {
                 console.log(new Error('Must input two values to divide'));
            }
    }

    //Converts temperature from Celcius to Farenheit
    convertToF(cTemp) {
        if(typeof cTemp === 'number'){
        return cTemp * 1.8 + 32;
        } else {
            console.log(new Error('Invalid input: input must be a number'))
        }
    }

    //Converts temperature from Farenheit to Celcius
    convertToC(fTemp) {
        if(typeof fTemp === 'number'){
            return (fTemp - 32)/1.8;
        } else {
            console.log(new Error('Invalid input: input must be a number'))
        }
    }

    //Returns the square root of a number, defaults input to the memory property
    sqrt(num = this.memory) {
        if(num!== undefined) {
            this.memory = Math.sqrt(num);
            return this.memory;
        } else {
            console.log(new Error('Invalid input: input must be a number'))
        }
    }
}

//Start Manual Debugging. 

let calc = new Calc();

/*checking all outcomes for subtract method

//Checking subtract function
console.log("Expected: 5 - 3 = 2");
calc.subtract(5, 3);
//Result: Error. The second value is being subtracted from first, instead of visa versa

//checking that memory is being recorded in subtract method
console.log(calc.memory);
//Result: Success

//checking if memory is default for subtraction function
console.log("Expected: 2 -3 = -1");
calc.subtract(3, );
//Result: Success 

//Checking error message for subtract method if only one input and nothing in memory.
console.log('Expected: Error: Must input two values to subtract');
calc.subtract(1);
//Result: Success


//Checking that an error is printed if the input values are strings:
console.log('Expected: Error: Must input two values to subtract');
calc.subtract('String1', 'String2');
//Result: 'String2 - String1 = NaN;
*/

/*Checking if cleamMem function is working
console.log("Expected: Undefined");
calc.clearMem();
console.log(calc.memory);
Result: Success
*/

/*Checking all outcomes for the add function. 
//Checking add function:
console.log('Expected: 1 + 2 = 3');
calc.add(1, 2);
//Result: Success


//Checking to see if add function saves second value to memory
console.log('Expected: 3');
console.log(calc.memory);
//Result: Success

//Checking if add function sets second value to default memory
console.log('Expected: 2 + 3 = 5');
calc.add(2);
//Result: Success
calc.clearMem();

//Checking if the error is thrown up in add function if only one value is put in and there is nothing stored in memory. 
console.log('Expected: Error: Must input two values to add');
calc.add(2);
//Result: Success
*/

/*Checking multiply function and all outcomes. 

//check if error message appear for only one value in multiply function
console.log('Expected: Error: Must input two values to multiply');
calc.multiply(1);
//Result: Success

//checking that multiply function works
console.log('Expected: 3 x 5 = 15');
calc.multiply(3, 5);
//Result: Success

//checking that multipyly function stores second value as memory
console.log('Expected: 15');
console.log(calc.memory);
//Result: Success

//checking that multiply function sets second value as default value
console.log('Expected: 10 x 15 = 150');
calc.multiply(10);
//Result: Success
*/

/* Checking divide function and all outcomes:

//check if error message appear for only one value in divide function
console.log('Expected: Error: Must input two values to divide');
calc.divide(1);
//Result: Success

//checking that divide function works
console.log('Expected: 15 / 5 = 3');
calc.divide(15, 5);
//Result: Success

//checking that divide function stores second value as memory
console.log('Expected: 3');
console.log(calc.memory);
//Result: Success

//checking that divide function sets second value as default value
console.log('Expected: 12 x 3 = 4');
calc.divide(12);
//Result: Success
*/

/*Checking functionality of convertToF


//Checking that convertToF works if given a number:
console.log('Expected: 32');
calc.convertToF(0);
//Result: No console log


//Checking that convertToF works if put into console.log:
console.log('Expected: 32');
console.log(calc.convertToF(0));
//Result: Success. 

//Checking that convertToF works with negative numbers. Using console.log
console.log('Expected: -13');
console.log(calc.convertToF(-25));
//Result: Success
*/

//Checking that convertToF error message works if not given a number as value. Not using console.log
console.log('Expected: Error: Invalid input: input must be a number');
calc.convertToF('-25');
//Result: Success

//Checking that convertToF error message works if not given a number as value. Use console.log
console.log('Expected: Error: Invalid input: input must be a number');
console.log(calc.convertToF('-25'));
//Result: Success

//It was a 30 minute testing session. This is the number of manual tests that I was able to make. 



