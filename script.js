const toast = document.getElementById("toast");
const letterCard = document.getElementById("letterCard");
const music = document.getElementById("backgroundMusic");
const musicToggle = document.getElementById("musicToggle");
const musicLabel = document.getElementById("musicLabel");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 3000);
}
function openLetter() {
  letterCard.classList.remove("sparkle-pop");
  letterCard.scrollIntoView({ behavior: "smooth", block: "center" });
  letterCard.classList.add("sparkle-pop");
}
document.querySelectorAll("[data-open-letter]").forEach(button => button.addEventListener("click", openLetter));
document.getElementById("closeLetter").addEventListener("click", () => showToast("Suratnya tetap di sini, kapan pun Kakak mau baca lagi ♡"));
document.getElementById("closeLetterBottom").addEventListener("click", () => {
  document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  showToast("Semoga surat kecil ini bikin Kakak tersenyum ♥");
});
document.getElementById("giftButton").addEventListener("click", () => {
  const messages = [
    "Kejutan kecil: Kakak itu berharga, lebih dari yang Kakak kira! 💗",
    "Peluk virtual untuk Kakak! Semoga hari ini terasa lebih ringan. 🫂",
    "Reminder: Kakak sudah berusaha sebaik mungkin. Proud of you! ✨",
    "Semoga satu per satu doa baik Kakak segera menemukan jalannya. 🌷"
  ];
  showToast(messages[Math.floor(Math.random() * messages.length)]);
});
document.getElementById("sparkleButton").addEventListener("click", () => {
  document.body.classList.remove("sparkle-pop");
  void document.body.offsetWidth;
  document.body.classList.add("sparkle-pop");
  showToast("Kirimkan senyum paling manis hari ini, Kakak! ✨");
});
document.getElementById("topWish").addEventListener("click", () => showToast("Pelan-pelan saja, Kak. Kamu pasti bisa! ♡"));

const musicPlayer = document.getElementById("musicPlayer");
musicToggle.addEventListener("click", () => {
  const willOpen = musicPlayer.hidden;
  musicPlayer.hidden = !willOpen;
  musicLabel.textContent = willOpen ? "Tutup pemutar" : "Dengarkan Bernaung";
  musicToggle.setAttribute("aria-expanded", String(willOpen));
  if (willOpen) {
    musicPlayer.scrollIntoView({ behavior: "smooth", block: "center" });
    showToast("Lagu Bernaung — Feby Putri sudah siap diputar ♡");
  }
});
document.getElementById("menuToggle").addEventListener("click", () => {
  document.querySelector(".nav nav").classList.toggle("open");
});
document.querySelectorAll(".nav nav a").forEach(a => a.addEventListener("click", () => {
  document.querySelector(".nav nav").classList.remove("open");
}));
