
const title = document.getElementById("title");
const message = document.getElementById("message");
const button = document.querySelector("#changeButton");
const box = document.querySelector(".box");

button.textContent = "Click Me";

button.onclick = function () {
    title.textContent = "DOM Updated!";
    message.textContent = "The page has changed successfully.";

    title.style.color = "blue";
    box.style.fontSize = "20px";

    box.classList.add("active");
};

