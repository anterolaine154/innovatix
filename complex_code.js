/*
Filename: complex_code.js
Content: Complex Code Example
*/

// Define a class called Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Define a method to greet the person
  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Define a class called Account
class Account {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  // Define a method to deposit money into the account
  deposit(amount) {
    this.balance += amount;
    console.log(`${this.owner}'s account balance after deposit: ${this.balance}`);
  }

  // Define a method to withdraw money from the account
  withdraw(amount) {
    if (amount > this.balance) {
      console.log(`${this.owner}'s account balance is insufficient for withdrawal.`);
    } else {
      this.balance -= amount;
      console.log(`${this.owner}'s account balance after withdrawal: ${this.balance}`);
    }
  }
}

// Create instances of the Person and Account classes
const john = new Person("John Doe", 30);
const sarah = new Person("Sarah Smith", 25);
const johnAccount = new Account(john.name, 500);
const sarahAccount = new Account(sarah.name, 1000);

// Call the greet() method of the Person instances
john.greet();
sarah.greet();

// Call the deposit() and withdraw() methods of the Account instances
johnAccount.deposit(200);
sarahAccount.withdraw(500);
johnAccount.withdraw(1000);