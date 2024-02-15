const userInput = document.querySelector("#number");
const convertBtn = document.querySelector("#convert-btn");
const output = document.querySelector("#output");
const ref = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1],
];

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
});

function convertToRoman(num) {
  let res = [];

  ref.forEach((arr) => {
    while (num >= arr[1]) {
      res.push(arr[0]);
      num -= arr[1];
    }
  });

  return res.join("");
}

function outputDisplay(op) {
  let text;
  if (op === "NaN") {
    text = "Please enter a valid number";
    output.classList.add("error");
  } else if (op < 1) {
    text = "Please enter a number greater than or equal to 1";
    output.classList.add("error");
  } else if (op > 3999) {
    text = "Please enter a number less than or equal to 3999";
    output.classList.add("error");
  } else {
    text = op;
  }
  output.innerHTML = text;
  output.classList.remove("hidden");
}

convertBtn.addEventListener("click", () => {
  let inp = userInput.value;
  inp = parseInt(inp, 10);
  if (isNaN(inp)) {
    outputDisplay("NaN");
  } else if (inp > 3999 || inp < 1) {
    outputDisplay(inp);
  } else {
    outputDisplay(convertToRoman(inp));
  }
});

userInput.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    let inp = userInput.value;
    inp = parseInt(inp, 10);
    if (isNaN(inp)) {
      outputDisplay(NaN);
    } else if (inp > 3999 || inp < 1) {
      outputDisplay(inp);
    } else {
      outputDisplay(convertToRoman(inp));
    }
  }
});
