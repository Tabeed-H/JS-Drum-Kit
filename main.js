window.addEventListener('keypress', function(pressedKey){
    let selectSound = document.querySelector(`audio[data-key = "${pressedKey.keyCode}"]`)
    selectSound.currentTime = 0;
    selectSound.play()
})