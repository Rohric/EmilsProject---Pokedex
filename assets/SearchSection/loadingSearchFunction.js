let Matchets = [];

let SearchDetails = [];
let SearchSpecies = [];
let SearchName = [];
let SearchImage = [];
let SearchType = [];
let SearchGeneration = [];

function resetSearchArrays() {
  Matchets = [];
  SearchDetails = [];
  SearchSpecies = [];
  SearchName = [];
  SearchImage = [];
  SearchType = [];
  SearchGeneration = [];
}



async function loadSearchDetails(matches) {
  let details = [];
  for (let k = 0; k < matches.length; k++) {
    let res = await fetch(PokemonList[matches[k]].url);
    details.push(await res.json());
  }
  return details;
}

async function loadSearchSpecies(details) {
  let species = [];
  for (let k = 0; k < details.length; k++) {
    let res = await fetch(details[k].species.url);
    species.push(await res.json());
  }
  return species;
}
