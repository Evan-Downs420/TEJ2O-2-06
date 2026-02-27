/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Evan
 * Created on: Feb 2026
 * This program will turn off and on the LED
*/

// setup
basic.clearScreen()
pins.digitalWritePin(DigitalPin.P16,0)
basic.showIcon(IconNames.Happy)

//turn on LED
input.onButtonPressed(Button.A, function() {
basic.showIcon(IconNames.Yes)
pins.digitalWritePin(DigitalPin.P16, 1)
})

//turn off LED
input.onButtonPressed(Button.B, function() {
basic.showIcon(IconNames.No)
pins.digitalWritePin(DigitalPin.P16, 0)
})
