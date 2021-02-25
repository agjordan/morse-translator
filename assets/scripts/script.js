// import {
//   translateEnglishToMorse,
//   translateMorseToEnglish,
//   JSON_MORSE,
// } from "./translator.js";
const { translateEnglishToMorse,  translateMorseToEnglish, JSON_MORSE } = require("./translator.js")

window.addEventListener("DOMContentLoaded", () => {
  let translateBtn = document.getElementById("translateBtn");
  let swapBtn = document.getElementById("swapBtn");
  let playBtn = document.getElementById("playBtnImg");
  let translator = translateEnglishToMorse;

  translateBtn.addEventListener("click", () => {
    let stringToTranslate = document.getElementById("translator__translate-value")
      .value;
    let translation = translator(stringToTranslate, JSON_MORSE);
    let outputField = document.getElementById("translator__translate-output");
    outputField.value = `${translation}`;
  });

  swapBtn.addEventListener("click", () => {
    let inputTab = document.getElementById("translator__input-tab");
    let outputTab = document.getElementById("translator__output-tab");
    let inputText = document.getElementById("translator__translate-value")
    let outputText = document.getElementById("translator__translate-output")
    let title = document.getElementById("translator__title")

    if (translator === translateEnglishToMorse) {
      inputTab.innerHTML = "Morse";
      outputTab.innerHTML = "English";
      translator = translateMorseToEnglish;
      title.innerHTML =  '-- --- .-. ... . ⟶ English'
      
    } else {
      inputTab.innerHTML = "English";
      outputTab.innerHTML = "Morse";
      translator = translateEnglishToMorse;
      title.innerHTML =  'English ⟶ -- --- .-. ... .'
    }
    let tmp = inputText.value
    inputText.value = outputText.value
    outputText.value = tmp
  });

  playBtn.addEventListener("click", () => {
    if (translator === translateEnglishToMorse) {
      playMorse();
    } else {
      let stringToSpeak = new SpeechSynthesisUtterance();
      stringToSpeak.text = document.getElementById("translator__translate-output").value
      window.speechSynthesis.speak(stringToSpeak);
    }
    
  });
});

const playMorse = () => {
  const dit = "./assets/sounds/dit.wav";
  const dah = "./assets/sounds/dah.wav";
  const space = "./assets/sounds/space.wav";

  let sounds = {'.':dit, "-":dah, " ":space}
  let playlist = document.getElementById('translator__translate-output').value.split('').map(char => sounds[char])
  let audio = new Audio(),

  i = 0;
  audio.addEventListener("ended", function () {
    i = ++i < playlist.length ? i : undefined;
    audio.src = playlist[i] || space;
    audio.play();
  });
  audio.loop = false;
  audio.src = playlist[0];
  audio.play();
};

//- .... .- -. -.- ...  ..-. --- .-.  -.-. .... . -.-. -.- .. -. --.  --- ..- -  -- -.--  .--. .-. --- .--- . -.-. - -.-.--