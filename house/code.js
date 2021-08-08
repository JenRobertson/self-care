const container = document.getElementById('container');
const player = document.getElementById('player');

const data = {
    tasksCompleted: 0,
    player: {
        x: 0,
        y: 0
    }
};

container.onclick = function(e){
  walkTo(e.clientX, e.clientY);
  hideAllButtons();
};

sink.onclick = function(e){
  e.stopPropagation();
  walkTo(e.clientX, e.clientY);
  teethButton.style.display = 'block'
};

const walkTo = (xClick, yClick) => {

  increaseLevel(); // remove

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
  switch (data.tasksCompleted) {
    case 1:
      shadow.style.backgroundImage = "url('./house/images/Shadow1.png')";
      break;
    case 2:
      shadow.style.backgroundImage = "url('./house/images/Shadow2.png')";
      break;
    case 3:
      shadow.style.backgroundImage = "url('./house/images/Shadow3.png')";
      break;
    default:
      shadow.style.backgroundImage = "none";
      break;
  }
}

const hideAllButtons = () => {
    teethButton.style.display = 'none';
}