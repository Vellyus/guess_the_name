const message = document.querySelector("p");
const input = document.querySelector("input");

const eventHandler = () => {
  const inputText = input.value;
  const hash = CryptoJS.SHA256(inputText.toLowerCase()).toString(CryptoJS.enc.Hex);

  if (hash === "32a0668ee4e8f835840957970258226c07029e3b48fe812fd2d5a0c4e54ad27c") {
    message.innerText = "Congratulations! This is the name.";
  } else {
    message.innerText = "This is not the name.";
    input.value = "";
  }

};

const button = document.querySelector('button');
const body = document.querySelector("body");
button.addEventListener("click", eventHandler);
body.addEventListener("keypress", (e) => {
  if (e.key === "Enter") eventHandler();
});
