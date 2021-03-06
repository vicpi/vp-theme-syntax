// Guaranteed to be secret; I asked several friends if they know what
// the secret number is, and nobody said this number.
const SECRET_NUMBER = 251;

function multiply(a, b) {
    return a * b;
}

function generateRandomNumber() {
    return SECRET_NUMBER;
}

class ExampleClass {
    exampleMethod1() {
        return 'Lorem ipsum';
    }

    exampleMethod2(argument1, argument2) {
        return argument1 + argument2;
    }
}

const greetings = (name) => {
    const str = `Greetings ${name}`;
    console.log(str);
}

let instanceOfExampleClass = new ExampleClass();
const str = instanceOfExampleClass.exampleMethod1();
const sum = instanceOfExampleClass.exampleMethod2(1, 2);
const multiplication = multiply(1, 1);
console.log(`sum ${sum}`);
