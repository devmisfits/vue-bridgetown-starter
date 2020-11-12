import "../styles/index.scss"
import Swup from "swup"
import Vue from 'vue'
import Hello from '../components/Hello.vue'
import HeaderNav from '../components/HeaderNav.vue'

const swup = new Swup()

new Vue({
  el: '#notice',
  template: '<HeaderNav/>',
  components: { HeaderNav }
})

console.info("Bridgetown is loaded!")

