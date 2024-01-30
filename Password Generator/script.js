// Selecting DOM elements
const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordsDisplay = document.querySelector("[data-passwordDisplay]");
const copybtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numberCheck = document.querySelector("#numbers");
const symbolCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

// initially
let password = "";
let passwordLength = 10;
let checkCount = 0;

// Initialize the slider and indicator
handleSlider("#ccc");
setIndicator("#ccc");

// set passwordLength
function handleSlider() {
  inputSlider.value = passwordLength;
  lengthDisplay.innerText = passwordLength;

  // filling slider color
  const min=inputSlider.min;
  const max=inputSlider.max;
  inputSlider.style.backgroundSize=((passwordLength-min)*100/(max-min))+"%100%";
}

// Set strength circle color
function setIndicator(color) {
  indicator.style.backgroundColor = color;
  // shadow
  indicator.style.boxShadow = `0 0 12px 1px ${color}`;
}

// Generate a random integer between min and max
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Generate a random number
function generateRandomNumber() {
  return getRndInteger(0, 9);
}

// Generate a random lowercase letter
function generateLowercase() {
  return String.fromCharCode(getRndInteger(97, 123));
}

// Generate a random uppercase letter
function generateUppercase() {
  return String.fromCharCode(getRndInteger(65, 91));
}

// Generate a random symbol from the symbols string
function generateSymbol() {
  const randNum = getRndInteger(0, symbols.length);
  return symbols.charAt(randNum);
}

// Calculate password strength and set indicator color
function calcStrength() {
  let hasUpper = false;
  let hasLower = false;
  let hasNum = false;
  let hasSym = false;
  if (uppercaseCheck.checked) hasUpper = true;
  if (lowercaseCheck.checked) hasLower = true;
  if (numberCheck.checked) hasNum = true;
  if (symbolCheck.checked) hasSym = true;

  if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
    setIndicator("#0f0");
  } else if ((hasLower || hasUpper) && (hasNum || hasSym) && passwordLength >= 6) {
    setIndicator("#ff0");
  } else {
    setIndicator("#f00");
  }
}

// Copy content to clipboard
async function copyContent() {
  try {
    await navigator.clipboard.writeText(passwordsDisplay.value);
    copyMsg.innerText = "Copied";
  } catch (e) {
    copyMsg.innerText = "Failed";
  }
  // Show copy message and hide after 2 seconds
  copyMsg.classList.add('active');
  setTimeout(() => {
    copyMsg.classList.remove('active');
  }, 2000);
}

// Handle checkbox changes
function handleCheckBoxChange() {
  checkCount = 0;
  allCheckBox.forEach((checkbox) => {
    if (checkbox.checked) {
      checkCount++;
    }
  });
  // special condition
  if (passwordLength < checkCount) {
    passwordLength = checkCount;
    handleSlider();
  }
}

// Add event listeners to checkboxes
allCheckBox.forEach((checkbox) => {
  checkbox.addEventListener("change", handleCheckBoxChange);
});

// Add event listener to slider input
inputSlider.addEventListener('input', (e) => {
  passwordLength = e.target.value;
  handleSlider();
});

// Add event listener to copy button
copybtn.addEventListener('click', () => {
  if (passwordsDisplay.value) {
    copyContent();
  }
});

// Shuffle the characters of the password array
function shufflePassword(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  let str = array.join("");
  return str;
}

// Generate password and display in UI
generateBtn.addEventListener('click', () => {
  // none of the checkboxes are checked
  if (checkCount <= 0) return;
  if (passwordLength < checkCount) {
    passwordLength = checkCount;
    handleSlider();
  }

  // remove old password
  password = "";

  let funcArr = [];
  if (uppercaseCheck.checked)
    funcArr.push(generateUppercase);
  if (lowercaseCheck.checked)
    funcArr.push(generateLowercase);
  if (numberCheck.checked)
    funcArr.push(generateRandomNumber);
  if (symbolCheck.checked)
    funcArr.push(generateSymbol);

  // compulsory addition
  for (let i = 0; i < funcArr.length; i++) {
    password += funcArr[i]();
  }

  // remaining addition
  for (let i = 0; i < passwordLength - funcArr.length; i++) {
    let randIndex = getRndInteger(0, funcArr.length);
    password += funcArr[randIndex]();
  }

  // shuffle the password
  password = shufflePassword(Array.from(password));

  // show in UI
  passwordsDisplay.value = password;
  calcStrength();
});
