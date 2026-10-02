const birthdayMusic =
    document.getElementById(
        "birthdayMusic"
    );
const musicButton =
    document.getElementById(
        "musicButton"
    );
let musicPlaying = false;
/* =========================================
   MUSIC BUTTON
   ========================================= */
musicButton.addEventListener(
    "click",
    function () {
        if (!musicPlaying) {
            birthdayMusic.volume =
                0.45;
            birthdayMusic
                .play()
                .then(function () {
                    musicPlaying = true;
                    musicButton.textContent =
                        "Pause Music 🔊";
                    launchCelebration();
                });
        } else {
            birthdayMusic.pause();
            musicPlaying = false;
            musicButton.textContent =
                "Play Music 🎵";
        }
    }
);
/* =========================================
   FLOWERS + PARTY DECORATION
   ========================================= */
const celebrationSymbols = [
    "🌸",
    "🌷",
    "🌼",
    "✨",
    "🎉",
    "🎊",
    "💐"
];
function randomBetween(
    min,
    max
) {
    return (
        Math.random() *
        (max - min) +
        min
    );
}
function createCelebrationItem() {
    const item =
        document.createElement(
            "span"
        );
    item.className =
        "celebration-item";
    item.textContent =
        celebrationSymbols[
            Math.floor(
                Math.random() *
                celebrationSymbols.length
            )
        ];
    item.style.left =
        randomBetween(
            2,
            96
        ) + "vw";
    item.style.fontSize =
        randomBetween(
            18,
            32
        ) + "px";
    item.style.animationDuration =
        randomBetween(
            5,
            9
        ) + "s";
    document.body.appendChild(
        item
    );
    setTimeout(function () {
        item.remove();
    }, 9500);
}
/* =========================================
   START CELEBRATION
   ========================================= */
function launchCelebration() {
    for (let i = 0; i < 25; i++) {
        setTimeout(
            createCelebrationItem,
            i * 120
        );
    }
}
/* Gentle celebration continues */
setInterval(
    createCelebrationItem,
    1300
);