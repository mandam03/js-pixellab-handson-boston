const person = {
  getName: function () {
    return 'Mihaela Mandache';
  },

  getAge: function () {
    return 28;
  },
};

function accessor(methodSuffix) {
  const methodName = `get${methodSuffix}`;

  return person[methodName]();
}

const currentYear = new Date().getFullYear();

console.warn(`

`);

const firstName = accessor('Name');
console.log(`Eu sunt ${firstName}.`);

console.warn(`
Afiseaza anul de nastere al persoanei folosind anul curent.
`);

console.log((currentYear - accessor('Age')).toString());

console.warn(`
Afiseaza propozitia
“Ma numesc xxx yyy, am aa ani si m-am nascut in anul aaaa."
`);

console.log(
  `Ma numesc ${accessor('Name')}, am ${accessor(
    'Age',
  )} ani si m-am nascut in anul ${currentYear - accessor('Age')}.`,
);
