'use strict';
const billInput = document.querySelector('.bill');
const tipBtns = document.querySelectorAll('.tip_btn');
const peopleInput = document.querySelector('.people_input');
const custom = document.querySelector('.custom');
const totalAmount = document.querySelector('.total_amount');
const totalAmountPerPerson = document.querySelector('.total_amnt_person');
const calculate = document.querySelector('.calculate');
const reset = document.querySelector('.reset');

//initialize my variable
billInput.value = '0.0';
peopleInput.value = '1';
totalAmount.innerHTML = '$' + (0.0).toFixed(2);
totalAmountPerPerson.innerHTML = '$' + (0.0).toFixed(2);

// creating variables i will use for reassignment
let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.2;

//*** Function to convert the bill to numbers */
const billInputNum = function () {
  billValue = Number(billInput.value);
};
//** Function to convert the no of people to number */
const peopleInputNum = function () {
  peopleValue = Number(peopleInput.value);
};

//** Function to handle click  on the btns */

const handleClick = function (e) {
  tipBtns.forEach((btn) => {
    btn.classList.remove('selected');
    if (e.currentTarget.innerHTML === btn.innerHTML) {
      btn.classList.add('selected');
      tipValue = parseFloat(btn.innerHTML) / 100;
    }
  });
};

//** Function to convert the value in the custom */
const customFn = function () {
  tipValue = parseFloat(custom.value / 100);

  tipBtns.forEach((btn) => {
    btn.classList.remove('selected');
  });
};

//*** Function to calculate tip */
const calculateTipAmount = function () {
  if (peopleValue >= 1) {
    let tipAmount = billValue * tipValue;
    let total = billValue + tipAmount;
    totalAmount.innerHTML = '$' + total.toFixed(2);
    totalAmountPerPerson.innerHTML = '$' + (total * peopleValue).toFixed(2);
  }
};
//** Function to reset calculator */
const resetFn = function () {
  billInput.value = '0.0';
  peopleInput.value = '1';
  custom.value = '';
  totalAmount.innerHTML = '$' + (0.0).toFixed(2);
  totalAmountPerPerson.innerHTML = '$' + (0.0).toFixed(2);
  tipBtns.forEach((btn) => {
    btn.classList.remove('selected');
  });
};

//listening for an input event
billInput.addEventListener('input', billInputNum);
peopleInput.addEventListener('input', peopleInputNum);
custom.addEventListener('input', customFn);

//looping and calling a function on each btn
tipBtns.forEach((btn) => {
  btn.addEventListener('click', handleClick);
});
//listening for click event on the button calculate
calculate.addEventListener('click', calculateTipAmount);
reset.addEventListener('click', resetFn);
