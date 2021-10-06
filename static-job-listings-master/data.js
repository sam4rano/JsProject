const details = [
  {
    "id": 1,
    "company": "Photosnap",
    "logo": "./images/photosnap.svg",
    "neww": true,
    "featured": true,
    "position": "Senior Frontend Developer",
    "role": "Frontend",
    "level": "Senior",
    "postedAt": "1d ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["HTML", "CSS", "JavaScript"],
    "tools": []
  },
  {
    "id": 2,
    "company": "Manage",
    "logo": "./images/manage.svg",
    "neww": true,
    "featured": true,
    "position": "Fullstack Developer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "1d ago",
    "contract": "Part Time",
    "location": "Remote",
    "languages": ["Python"],
    "tools": ["React"]
  },
  {
    "id": 3,
    "company": "Account",
    "logo": "./images/account.svg",
    "neww": true,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2d ago",
    "contract": "Part Time",
    "location": "USA Only",
    "languages": ["JavaScript"],
    "tools": ["React", "Sass"]
  },
  {
    "id": 4,
    "company": "MyHome",
    "logo": "./images/myhome.svg",
    "neww": false,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "5d ago",
    "contract": "Contract",
    "location": "USA Only",
    "languages": ["CSS", "JavaScript"],
    "tools": []
  },
  {
    "id": 5,
    "company": "Loop Studios",
    "logo": "./images/loop-studios.svg",
    "neww": false,
    "featured": false,
    "position": "Software Engineer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "1w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["JavaScript"],
    "tools": ["Ruby", "Sass"]
  },
  {
    "id": 6,
    "company": "FaceIt",
    "logo": "./images/faceit.svg",
    "neww": false,
    "featured": false,
    "position": "Junior Backend Developer",
    "role": "Backend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "UK Only",
    "languages": ["Ruby"],
    "tools": ["RoR"]
  },
  {
    "id": 7,
    "company": "Shortly",
    "logo": "./images/shortly.svg",
    "neww": false,
    "featured": false,
    "position": "Junior Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["HTML", "JavaScript"],
    "tools": ["Sass"]
  },
  {
    "id": 8,
    "company": "Insure",
    "logo": "./images/insure.svg",
    "neww": false,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["JavaScript"],
    "tools": ["Vue", "Sass"]
  },
  {
    "id": 9,
    "company": "Eyecam Co.",
    "logo": "./images/eyecam-co.svg",
    "neww": false,
    "featured": false,
    "position": "Full Stack Engineer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "3w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["JavaScript", "Python"],
    "tools": ["Django"]
  },
  {
    "id": 10,
    "company": "The Air Filter Company",
    "logo": "./images/the-air-filter-company.svg",
    "neww": false,
    "featured": false,
    "position": "Front-end Dev",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "1mo ago",
    "contract": "Part Time",
    "location": "Worldwide",
    "languages": ["JavaScript"],
    "tools": ["React", "Sass"]
  }
];
  
function states(neww) {
  if(neww === true) {
    return 'NEW!'
  } 
  else {
    return " "
  }
}

function features(featured) {
  if(featured === true) {
    return 'FEATURED!'
  } 
  else {
    return " "
  }
}


function languagess(languages) {
  return `
  <ul class="language">
    ${languages.map(language => `<li>${language}</li>`).join('')}
  </ul>
  `
}

function toolss(tools) {
  return `
  <ul class="language">
    ${tools.map(tool => `<li>${tool}</li>`).join('')}
  </ul>
  `
}

function htmlString (jdetail) {
  return `
  <section>
      <div class="infocontainer">
        <div class="container">
          <img src="${jdetail.logo}" alt="" class="image">
          <div class="feature">
            <div class="feature-1">
              <p class="p-company">${jdetail.company}</p>
              <p class="p-new">${states(jdetail.neww)}</p>
              <p class="p-feature">${features(jdetail.featured)}</p>
            </div>
            <p class="fullStack">${jdetail.position}</p>
            <div class="feature-2">
              <p>${jdetail.postedAt}</p>
              <p>${jdetail.contract}</p>
              <p>${jdetail.location}</p>
            </div>
          </div>
        </div>
      </div>
    <div class="skillcontainer">
      <!-- Role -->
      <p class="role">${jdetail.role}<p>
      <!-- Level -->
      <p class="level">${jdetail.level}</p>
      <!-- Languages -->
      <p class="language"> ${jdetail.languages ? languagess(jdetail.languages) : ""}<p>
      <p class="tools" style="color:red;"> ${jdetail.tools ? toolss(jdetail.tools) : ""}</p>
    </div>
  </section>`;
};

document.getElementById("jobList").innerHTML = `
${details.map(htmlString).join("")}`;



const searchBar = document.getElementById('searchBar');


searchBar.addEventListener('keyup', (e) => {
  const searchString = e.target.value;
  const filteredFeatures = details.filter((jdetail) => {
      return (
          jdetail.role.toLowerCase().includes(searchString) || 
          jdetail.position.toLowerCase().includes(searchString)
      );
  });
  // console.log(filteredFeatures);
  htmlString(filteredFeatures);
}); 

//console.log(details); 