"""
Created by: Evan
Created on: Apirl 2026
This module is a Micro:bit MicroPython program
"""

from microbit import *

# Setup: Clear screen, turn off pin 16, and show happy face
display.clear()
pin16.write_digital(0)
display.show(Image.HAPPY)

while True:
    # Turn on LED when Button A is pressed
    if button_a.was_pressed():
        display.show(Image.YES)
        pin16.write_digital(1)

    # Turn off LED when Button B is pressed
    if button_b.was_pressed():
        display.show(Image.NO)
        pin16.write_digital(0)

    # Small sleep to save CPU power
    sleep(10)
