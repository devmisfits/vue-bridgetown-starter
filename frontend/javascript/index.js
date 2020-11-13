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
  document.getElementById("hamburger-nav-icon").click();
});

console.info("Bridgetown is loaded!")

