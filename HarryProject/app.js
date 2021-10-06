const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
 
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value;
    const filteredCharacters = hpCharacters.filter( (character) => {
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
        hpCharacters = await res.json();
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