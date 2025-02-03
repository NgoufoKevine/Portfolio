// Skills data
const skills = [
    "Python", "R", "SQL", "Machine Learning", "Data Visualization",
    "Statistical Analysis", "Deep Learning", "Big Data Technologies",
    "Data Cleaning", "Feature Engineering"
];

// Project data
const projects = [
    { 
        name: "Predictive Analysis of Customer Churn", 
        description: "Used machine learning algorithms to predict customer churn in a telecom company."
    },
    { 
        name: "COVID-19 Data Visualization Dashboard", 
        description: "Created an interactive dashboard to visualize COVID-19 trends using Python and Dash."
    },
    { 
        name: "Natural Language Processing for Sentiment Analysis", 
        description: "Developed a model to analyze sentiment in product reviews using NLP techniques."
    }
];

// Education data
const education = [
    {
        degree: "Bachelor of Science in Data Science",
        institution: "Data University",
        year: "2022 - Present"
    },
    {
        degree: "Data Science Bootcamp",
        institution: "Tech Academy",
        year: "Summer 2024"
    }
];

// Function to display skills
function displaySkills() {
    const skillsList = document.getElementById('skills-list');
    skills.forEach(skill => {
        const skillElement = document.createElement('li');
        skillElement.textContent = skill;
        skillsList.appendChild(skillElement);
    });
}

// Function to display projects
function displayProjects() {
    const projectList = document.getElementById('project-list');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
        `;
        projectList.appendChild(projectElement);
    });
}

// Function to display education
function displayEducation() {
    const educationList = document.getElementById('education-list');
    education.forEach(edu => {
        const eduElement = document.createElement('div');
        eduElement.innerHTML = `
            <h3>${edu.degree}</h3>
            <p>${edu.institution}, ${edu.year}</p>
        `;
        educationList.appendChild(eduElement);
    });
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    console.log("Form submitted:", { name, email, message });
    // Here you would typically send this data to a server
    alert("Thank you for your message! I'll get back to you soon.");
    event.target.reset();
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    displaySkills();
    displayProjects();
    displayEducation();
    document.getElementById('contact-form').addEventListener('submit', handleFormSubmit);
});
