`use script`;

// document.getElementById(`count-el`).innerText = 10;

// let count = 0;

// Challenge:1
// let myAge = 24;
// console.log(myAge);

// Challenge:2

// let myAge = 24;
// let humanDogRatio = 7;

// let myDogAge = myAge * humanDogRatio;
// console.log(`Age of my Dog: ${myDogAge}`);

// challenge :3

// let bonousPoints = 50;
// console.log(bonousPoints);
// bonousPoints = bonousPoints + 50;
// console.log(bonousPoints);
// bonousPoints = bonousPoints - 75;
// console.log(bonousPoints);
// bonousPoints += 45;
// console.log(bonousPoints);

// Challenge:4

// function callNumber() {
//   console.log(`This is Number: ${42}`);
// }
// callNumber();

// challenge: 5

// const totalLaps = () => {
//   let lap1 = 34;
//   let lap2 = 33;
//   let lap3 = 36;

//   return lap1 + lap2 + lap3;
// };
// console.log(totalLaps());

// challenge #6:-

// let lapsCompleted = 0;

// function totalLaps() {
//   lapsCompleted++;
//   console.log(`Laps Completed: ${lapsCompleted}`);
// }
// totalLaps();
// totalLaps();
// totalLaps();
// Making the button Interactive

// challenge:7
// let message = `You have three new notifications`;
// console.log(message);

// challenge: 8

// let name = `Arpit`;
// let greeting = `Hi, my name is `;
// let myGreeting = greeting + name;
// console.log(myGreeting);

// challenge #9

// const welcomeEl = document.getElementById(`welcome-el`);
// let name = `Arpit`;
// let greeting = `Welcome `;
// welcomeEl.innerHTML = greeting + name;
// welcomeEl.innerHTML += ` 😀`;

let count = 0;
const passengerCount = document.getElementById(`count-el`);
const saveEl = document.getElementById(`save-el`);
const incrementBtn = document.getElementById(`increment-btn`);
const saveBtn = document.getElementById(`save-btn`);

// count passenger function
const countPassenger = function () {
  count++;
  passengerCount.textContent = count;
};

// save function

const save = () => {
  // console.log(`Number of Passengers Counted: ${count}`);
  let current = count + ` - `;
  // current += current;
  saveEl.textContent += current;
  count = 0;
  passengerCount.textContent = count;
};

// Adding Event to Increment Button
incrementBtn.addEventListener(`click`, countPassenger);

// Adding event to save button

saveBtn.addEventListener(`click`, save);
