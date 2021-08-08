const paw = document.getElementById('cleaning_paw');
const dish = document.getElementById('dish_1');
const stains = document.getElementById('dish_1_stain');
const glass = document.getElementById('glass');
const glassStains = document.getElementById('glass_stains');

const zoomOfImages = 4; 
const offsetX = 10;
const offsetY = 20;


let movesInDishSpace = 0;
let movesInGlassSpace = 0;

const isInDishSpace = (x) => {
  return (x >= dish.x && x <= dish.x + dish.offsetWidth);
}

const isInGlassSpace = (x) => {
  return (x >= dish.x && x <= dish.x + dish.offsetWidth);
}

const dishSpaceMove = () => {
  movesInDishSpace += 1;
  if (movesInDishSpace >= 150) {
    stains.style.display = "none";
    window.parent.postMessage('done', '*');
  }
}

const glassSpaceMove = () => {
  movesInGlassSpace += 1;
  if (movesInGlassSpace >= 150) {
    glassStains.style.display = "none";
  }
}

paw.addEventListener('mousemove', (e) => {
  if (e.clientX == 0) return;
  if (isInDishSpace(paw.x)) {
    dishSpaceMove();
  }
  else if (isInGlassSpace(paw.x)) {
    glassSpaceMove();
  }
  paw.style.left = `${e.clientX / zoomOfImages - offsetX}px`;
});