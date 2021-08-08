const socks = document.querySelectorAll('.sock');

const zoomOfImages = 4; 
const offsetX = 10;
const offsetY = 20;
let socksInBasket = 0;

socks.forEach((sock) => {
  
  sock.addEventListener('drag', (e) => {
    if(e.clientX == 0) return;
    sock.style.left = `${e.clientX / zoomOfImages - offsetX}px`;
    sock.style.top = `${e.clientY/ zoomOfImages - offsetY}px`;
    
  })
  sock.addEventListener('dragend', (e) => {
    sock.style.left = `${e.clientX / zoomOfImages - offsetX}px`;
    sock.style.top = `${e.clientY/ zoomOfImages - offsetY}px`;
    
  })
});

document.addEventListener("dragover", function(event) {
  event.preventDefault();
});

basketArea.addEventListener("drop", function( event ) {
  event.preventDefault();
  console.log(event.target.id);
  
  if ( event.target.id == "basket-front" ) {
    socksInBasket++;
    progressInner.style.width = (socksInBasket / socks.length) * 100 + '%';
  }
}, false);