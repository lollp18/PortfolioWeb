<script setup>
import { reactive } from "vue"

class Projekt {
  constructor(Name, Beschreibung, IMG, SeitenLink = "#", GIT, Technologien) {
    this.Name = Name
    this.Beschreibung = Beschreibung
    this.IMG = IMG
    this.SeitenLink = SeitenLink
    this.GIT = GIT
    this.Technologien = Technologien
  }
}

const Projekte = [
  new Projekt(
    "Kurse Buchen",
    "Das Projekt Kurse Buchen ist ein Buchungsystem für Hochschule man kann sich als schüler Registriren und Sich eine Kurs Buchen oder Filtern.Das ergänzende stück dazu ist eine C# Anwendung mit der man Kurse raume und lehrer hunzufügen kann",
    "../KursBuchen.png",
    "#",
    {
      titel: "Backend",
      link: "https://github.com/lollp18/Webseite_M-hlbeier_Rodorigo",
    },
    ["vue", "php", "css", "sql", "html"]
  ),
  new Projekt(
    "Schornsteinfeger Wochenplaner(SFWP) ",

    "Der Wochenplan wird Aktuel im Elterlichen Betrib verwendet um Termine für eine 7 Tage woche Abzuspeichen. Die App ist für die Nutzung am Handy Entwikelt worden.  ",
    "../SFWP.jpeg",

    "https://schornsteinfeger-wochenplaner.netlify.app",
    {
      titel: "Frontend",
      link: "https://github.com/lollp18/SFWP",
    },
    ["vue", "css", "html"]
  ),
  new Projekt(
    "Webseite Für Sylvia Rodorigo",

    "Eine Webseite Für den Schornsteinfeger Betrieb von Sylvia Rodorigo. Zeigt Alle Dienstleistungen an die Sylvia Rodorigo und Kontakt informationen zu jedem einzelen webseiten abschnit wird man hingefürt wen am auf dem jeweiligen butten im header clickt. die Webseite ist auch für Mobile nutzung Optimirt ",
    "../SiviWeb.png",

    "https://clinquant-croissant-d8a253.netlify.app",
    {
      titel: "Frontend",
      link: "https://github.com/lollp18/Syvia-Rodorigo",
    },
    ["js", "css", "html"]
  ),
  new Projekt(
    "Omnifood",

    "Das Omnifood Projekt ist eine eine webseite und soll die App eine Malzeit planer vorstellen die Webseite Beinhaltet auserdem eine Section für kunden Rezensionen ,Preise und eine Singel up form .Die Webseite ist für Mobile use case angepasst",
    "../Omnifod.png",

    "https://omnifood-lorenzo-rodorigo.netlify.app",
    {
      titel: "Frontend",
      link: "https://github.com/lollp18/omnifood-lorenzo-rodorigo",
    },
    ["js", "css", "html"]
  ),
  new Projekt(
    "OneForkify",

    "Das OneForkify Projekt ist eine eine Web App und bietet dem User die Möglichkeit nach Rezepten zu suchen und hinzuzufügen es ist auch möglich eine bestimtme anzahl von personen anzugben wohnach die rezeptmenge berechnet wird soll auserdem kann  rezepte zu Book marken um sie später wie der aufrufen zu können die App hat auch eine Backend an wo von die Rezepte geladen werden",
    "../OneForkify.png",

    "https://forkify-rezepte-finder-lorenzo-rodorigo.netlify.app",
    {
      titel: "Frontend",
      link: "https://github.com/lollp18/OneForkify-Lorenzo-Rodorigo",
    },
    ["js", "css", "html"]
  ),
  new Projekt(
    "Mapty",

    "Das Mapty",
    "../Mapty.png",

    "https://mapty-lorenzo-rodorigo.netlify.app",
    {
      titel: "Frontend",
      link: "https://github.com/lollp18/Mapty",
    },
    ["js", "css", "html"]
  ),
]
function GetimgSizes(src) {
  const img = new Image()
  img.src = src

  const imgSize = reactive({
    height: (img.height / 2).toString() + "px",
    width: (img.width / 2).toString() + "px",
  })

  return imgSize
}
</script>

