const selectElem = document.getElementById("webdevlist");

selectElem.addEventListener("change", function () {
    let codeValue = selectElem.value;
    const topics = document.getElementById("topics");

    if (codeValue === "html") {
        topics.style.color = "black";
        document.querySelector("h2").textContent = "HyperText Markup Language";
    }

    if (codeValue === "css") {
        topics.style.color = "blue";
        document.querySelector("h2").textContent = "Cascading Style Sheets";
    }

    if (codeValue === "js") {
        topics.style.color = "yellow";
        document.querySelector("h2").textContent = "JavaScript";
    }