const ball = document.getElementById('ball') //Calls the "ball" element on our index.html file.
document.addEventListener('keydown', handleKeyPress); //Listens for the keyboard input.
let xposition = 0; //Variable definition,
let yposition = 0; //Variable definition.



function handleKeyPress(e) { //When a key is pressed this function shall run. Refresh will be ran at the end of the function to update the position values.
    if (e.code === 'ArrowLeft') {
        xposition = xposition - 10;
    }
    if (e.code === 'ArrowRight') {
        xposition = xposition + 10;
    }
    if (xposition < 0) {
        xposition = 0;
    }
    if (e.code === 'ArrowDown') {
        yposition = yposition + 10;
    }
    if (e.code === 'ArrowUp') {
        yposition = yposition - 10;
    }
    if (yposition < 0) {
        yposition < 0;
    }
refresh();
}
function refresh() {
    ball.style.left = xposition + 'px';
    ball.style.top = yposition + 'px';
}