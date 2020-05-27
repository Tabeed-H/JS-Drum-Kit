window.addEventListener('keypress', function(pressedKey){

    //selects the audio attribute of the pressed keycode
    let selectSound = document.querySelector(`audio[data-key = "${pressedKey.keyCode}"]`);

    //selects the div of the corresponding key pressed
    let selectKey = document.querySelector( `.key[data-key = "${pressedKey.keyCode}"]`);

    //adds the class to the selected element
    selectKey.classList.add('playing')
    
    //plays the corresponding audio
    //sets the start time to 0 seconds
    selectSound.currentTime = 0;
    //calls the function to play the sound
    selectSound.play()

    //function that removes the added class after 0.1 seconds
    setTimeout(() => {
        selectKey.classList.remove('playing')
    }, 100);
})