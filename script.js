const inputField = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultText = document.getElementById("result");

const palindromeChecker = (inputText) => {
  const pureText = inputText.toLowerCase().replace(/[^a-z0-9]/g, "");

  let reversedArr = [];

  pureText.split("").forEach((char) => reversedArr.unshift(char));

  const reversedStr = reversedArr.join("");

  return pureText === reversedStr
    ? `${inputText} is a palindrome`
    : `${inputText} is not a palindrome`;
};

checkBtn.addEventListener("click", () => {
  if (inputField.value === "") {
    alert("Please input a value");
  } else {
    let inputText = inputField.value;
    let result = palindromeChecker(inputText);

    resultText.textContent = result;
    inputField.value = "";
  }
});
