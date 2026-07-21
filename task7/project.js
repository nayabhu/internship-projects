const projects = [



{
    title: "Portfolio Website",

    description:
    "Responsive personal portfolio built using HTML, CSS and JavaScript.",

    image: "images/project2.jpg",

    github: "https://github.com/yourusername/portfolio"
},

{
    title: "Weather App",

    description:
    "Weather application using JavaScript and OpenWeather API.",

    image: "images/project3.jpg",

    github: "https://github.com/yourusername/weather-app"
}

];

const container = document.getElementById("projectContainer");

projects.forEach(project => {

container.innerHTML += `

<div class="project-card">

<img src="${project.image}" alt="${project.title}">

<h2>${project.title}</h2>

<p>${project.description}</p>

<a href="${project.github}" target="_blank">View Project</a>

</div>

`;

});