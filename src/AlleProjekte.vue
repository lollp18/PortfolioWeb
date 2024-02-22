<script setup>
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
    "Aktuelles Projekt CSV Fullstack App",
    `Die CSV-App ermöglicht das Einlesen von CSV Dateien im Header und
     das Verwalten mehrerer Dateien im Footer. Dort kann der Nutzer die
     Dateien wechseln, löschen oder herunterladen. Im Header lässt sich
     der Dateiname ändern und ein ausgewählter Zellenwert bearbeiten. Ein
     Bearbeitungsfenster erlaubt das Tauschen, Hinzufügen von Spalten und
     Bearbeiten von Zeilen so wie Zellen tauschen. Die Haupttabelle
     erlaubt das Löschen von Zeilen und Spalten sowie die Auswahl von
     Zellen. Bei großen CSV-Dateien erfolgt eine Seitenaufteilung,
     gesteuert im Footer. Header und IDs bleiben beim Scrollen oder
     Seitenwechsel erhalten. Die App verfügt über einen nutzerbasierten
     Login, der mit einem Backend verbunden ist. Papaparse, Vue-Axios und
     Vue-Router werden für die Entwicklung verwendet.`,
    "../Csv.avif",
    "https://csv2.netlify.app",
    [
      {
        titel: "Frontend",
        link: "https://github.com/lollp18/Csv2",
      },
      {
        titel: "Backend",
        link: "https://github.com/lollp18/CsvDB2",
      },
    ],
    ["html", "vue", "pina", "sass", "nodejs", "mongodb"]
  ),
  new Projekt(
    "Kurse Buchen",
    "Das Projekt Kurse Buchen ist ein Buchungssystem für Hochschulen. Schüler können sich registrieren und Kurse buchen oder filtern. Beim Öffnen der App werden alle Kurse angezeigt. Das Filtern der Kurse ist ebenfalls möglich. Einen Kurs buchen kann man nur, wenn man sich eingeloggt hat. Nach der Buchung eines Kurses kann dieser auch wieder storniert werden. Das ergänzende Stück dazu ist eine C#-Anwendung, mit der man Kurse, Räume und Lehrkräfte hinzufügen kann.",
    "../KursBuchen.png",
    "http://lorenzo.infinityfreeapp.com/",
    [
      {
        titel: "Backend",
        link: "https://github.com/lollp18/Webseite_M-hlbeier_Rodorigo",
      },
    ],
    ["vue", "php", "css", "sql", "html"]
  ),
  new Projekt(
    "Schornsteinfeger Wochenplaner(SFWP)",

    "Der Wochenplan wird derzeit im elterlichen Betrieb verwendet, um Termine für eine 7-Tage-Woche zu speichern. Die App wurde für die Nutzung auf Mobilgeräten entwickelt. Beim Öffnen der App sieht der Nutzer eine Liste der Tage von Montag bis Samstag. Durch einen Klick auf einen dieser Tage werden die jeweiligen Termine angezeigt. Die App ermöglicht das Erstellen, Bearbeiten und Löschen von Terminen. Der Aufbau und Stil sind schlicht gehalten, und alle Bedienelemente sind nahe beieinander platziert, um die Bedienung mit einer Hand zu erleichtern.",
    "../SFWP.jpg",

    "https://schornsteinfeger-wochenplaner.netlify.app",

    [
      {
        titel: "Frontend",
        link: "https://github.com/lollp18/SFWP",
      },
    ],
    ["vue", "css", "html"]
  ),
  new Projekt(
    "Todoliste",

    "Die Todoliste ist sehr einfach gehalten damit man es auch am handy verwenden kann und es traotzdem übersichtlich ist .Es ist möglich ein Todos hinzufügen und löschen. die Todoliste wurde mit ObjektOrientirung Erstelt   ",
    "../Todoliste.jpg",

    "https://todoliste-lorenzo-rodorigo.netlify.app",
    [
      {
        titel: "Frontend",
        link: "https://github.com/lollp18/Todoliste",
      },
    ],
    ["js", "css", "html"]
  ),
  new Projekt(
    "Webseite Für Sylvia Rodorigo",

    "Eine Webseite für den Schornsteinfegerbetrieb von Sylvia Rodorigo präsentiert alle Dienstleistungen, die von Sylvia Rodorigo angeboten werden, sowie Kontaktinformationen. Durch Klicken auf die jeweiligen Buttons im Header wird der Besucher zu den einzelnen Abschnitten der Webseite weitergeleitet. Die Webseite ist zudem für die mobile Nutzung optimiert.",
    "../SiviWeb.png",

    "https://clinquant-croissant-d8a253.netlify.app",
    [
      {
        titel: "Frontend",
        link: "https://github.com/lollp18/Syvia-Rodorigo",
      },
    ],
    ["js", "css", "html"]
  ),
  new Projekt(
    "Omnifood",

    `
Das Omnifood-Projekt ist eine Webseite, die eine App zur Mahlzeitenplanung vorstellt. Die Webseite umfasst Abschnitte für Kundenbewertungen, Informationen zur Funktionsweise der App, Preise und ein Anmeldeformular. Die Webseite ist für die Nutzung auf mobilen Geräten optimiert.`,
    "../Omnifod.png",

    "https://omnifood-lorenzo-rodorigo.netlify.app",
    [
      {
        titel: "Frontend",
        link: "https://github.com/lollp18/omnifood-lorenzo-rodorigo",
      },
    ],
    ["js", "css", "html"]
  ),
  new Projekt(
    "OneForkify",

    "OneForkify ist eine Rezepte-App, mit der Benutzer nach Rezepten suchen und diese hinzufügen können. Es ist auch möglich, eine bestimmte Anzahl von Personen anzugeben, nach der die Rezeptmenge berechnet wird. Außerdem können Benutzer Rezepte zu Lesezeichen hinzufügen, um sie später leicht aufrufen zu können. Die App verfügt auch über ein Backend, von dem aus die Rezepte geladen werden. In diesem Projekt wird Parcel verwendet, ein Webapplication Bundler, und eine virtuelle DOM wird generiert, um das Projekt mit Vanilla JavaScript zu erstellen. Zusätzlich wird Ajax verwendet, um Requests an das Backend zu senden.",
    "../OneForkify.png",

    "https://forkify-rezepte-finder-lorenzo-rodorigo.netlify.app",
    [
      {
        titel: "Frontend",
        link: "https://github.com/lollp18/OneForkify-Lorenzo-Rodorigo",
      },
    ],
    ["js", "css", "html"]
  ),
  new Projekt(
    "Mapty",

    "Mapty ist eine interaktive Karte, mit der man Trainingsorte speichern kann. Sobald man auf die Karte klickt, öffnet sich links ein Formular. In diesem Formular muss man auswählen, ob man mit dem Fahrrad gefahren ist oder gelaufen ist. Je nachdem, was man wählt, werden die Schritte pro Minute oder die gefahrenen Meter abgefragt. Man muss außerdem die Distanz und die Dauer angeben. Zum Schluss drückt man auf Enter und die Daten werden gespeichert. Außerdem wird beim Öffnen der App die Karte zum aktuellen Standort gezoomt. Mapty wurde mit der Leaflet-Bibliothek, JavaScript Object Notation und der Browser-Geolokalisierungs-API erstellt.",
    "../Mapty.png",

    "https://mapty-lorenzo-rodorigo.netlify.app",
    [
      {
        titel: "Frontend",
        link: "https://github.com/lollp18/Mapty",
      },
    ],
    ["js", "css", "html"]
  ),
]
</script>

