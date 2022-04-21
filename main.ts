input.onButtonPressed(Button.A, function () {
    Solo = 1
    while (Solo == 1) {
        Tone = Math.round(Math.map(input.rotation(Rotation.Roll), -180, 180, 1, 11))
        if (Tone == 1) {
            music.playTone(277, music.beat(BeatFraction.Half))
        } else if (Tone == 2) {
            music.playTone(330, music.beat(BeatFraction.Half))
        } else if (Tone == 3) {
            music.playTone(370, music.beat(BeatFraction.Half))
        } else if (Tone == 4) {
            music.playTone(415, music.beat(BeatFraction.Half))
        } else if (Tone == 5) {
            music.playTone(494, music.beat(BeatFraction.Half))
        } else if (Tone == 6) {
            music.playTone(554, music.beat(BeatFraction.Half))
        } else if (Tone == 7) {
            music.playTone(330, music.beat(BeatFraction.Half))
        } else if (Tone == 8) {
            music.playTone(370, music.beat(BeatFraction.Half))
        } else if (Tone == 9) {
            music.playTone(415, music.beat(BeatFraction.Half))
        } else if (Tone == 10) {
            music.playTone(494, music.beat(BeatFraction.Half))
        } else if (Tone == 11) {
            music.playTone(554, music.beat(BeatFraction.Half))
        }
    }
})
input.onButtonPressed(Button.B, function () {
    Solo = 0
})
let Tone = 0
let Solo = 0
music.setBuiltInSpeakerEnabled(false)
Solo = 0
music.setVolume(200)
