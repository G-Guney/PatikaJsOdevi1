let nameIn = prompt("Adınızı Giriniz");
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
let day = days[date.getDay()];


let body = document.getElementById("body");

body.innerHTML = ` <h1>KODLUYORUZ</h1>
  <p>Merhaba, ${nameIn}! Hoşgeldin!</p>
  <div class="date">
    <p id="time"> ${hours}:${minutes}:${minutes}  ${day}</p>
  </div>
  <p>Tarihinde Frontend Web Development Patikasının JavaScript  Bölümü 1. Ödevindesiniz</span>
  <br>
 `;



