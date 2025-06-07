const countdown = () => {
  const countDate = new Date("Jul 4, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const remainingTime = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(remainingTime / day);
  const textHour = Math.floor((remainingTime % day) / hour);
  const textMinute = Math.floor((remainingTime % hour) / minute);
  const textSecond = Math.floor((remainingTime % minute) / second);

  document.querySelector(".day").innerText = textDay > 0 ? textDay : 0;
  document.querySelector(".hour").innerText = textHour > 0 ? textHour : 0;
  document.querySelector(".minute").innerText = textMinute > 0 ? textMinute : 0;
  document.querySelector(".second").innerText = textSecond > 0 ? textSecond : 0;
};

setInterval(countdown, 500);

// 🔊 Reproductor de canción aleatoria
window.addEventListener('DOMContentLoaded', () => {
  const songs = [
    'preview1.mp3',
    'preview2.mp3',
    'preview3.mp3',
    'preview5.mp3',
    'preview6.mp3',
  ];

  const randomSong = songs[Math.floor(Math.random() * songs.length)];
  const audioElement = document.getElementById('randomAudio');

  if (audioElement) {
    audioElement.src = randomSong;
    audioElement.load();
    audioElement.play().catch(e => {
      // Autoplay puede estar bloqueado; no mostramos error en consola
    });
  }
});
