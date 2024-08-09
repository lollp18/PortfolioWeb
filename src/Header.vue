<script setup>
import { Projekte } from "./helper"
import { ref } from "vue"
import { useElementSize } from "@vueuse/core"

const Sections = Projekte.map(({ Name, ref }) => {
  return { Name, ref }
}).concat([
  { Name: "Bescheinigung", ref: "Bescheinigung" },
  { Name: "Kontaktdaten & about", ref: "Kontaktdaten&about" },
])
const Header = ref(null)
const { width, height } = useElementSize(Header)
</script>
<script>
export default {
  emits: ["setmenüState"],
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
        this.$emit("setmenüState")
      }
    },
  },
}
</script>
<template>
  <header
    ref="Header"
    class="Projekt-bg1"
    :style="{ gap: width / (Sections.length + 1) + 'px' }">
    <template v-for="{ Name, ref } in Sections">
      <a
        class="AppLink"
        @click="scrollToSection(ref)"
        >{{ Name }}</a
      >
    </template>
  </header>
</template>
<style scoped lang="sass">
@import './style.sass'
.Projekt-bg1
  background: no-repeat center  url("./assets/HeaderBg.svg")
  background-size: cover


header
  display: flex
  flex-direction: column
  position: fixed
  top: 0
  left: 0
  display: flex
  font-weight: 550
  height: 100%
  z-index: 2
  padding-top: 8rem !important
  padding: 3rem
  background-color: $MainColor
  border-bottom-right-radius: 15px
  border-top-right-radius: 15px
  border-right: 1px solid $brown
</style>
