const container = document.getElementById('container');
const player = document.getElementById('player');

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
}

const hideAllButtons = () => {
    teethButton.style.display = 'none';
}