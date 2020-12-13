// Istanza vue js
// Creare struttura dati: link header, link footer
// Un array di oggetti (per eventuale modifiche future) headerLink : ["link1", "link2", "link3", "link4", "link5", "link6", "link7"];
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
    headerLinks: 
      [
        { title: "Home", url: "#" },
        { title: "Apple", url: "#" },
        { title: "Microsoft", url: "#" },
        { title: "Android", url: "#" },
        { title: "Forums", url: "#" },
        { title: "Contact us", url: "#" },
        { title: "JOIN US", url: "#" }
      ],
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
        { title: "POPULAR TOPICS", links: [{ title: "Nam a dolor volutpat massa auctor semper", url: "#" }, { title: "Nam a dolor volutpat massa auctor semper", url: "#" }, { title: "Nam a dolor volutpat massa auctor semper", url: "#" }, { title: "Nam a dolor volutpat massa auctor semper", url: "#" } ] },
        { title: "RECENT TOPICS", links: [{ title: "Nam a dolor volutpat massa auctor semper", url: "#" }, { title: "Nam a dolor volutpat massa auctor semper", url: "#" }, { title: "Nam a dolor volutpat massa auctor semper", url: "#" }, { title: "Nam a dolor volutpat massa auctor semper", url: "#" }] },
        { title: "LATEST REPLIES", links: [{ title: "Nam a dolor volutpat massa auctor semper", url: "#" }, { title: "Nam a dolor volutpat massa auctor semper", url: "#" }, { title: "Nam a dolor volutpat massa auctor semper", url: "#" }, { title: "Nam a dolor volutpat massa auctor semper", url: "#" }] }
      ],
    socialIcons: [{ name: "fa-facebook-f", url: "#" }, { name: "fa-twitter", url: "#" }, { name: "fa-instagram", url: "#" }, { name: "fa-youtube", url: "#" } ]
  }
});