let direction = 0
let change = 0
let newDistance = 0
let oldDistance = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    oldDistance = mbit_Robot.Ultrasonic_Car()
    basic.pause(500)
    newDistance = mbit_Robot.Ultrasonic_Car()
    basic.showNumber(newDistance)
    basic.showNumber(oldDistance)
    change = Math.abs(newDistance - oldDistance)
    if (newDistance > oldDistance) {
        direction = 1
    } else {
        direction = 0
    }
    if (change > 100) {
        basic.showNumber(3)
        if (direction == 1) {
            mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_Run, 75, 75)
            mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.White)
        } else {
            mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_Back, 75, 75)
            mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Red)
        }
    } else if (change > 50) {
        basic.showNumber(2)
        if (direction == 1) {
            mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_Run, 50, 50)
        } else {
            mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_Back, 50, 50)
        }
    } else if (change > 25) {
        basic.showNumber(1)
        if (direction == 1) {
            mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_Run, 40, 40)
        } else {
            mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_Back, 40, 40)
        }
    } else {
        basic.showNumber(0)
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
    }
})
