<script setup>
import Tech from "./Tech.vue"
import { Projekte } from "./helper"
function SetImg(Img) {
  return new URL(`./assets/${Img}`, import.meta.url).href
}
</script>

<template>
  <section class="Alle-Projekt">
    <div
      class="Projekt-continer"
      :class="i % 2 == 0 ? 'Projekt-bg1' : 'Projekt-bg2'"
      v-for="(
        { Name, Beschreibung, IMG, SeitenLink, GIT, Technologien, ref }, i
      ) in Projekte"
      :id="ref">
      <h1>
        {{ Name }}
      </h1>
      <div
        v-if="i % 2 == 0"
        class="rapper-Alle-infos">
        <div class="info-rapper">
          <div class="Beschreibung">
            <h3>Beschreibung</h3>
            <p>
              {{ Beschreibung }}
            </p>
          </div>

          <div class="Tech-infos">
            <div class="tech-rapper">
              <h3>Verwendete Technologien</h3>
              <Tech :Technologien="Technologien" />
            </div>

            <div style="display: flex; gap: 2rem">
              <div
                v-for="{ titel, link } in GIT"
                class="link-rapper">
                <h3>{{ titel }}</h3>
                <a
                  target="_blank"
                  class="Github"
                  :href="link">
                  <ion-icon name="logo-github"></ion-icon>
                </a>
              </div>
            </div>
            <a
              target="_blank"
              class="AppLink"
              :href="SeitenLink"
              >Take a look</a
            >
          </div>
        </div>
        <div class="img-rapper">
          <img :src="SetImg(IMG)" />
        </div>
      </div>
      <div
        v-else
        class="rapper-Alle-infos">
        <div class="img-rapper">
          <img :src="SetImg(IMG)" />
        </div>
        <div class="info-rapper">
          <div class="Beschreibung">
            <h3>Beschreibung</h3>
            <p>
              {{ Beschreibung }}
            </p>
          </div>

          <div class="Tech-infos">
            <a
              target="_blank"
              class="AppLink"
              :href="SeitenLink"
              >Take a look</a
            >

            <div style="display: flex; gap: 2rem">
              <div
                v-for="{ titel, link } in GIT"
                class="link-rapper">
                <h3>{{ titel }}</h3>
                <a
                  target="_blank"
                  class="Github"
                  :href="link">
                  <ion-icon name="logo-github"></ion-icon>
                </a>
              </div>
            </div>
            <div class="tech-rapper">
              <h3>Verwendete Technologien</h3>
              <Tech :Technologien="Technologien" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="sass">

@import './style.sass'

.Alle-Projekt
  width: 100%
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  border-radius: 15px
  background-color:#000
  gap: 4rem
  margin-top: 2rem
.Projekt-bg1
  background: url("./assets/Projekt-bg1.svg") no-repeat center
  background-size: cover
.Projekt-bg2
  background: url("./assets/Projekt-bg2.svg") no-repeat center
  background-size: cover
</style>
