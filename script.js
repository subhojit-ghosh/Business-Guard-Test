const countries = [
  {
    name: "United Kingdom",
    currency: "GBP",
    image: "https://assets.revolut.com/assets/flags/GB.svg",
  },
  {
    name: "Anguilla",
    currency: "USD",
    image: "https://assets.revolut.com/assets/flags/AI.svg",
  },
  {
    name: "Aruba",
    currency: "USD",
    image: "https://assets.revolut.com/assets/flags/AW.svg",
  },
  {
    name: "Australia",
    currency: "AUD",
    image: "https://assets.revolut.com/assets/flags/AU.svg",
  },
  {
    name: "Austria",
    currency: "EUR",
    image: "https://assets.revolut.com/assets/flags/AT.svg",
  },
  {
    name: "Belgium",
    currency: "EUR",
    image: "https://assets.revolut.com/assets/flags/BE.svg",
  },
  {
    name: "Bermuda",
    currency: "USD",
    image: "https://assets.revolut.com/assets/flags/BM.svg",
  },
  {
    name: "Caribbean Netherlands",
    currency: "USD",
    image: "https://assets.revolut.com/assets/flags/BQ.svg",
  },
  {
    name: "British Indian Ocean Territory",
    currency: "GBP",
    image: "https://assets.revolut.com/assets/flags/IO.svg",
  },
  {
    name: "Bulgaria",
    currency: "BGN",
    image: "https://assets.revolut.com/assets/flags/BG.svg",
  },
  {
    name: "Canary Islands",
    currency: "EUR",
    image: "https://assets.revolut.com/assets/flags/IC.svg",
  },
  {
    name: "Croatia",
    currency: "HRK",
    image: "https://assets.revolut.com/assets/flags/HR.svg",
  },
  {
    name: "Curaçao",
    currency: "EUR",
    image: "https://assets.revolut.com/assets/flags/CW.svg",
  },
  {
    name: "Cyprus",
    currency: "EUR",
    image: "https://assets.revolut.com/assets/flags/CY.svg",
  },
  {
    name: "Czechia",
    currency: "CZK",
    image: "https://assets.revolut.com/assets/flags/CZ.svg",
  },
  {
    name: "Denmark",
    currency: "DKK",
    image: "https://assets.revolut.com/assets/flags/DK.svg",
  },
  {
    name: "Estonia",
    currency: "EUR",
    image: "https://assets.revolut.com/assets/flags/EE.svg",
  },
  {
    name: "Falkland Islands (Islas Malvinas)",
    currency: "GBP",
    image: "https://assets.revolut.com/assets/flags/FK.svg",
  },
  {
    name: "Finland",
    currency: "EUR",
    image: "https://assets.revolut.com/assets/flags/FI.svg",
  },
  {
    name: "France",
    currency: "EUR",
    image: "https://assets.revolut.com/assets/flags/FR.svg",
  },
  {
    name: "French Guiana",
    currency: "EUR",
    image: "https://assets.revolut.com/assets/flags/GF.svg",
  },
  {
    name: "French Polynesia",
    currency: "EUR",
    image: "https://assets.revolut.com/assets/flags/PF.svg",
  },
  {
    name: "French Southern Territories",
    currency: "EUR",
    image: "https://assets.revolut.com/assets/flags/TF.svg",
  },
  {
    name: "Germany",
    currency: "EUR",
    image: "https://assets.revolut.com/assets/flags/DE.svg",
  },
  {
    name: "Gibraltar",
    currency: "GBP",
    image: "https://assets.revolut.com/assets/flags/GI.svg",
  },
  {
    name: "Greece",
    currency: "EUR",
    image: "https://assets.revolut.com/assets/flags/GR.svg",
  },
  {
    name: "Greenland",
    currency: "DKK",
    image: "https://assets.revolut.com/assets/flags/GL.svg",
  },
  {
    name: "Guadeloupe",
    currency: "EUR",
    image: "https://assets.revolut.com/assets/flags/GP.svg",
  },
  {
    name: "Guernsey",
    currency: "GBP",
    image: "https://assets.revolut.com/assets/flags/GG.svg",
  },
  {
    name: "Hungary",
    currency: "HUF",
    image: "https://assets.revolut.com/assets/flags/HU.svg",
  },
  {
    name: "Iceland",
    currency: "EUR",
    image: "https://assets.revolut.com/assets/flags/IS.svg",
  },
  {
    name: "Ireland",
    currency: "EUR",
    image: "https://assets.revolut.com/assets/flags/IE.svg",
  },
  {
    name: "Isle of Man",
    currency: "GBP",
    image: "https://assets.revolut.com/assets/flags/IM.svg",
  },
  {
    name: "Italy",
    currency: "EUR",
    image: "https://assets.revolut.com/assets/flags/IT.svg",
  },
  {
    name: "Japan",
    currency: "JPY",
    image: "https://assets.revolut.com/assets/flags/JP.svg",
  },
  {
    name: "Jersey",
    currency: "GBP",
    image: "https://assets.revolut.com/assets/flags/JE.svg",
  },
  {
    name: "Latvia",
    currency: "EUR",
    image: "https://assets.revolut.com/assets/flags/LV.svg",
  },
  {
    name: "Liechtenstein",
    currency: "EUR",
    image: "https://assets.revolut.com/assets/flags/LI.svg",
  },
  {
    name: "Lithuania",
    currency: "EUR",
    image: "https://assets.revolut.com/assets/flags/LT.svg",
  },
  {
    name: "Luxembourg",
    currency: "EUR",
    image: "https://assets.revolut.com/assets/flags/LU.svg",
  },
  {
    name: "Malta",
    currency: "EUR",
    image: "https://assets.revolut.com/assets/flags/MT.svg",
  },
  {
    name: "Martinique",
    currency: "EUR",
    image: "https://assets.revolut.com/assets/flags/MQ.svg",
  },
  {
    name: "Mayotte",
    currency: "EUR",
    image: "https://assets.revolut.com/assets/flags/YT.svg",
  },
  {
    name: "Montserrat",
    currency: "USD",
    image: "https://assets.revolut.com/assets/flags/MS.svg",
  },
  {
    name: "Netherlands",
    currency: "EUR",
    image: "https://assets.revolut.com/assets/flags/NL.svg",
  },
  {
    name: "New Caledonia",
    currency: "EUR",
    image: "https://assets.revolut.com/assets/flags/NC.svg",
  },
  {
    name: "New Zealand",
    currency: "NZD",
    image: "https://assets.revolut.com/assets/flags/NZ.svg",
  },
  {
    name: "Norway",
    currency: "NOK",
    image: "https://assets.revolut.com/assets/flags/NO.svg",
  },
  {
    name: "Pitcairn Islands",
    currency: "USD",
    image: "https://assets.revolut.com/assets/flags/PN.svg",
  },
  {
    name: "Poland",
    currency: "PLN",
    image: "https://assets.revolut.com/assets/flags/PL.svg",
  },
  {
    name: "Portugal",
    currency: "EUR",
    image: "https://assets.revolut.com/assets/flags/PT.svg",
  },
  {
    name: "Romania",
    currency: "RON",
    image: "https://assets.revolut.com/assets/flags/RO.svg",
  },
  {
    name: "Réunion",
    currency: "EUR",
    image: "https://assets.revolut.com/assets/flags/RE.svg",
  },
  {
    name: "St. Barthélemy",
    currency: "EUR",
    image: "https://assets.revolut.com/assets/flags/BL.svg",
  },
  {
    name: "St. Helena",
    currency: "GBP",
    image: "https://assets.revolut.com/assets/flags/SH.svg",
  },
  {
    name: "St. Martin",
    currency: "EUR",
    image: "https://assets.revolut.com/assets/flags/MF.svg",
  },
  {
    name: "St. Pierre & Miquelon",
    currency: "EUR",
    image: "https://assets.revolut.com/assets/flags/PM.svg",
  },
  {
    name: "Singapore",
    currency: "SGD",
    image: "https://assets.revolut.com/assets/flags/SG.svg",
  },
  {
    name: "Sint Maarten",
    currency: "EUR",
    image: "https://assets.revolut.com/assets/flags/SX.svg",
  },
  {
    name: "Slovakia",
    currency: "EUR",
    image: "https://assets.revolut.com/assets/flags/SK.svg",
  },
  {
    name: "Slovenia",
    currency: "EUR",
    image: "https://assets.revolut.com/assets/flags/SI.svg",
  },
  {
    name: "South Georgia & South Sandwich Islands",
    currency: "GBP",
    image: "https://assets.revolut.com/assets/flags/GS.svg",
  },
  {
    name: "Spain",
    currency: "EUR",
    image: "https://assets.revolut.com/assets/flags/ES.svg",
  },
  {
    name: "Svalbard & Jan Mayen",
    currency: "NOK",
    image: "https://assets.revolut.com/assets/flags/SJ.svg",
  },
  {
    name: "Sweden",
    currency: "SEK",
    image: "https://assets.revolut.com/assets/flags/SE.svg",
  },
  {
    name: "Switzerland",
    currency: "CHF",
    image: "https://assets.revolut.com/assets/flags/CH.svg",
  },
  {
    name: "Turks & Caicos Islands",
    currency: "USD",
    image: "https://assets.revolut.com/assets/flags/TC.svg",
  },
  {
    name: "United States",
    currency: "USD",
    image: "https://assets.revolut.com/assets/flags/US.svg",
  },
  {
    name: "British Virgin Islands",
    currency: "USD",
    image: "https://assets.revolut.com/assets/flags/VG.svg",
  },
  {
    name: "Wallis & Futuna",
    currency: "EUR",
    image: "https://assets.revolut.com/assets/flags/WF.svg",
  },
  {
    name: "Åland Islands",
    currency: "EUR",
    image: "https://assets.revolut.com/assets/flags/AX.svg",
  },
];

window.countries = countries;
