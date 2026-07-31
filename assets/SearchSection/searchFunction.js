async function searchPokemon() {
  let searchValue = document.getElementById("searchInput").value;
  if (searchValue.length < 3) {
    closeMatches();
    return;
  }
  let matches = getMatches(searchValue);

  showGlobalLoader();
  let details = await loadSearchDetails(matches);
  let species = await loadSearchSpecies(details);
  hideGlobalLoader();

  applySearchResults(details, species);
}

function applySearchResults(details, species) {
  SearchDetails = details;
  SearchSpecies = species;

  getSearchPokemonName();
  getSearchPokemonImage();
  getSearchPokemonType();
  getSearchPokemonGeneration();

  renderMatches();
}

function closeMatches() {
  showGlobalLoader();
  let refMatches = document.getElementById("searchMatches");
  let refCards = document.getElementById("cards");

  refMatches.classList.add("d_none");
  refMatches.innerHTML = "";
  refCards.classList.remove("d_none");
  showPokemonNumberList();
  hideGlobalLoader();
}

function getMatches(searchValue) {
  let refSearchValue = searchValue.trim().toLowerCase();
  Matchets = [];
  PokemonList.forEach((entry, index) => {
    if (entry.name.toLowerCase().includes(refSearchValue)) {
      Matchets.push(index);
    }
  });
  return Matchets;
}
