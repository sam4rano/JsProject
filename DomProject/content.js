const jobList = [
    {
    id: 1,
    year:2015,
    company: "account",
    logo: "images/account.svg",
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: []
  },
  {
    id: 2,
    year:2010,
    company: "loop studios",
    logo: "images/loop-studios.svg",
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    languages: ["Python"],
    tools: ["React"]
  },
  {
    id: 3,
    year:2000,
    company: "Manage",
    logo: "images/manage.svg",
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    languages: ["JavaScript"],
    tools: ["React", "Sass"]
  },
  {
    id: 4,
    year:2011,
    company: "faceit",
    logo: "images/faceit.svg",
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    languages: ["Ruby"],
    tools: ["RoR"]
  },
  {
    id: 5,
    year:2012,
    company: "Myhome",
    logo: "images/myhome.svg",
    position: "Software Engineer",
    role: "Fullstack",
    level: "Midweight",
    languages: ["JavaScript"],
    tools: ["Ruby", "Sass"]
  },
  {
    id: 6,
    year:2020,
    company: "Manage",
    logo: " images/manage.svg",
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    languages: ["CSS","JavaScript"],
    tools: ["React", "Sass"]
  },
  {
    id: 7,
    year:2000,
    company: "Shortly",
    logo: "images/shortly.svg",
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    languages: ["HTML", "JavaScript"],
    tools: ["React", "Sass"]
  },
  {
    id: 8,
    year:2017,
    company: "Insure",
    logo: "images/insure.svg",
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"]
  },
  {
    id: 9,
    year:2005,
    company: "Eyecam Co.",
    logo: "images/eyecam-co.svg",
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    languages: ["JavaScript", "Python"],
    tools: ["Django"]
  },
  {
    id: 10,
    year:2010,
    company:"The Air Filter Company",
    logo: "images/the-air-filter-company.svg",
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    languages: ["JavaScript"],
    tools: ["React", "Sass"]
  }
];


function age(year) {
    let calculatedAge = new Date().getFullYear() - year;
    if(calculatedAge == 1) {
      return '1 year old'
    } else if (calculatedAge == 0) {
      return 'Baby'
    } else {
      return `${calculatedAge} years old`
    }
  }
  
  function language(languages) {
    return `
      <h4> Favorite Lang </h4>
      <ul class="foods-list">
        ${languages.map(lang => `<li>${lang}</li>`).join('')}
      </ul>
    `
  }
  
  function jobData(data) {
    return `
    <div class="job-details"> 
    <div>
     <img class="job-photo" src="${data.logo}"> 
     <h2 class="pet-name">${data.company} 
     <span class="species">(${data.position})</span></h2>
     <p><strong>Age:</strong> ${age(data.year)}</p>
      ${data.tools ? language(data.tools) : ""}
    </div>
    <div class="pst">
    <h2 class="pet-name">${data.company} </h2>
    <h2 class="pet-name">${data.role} </h2>
    <h2 class="pet-name">${data.level} </h2>
    </div>
    </div>
    `
  }
  
  document.getElementById("app").innerHTML = `
  <h1 class="app-title">JobList (${jobList.length} results) </h1>
  ${jobList.map(jobData).join("")}
  <p class="footer">These ${jobList.length} pets were added recently. Check back soon for updates</p>
  `;
// const jobs = document.querySelector('#app').innerHTML