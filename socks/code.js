const socks = document.querySelectorAll('.sock');

const zoomOfImages = 4; 
const offsetX = 10;
const offsetY = 20;

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

// document.addEventListener("drop", function( event ) {
//     // prevent default action (open as link for some elements)
//     event.preventDefault();
//     // move dragged elem to the selected drop target
//     console.log('poo')
//     if ( event.target.id == "basket-front" ) {
//         console.log('in')
//     }
  
// }, false);