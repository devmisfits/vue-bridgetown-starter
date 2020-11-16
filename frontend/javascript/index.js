import "../styles/index.scss"
import Vue from 'vue'
import HeaderNav from '../components/HeaderNav.vue'
import Swup from 'swup'

var vue1 = new Vue({
    el: "#header-nav",
    template: "<HeaderNav/>",
    components: { HeaderNav },
})

const swup = new Swup()


console.info("Bridgetown is loaded!")

