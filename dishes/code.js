const paw = document.getElementById('cleaning_paw');
const dish = document.getElementById('dish_1');

const zoomOfImages = 4; 
const offsetX = 10;
const offsetY = 20;

console.dir(dish);

paw.addEventListener('mousemove', (e) => {
  if (e.clientX == 0) return;
  paw.style.left = `${e.clientX / zoomOfImages - offsetX}px`;
})

// socks.forEach((sock) => {

//   sock.addEventListener('drag', (e) => {
//     if(e.clientX == 0) return;
//     sock.style.left = `${e.clientX / zoomOfImages - offsetX}px`;
//     sock.style.top = `${e.clientY/ zoomOfImages - offsetY}px`;

//   })
//   sock.addEventListener('dragend', (e) => {
//     sock.style.left = `${e.clientX / zoomOfImages - offsetX}px`;
//     sock.style.top = `${e.clientY/ zoomOfImages - offsetY}px`;

//   })
// });

// document.addEventListener("drop", function( event ) {
//     // prevent default action (open as link for some elements)
//     event.preventDefault();
//     // move dragged elem to the selected drop target
//     console.log('poo')
//     if ( event.target.id == "basket-front" ) {
//         console.log('in')
//     }
  
// }, false);