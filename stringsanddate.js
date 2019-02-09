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
  let result = reverseString(string.value);
if(string.value.replace(/ /gi, '').length < 1)result = "Nemam sta da okrenem";
  const ui = new UI();
  ui.addResult(result, string);
  ui.clearFields();

  e.preventDefault();
});

// Event Listener for number of words in str
document.getElementById('words').addEventListener('submit', function (e) {
  const string = document.getElementById('winput');
  let result = numberOfWords(string.value);
  if(string.value === "")result = "Unesite neku recenicu";
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
  let result = date.addDays(string.value);
if(result == "Invalid Date")result = "Morate uneti neki broj";
  const ui = new UI();
  ui.addResult(result, string);

  ui.clearFields();
  e.preventDefault();
});