<template>
  <section class="Alle-Projekt">
    <div
      class="Projekt-continer"
      :class="i % 2 == 0 ? 'Projekt-bg1' : 'Projekt-bg2'"
      v-for="(
        { Name, Beschreibung, IMG, SeitenLink, GIT, Technologien }, i
      ) in Projekte">
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
              <div class="Tech">
                <ion-icon
                  v-if="Technologien.includes('vue')"
                  name="logo-vue"></ion-icon>
                <svg
                  v-if="Technologien.includes('pina')"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 331">
                  <defs>
                    <linearGradient
                      id="logosPinia0"
                      x1="55.342%"
                      x2="42.817%"
                      y1="0%"
                      y2="42.863%">
                      <stop
                        offset="0%"
                        stop-color="#52CE63" />
                      <stop
                        offset="100%"
                        stop-color="#51A256" />
                    </linearGradient>
                    <linearGradient
                      id="logosPinia1"
                      x1="55.349%"
                      x2="42.808%"
                      y1="0%"
                      y2="42.863%">
                      <stop
                        offset="0%"
                        stop-color="#52CE63" />
                      <stop
                        offset="100%"
                        stop-color="#51A256" />
                    </linearGradient>
                    <linearGradient
                      id="logosPinia2"
                      x1="50%"
                      x2="50%"
                      y1="0%"
                      y2="58.811%">
                      <stop
                        offset="0%"
                        stop-color="#8AE99C" />
                      <stop
                        offset="100%"
                        stop-color="#52CE63" />
                    </linearGradient>
                    <linearGradient
                      id="logosPinia3"
                      x1="51.378%"
                      x2="44.585%"
                      y1="17.473%"
                      y2="100%">
                      <stop
                        offset="0%"
                        stop-color="#FFE56C" />
                      <stop
                        offset="100%"
                        stop-color="#FFC63A" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#logosPinia0)"
                    d="M67.56 173.328c30.366-2.985 41.08-27.648 44.735-64.823c3.654-37.175-21.174-70.814-31.502-69.799c-10.328 1.015-43.15 40.322-46.805 77.497c-3.654 37.175 3.205 60.11 33.572 57.125"
                    transform="rotate(-38 72.877 106.136)" />
                  <path
                    fill="url(#logosPinia1)"
                    d="M184.454 186.277c30.367 2.986 36.394-20.032 32.74-57.207c-3.655-37.175-35.645-76.4-45.973-77.415c-10.328-1.015-35.989 32.542-32.334 69.717c3.654 37.175 15.201 61.92 45.567 64.905"
                    transform="rotate(52 178.34 119.085)" />
                  <path
                    fill="url(#logosPinia2)"
                    d="M129.232 151.601c27.341 0 34.878-26.184 34.878-67.013c0-40.83-25.579-80.843-34.878-80.843S93.605 43.758 93.605 84.588c0 40.829 8.286 67.013 35.627 67.013"
                    transform="rotate(7 128.858 77.673)" />
                  <path
                    fill="url(#logosPinia3)"
                    d="M113.386 330.307c56.896 0 103.038-16.528 103.038-91.482c0-74.955-46.142-136.462-103.038-136.462c-56.897 0-103.002 61.507-103.002 136.462c0 74.954 46.105 91.482 103.002 91.482" />
                  <ellipse
                    cx="165.427"
                    cy="216.677"
                    fill="#EAADCC"
                    rx="14.717"
                    ry="6.845" />
                  <ellipse
                    cx="57.273"
                    cy="212.57"
                    fill="#EAADCC"
                    rx="14.717"
                    ry="6.845"
                    transform="rotate(7 57.273 212.57)" />
                  <path
                    d="M96.266 210.285a2.054 2.054 0 1 0-3.406 2.295c3.151 4.676 7.997 7.39 14.373 8.119c6.348.725 12.016-.902 16.877-4.852a2.054 2.054 0 1 0-2.59-3.187c-3.999 3.249-8.563 4.559-13.82 3.958c-5.23-.598-8.986-2.7-11.434-6.333M65.818 178.63a14.672 14.672 0 0 1 10.551 3.945a14.67 14.67 0 0 1 4.672 10.25a14.671 14.671 0 0 1-3.945 10.55a14.672 14.672 0 0 1-10.25 4.672a14.67 14.67 0 0 1-10.551-3.945a14.672 14.672 0 0 1-4.67-10.25a14.67 14.67 0 0 1 3.944-10.55a14.67 14.67 0 0 1 10.249-4.672" />
                  <path
                    fill="#FFF"
                    d="M66.59 190.932a4.792 4.792 0 1 0-9.578.336a4.792 4.792 0 0 0 9.579-.336" />
                  <path
                    d="M154.99 182.366a14.671 14.671 0 0 1 10.552 3.944a14.67 14.67 0 0 1 4.67 10.25a14.672 14.672 0 0 1-3.944 10.551a14.67 14.67 0 0 1-10.25 4.671a14.671 14.671 0 0 1-10.55-3.945a14.671 14.671 0 0 1-4.672-10.25a14.67 14.67 0 0 1 3.945-10.55a14.671 14.671 0 0 1 10.25-4.671" />
                  <path
                    fill="#FFF"
                    d="M65.71 175.552c9.824-.343 18.066 7.342 18.409 17.165c.343 9.824-7.342 18.065-17.166 18.408c-9.824.343-18.064-7.342-18.407-17.166c-.343-9.823 7.341-18.064 17.164-18.407m12.252 17.38c-.224-6.423-5.613-11.448-12.037-11.223c-6.422.224-11.447 5.612-11.222 12.035c.224 6.424 5.612 11.448 12.035 11.224c6.423-.224 11.448-5.612 11.224-12.036m76.921-13.645c9.824-.343 18.065 7.342 18.408 17.165c.343 9.824-7.342 18.065-17.165 18.408c-9.824.343-18.065-7.342-18.408-17.165c-.343-9.824 7.342-18.065 17.165-18.408m12.251 17.38c-.224-6.423-5.612-11.447-12.036-11.223c-6.423.224-11.448 5.613-11.223 12.036c.224 6.423 5.612 11.448 12.035 11.224c6.424-.225 11.448-5.613 11.224-12.037" />
                  <path
                    fill="#FFF"
                    d="M155.763 194.668a4.792 4.792 0 1 0-9.578.335a4.792 4.792 0 0 0 9.578-.335" />
                  <path
                    fill="#ECB732"
                    d="m38.083 243.16l22.33 23.235l16.022-17.044a3.765 3.765 0 0 1 5.486 5.157l-16.283 17.324l23.1 24.036a3.765 3.765 0 1 1-5.43 5.218l-22.834-23.761l-10.725 11.41a3.765 3.765 0 1 1-5.486-5.158l10.986-11.688l-22.595-23.511a3.765 3.765 0 1 1 5.43-5.218m149.956 0a3.765 3.765 0 1 1 5.429 5.218l-22.596 23.511l10.988 11.688a3.765 3.765 0 0 1-.042 5.201l-.123.121a3.765 3.765 0 0 1-5.322-.165l-10.725-11.41l-22.834 23.762a3.765 3.765 0 0 1-5.197.222l-.127-.116a3.765 3.765 0 0 1-.105-5.324l23.1-24.036l-16.284-17.324a3.765 3.765 0 0 1 .042-5.2l.123-.121a3.765 3.765 0 0 1 5.321.164l16.021 17.044z" />
                  <path
                    fill="#FFC73B"
                    d="M136.602 126.74a3.765 3.765 0 0 1 0 5.323l-17.53 17.531l10.684 10.686a3.765 3.765 0 0 1 .12 5.2l-.12.125a3.765 3.765 0 0 1-5.324 0l-10.686-10.686l-10.686 10.686a3.765 3.765 0 1 1-5.324-5.325l10.685-10.686l-17.53-17.53a3.765 3.765 0 0 1-.12-5.2l.12-.125a3.765 3.765 0 0 1 5.324 0l17.531 17.53l17.531-17.53a3.765 3.765 0 0 1 5.325 0" />
                </svg>
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
          <img :src="IMG" />
        </div>
      </div>
      <div
        v-else
        class="rapper-Alle-infos">
        <div class="img-rapper">
          <img :src="IMG" />
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
              <div class="Tech">
                <ion-icon
                  v-if="Technologien.includes('vue')"
                  name="logo-vue"></ion-icon>
                <svg
                  v-if="Technologien.includes('pina')"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 331">
                  <defs>
                    <linearGradient
                      id="logosPinia0"
                      x1="55.342%"
                      x2="42.817%"
                      y1="0%"
                      y2="42.863%">
                      <stop
                        offset="0%"
                        stop-color="#52CE63" />
                      <stop
                        offset="100%"
                        stop-color="#51A256" />
                    </linearGradient>
                    <linearGradient
                      id="logosPinia1"
                      x1="55.349%"
                      x2="42.808%"
                      y1="0%"
                      y2="42.863%">
                      <stop
                        offset="0%"
                        stop-color="#52CE63" />
                      <stop
                        offset="100%"
                        stop-color="#51A256" />
                    </linearGradient>
                    <linearGradient
                      id="logosPinia2"
                      x1="50%"
                      x2="50%"
                      y1="0%"
                      y2="58.811%">
                      <stop
                        offset="0%"
                        stop-color="#8AE99C" />
                      <stop
                        offset="100%"
                        stop-color="#52CE63" />
                    </linearGradient>
                    <linearGradient
                      id="logosPinia3"
                      x1="51.378%"
                      x2="44.585%"
                      y1="17.473%"
                      y2="100%">
                      <stop
                        offset="0%"
                        stop-color="#FFE56C" />
                      <stop
                        offset="100%"
                        stop-color="#FFC63A" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#logosPinia0)"
                    d="M67.56 173.328c30.366-2.985 41.08-27.648 44.735-64.823c3.654-37.175-21.174-70.814-31.502-69.799c-10.328 1.015-43.15 40.322-46.805 77.497c-3.654 37.175 3.205 60.11 33.572 57.125"
                    transform="rotate(-38 72.877 106.136)" />
                  <path
                    fill="url(#logosPinia1)"
                    d="M184.454 186.277c30.367 2.986 36.394-20.032 32.74-57.207c-3.655-37.175-35.645-76.4-45.973-77.415c-10.328-1.015-35.989 32.542-32.334 69.717c3.654 37.175 15.201 61.92 45.567 64.905"
                    transform="rotate(52 178.34 119.085)" />
                  <path
                    fill="url(#logosPinia2)"
                    d="M129.232 151.601c27.341 0 34.878-26.184 34.878-67.013c0-40.83-25.579-80.843-34.878-80.843S93.605 43.758 93.605 84.588c0 40.829 8.286 67.013 35.627 67.013"
                    transform="rotate(7 128.858 77.673)" />
                  <path
                    fill="url(#logosPinia3)"
                    d="M113.386 330.307c56.896 0 103.038-16.528 103.038-91.482c0-74.955-46.142-136.462-103.038-136.462c-56.897 0-103.002 61.507-103.002 136.462c0 74.954 46.105 91.482 103.002 91.482" />
                  <ellipse
                    cx="165.427"
                    cy="216.677"
                    fill="#EAADCC"
                    rx="14.717"
                    ry="6.845" />
                  <ellipse
                    cx="57.273"
                    cy="212.57"
                    fill="#EAADCC"
                    rx="14.717"
                    ry="6.845"
                    transform="rotate(7 57.273 212.57)" />
                  <path
                    d="M96.266 210.285a2.054 2.054 0 1 0-3.406 2.295c3.151 4.676 7.997 7.39 14.373 8.119c6.348.725 12.016-.902 16.877-4.852a2.054 2.054 0 1 0-2.59-3.187c-3.999 3.249-8.563 4.559-13.82 3.958c-5.23-.598-8.986-2.7-11.434-6.333M65.818 178.63a14.672 14.672 0 0 1 10.551 3.945a14.67 14.67 0 0 1 4.672 10.25a14.671 14.671 0 0 1-3.945 10.55a14.672 14.672 0 0 1-10.25 4.672a14.67 14.67 0 0 1-10.551-3.945a14.672 14.672 0 0 1-4.67-10.25a14.67 14.67 0 0 1 3.944-10.55a14.67 14.67 0 0 1 10.249-4.672" />
                  <path
                    fill="#FFF"
                    d="M66.59 190.932a4.792 4.792 0 1 0-9.578.336a4.792 4.792 0 0 0 9.579-.336" />
                  <path
                    d="M154.99 182.366a14.671 14.671 0 0 1 10.552 3.944a14.67 14.67 0 0 1 4.67 10.25a14.672 14.672 0 0 1-3.944 10.551a14.67 14.67 0 0 1-10.25 4.671a14.671 14.671 0 0 1-10.55-3.945a14.671 14.671 0 0 1-4.672-10.25a14.67 14.67 0 0 1 3.945-10.55a14.671 14.671 0 0 1 10.25-4.671" />
                  <path
                    fill="#FFF"
                    d="M65.71 175.552c9.824-.343 18.066 7.342 18.409 17.165c.343 9.824-7.342 18.065-17.166 18.408c-9.824.343-18.064-7.342-18.407-17.166c-.343-9.823 7.341-18.064 17.164-18.407m12.252 17.38c-.224-6.423-5.613-11.448-12.037-11.223c-6.422.224-11.447 5.612-11.222 12.035c.224 6.424 5.612 11.448 12.035 11.224c6.423-.224 11.448-5.612 11.224-12.036m76.921-13.645c9.824-.343 18.065 7.342 18.408 17.165c.343 9.824-7.342 18.065-17.165 18.408c-9.824.343-18.065-7.342-18.408-17.165c-.343-9.824 7.342-18.065 17.165-18.408m12.251 17.38c-.224-6.423-5.612-11.447-12.036-11.223c-6.423.224-11.448 5.613-11.223 12.036c.224 6.423 5.612 11.448 12.035 11.224c6.424-.225 11.448-5.613 11.224-12.037" />
                  <path
                    fill="#FFF"
                    d="M155.763 194.668a4.792 4.792 0 1 0-9.578.335a4.792 4.792 0 0 0 9.578-.335" />
                  <path
                    fill="#ECB732"
                    d="m38.083 243.16l22.33 23.235l16.022-17.044a3.765 3.765 0 0 1 5.486 5.157l-16.283 17.324l23.1 24.036a3.765 3.765 0 1 1-5.43 5.218l-22.834-23.761l-10.725 11.41a3.765 3.765 0 1 1-5.486-5.158l10.986-11.688l-22.595-23.511a3.765 3.765 0 1 1 5.43-5.218m149.956 0a3.765 3.765 0 1 1 5.429 5.218l-22.596 23.511l10.988 11.688a3.765 3.765 0 0 1-.042 5.201l-.123.121a3.765 3.765 0 0 1-5.322-.165l-10.725-11.41l-22.834 23.762a3.765 3.765 0 0 1-5.197.222l-.127-.116a3.765 3.765 0 0 1-.105-5.324l23.1-24.036l-16.284-17.324a3.765 3.765 0 0 1 .042-5.2l.123-.121a3.765 3.765 0 0 1 5.321.164l16.021 17.044z" />
                  <path
                    fill="#FFC73B"
                    d="M136.602 126.74a3.765 3.765 0 0 1 0 5.323l-17.53 17.531l10.684 10.686a3.765 3.765 0 0 1 .12 5.2l-.12.125a3.765 3.765 0 0 1-5.324 0l-10.686-10.686l-10.686 10.686a3.765 3.765 0 1 1-5.324-5.325l10.685-10.686l-17.53-17.53a3.765 3.765 0 0 1-.12-5.2l.12-.125a3.765 3.765 0 0 1 5.324 0l17.531 17.53l17.531-17.53a3.765 3.765 0 0 1 5.325 0" />
                </svg>
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
<style scoped lang="sass">

@import './style.sass'

.Alle-Projekt
  @include width
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  border-radius: 15px
  gap: 2rem
.Projekt-bg1
  background: url("../Projekt-bg1.svg") no-repeat center
  background-size: cover
.Projekt-bg2
  background: url("../Projekt-bg2.svg") no-repeat center
  background-size: cover
</style>
