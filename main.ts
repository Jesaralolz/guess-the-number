input.onButtonPressed(Button.A, function () {
    if (Guess < 20) {
        Guess += 1
        basic.showNumber(Guess)
    } else {
        basic.showString("Max")
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Guess < Secret) {
        basic.showString("Higher")
    } else if (Guess > Secret) {
        basic.showString("Lower")
    } else if (Guess == Secret) {
        basic.showIcon(IconNames.Yes)
        basic.pause(3000)
        control.reset()
    }
})
input.onButtonPressed(Button.B, function () {
    if (Guess > 0) {
        Guess += -1
        basic.showNumber(Guess)
    } else {
        basic.showString("Min")
    }
})
let Guess = 0
let Secret = 0
Secret = randint(0, 20)
