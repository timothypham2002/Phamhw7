// Character list. Each house has a name and a code
const houses = [
  {
    code: "ST",
    name: "Stark"
  },
  {
    code: "LA",
    name: "Lannister"
  },
  {
    code: "BA",
    name: "Baratheon"
  },
  {
    code: "TA",
    name: "Targaryen"
  }
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; // Empty array
  }
};

const fillDropdown = () => {
  const dropDown = document.getElementById('house');
  houses.forEach(house => {
    const option = document.createElement('option');
    option.value = house.code;
    option.textContent = house.name;
    dropDown.appendChild(option);
  });
};

const listCharacters = () => {
  const houseCode = document.getElementById('house').value;
  const charactersList = document.getElementById('characters');
  charactersList.innerHTML = '';
  const characters = getCharacters(houseCode);
  characters.forEach(character => {
    const listItem = document.createElement('li');
    listItem.textContent = character;
    charactersList.appendChild(listItem);
  });
};

document.getElementById('house').addEventListener('change', listCharacters);
fillDropdown();
