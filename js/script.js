console.log('JS OK');

//! PRELIMINARI
//# Recupero gli elementi dal DOM
const cardElement = document.querySelector('ul');

//# Inizializzo l'array
const teamList = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

//# LOGICA

let teamPage = '';

for (let i = 0; i < teamList.length; i++) {
  team = teamList[i];
  console.table(team);
  teamPage += `
  <li class="card">
    <a href="#"><img src="img/${team.image}" class="card-img-top img-fluid"></a>
    <a href="#"><p>${team.name}</p></a>
    <a href="#"><p>${team.role}</p></a>
  </li>
`;
}

cardElement.innerHTML = teamPage;
