window.addEventListener('keydown', function (e) {
    console.log(e.keyCode)
})

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)

    if (!audio) return;

    audio.currentTime = 0
    audio.play()

    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    key.classList.add('playing')
    console.dir(key);
    console.log("key:" + e);

    var rect = key.getBoundingClientRect();
    console.log(rect.top, rect.right, rect.bottom, rect.left);

    key.style.top = parseInt(rect.top) + 50 + "px";
    console.log("Top: " + key.style.top);
}

window.addEventListener('keydown', playSound)

function removeTransition(e) {
    if (e.propertyName != 'transform') return;
    e.target.classList.remove('playing')
}

const keys = document.querySelectorAll(".key")
keys.forEach(key => key.addEventListener('transitionend', removeTransition))