class Projekt {
  constructor(
    Name,
    Beschreibung,
    IMG,
    SeitenLink = "#",
    GIT,
    Technologien,
    ref
  ) {
    this.Name = Name
    this.Beschreibung = Beschreibung
    this.IMG = IMG
    this.SeitenLink = SeitenLink
    this.GIT = GIT
    this.Technologien = Technologien
    this.ref = ref
  }
}

export const Projekte = [
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
    "Csv.avif",
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
    ["html", "vue", "pina", "sass", "nodejs", "mongodb"],
    "AktuellesProjekt"
  ),

  /* new Projekt(
    "Kurse Buchen",
    "Das Projekt Kurse Buchen ist ein Buchungssystem für Hochschulen. Schüler können sich registrieren und Kurse buchen oder filtern. Beim Öffnen der App werden alle Kurse angezeigt. Das Filtern der Kurse ist ebenfalls möglich. Einen Kurs buchen kann man nur, wenn man sich eingeloggt hat. Nach der Buchung eines Kurses kann dieser auch wieder storniert werden. Das ergänzende Stück dazu ist eine C#-Anwendung, mit der man Kurse, Räume und Lehrkräfte hinzufügen kann.",
    "KursBuchen.png",
    "http://lorenzo.infinityfreeapp.com/",
    [
      {
        titel: "Backend",
        link: "https://github.com/lollp18/Webseite_M-hlbeier_Rodorigo",
      },
    ],
    ["vue", "php", "css", "sql", "html"]
  ),*/
  new Projekt(
    "Schornsteinfeger Wochenplaner(SFWP)",

    "Der Wochenplan wird derzeit im elterlichen Betrieb verwendet, um Termine für eine 7-Tage-Woche zu speichern. Die App wurde für die Nutzung auf Mobilgeräten entwickelt. Beim Öffnen der App sieht der Nutzer eine Liste der Tage von Montag bis Samstag. Durch einen Klick auf einen dieser Tage werden die jeweiligen Termine angezeigt. Die App ermöglicht das Erstellen, Bearbeiten und Löschen von Terminen. Der Aufbau und Stil sind schlicht gehalten, und alle Bedienelemente sind nahe beieinander platziert, um die Bedienung mit einer Hand zu erleichtern.",
    "SFWP.jpg",

    "https://schornsteinfeger-wochenplaner.netlify.app",

    [
      {
        titel: "Frontend",
        link: "https://github.com/lollp18/SFWP",
      },
    ],
    ["vue", "css", "html"],
    "SFWP"
  ),
  new Projekt(
    "Todoliste",

    "Die Todoliste ist sehr einfach gehalten damit man es auch am handy verwenden kann und es traotzdem übersichtlich ist .Es ist möglich ein Todos hinzufügen und löschen. die Todoliste wurde mit ObjektOrientirung Erstelt   ",
    "Todoliste.jpg",

    "https://todoliste-lorenzo-rodorigo.netlify.app",
    [
      {
        titel: "Frontend",
        link: "https://github.com/lollp18/Todoliste",
      },
    ],
    ["js", "css", "html"],
    "Todoliste"
  ),
  new Projekt(
    "Webseite Für Sylvia Rodorigo",

    "Eine Webseite für den Schornsteinfegerbetrieb von Sylvia Rodorigo präsentiert alle Dienstleistungen, die von Sylvia Rodorigo angeboten werden, sowie Kontaktinformationen. Durch Klicken auf die jeweiligen Buttons im Header wird der Besucher zu den einzelnen Abschnitten der Webseite weitergeleitet. Die Webseite ist zudem für die mobile Nutzung optimiert.",
    "SiviWeb.png",

    "https://clinquant-croissant-d8a253.netlify.app",
    [
      {
        titel: "Frontend",
        link: "https://github.com/lollp18/Syvia-Rodorigo",
      },
    ],
    ["js", "css", "html"],
    "WebseiteFürSylviaRodorigo"
  ),
  new Projekt(
    "Omnifood",

    `
Das Omnifood-Projekt ist eine Webseite, die eine App zur Mahlzeitenplanung vorstellt. Die Webseite umfasst Abschnitte für Kundenbewertungen, Informationen zur Funktionsweise der App, Preise und ein Anmeldeformular. Die Webseite ist für die Nutzung auf mobilen Geräten optimiert.`,
    "Omnifod.png",

    "https://omnifood-lorenzo-rodorigo.netlify.app",
    [
      {
        titel: "Frontend",
        link: "https://github.com/lollp18/omnifood-lorenzo-rodorigo",
      },
    ],
    ["js", "css", "html"],
    "Omnifood"
  ),
  new Projekt(
    "OneForkify",

    "OneForkify ist eine Rezepte-App, mit der Benutzer nach Rezepten suchen und diese hinzufügen können. Es ist auch möglich, eine bestimmte Anzahl von Personen anzugeben, nach der die Rezeptmenge berechnet wird. Außerdem können Benutzer Rezepte zu Lesezeichen hinzufügen, um sie später leicht aufrufen zu können. Die App verfügt auch über ein Backend, von dem aus die Rezepte geladen werden. In diesem Projekt wird Parcel verwendet, ein Webapplication Bundler, und eine virtuelle DOM wird generiert, um das Projekt mit Vanilla JavaScript zu erstellen. Zusätzlich wird Ajax verwendet, um Requests an das Backend zu senden.",
    "OneForkify.png",

    "https://forkify-rezepte-finder-lorenzo-rodorigo.netlify.app",
    [
      {
        titel: "Frontend",
        link: "https://github.com/lollp18/OneForkify-Lorenzo-Rodorigo",
      },
    ],
    ["js", "css", "html"],
    "OneForkify"
  ),
  new Projekt(
    "Mapty",

    "Mapty ist eine interaktive Karte, mit der man Trainingsorte speichern kann. Sobald man auf die Karte klickt, öffnet sich links ein Formular. In diesem Formular muss man auswählen, ob man mit dem Fahrrad gefahren ist oder gelaufen ist. Je nachdem, was man wählt, werden die Schritte pro Minute oder die gefahrenen Meter abgefragt. Man muss außerdem die Distanz und die Dauer angeben. Zum Schluss drückt man auf Enter und die Daten werden gespeichert. Außerdem wird beim Öffnen der App die Karte zum aktuellen Standort gezoomt. Mapty wurde mit der Leaflet-Bibliothek, JavaScript Object Notation und der Browser-Geolokalisierungs-API erstellt.",
    "Mapty.png",

    "https://mapty-lorenzo-rodorigo.netlify.app",
    [
      {
        titel: "Frontend",
        link: "https://github.com/lollp18/Mapty",
      },
    ],
    ["js", "css", "html"],
    "Mapty"
  ),
]
