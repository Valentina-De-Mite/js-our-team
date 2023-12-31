/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
- MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.

- MILESTONE 1: Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

- MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1: Trasformare la stringa foto in una immagine effettiva
BONUS 2: Organizzare i singoli membri in card/schede
*/

// Creo l'array di oggetti:

const teamMembers = [
  {
    name_surname: "Warren Barnett",
    position: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name_surname: "Angela Caroll",
    position: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
  },
  {
    name_surname: "Walter Gordon",
    position: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
  },
  {
    name_surname: "Angela Lopez",
    position: "Social Media Manage",
    image: "angela-lopez-social-media-manager.jpg",
  },
  {
    name_surname: "Scott Estrada",
    position: "Developer",
    image: "scott-estrada-developer.jpg",
  },
  {
    name_surname: "Barbara Ramos",
    position: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg",
  },
];

// effettuo il console log degli oggetti dell'array
teamMembers.forEach((element) => {
  console.log(element.position);
  const markup = `<div class="card lightning col-3 shadow rounded">
      <img src="./assets/img/${element.image}"
          class="card-img-top pt-4" alt="...">
      <div class="card-body">
          <h4 class="f-5">${element.name_surname}</h4>
          <p>${element.position}</p>
      </div>
      </div>`;
  // stampo in pagina
  document.getElementById("markup").insertAdjacentHTML("beforeend", markup);
});
