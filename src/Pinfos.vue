<script setup>
import Tech from "./Tech.vue"
function SetImg(Img) {
  return new URL(`./assets/${Img}`, import.meta.url).href
}

const TopSkills = ["vue", "nodejs", "mongodb"]
const Skills = ["nextjs", "php", "sql","html","css","pina","sass",]
</script>
<template>
  <section class="Projekt-continer kontakdaten">
    <h1 style="margin: 0">Kontaktdaten & about</h1>
    <div
      style="
        display: flex;
        gap: 7rem;
        width: 100%;
        justify-content: center;
        align-items: center;
      ">
      <img
        style="border-radius: 50px"
        :src="SetImg('Profilbild.png')" />

      <div
        style="
          display: flex;
          flex-direction: column;
          align-items: center;

          gap: 5px;
        ">
        <div style="display: flex; gap: 4rem; align-items: center">
          <div>
            <h2 style="text-align: center; margin-bottom: 1.5rem">
              Lorenzo Rodorigo
            </h2>
            <div style="display: flex; flex-direction: column; gap: 1rem">
              <div style="display: flex; gap: 1rem; align-items: center">
                <svg
                  width="35"
                  height="35"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 496 496"
                  xml:space="preserve">
                  <path
                    style="fill: #f8d12e"
                    d="M0,304v65.6C0,396.8,21.6,416,48,416h400c26.4,0,48-19.2,48-46.4V304H0z" />
                  <path
                    style="fill: #333333"
                    d="M448,80H48C21.6,80,0,99.2,0,126.4V192h496v-65.6C496,99.2,474.4,80,448,80z" />
                  <rect
                    y="192"
                    style="fill: #db2727"
                    width="496"
                    height="112" />
                  <path
                    style="fill: #dbb30f"
                    d="M446.4,416c26.4,0,49.6-19.2,49.6-46.4V304H315.2L446.4,416z" />
                  <path
                    style="fill: #202121"
                    d="M448,80H48l132.8,112H496v-65.6C496,99.2,474.4,80,448,80z" />
                  <polygon
                    style="fill: #c10e0e"
                    points="316,304 496,304 496,192 180,192 " />
                  <path
                    d="M448,80H48l370.4,112H496v-65.6C496,99.2,474.4,80,448,80z" />
                  <polygon
                    style="fill: #a00808"
                    points="496,214.4 496,192 414.4,192 " />
                  <path
                    style="fill: #d89f12"
                    d="M496,368.8c0,29.6-21.6,47.2-48,47.2H48c-26.4,0-48-20.8-48-48" />
                </svg>
                <h2>Mutter Sprache & Staatesangehörichkeit</h2>
              </div>
              <div style="display: flex; gap: 1rem; align-items: center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 30"
                  width="35"
                  height="35">
                  <clipPath id="t">
                    <path d="M25,15h25v15zv15h-25zh-25v-15zv-15h25z" />
                  </clipPath>
                  <path
                    d="M0,0v30h50v-30z"
                    fill="#012169" />
                  <path
                    d="M0,0 50,30M50,0 0,30"
                    stroke="#fff"
                    stroke-width="6" />
                  <path
                    d="M0,0 50,30M50,0 0,30"
                    clip-path="url(#t)"
                    stroke="#C8102E"
                    stroke-width="4" />
                  <path
                    d="M-1 11h22v-12h8v12h22v8h-22v12h-8v-12h-22z"
                    fill="#C8102E"
                    stroke="#FFF"
                    stroke-width="2" />
                </svg>
                <h2>Sprach Niveau - B2</h2>
              </div>
              <div style="display: flex; gap: 1rem; align-items: center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0 0 48 48">
                  <g>
                    <path
                      fill="#C19F85"
                      d="M46.97314,9.77051c-0.07959-0.33789-0.32812-0.60938-0.65674-0.71875L40.79083,7.2099l-1.8421-5.52631
c-0.10986-0.3291-0.38184-0.57715-0.71875-0.65723c-0.33838-0.07812-0.69238,0.02148-0.93701,0.2666l-6,6
c-0.26807,0.26758-0.36133,0.66406-0.2417,1.02344l2,6c0.09035,0.27046,0.35134,0.53841,0.63232,0.63184l6,2
C39.7876,16.9834,39.89404,17,40,17c0.26074,0,0.5166-0.10254,0.70703-0.29297l6-6
C46.95215,10.46191,47.05273,10.10742,46.97314,9.77051z" />
                    <circle
                      fill="#E6E6E6"
                      cx="19"
                      cy="29"
                      r="16" />
                    <path
                      fill="#E86C60"
                      d="M19,48C8.52344,48,0,39.47656,0,29s8.52344-19,19-19s19,8.52344,19,19S29.47656,48,19,48z M19,14
c-8.271,0-15,6.72852-15,15s6.729,15,15,15s15-6.72852,15-15S27.271,14,19,14z" />
                    <path
                      fill="#E86C60"
                      d="M19,41c-6.6167,0-12-5.38281-12-12s5.3833-12,12-12s12,5.38281,12,12S25.6167,41,19,41z M19,21
c-4.41113,0-8,3.58887-8,8s3.58887,8,8,8s8-3.58887,8-8S23.41113,21,19,21z" />
                    <circle
                      fill="#E86C60"
                      cx="19"
                      cy="29"
                      r="4" />
                    <path
                      fill="#87613E"
                      d="M19,30c-0.25586,0-0.51172-0.09766-0.70703-0.29297c-0.39062-0.39062-0.39062-1.02344,0-1.41406l25-25
c0.39062-0.39062,1.02344-0.39062,1.41406,0s0.39062,1.02344,0,1.41406l-25,25C19.51172,29.90234,19.25586,30,19,30z" />
                  </g>
                </svg>

                <h2>Full-Stack Developer</h2>
              </div>
            </div>
          </div>
     <div>
          <table>
            <thead>
              <tr>
                Top Skills
              </tr>
            </thead>
            <tbody style="padding: 1rem; background-color: white; margin: 1rem; border-radius: 11px;">
              <Tech :Technologien="TopSkills" />
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
            Skills
              </tr>
            </thead>
            <tbody style="padding: 1rem; background-color: white; margin: 1rem; border-radius: 11px;">
              <Tech :Technologien="Skills" />
            </tbody>
          </table>
        </div>
          <div
            style="
              display: flex;
              flex-direction: column;
              align-items: center;

              gap: 5px;
            ">
            <div style="display: flex; align-items: center; gap: 1rem">
              <ion-icon name="mail-outline"></ion-icon>
              <h2>
                <a href="lorenzo123696@gmail.com">lorenzo123696@gmail.com</a>
              </h2>
            </div>
            <div style="display: flex; align-items: center; gap: 1rem">
              <ion-icon name="call-outline"></ion-icon>
              <h2 style="display: flex; gap: 5px">
                <a href="+49 171 8678312">+49 171 8678312</a>
                <div>(17:00-21:00 Uhr)</div>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="sass">

@import './style.sass'
.kontakdaten
  background: url(./assets/Kontakdaten-bg.svg) no-repeat center
  background-size: cover
  color: #fff
  margin-bottom: 2rem
  h1
    border-bottom-color: #fff
  a
    color: $MainColor
</style>
