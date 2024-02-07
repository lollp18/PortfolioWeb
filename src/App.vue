<script setup>
import matrix from "./matrix.vue"
import AlleProjekte from "./AlleProjekte.vue"
import Bescheinigung from "./Bescheinigung.vue"
import ITA from "./ITA.vue"
import Pinfos from "./Pinfos.vue"
</script>

<template>
  <matrix />

  <AlleProjekte />

  <Bescheinigung />

  <ITA />

  <Pinfos />

</template>

<style lang="sass">

@import './style.sass'

.rapper-Alle-infos
  display: flex
  width: 100%
  justify-content: center
  align-items: center



.img-rapper

  display: flex
  justify-content: center

  margin: 1rem
  padding:.5rem
  width: 50%





.Tech-infos
  display: flex
  gap: 7rem
  padding: 2.5rem
  margin-top: 5rem
  align-items: center
  position: relative
  z-index: 0
  border-top:  2px dashed #f9ca24
  border-bottom:  2px dashed #f9ca24


h1
  font-size: 3.5rem
  border-bottom: 2px solid #000
  text-transform: uppercase
  padding: .2rem
  margin-bottom: 3rem


a
  position: relative
  text-decoration: none
  color: #000

.Beschreibung
  background: papayawhip
  padding: 2rem
  border: 1.5px solid #cce
  border-radius: 10px
  box-shadow: 4px 6px 8px rgba(0, 0, 0, 0.3)
  h3
    width: 100%
    text-align: center
    border-bottom: 1.5px dashed $SecondaryColor
  p
    margin-top: 1rem




.Projekt-continer
  @include B-radius
  background-color: $MainColor
  display: flex
  flex-direction: column
  @include width
  align-items: center
  padding: 3rem


.A-Projekt
  display: flex
  flex-direction: column
  align-items: center
  @include B-radius
  @include width
  border-bottom: 1px solid $SecondaryColor
  background-color: $MainColor
  padding: 3rem


.info-rapper
  width: 50%
  display: flex
  flex-direction: column

  align-items: center
  gap: 1rem
  padding: 3rem 0 3rem 3rem
  font-size: 2rem


.link-rapper
  display: flex
  flex-direction: column
  align-items: center
  z-index: 0




#app
  display: flex
  flex-direction: column
  align-items: center
  gap: 2rem
  overflow-y: scroll
  overflow-x: hidden
  height: 100%
  width: 100%
  margin: 0
  padding: 0

img
  max-width: 100%
  height: auto
  border: 1.5px solid #cce
  border-radius: 10px
  box-shadow: 4px 6px 8px rgba(0, 0, 0, 0.3)

html
  font-size: 62.5%
  overflow: hidden
  height: 100vh




*,
*::before,
*::after
  box-sizing: border-box
  margin: 0
  padding: 0
::-webkit-scrollbar
  width: 1rem
  position: fixed
::-webkit-scrollbar-track
  background-color: transparent
  position: fixed
::-webkit-scrollbar-thumb
  border-radius: 11px
  position: fixed
  background-color: $peronalColor
  color: $peronalColor


body
  padding: 0
  margin: 0
  height: 100%

  overflow: hidden
  color: $SecondaryColor
  background: $MainColor
  transition: color 0.5s, background-color 0.5s
  line-height: 1.6
  font-family: Roboto
  text-rendering: optimizeLegibility
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
</style>
