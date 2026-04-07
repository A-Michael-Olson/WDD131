let projects = [];
let currentIndex = 0;

async function init() {
    const res = await fetch('projects.json');
    const data = await res.json();
    projects = data.projects;

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    currentIndex = projects.findIndex(p => p.id === id);
    if (currentIndex === -1) currentIndex = 0;

    renderProject(projects[currentIndex].id);
    setupProjectNav();
}

function setupProjectNav() {
    const prevBtn = document.getElementById('project-prev');
    const nextBtn = document.getElementById('project-next');

    prevBtn.onclick = () => {
        currentIndex = (currentIndex - 1 + projects.length) % projects.length;
        renderProject(projects[currentIndex].id);
    };

    nextBtn.onclick = () => {
        currentIndex = (currentIndex + 1) % projects.length;
        renderProject(projects[currentIndex].id);
    };
}

function renderProject(id) {
    const project = projects.find(p => p.id === id);

    if (!project) {
        console.error(`Project with id "${id}" not found`);
        return;
    }

    renderTitle(project.title);
    renderImages(project.images);
    renderList('features-list', project.features);
    renderList('takeaways-list', project.takeaways);
    renderDescription(project.description, project.details);
}



function renderTitle(title) {
    document.getElementById('project-title').textContent = title;
}

function renderImages(images) {
    const track = document.querySelector('.slider-track');
    track.innerHTML = '';

    images.forEach((img, i) => {
        const figure = document.createElement('figure');

        figure.innerHTML = `
      <img src="${img.src}" alt="Screenshot ${i + 1}">
      <figcaption>${img.caption}</figcaption>
    `;

        track.appendChild(figure);
    });
}

function renderList(id, items) {
    const ul = document.getElementById(id);
    ul.innerHTML = '';

    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });
}

function renderDescription(descArray, details) {
    const container = document.getElementById('description');
    container.innerHTML = '';

    descArray.forEach(text => {
        const p = document.createElement('p');
        p.textContent = text;
        container.appendChild(p);
    });

    const detail = document.createElement('p');
    detail.innerHTML = `<em>${details}</em>`;
    container.appendChild(detail);
}


init();