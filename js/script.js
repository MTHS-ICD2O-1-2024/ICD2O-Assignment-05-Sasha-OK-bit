// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}


function nextPrime(n) {
  while (!isPrime(n)) {
    n++;
  }
  return n;
}


const userValue = parseInt(document.getElementById("uservalue")).value;

if (!isNaN(userValue)) {
  const nearestPrime = nextPrime(userValue);
  document.getElementById("answer1").innerHTML =
      "<p>Your number is close to... " + nearestPrime + "</p>";
} 