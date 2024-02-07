<script setup>
let navigation = false

const OpenNav = function () {
  navigation = true
}
</script>
<template>
  <div
    class="NavBtn"
    @click="OpenNav()">
    <ion-icon name="menu-outline" />
  </div>

  <header v-if="navigation">
    <button>Aktuelles Projekt</button><button>Alle Projekte</button>
    <button>Zertifikate</button><button>Ausbildung</button>
    <button>Kontaktdaten & About</button>
  </header>
</template>
<style scoped lang="sass">

@import './style.sass'
.NavBtn
  display: flex
  width: 4rem
  height: 4rem
  z-index: 9999
  background-color: $peronalColor
  position: fixed
  left: 95%
  top: 3%
  font-size: 3.2rem
  padding: .6rem





header
  display: flex
  align-items: center

  flex-direction: column
  position: fixed
  right: 0
  z-index: 999
  background-color: $MainColor
  gap: 5rem
  width:10%
  height:100vh
  padding: 12rem 4rem 2rem 4rem
  border: 1px solid $SecondaryColor
  border-top-left-radius: 20px
  border-bottom-left-radius: 20px
  button
    border-radius: 2px
    border: none
    background: $peronalColor
    padding: 1rem
</style>
