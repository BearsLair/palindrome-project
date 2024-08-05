//change to array of characters
//filter out all non-alpha characters via regular expression
//reverse string with for loop
//compare original string to reversed string
//return if there is a match or not

const inputField = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");

const palindromeChecker = (inputText) => {
  const charArray = inputText.replace(/[^A-Za-z]/gi, "").split("");
  console.log(charArray);
};

checkBtn.addEventListener("click", () => {
  if (inputField.value === "") {
    alert("Please input a value");
  } else {
    let inputText = inputField.value;
    palindromeChecker(inputText);
    inputField.value = "";
  }
});
