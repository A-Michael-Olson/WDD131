const selectElem = document.getElementById("webdevlist");

selectElem.addEventListener("change", function () {
    let codeValue = selectElem.value;
    const topics = document.getElementById("topics");


    if (codeValue === "html") {
        topics.style.color = "black";
    }

    if (codeValue === "css") {
        topics.style.color = "blue";
    }

    if (codeValue === "js") {
        topics.style.color = "yellow";
    }
});