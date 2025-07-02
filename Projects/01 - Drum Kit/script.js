const hihatTop = document.getElementById("hihat-top");
const crashtap = document.getElementById("crash");

function hihatMove() {
  hihatTop.style.top = "8.7rem";
  setTimeout(function () {
    hihatTop.style.top = "8.5rem";
  }, 100);
}

function crashMove() {
  crashtap.style.transform = "rotate(0deg)";

  setTimeout(function () {
    crashtap.style.transform = "rotate(-5deg)";
  }, 100);
}

function playSound(e) {
  const keyCode = e.keyCode || e.target.getAttribute("data-key");

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const btn = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  btn.classList.toggle("playing");

  if (e.keyCode === 69 || e.keyCode === 82) crashMove();
  if (e.keyCode === 73 || e.keyCode === 75) hihatMove();

  setTimeout(function () {
    btn.classList.toggle("playing");
  }, 200);

  audio.currentTime = 0;
  audio.play();
}

document.querySelectorAll(".key").forEach((key) => {
  const keyCode = key.getAttribute("data-key");

  key.addEventListener("click", () => playSound(keyCode));
  key.addEventListener("touchstart", () => playSound(keyCode));
});

window.addEventListener("keydown", playSound);

const song = [
  {
    keyCode: 75,
    time: 0,
  },
  {
    keyCode: 72,
    time: 0.5,
  },
  {
    keyCode: 75,
    time: 1,
  },
  {
    keyCode: 72,
    time: 1.5,
  },
  {
    keyCode: 74,
    time: 1,
  },
  {
    keyCode: 75,
    time: 2,
  },
  {
    keyCode: 72,
    time: 2.5,
  },
  {
    keyCode: 75,
    time: 3,
  },
  {
    keyCode: 72,
    time: 3.5,
  },
  {
    keyCode: 74,
    time: 3,
  },
  {
    keyCode: 69,
    time: 4,
  },
  {
    keyCode: 75,
    time: 4,
  },
  {
    keyCode: 72,
    time: 4.5,
  },
  {
    keyCode: 71,
    time: 4.75,
  },
  {
    keyCode: 75,
    time: 5,
  },
  {
    keyCode: 72,
    time: 5.5,
  },
  {
    keyCode: 74,
    time: 5,
  },
  {
    keyCode: 70,
    time: 5.75,
  },
  {
    keyCode: 75,
    time: 6,
  },
  {
    keyCode: 72,
    time: 6.5,
  },
  {
    keyCode: 73,
    time: 7,
  },
  {
    keyCode: 72,
    time: 7.5,
  },
  {
    keyCode: 74,
    time: 7,
  },
  {
    keyCode: 86,
    time: 8,
  },
  {
    keyCode: 75,
    time: 8.5,
  },
  {
    keyCode: 74,
    time: 9,
  },
  {
    keyCode: 75,
    time: 9.5,
  },
  {
    keyCode: 86,
    time: 10,
  },
  {
    keyCode: 75,
    time: 10.5,
  },
  {
    keyCode: 74,
    time: 11,
  },
  {
    keyCode: 75,
    time: 11.5,
  },
  {
    keyCode: 86,
    time: 12,
  },
  {
    keyCode: 75,
    time: 12.5,
  },
  {
    keyCode: 74,
    time: 13,
  },
  {
    keyCode: 75,
    time: 13.5,
  },
  {
    keyCode: 73,
    time: 13.75,
  },
  {
    keyCode: 86,
    time: 14,
  },
  {
    keyCode: 75,
    time: 14.5,
  },
  {
    keyCode: 74,
    time: 15,
  },
  {
    keyCode: 82,
    time: 15.5,
  },
  {
    keyCode: 86,
    time: 16,
  },
  {
    keyCode: 75,
    time: 16.5,
  },
  {
    keyCode: 74,
    time: 17,
  },
  {
    keyCode: 75,
    time: 17.5,
  },
  {
    keyCode: 71,
    time: 17.75,
  },
  {
    keyCode: 86,
    time: 18,
  },
  {
    keyCode: 75,
    time: 18.5,
  },
  {
    keyCode: 74,
    time: 19,
  },
  {
    keyCode: 75,
    time: 19.5,
  },
  {
    keyCode: 72,
    time: 19.75,
  },
  {
    keyCode: 86,
    time: 20,
  },
  {
    keyCode: 75,
    time: 20.5,
  },
  {
    keyCode: 74,
    time: 21,
  },
  {
    keyCode: 73,
    time: 21.5,
  },
  {
    keyCode: 86,
    time: 22,
  },
  {
    keyCode: 75,
    time: 22.5,
  },
  {
    keyCode: 74,
    time: 23,
  },
  {
    keyCode: 69,
    time: 23.5,
  },
  {
    keyCode: 66,
    time: 24,
  },
  {
    keyCode: 82,
    time: 24.5,
  },
  {
    keyCode: 74,
    time: 25,
  },
  {
    keyCode: 82,
    time: 25.5,
  },
  {
    keyCode: 66,
    time: 26,
  },
  {
    keyCode: 82,
    time: 26.5,
  },
  {
    keyCode: 74,
    time: 27,
  },
  {
    keyCode: 82,
    time: 27.5,
  },
  {
    keyCode: 66,
    time: 28,
  },
  {
    keyCode: 69,
    time: 28,
  },
  {
    keyCode: 82,
    time: 28.5,
  },
  {
    keyCode: 74,
    time: 29,
  },
  {
    keyCode: 71,
    time: 29.25,
  },
  {
    keyCode: 72,
    time: 29.5,
  },
  {
    keyCode: 70,
    time: 29.75,
  },
  {
    keyCode: 66,
    time: 30,
  },
  {
    keyCode: 82,
    time: 30.5,
  },
  {
    keyCode: 74,
    time: 31,
  },
  {
    keyCode: 82,
    time: 31.5,
  },
  {
    keyCode: 66,
    time: 32,
  },
  {
    keyCode: 82,
    time: 32.5,
  },
  {
    keyCode: 74,
    time: 33,
  },
  {
    keyCode: 73,
    time: 33.5,
  },
  {
    keyCode: 66,
    time: 34,
  },
  {
    keyCode: 82,
    time: 34.5,
  },
  {
    keyCode: 74,
    time: 35,
  },
  {
    keyCode: 82,
    time: 35.5,
  },
  {
    keyCode: 66,
    time: 36,
  },
  {
    keyCode: 69,
    time: 36,
  },
  {
    keyCode: 82,
    time: 36.5,
  },
  {
    keyCode: 74,
    time: 37,
  },
  {
    keyCode: 75,
    time: 37.5,
  },
  {
    keyCode: 71,
    time: 38,
  },
  {
    keyCode: 72,
    time: 38.5,
  },
  {
    keyCode: 70,
    time: 39,
  },
  {
    keyCode: 74,
    time: 39.5,
  },
  {
    keyCode: 69,
    time: 39.75,
  },
  {
    keyCode: 70,
    time: 40,
  },
  {
    keyCode: 71,
    time: 40.5,
  },
  {
    keyCode: 72,
    time: 41,
  },
  {
    keyCode: 71,
    time: 41.5,
  },
  {
    keyCode: 70,
    time: 42,
  },
  {
    keyCode: 73,
    time: 42.5,
  },
  {
    keyCode: 74,
    time: 43,
  },
  {
    keyCode: 73,
    time: 43.5,
  },
  {
    keyCode: 72,
    time: 44,
  },
  {
    keyCode: 71,
    time: 44.5,
  },
  {
    keyCode: 70,
    time: 45,
  },
  {
    keyCode: 71,
    time: 45.5,
  },
  {
    keyCode: 82,
    time: 46,
  },
  {
    keyCode: 74,
    time: 46.5,
  },
  {
    keyCode: 69,
    time: 47,
  },
  {
    keyCode: 74,
    time: 47.5,
  },
  {
    keyCode: 86,
    time: 48,
  },
  {
    keyCode: 75,
    time: 48.5,
  },
  {
    keyCode: 74,
    time: 49,
  },
  {
    keyCode: 75,
    time: 49.5,
  },
  {
    keyCode: 66,
    time: 50,
  },
  {
    keyCode: 75,
    time: 50.5,
  },
  {
    keyCode: 74,
    time: 51,
  },
  {
    keyCode: 75,
    time: 51.5,
  },
  {
    keyCode: 86,
    time: 52,
  },
  {
    keyCode: 73,
    time: 52.5,
  },
  {
    keyCode: 74,
    time: 53,
  },
  {
    keyCode: 73,
    time: 53.5,
  },
  {
    keyCode: 66,
    time: 54,
  },
  {
    keyCode: 82,
    time: 54.5,
  },
  {
    keyCode: 74,
    time: 55,
  },
  {
    keyCode: 82,
    time: 55.5,
  },
  {
    keyCode: 71,
    time: 56,
  },
  {
    keyCode: 72,
    time: 56.5,
  },
  {
    keyCode: 70,
    time: 57,
  },
  {
    keyCode: 74,
    time: 57.5,
  },
  {
    keyCode: 69,
    time: 58,
  },
  {
    keyCode: 86,
    time: 58.5,
  },
  {
    keyCode: 66,
    time: 59,
  },
  {
    keyCode: 74,
    time: 59.5,
  },
  {
    keyCode: 69,
    time: 59.9,
  },
];

function simulateKey(keyCode) {
  playSound({ keyCode });
}

function playSong() {
  song.forEach((note) => {
    setTimeout(() => {
      simulateKey(note.keyCode);
    }, note.time * 1000);
  });
}

document.getElementById("play-song").addEventListener("click", playSong);
