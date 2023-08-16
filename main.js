

const btnGenerate = document.getElementById("generate");
const url = " https://pokeapi.co/api/v2/pokemon/";
const card = document.getElementById("card");
const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
  };

const generatePokemon = () => {
    let id = Math.floor(Math.random() * 150) + 1;
    const finalUrl = url + id;
    console.log(finalUrl);
    fetch(finalUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            generateCard(data);
        })
}
const generateCard = (data) => {
    let pokeName = document.getElementById("poke-name");
    let pokeImage = document.getElementById("card-img");
    let hp = document.getElementById("hp");
    let attack = document.getElementById("att");
    let defense = document.getElementById("defense");
    let speed = document.getElementById("speed");
    let typesDiv= document.getElementById("types");
    const themeColor = typeColor[data.types[0].type.name];
    let topce = document.getElementById("topce")
    //elements selection

    pokeName.innerText = data.name;
    pokeImage.src = data.sprites.other.dream_world.front_default;
    hp.innerText = data.stats[0].base_stat + " HP";
    attack.innerText = data.stats[1].base_stat;
    defense.innerHTML = data.stats[2].base_stat;
    speed.innerHTML = data.stats[3].base_stat;
    console.log(hp);
    types.innerHTML="";
    data.types.forEach(tip => {
        typesDiv.innerHTML+=`<span class="type">${tip.type.name}</span>`
    });
    let styleCard = (color) => {
        topce.style.background = `radial-gradient(circle at 50% 0%, ${color} 56%, #ffffff 36%)`;
        typesDiv.querySelectorAll("#types span").forEach((typeColor) => {
          typeColor.style.backgroundColor = color;
        });
      };
    styleCard(themeColor)
}
btnGenerate.addEventListener("click", generatePokemon);
window.addEventListener('load',generatePokemon)