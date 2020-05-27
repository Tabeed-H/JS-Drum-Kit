window.addEventListener('keypress', function(pressedKey){
    let selectSound = document.querySelector(`audio[data-key = "${pressedKey.keyCode}"]`)
    //console.log(selectSound)
    selectSound.currentTime = 0;
    selectSound.play()
})