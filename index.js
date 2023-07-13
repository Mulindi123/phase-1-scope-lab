// Write your solution in this file!
var customerName = 'bob';
 function  upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
  }

 // console.log(upperCaseCustomerName('bob'));



var setBestCustomer = function () {
  bestCustomer = 'not bob';
}

var overwriteBestCustomer = function () {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'initial value';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new value'; 
}