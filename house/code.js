const container = document.getElementById('container');
const player = document.getElementById('player');

const data = {
    tasksCompleted: 0,
    player: {
        x: 0,
        y: 0
    },
    audio: {
      queue: 0,
    },
};

window.addEventListener('message', function(e) {
  // close minigame when done message sent
  if (e.data === 'done') closeGame();
});

container.onclick = function(e){
  walkTo(e.clientX, e.clientY);
  hideAllButtons();
};

sink.onclick = function(e){
  e.stopPropagation();
  walkTo(e.clientX, e.clientY);
  teethButton.style.display = 'block';
};

teethButton.onclick = (e) => {
  e.stopPropagation();
  showGame('socks/socks.html');
}

const walkTo = (xClick, yClick) => {

  y = yClick - 150; // feet offset
  x = xClick;
  player.style.left = `${x}px`;
  player.style.top = `${y}px`;

  shadow.style.left = `${x}px`;
  shadow.style.top = `${y}px`;

  if(x < data.player.x) player.style.transform = 'scaleX(1)';
  if(x > data.player.x) player.style.transform = 'scaleX(-1)';

  data.player.x = x;
  data.player.y = y;
}

const increaseLevel = () => {
  data.tasksCompleted++;
  data.audio.queue++;

  switch (data.tasksCompleted) {
    case 1:
      shadow.style.backgroundImage = "url('./house/images/Shadow2.png')";
      break;
    case 2:
      shadow.style.backgroundImage = "url('./house/images/Shadow3.png')";
      break;
    default:
      shadow.style.backgroundImage = "url('./house/images/Shadow4.png')";
      break;
  }
}

const hideAllButtons = () => {
    teethButton.style.display = 'none';
}

window.addEventListener('DOMContentLoaded', () => {
  const audioFiles = ['01.mp3', '02.mp3', '03.mp3', '04.mp3', '05.mp3', '06.mp3', ];

  const audios = [];
  let currentAudio = 0;
  let audioStarted = false;

  audioFiles.forEach(file => {
    const audio = new Audio(`house/audio/${file}`);

    audio.volume = 0.7;

    audio.addEventListener('ended', () => {
      if (data.audio.queue > 0) {
        if (currentAudio < audios.length - 1) currentAudio++;
        data.audio.queue--;
      }

      audios[currentAudio].currentTime = 0;
      audios[currentAudio].play();
    });

    audios.push(audio);
  });

  document.addEventListener('click', () => {
    if (!audioStarted) {
      audios[currentAudio].play();
      audioStarted = true;
    }
  });
});

const showGame = (url) => {
  gameframe.src = url;
  gameframe.style.display = 'block';
}

const closeGame = () => {
  increaseLevel();
  gameframe.src = '';
  gameframe.style.display = 'none';
}
