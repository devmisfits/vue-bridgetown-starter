import "../styles/index.scss"
import Swup from "swup"
import Vue from 'vue'
import HeaderNav from '../components/HeaderNav.vue'

const swup = new Swup()

new Vue({
  el: '#header-nav',
  template: '<HeaderNav/>',
  components: { HeaderNav }
})

document.addEventListener('swup:contentReplaced', (event) => {
  const navList = document.querySelector("#nav-list");
  navList.classList.add("hidden")
  document.getElementById("nav-button").click() // to toggle hamburger icon back to x icon
});

console.info("Bridgetown is loaded!")