<template>
  <header>
    <button>Aktuelles Projekt</button><button>Alle Projekte</button
    ><button>Ausbildung</button><button>Zertifikate</button
    ><button>Kontaktdaten & About</button>
  </header>
  <section class="A-Projekt">
    <h1>Aktuelles Projekt CSV Fullstack App</h1>
    <div style="display: flex">
      <img
        :style="GetimgSizes('../Csv.png')"
        class="A-Projekt-Img"
        src="../Csv.png" />
      <div class="info-rapper">
        <h3>Beschreibung</h3>
        <p class="Beschreibung">
          Das Aktuelle Projekt Eine Fullstack App Kann mehrere Csv Dateine
          einlesen Zeilen und Spalten Löschen,hnzufügen und tauschen .Jede
          Zellen Wert kann verändert werden und getascht werden .Ist die Csv
          Datein zu groß wird sie in seiten aufgetelt.Die Web App ist auserdem
          mit eine Login ausgestatet ist und die User Daten werden im Backend
          gespeichert.weil das Projekt noch in der entwiklung steckt kann ich
          das es nur Persönlich Vorstellen
        </p>

        <div style="display: flex; gap: 6rem; margin-top: 5rem">
          <div style="display: flex; gap: 2rem">
            <div class="link-rapper">
              <h3>Frontend</h3>
              <a
                target="_blank"
                class="Github"
                href="https://github.com/lollp18/Csv2">
                <ion-icon name="logo-github"></ion-icon>
              </a>
            </div>
            <div class="link-rapper">
              <h3>Backend</h3>
              <a
                target="_blank"
                class="Github"
                href="https://github.com/lollp18/CsvDB2">
                <ion-icon name="logo-github"></ion-icon>
              </a>
            </div>
          </div>
          <div>
            <h3>Verwendete Technologien</h3>
            <div class="Tech">
              <ion-icon name="logo-html5"></ion-icon>
              <ion-icon name="logo-vue"></ion-icon
              ><ion-icon name="logo-sass"></ion-icon
              ><ion-icon name="logo-nodejs"></ion-icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 48 48">
                <path
                  fill="#5d4037"
                  d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"></path>
                <path
                  fill="#4caf50"
                  d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"></path>
                <path
                  fill="#dcedc8"
                  d="M23 28H25V36H23z"></path>
                <path
                  fill="#4caf50"
                  d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"></path>
                <path
                  fill="#81c784"
                  d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="Alle-Projekte">
    <div
      class="Projekt-continer"
      v-for="{
        Name,
        Beschreibung,
        IMG,
        SeitenLink,
        GIT,
        Technologien,
      } in Projekte">
      <h1 style="padding: 2rem">{{ Name }}</h1>
      <div style="display: flex">
        <img
          class="A-Projekt-Img"
          :style="GetimgSizes(IMG)"
          :src="IMG" />
        <div class="info-rapper">
          <h3>Beschreibung</h3>
          <p class="Beschreibung">
            {{ Beschreibung }}
          </p>

          <div
            style="
              display: flex;
              gap: 8rem;
              margin-top: 5rem;
              align-items: center;
            ">
            <a
              target="_blank"
              class="AppLink"
              :href="SeitenLink"
              >Take a look</a
            >
            <div style="display: flex; gap: 2rem">
              <div class="link-rapper">
                <h3>{{ GIT.titel }}</h3>
                <a
                  target="_blank"
                  class="Github"
                  :href="GIT.link">
                  <ion-icon name="logo-github"></ion-icon>
                </a>
              </div>
            </div>
            <div>
              <h3>Verwendete Technologien</h3>
              <div class="Tech">
                <ion-icon
                  v-if="Technologien.includes('vue')"
                  name="logo-vue"></ion-icon>
                <ion-icon
                  v-if="Technologien.includes('js')"
                  name="logo-javascript"></ion-icon>
                <ion-icon
                  v-if="Technologien.includes('sass')"
                  name="logo-sass"></ion-icon>
                <ion-icon
                  v-if="Technologien.includes('html')"
                  name="logo-html5"></ion-icon>
                <ion-icon
                  v-if="Technologien.includes('nodejs')"
                  name="logo-nodejs"></ion-icon>
                <ion-icon
                  v-if="Technologien.includes('css')"
                  name="logo-css3"></ion-icon>
                <svg
                  v-if="Technologien.includes('mongodb')"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 48 48">
                  <path
                    fill="#5d4037"
                    d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"></path>
                  <path
                    fill="#4caf50"
                    d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"></path>
                  <path
                    fill="#dcedc8"
                    d="M23 28H25V36H23z"></path>
                  <path
                    fill="#4caf50"
                    d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"></path>
                  <path
                    fill="#81c784"
                    d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"></path>
                </svg>
                <svg
                  v-if="Technologien.includes('php')"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="40"
                  height="40"
                  viewBox="0 0 192.756 192.756"
                  id="php">
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M0 0h192.756v192.756H0V0z"
                    clip-rule="evenodd"></path>
                  <defs>
                    <path
                      id="a"
                      d="M96.378 141.648c47.528 0 86.06-20.27 86.06-45.271s-38.531-45.271-86.06-45.271-86.06 20.269-86.06 45.271c0 25.002 38.532 45.271 86.06 45.271z"></path>
                  </defs>
                  <clipPath id="b">
                    <use
                      overflow="visible"
                      xlink:href="#a"></use>
                  </clipPath>
                  <g clip-path="url(#b)">
                    <defs>
                      <path
                        id="c"
                        d="M10.318 51.107h172.119v90.541H10.318z"></path>
                    </defs>
                    <clipPath id="d">
                      <use
                        overflow="visible"
                        xlink:href="#c"></use>
                    </clipPath>
                  </g>
                  <g clip-path="url(#b)">
                    <defs>
                      <path
                        id="e"
                        d="M10.318 51.107h172.119v90.541H10.318z"></path>
                    </defs>
                    <clipPath id="f">
                      <use
                        overflow="visible"
                        xlink:href="#e"></use>
                    </clipPath>
                  </g>
                  <path
                    fill="#6e81b6"
                    fill-rule="evenodd"
                    d="M96.378 138.287c45.673 0 82.698-18.764 82.698-41.909s-37.025-41.909-82.698-41.909c-45.672 0-82.698 18.764-82.698 41.909s37.026 41.909 82.698 41.909z"
                    clip-rule="evenodd"></path>
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M113.131 109.924l4.102-21.112c.926-4.765.156-8.319-2.287-10.565-2.367-2.173-6.385-3.23-12.283-3.23h-7.104l2.032-10.46a1.344 1.344 0 0 0-1.319-1.602h-9.805c-.644 0-1.197.457-1.32 1.089L80.79 86.457c-.396-2.522-1.372-4.69-2.934-6.479-2.876-3.292-7.425-4.961-13.522-4.961H45.33c-.644 0-1.197.457-1.32 1.088l-8.817 45.368c-.077.395.026.801.282 1.111.255.311.635.49 1.038.49h9.882c.644 0 1.197-.457 1.32-1.09l2.133-10.973h7.356c3.86 0 7.104-.418 9.636-1.242 2.589-.842 4.972-2.27 7.072-4.236 1.697-1.559 3.099-3.305 4.178-5.188l-1.761 9.064c-.077.395.026.803.282 1.111.255.311.636.49 1.038.49h9.805c.644 0 1.197-.457 1.32-1.088l4.839-24.903h6.728c2.867 0 3.707.571 3.936.816.207.224.637 1.013.154 3.5l-3.9 20.073a1.347 1.347 0 0 0 1.32 1.601h9.961a1.341 1.341 0 0 0 1.319-1.085zM67.673 92.48c-.616 3.165-1.776 5.422-3.45 6.709-1.7 1.311-4.419 1.975-8.082 1.975h-4.38l3.167-16.298h5.663c4.16 0 5.836.889 6.509 1.634.933 1.034 1.131 3.103.573 5.98zM154.432 79.978c-2.875-3.292-7.424-4.961-13.521-4.961h-19.004c-.645 0-1.197.457-1.32 1.088l-8.816 45.368c-.078.395.025.801.281 1.111s.637.49 1.037.49h9.883c.645 0 1.197-.457 1.32-1.09l2.133-10.973h7.357c3.861 0 7.102-.418 9.635-1.242 2.59-.842 4.973-2.27 7.072-4.236 1.752-1.609 3.193-3.418 4.285-5.371s1.875-4.131 2.332-6.475c1.123-5.781.224-10.393-2.674-13.709zm-9.621 12.502c-.617 3.165-1.777 5.422-3.449 6.709-1.701 1.311-4.42 1.975-8.082 1.975h-4.381l3.166-16.298h5.664c4.16 0 5.836.889 6.51 1.634.931 1.034 1.13 3.103.572 5.98z"
                    clip-rule="evenodd"></path>
                  <path
                    fill-rule="evenodd"
                    d="M60.591 83.521c3.754 0 6.257.693 7.508 2.079 1.25 1.386 1.548 3.766.894 7.137-.684 3.511-2 6.017-3.95 7.519s-4.918 2.252-8.902 2.252h-6.012l3.69-18.987h6.772zm-24.079 38.208h9.882l2.345-12.061h8.465c3.735 0 6.808-.393 9.22-1.178s4.605-2.1 6.578-3.947c1.656-1.521 2.996-3.201 4.022-5.037 1.025-1.836 1.753-3.861 2.184-6.076 1.046-5.378.257-9.567-2.365-12.567-2.621-3.001-6.792-4.501-12.509-4.501H45.33l-8.818 45.367zM86.466 64.3h9.805l-2.344 12.062h8.736c5.494 0 9.287.958 11.373 2.875 2.086 1.917 2.711 5.024 1.877 9.319l-4.102 21.112h-9.961l3.9-20.074c.443-2.284.281-3.841-.49-4.672-.771-.83-2.412-1.246-4.92-1.246h-7.836l-5.051 25.992h-9.805L86.466 64.3zM137.729 83.521c3.754 0 6.256.693 7.508 2.079 1.25 1.386 1.547 3.766.893 7.137-.682 3.511-1.998 6.017-3.949 7.519-1.949 1.502-4.918 2.252-8.9 2.252h-6.012l3.689-18.987h6.771zm-24.081 38.208h9.883l2.344-12.061h8.465c3.736 0 6.809-.393 9.221-1.178s4.605-2.1 6.578-3.947c1.656-1.521 2.996-3.201 4.021-5.037s1.754-3.861 2.186-6.076c1.045-5.378.256-9.567-2.365-12.567-2.623-3.001-6.793-4.501-12.51-4.501h-19.004l-8.819 45.367z"
                    clip-rule="evenodd"></path>
                </svg>
                <svg
                  v-if="Technologien.includes('sql')"
                  width="30"
                  height="30"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 61 81"
                  fill="#fff"
                  fill-rule="evenodd"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <use
                    xlink:href="#A"
                    x=".5"
                    y=".5" />
                  <symbol
                    id="A"
                    overflow="visible">
                    <g
                      fill="#0072c6"
                      stroke="none">
                      <path
                        d="M0 10.929v58.14C0 75.106 13.432 80 30 80V10.929H0z" />
                      <use xlink:href="#C" />
                    </g>
                    <use
                      xlink:href="#C"
                      opacity=".15"
                      stroke="none" />
                    <path
                      d="M60 10.929c0 6.036-13.432 10.929-30 10.929S0 16.965 0 10.929 13.432 0 30 0s30 4.893 30 10.929"
                      stroke="none" />
                    <path
                      d="M53.866 10.299c0 3.985-10.685 7.211-23.866 7.211S6.132 14.284 6.132 10.299 16.819 3.088 30 3.088s23.866 3.228 23.866 7.211"
                      fill="#7fba00"
                      stroke="none" />
                    <path
                      d="M48.867 14.707c3.124-1.219 5.002-2.745 5.002-4.404C53.868 6.318 43.183 3.09 30 3.09S6.134 6.318 6.134 10.303c0 1.658 1.877 3.185 5.002 4.404 4.363-1.704 11.182-2.803 18.865-2.803s14.5 1.099 18.866 2.803"
                      fill="#b8d432"
                      stroke="none" />
                    <path
                      d="M20.472 51.287c0 1.807-.651 3.206-1.955 4.197s-3.102 1.488-5.399 1.488c-1.954 0-3.587-.354-4.899-1.063v-4.251c1.514 1.293 3.182 1.94 5.004 1.94.88 0 1.561-.177 2.041-.532s.72-.823.72-1.409c0-.575-.231-1.075-.693-1.5s-1.402-.974-2.819-1.647c-2.888-1.362-4.331-3.224-4.331-5.577 0-1.708.629-3.078 1.889-4.11s2.931-1.547 5.016-1.547c1.849 0 3.379.245 4.596.731v3.971c-1.276-.886-2.729-1.328-4.357-1.328-.818 0-1.465.174-1.94.523a1.65 1.65 0 0 0-.712 1.401c0 .602.191 1.096.575 1.481s1.168.861 2.356 1.428c1.77.842 3.03 1.695 3.784 2.563s1.125 1.95 1.125 3.241zm20.37-4.302c0 2.24-.507 4.185-1.519 5.83s-2.438 2.801-4.277 3.466l5.491 5.113h-5.544l-3.921-4.423c-1.681-.061-3.198-.509-4.549-1.341s-2.395-1.972-3.129-3.42-1.103-3.062-1.103-4.841c0-1.974.398-3.734 1.194-5.279s1.916-2.734 3.36-3.566 3.097-1.248 4.965-1.248c1.741 0 3.302.403 4.68 1.209s2.446 1.951 3.208 3.439 1.144 3.175 1.144 5.06zm-4.488.24c0-1.931-.418-3.455-1.255-4.576s-1.98-1.681-3.433-1.681c-1.479 0-2.662.562-3.552 1.685s-1.333 2.621-1.333 4.489c0 1.86.435 3.344 1.306 4.455s2.028 1.666 3.472 1.666c1.471 0 2.636-.538 3.499-1.613s1.296-2.55 1.296-4.426zm18.893 9.414H43.972V37.596h4.264V53.16h7.01z"
                      stroke="none" />
                  </symbol>
                  <defs>
                    <path
                      id="C"
                      d="M29.589 79.999H30c16.568 0 30-4.892 30-10.929v-58.14H29.589v69.07z" />
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass">

