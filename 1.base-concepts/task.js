"use strict"
function solveEquation(a, b, c) {
  let d = b ** 2 - 4 * a * c;
  let arr = [];

  if (d === 0) {
    arr = [-b / (2 * a)];
  }
  if (d > 0) {
    arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent / 100 / 12;
  let loanBody = Math.abs(amount - contribution);
  let monthlyPayment = loanBody * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
  let totalAmount = Number((monthlyPayment * countMonths).toFixed(2));

  return totalAmount;
}