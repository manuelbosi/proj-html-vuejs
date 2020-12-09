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

// ISTANZA VUE PER HEADER
const header = new Vue({
  el : "#headerApp",
  data : {
    logoPath : "img/logo.png",
    headerLinks : ["Home", "Apple", "Microsoft", "Android", "Forums", "Contact us", "JOIN US"],
    searchIcon : "fas fa-search"
  }
});

// ISTANZA VUE PER FOOTER
const footer = new Vue({
  el : "#footerApp",
  data : {
    firstColumn: { title: "Titolo1", text: "paragrafo" },
    footerLinks :
      [
        { title: "Titolo2", links: ["link2.1", "link2.2", "link2.3", "link2.4"] },
        { title: "Titolo3", links: ["link3.1", "link3.2", "link3.3", "link3.4"] },
        { title: "Titolo4", links: ["link4.1", "link4.2", "link4.3", "link4.4"] }
      ]
  }
});