$MainColor:#fff
$SecondaryColor:#000
$peronalColor:#a3e635

h1
  font-size: 2rem

ion-icon[name="logo-vue"]
  color: #66BB6A

ion-icon[name="logo-sass"]
  color:#AB47BC

ion-icon[name="logo-nodejs"]
  color: #43A047
ion-icon[name="logo-css3"]
  color: #228be6
ion-icon[name="logo-html5"]
  color: #d9480f
ion-icon[name="logo-javascript"]
  color: #fde047
  background-color: #000
.Github
  display: flex
  align-items: center
  justify-content: center
  border-radius:9px
  background-color:#000
  padding: .2rem
  color:#fff
  ion-icon
    font-size: 2.5rem

.AppLink
    border: none
    border-radius: 11px

    background: $peronalColor
    padding: .7rem
a
  text-decoration: none
  color: #000

header
  display: flex
  align-items: center
  justify-content: center
  position: fixed
  z-index: 999px
  background-color: $MainColor
  gap: 2rem
  width:100%
  padding: 2rem 4rem 2rem 4rem
  border-bottom: 1px solid #000
  button
    border: none
    border-radius: 11px

    background: $peronalColor
    padding: .7rem

.Alle-Projekt
  width: 100%
  display: flex
  flex-direction: column

.Projekt-continer
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  border-bottom: 1px solid #000
  padding: 3rem

.A-Projekt
  margin-top:10rem
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  border-bottom: 1px solid #000

  padding: 3rem

.A-Projekt-Img
  width: calc(image-width("../Csv.png")/2)
  height: calc(image-height("../Csv.png")/2)


.Tech
  display: flex
  justify-content: center
  align-items: center
  gap: 1rem
  ion-icon
    font-size: 2.7rem

.info-rapper
  display: flex
  flex-direction: column
  align-items: center
  gap: 1rem
  padding: 3rem 0 3rem 3rem
  font-size: 1.5rem
.link-rapper
  display: flex
  flex-direction: column
  align-items: center


#app
  display: flex
  flex-direction: column
  align-items: center
  overflow: scroll
  height: 100%
  margin: 0
  padding: 0


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
