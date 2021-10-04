const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let hpCharacters = [];
console.log(searchBar);
 
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value;
    const filteredCharacters = hpCharacters.filter( character => {
        return (
             character.name.toLowerCase().includes(searchString) || 
             character.house.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});  

const loadCharacters = async () => {
    try {
        const res = await fetch('http://hp-api.herokuapp.com/api/characters');
        let hpCharacters = await res.json();
        displayCharacters(hpCharacters);
        // console.log(hpCharacters);
    } catch (err) {
        console.error(err);
    }
}; 

const displayCharacters = (characters) => {
    const htmlString = characters.map((character) => {
            return `
            <li class="character">
                <h2>${character.name}</h2>
                <p>House: ${character.house}</p>
                <img src='${character.image}'>
            </li>`;
        }).join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();


// {
//     "id": 9,
//     "company": "Eyecam Co.",
//     "logo": "./images/eyecam-co.svg",
//     "new": false,
//     "featured": false,
//     "position": "Full Stack Engineer",
//     "role": "Fullstack",
//     "level": "Midweight",
//     "postedAt": "3w ago",
//     "contract": "Full Time",
//     "location": "Worldwide",
//     "languages": ["JavaScript", "Python"],
//     "tools": ["Django"]
//   },