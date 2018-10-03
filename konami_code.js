const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  document.body.addEventListener('keydown', function(event) {
  alert(event.which)
  })
}
let index = 0 
function onKeyDownHandler(e) {
const key = parseInt(e.detail || e.which);
if (key === code[index]) {
  index++;
if (index === code.length) {
    alert("Hurray!");

    index = 0;}
}

init();