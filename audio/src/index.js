window.addEventListener('DOMContentLoaded', () => {
  const audioFiles = ['01.mp3', '02.mp3', '03.mp3', '04.mp3', '05.mp3', '06.mp3', ];

  let shouldPlayNext = false;
  const audios = [];
  let currentAudio = 0;

  audioFiles.forEach(file => {
    const audio = new Audio(`./assets/${file}`);

    audio.addEventListener('ended', () => {
      if (shouldPlayNext) {
        currentAudio++;
        shouldPlayNext = false;
      }

      audios[currentAudio].currentTime = 0;
      audios[currentAudio].play();
    });

    audios.push(audio);
  });

  document.getElementById('play').addEventListener('click', () => {
    audios[currentAudio].play();
  });

  document.getElementById('next').addEventListener('click', () => {
    shouldPlayNext = true;
  });

  document.getElementById('pause').addEventListener('click', () => {
    audios[currentAudio].pause();
  });

  document.getElementById('stop').addEventListener('click', () => {
    audios[currentAudio].pause();
    currentAudio = 0;
    audios[currentAudio].currentTime = 0;
  });
});
