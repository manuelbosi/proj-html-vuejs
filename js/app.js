// Istanza vue js
// Creare struttura dati: link header, link footer
// Un array di stringhe headerLink : ["link1", "link2", "link3", "link4", "link5", "link6", "link7"];
// Un array di oggetti footerLink
/*
footerLink : [
  {title: "Titolo1", links: ["paragrafo"]},
  {title: "Titolo1", links: ["link1", "link2", "link3", "link4"]},
  {title: "Titolo1", links: ["link1", "link2", "link3", "link4"]},
  {title: "Titolo1", links: ["link1", "link2", "link3", "link4"]}
];
*/
const app = new Vue({
  el : "#app",
  data : {
    logoPath: "img/logo.png",
    headerLink: ["Home", "Apple", "Microsoft", "Android", "Forums", "Contact us", "JOIN US"],
    searchIcon: "fas fa-search"
  }
});