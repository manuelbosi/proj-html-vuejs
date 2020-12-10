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
    firstColumn: 
    { 
      title: "AVADA TECH FORUM", 
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in placerat odio. Pellentesque suscipit dolor et neque bibendum, ut rutrum arcu viverra. Fusce at consequat tellus. Etiam feli" 
    },
    footerLinks :
      [
        { title: "POPULAR TOPICS", 
          links: ["Nam a dolor volutpat massa auctor semper", "Nam a dolor volutpat massa auctor semper", "Nam a dolor volutpat massa auctor semper", "Nam a dolor volutpat massa auctor semper"] },
        { title: "RECENT TOPICS", links: ["Nam a dolor volutpat massa auctor semper", "Nam a dolor volutpat massa auctor semper", "Nam a dolor volutpat massa auctor semper", "Nam a dolor volutpat massa auctor semper"] },
        { title: "LATEST REPLIES", links: ["Nam a dolor volutpat massa auctor semper", "Nam a dolor volutpat massa auctor semper", "Nam a dolor volutpat massa auctor semper", "Nam a dolor volutpat massa auctor semper"] }
      ],
    socialIcons: ["fa-facebook-f", "fa-twitter", "fa-instagram", "fa-youtube"]
  }
});