const card = {
    name: "Snortleblat",
    class: "SwampBeast",
    level: 1,
    health: 10,
    img: "snortleblat.webp",
    attack: function () {
        if (this.health <= 0) {
            alert(`${this.name} has been defeated!`);
            return;
        }

        this.health = Math.max(0, this.health - this.level);

        if (this.health === 0) {
            alert(`${this.name} has been defeated!`);
        }

        renderPlayerCard(this);
    },
    levelup: function () {
        if (this.health > 0) {
            this.level += 1;
            this.health += 10;
            renderPlayerCard(this);
        }
        else {
            alert(`${this.name} cannot level up because it has been defeated!`);
        }
    }
}


function statsTemplate(card) {
    return `<p><strong>Class:</strong> ${card.class}</p>
            <p><strong>Level:</strong> ${card.level}</p>
            <p><strong>Health:</strong> ${card.health}</p>`
}
function renderPlayerCard(card) {
    console.log("ran");
    let image = document.getElementById("image");
    let name = document.getElementById("name");
    let stats = document.querySelector(".stats");
    let statshtml = statsTemplate(card);

    image.src = card.img;
    name.textContent = card.name;

    stats.innerHTML = statshtml;
}

renderPlayerCard(card);


document.querySelector(".attack").addEventListener("click", function () {
    card.attack()
})

document.querySelector(".level").addEventListener("click", function () {
    card.levelup()
})