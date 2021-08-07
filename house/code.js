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
  walkTo(e.clientX, e.clientY);
  teethButton.style.display = 'block'
};

const walkTo = (x, y) => {
  player.style.left = `${x}px`;
  player.style.top = `${y}px`;

  if(x < data.player.x) player.style.transform = 'scaleX(1)';
  if(x > data.player.x) player.style.transform = 'scaleX(-1)';

  data.player.x = x;
  data.player.y = y;
}

const hideAllButtons = () => {
    teethButton.style.display = 'none';
}