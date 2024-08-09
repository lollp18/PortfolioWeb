<script setup>
function SetImg(Img) {
  return new URL(`./assets/${Img}`, import.meta.url).href
}
</script>
<template lang="">
  <section
    id="Bescheinigung"
    class="Bescheinigingen ITA-bg">
    <h1>Bescheinigungen</h1>
    <div
      style="
        display: flex;
        gap: 5rem;
        padding: 1.5rem;
        z-index: 0;
        position: relative;
      ">
      <a
        style="font-size: 1.5rem"
        target="_blank"
        class="AppLink"
        :href="
          SetImg('The Complete JavaScript Course 2022 From Zero to Expert!.pdf')
        "
        >The Complete JavaScript Course 2022 From Zero to Expert!</a
      >

      <a
        style="font-size: 1.5rem"
        target="_blank"
        class="AppLink"
        :href="
          SetImg(
            'Build Responsive Real-World Websites with HTML and CSS abschlussbescheinigung.pdf'
          )
        "
        >Build Responsive Real-World Websites with HTML and CSS
      </a>
    </div>
  </section>
</template>
<style scoped lang="sass">

@import './style.sass'

.Bescheinigingen
  display: flex
  @include width
  @include B-radius
  margin-top: 2rem
  flex-direction: column
  align-items: center
  justify-content: center
  border-bottom: 1px solid $SecondaryColor
  background-color: #000
  padding: 1.5rem
</style>
