input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.EigthNote)
    music.playMelody("C D E C5 E D C C5 ", 140)
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
})
basic.showString("HELLO!")
basic.showString("WELCOME!")
basic.showIcon(IconNames.Heart)
basic.clearScreen()
