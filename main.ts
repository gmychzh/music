basic.forever(function () {
    basic.showLeds(`
        . # # . .
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showIcon(IconNames.Heart)
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Forever)
    basic.showIcon(IconNames.StickFigure)
})
