// Country list
const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua-and-Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Autria",
  "Azerbaïjan"
];

const filterCountry = userInput => {
  return countryList.filter(country => country.toLowerCase().startsWith(userInput.toLowerCase()));
};
const displaySuggestions = suggestions => {
  const suggestionsContainer = document.getElementById('suggestions');
  suggestionsContainer.innerHTML = '';
  suggestions.forEach(country => {
    const suggestion = document.createElement('div');
    suggestion.classList.add('suggestion');
    suggestion.textContent = country;
    suggestion.addEventListener('click', () => {
      document.getElementById('country').value = country;
      suggestionsContainer.innerHTML = '';
    });
    suggestionsContainer.appendChild(suggestion);
  });
};

document.getElementById('country').addEventListener('input', event => {
  const userInput = event.target.value;
  const filteredCountries = filterCountry(userInput);
  displaySuggestions(filteredCountries);
});
