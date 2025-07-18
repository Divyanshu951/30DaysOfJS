const song = [
  { keyCode: 86, time: 0.0 }, // Kick
  { keyCode: 86, time: 0.5 }, // Kick
  { keyCode: 74, time: 1.0 }, // Snare
  { keyCode: 86, time: 1.8 },
  { keyCode: 86, time: 2.3 },
  { keyCode: 74, time: 2.8 },
  { keyCode: 86, time: 3.6 },
  { keyCode: 86, time: 4.1 },
  { keyCode: 74, time: 4.6 },
];

const keyMap = {
  E: 69,
  R: 82,
  F: 70,
  G: 71,
  H: 72,
  V: 86,
  B: 66,
  J: 74,
  I: 73,
  K: 75,
};

const songData = [
  { key: "K", time: 0.0 },
  { key: "H", time: 0.5 },
  { key: "K", time: 1.0 },
  { key: "H", time: 1.5 },
  { key: "J", time: 1.0 },
  { key: "K", time: 2.0 },
  { key: "H", time: 2.5 },
  { key: "K", time: 3.0 },
  { key: "H", time: 3.5 },
  { key: "J", time: 3.0 },
  { key: "E", time: 4.0 },
  { key: "K", time: 4.0 },
  { key: "H", time: 4.5 },
  { key: "G", time: 4.75 },
  { key: "K", time: 5.0 },
  { key: "H", time: 5.5 },
  { key: "J", time: 5.0 },
  { key: "F", time: 5.75 },
  { key: "K", time: 6.0 },
  { key: "H", time: 6.5 },
  { key: "I", time: 7.0 },
  { key: "H", time: 7.5 },
  { key: "J", time: 7.0 },
  { key: "V", time: 8.0 },
  { key: "K", time: 8.5 },
  { key: "J", time: 9.0 },
  { key: "K", time: 9.5 },
  { key: "V", time: 10.0 },
  { key: "K", time: 10.5 },
  { key: "J", time: 11.0 },
  { key: "K", time: 11.5 },
  { key: "V", time: 12.0 },
  { key: "K", time: 12.5 },
  { key: "J", time: 13.0 },
  { key: "K", time: 13.5 },
  { key: "I", time: 13.75 },
  { key: "V", time: 14.0 },
  { key: "K", time: 14.5 },
  { key: "J", time: 15.0 },
  { key: "R", time: 15.5 },
  { key: "V", time: 16.0 },
  { key: "K", time: 16.5 },
  { key: "J", time: 17.0 },
  { key: "K", time: 17.5 },
  { key: "G", time: 17.75 },
  { key: "V", time: 18.0 },
  { key: "K", time: 18.5 },
  { key: "J", time: 19.0 },
  { key: "K", time: 19.5 },
  { key: "H", time: 19.75 },
  { key: "V", time: 20.0 },
  { key: "K", time: 20.5 },
  { key: "J", time: 21.0 },
  { key: "I", time: 21.5 },
  { key: "V", time: 22.0 },
  { key: "K", time: 22.5 },
  { key: "J", time: 23.0 },
  { key: "E", time: 23.5 },
  { key: "B", time: 24.0 },
  { key: "R", time: 24.5 },
  { key: "J", time: 25.0 },
  { key: "R", time: 25.5 },
  { key: "B", time: 26.0 },
  { key: "R", time: 26.5 },
  { key: "J", time: 27.0 },
  { key: "R", time: 27.5 },
  { key: "B", time: 28.0 },
  { key: "E", time: 28.0 },
  { key: "R", time: 28.5 },
  { key: "J", time: 29.0 },
  { key: "G", time: 29.25 },
  { key: "H", time: 29.5 },
  { key: "F", time: 29.75 },
  { key: "B", time: 30.0 },
  { key: "R", time: 30.5 },
  { key: "J", time: 31.0 },
  { key: "R", time: 31.5 },
  { key: "B", time: 32.0 },
  { key: "R", time: 32.5 },
  { key: "J", time: 33.0 },
  { key: "I", time: 33.5 },
  { key: "B", time: 34.0 },
  { key: "R", time: 34.5 },
  { key: "J", time: 35.0 },
  { key: "R", time: 35.5 },
  { key: "B", time: 36.0 },
  { key: "E", time: 36.0 },
  { key: "R", time: 36.5 },
  { key: "J", time: 37.0 },
  { key: "K", time: 37.5 },
  { key: "G", time: 38.0 },
  { key: "H", time: 38.5 },
  { key: "F", time: 39.0 },
  { key: "J", time: 39.5 },
  { key: "E", time: 39.75 },
  { key: "F", time: 40.0 },
  { key: "G", time: 40.5 },
  { key: "H", time: 41.0 },
  { key: "G", time: 41.5 },
  { key: "F", time: 42.0 },
  { key: "I", time: 42.5 },
  { key: "J", time: 43.0 },
  { key: "I", time: 43.5 },
  { key: "H", time: 44.0 },
  { key: "G", time: 44.5 },
  { key: "F", time: 45.0 },
  { key: "G", time: 45.5 },
  { key: "R", time: 46.0 },
  { key: "J", time: 46.5 },
  { key: "E", time: 47.0 },
  { key: "J", time: 47.5 },
  { key: "V", time: 48.0 },
  { key: "K", time: 48.5 },
  { key: "J", time: 49.0 },
  { key: "K", time: 49.5 },
  { key: "B", time: 50.0 },
  { key: "K", time: 50.5 },
  { key: "J", time: 51.0 },
  { key: "K", time: 51.5 },
  { key: "V", time: 52.0 },
  { key: "I", time: 52.5 },
  { key: "J", time: 53.0 },
  { key: "I", time: 53.5 },
  { key: "B", time: 54.0 },
  { key: "R", time: 54.5 },
  { key: "J", time: 55.0 },
  { key: "R", time: 55.5 },
  { key: "G", time: 56.0 },
  { key: "H", time: 56.5 },
  { key: "F", time: 57.0 },
  { key: "J", time: 57.5 },
  { key: "E", time: 58.0 },
  { key: "V", time: 58.5 },
  { key: "B", time: 59.0 },
  { key: "J", time: 59.5 },
  { key: "E", time: 59.9 },
];

const updatedSong = songData.reduce((acc, cur) => {});

console.log("H");
