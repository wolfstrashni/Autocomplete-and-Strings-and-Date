 // Written by Vuk Vodogaz   //
// wolftrashni@gmail.com    //


// Reverse string
function reverseString(string) {
  const reversed = string.split("").reverse().join("");
  // console.log(reversed);
  return reversed;
}

// Count Number of words in string
function numberOfWords(string) {
  let count = string.split(" ").length;
  // console.log(count);
  return count;
}

// Add days to Date class
Date.prototype.addDays = function (num) {
  const date = new Date(this.valueOf());
  date.setDate(date.getDate() + parseInt(num));
  // console.log(parseInt(no));
  return date;
}

// UI constructor
function UI() {}

// Clear input fields
UI.prototype.clearFields = function () {
  document.getElementById('rinput').value = '';
  document.getElementById('winput').value = '';
  document.getElementById('dinput').value = '';
}

// Add result to page
UI.prototype.addResult = function (res, element) {

  element.parentElement.parentElement.lastElementChild.innerHTML = res;
}

// Event Listener for reversed str
document.getElementById('reverse').addEventListener('submit', function (e) {
  const string = document.getElementById('rinput');
  // Process input string
  let result = reverseString(string.value);
  if (string.value.replace(/ /gi, '').length < 1) result = "Nemam sta da okrenem";
  const ui = new UI();
  ui.addResult(result, string);
  ui.clearFields();

  e.preventDefault();
});

// Event Listener for number of words in str
document.getElementById('words').addEventListener('submit', function (e) {
  const string = document.getElementById('winput');
  // Process input string
  let result = numberOfWords(string.value);
  if (string.value === "") result = "Unesite neku recenicu";
  const ui = new UI();
  ui.addResult(result, string);
  ui.clearFields();

  e.preventDefault();
});

// Event Listeners for adding days
document.getElementById('date').addEventListener('submit', function (e) {
  const string = document.getElementById('dinput');
  // Instantiate Date 
  const date = new Date();
  // Process input days
  let result = date.addDays(string.value);
  // Process result
  if (result == "Invalid Date") result = "Morate uneti neki broj";
  const ui = new UI();

  ui.addResult(result, string);

  ui.clearFields();
  e.preventDefault();
});

// Get datalist
const dataList = document.getElementById('json-data');
const input = document.getElementById('autocomp');



// Add event listener for number of letters typed
input.addEventListener('keyup', function () {
  inp = input.value.length;
  // Setting list attribute on input element
  if (inp < 1) {
    input.setAttribute('list', '');
  } else {
    input.setAttribute('list', 'json-data');
  }
});


// Declaring input.length variable for list opening only on key press
let inp;

// Crete XMLHttpRequest.
const request = new XMLHttpRequest();

// Handle state changes for the request.
request.onreadystatechange = function () {
  // Checking response
  if (request.readyState === 4) {
    if (request.status === 200) {
      // Set json to array 
      const json = JSON.parse(request.responseText);
      // Loop through array
      json.forEach(function (item) {
        //Create new option element
        const option = document.createElement('option');
        option.value = item;
        //Append option element to datalist
        dataList.appendChild(option);
      });

    } else {
      // Display error message
      input.placeholder = "auto-suggest ne radi - json nije ucitan";
    }
  }
};
// Set up and make the request.
request.open('GET', 'autosuggest.json', true);
request.send();
