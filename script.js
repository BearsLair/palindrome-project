//Palindrome Checker Algorithm:
//string to lower-case
//filter out all non-alpha characters via regular expression
//change to array of characters
//reverse array with forEach and unshift array methods
//join reversed array into reversed string
//compare original string to reversed string
//return if there is a match or not with ternary operator

const inputField = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");

const palindromeChecker = (inputText) => {
  console.log("inputText is... ", inputText);

  const pureText = inputText.toLowerCase().replace(/[^a-z]/g, "");
  console.log("pureText is... ", pureText);

  let reversedArr = [];

  pureText.split("").forEach((char) => reversedArr.unshift(char));
  console.log("reversedArr is now... ", reversedArr);

  const reversedStr = reversedArr.join("");
  console.log("reversedStr is... ", reversedStr);

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
    console.log("result text is...", result);
    inputField.value = "";
  }
});
