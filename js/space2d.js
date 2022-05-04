class ControlObject2D {
  constructor(object) {
    this.object = object
    this.moving = false
    this.ahead = true
    this.speed = 0
    this.duration = 0
    this.distance = 0
    this.startTime = 0
    this.currentTime = 0
  }

  calculateValues() {
    this.currentTime = Date.now()
    this.duration = Math.round((this.currentTime - this.startTime) / 1000)
    this.distance = this.distance + Math.round(this.speed * this.duration)
  }

  move() {
    this.startTime = Date.now()
    this.moving = true
    this.calculateValues()

    console.log(["move", this.object, this.moving, this.ahead, this.speed, this.duration, this.distance])

    return [this.object, this.moving, this.ahead, this.speed, this.duration, this.distance]
  }

  stop() {
    this.moving = false
    this.speed = 0
    this.calculateValues()

    console.log(["stop", this.object, this.moving, this.ahead, this.speed, this.duration, this.distance])

    return [this.object, this.moving, this.ahead, this.speed, this.duration, this.distance]
  }

  changeDirection() {
    this.ahead = false
    this.calculateValues()

    console.log(["changeDirection", this.object, this.moving, this.ahead, this.speed, this.duration, this.distance])

    return [this.object, this.moving, this.ahead, this.speed, this.duration, this.distance]
  }

  increaseSpeed(speed) {
    this.speed = this.speed + speed
    this.calculateValues()

    console.log(["increaseSpeed", this.object, this.moving, this.ahead, this.speed, this.duration, this.distance])

    return [this.object, this.moving, this.ahead, this.speed, this.duration, this.distance]
  }

  slowDown(speed) {
    if (this.speed < speed) {
      this.calculateValues()
      console.log("Speed can not be negative")
      return
    }
    if (this.speed === speed) {
      this.calculateValues()
      this.stop()
      return
    }
    if (this.speed > speed) {
      this.calculateValues()
      this.speed = this.speed - speed
    }

    console.log(["slowDown", this.object, this.moving, this.ahead, this.speed, this.duration, this.distance])

    return [this.object, this.moving, this.ahead, this.speed, this.duration, this.distance]
  }

  resetAll() {
    this.moving = false
    this.ahead = true
    this.speed = 0
    this.duration = 0
    this.distance = 0
    this.startTime = 0
    this.currentTime = 0

    console.log(["resetAll", this.object, this.moving, this.ahead, this.speed, this.duration, this.distance])

    return [this.object, this.moving, this.ahead, this.speed, this.duration, this.distance]
  }
}

const car = new ControlObject2D("car")

car.move()
setTimeout(() => car.increaseSpeed(50), 3000)
// car.increaseSpeed(100)
// setTimeout(() => car.stop(), 4000)
// setTimeout(() => car.move(), 6000)
setTimeout(() => car.slowDown(50), 8000)
// setTimeout(() => car.slowDown(50), 7000)
// setTimeout(() => car.slowDown(50), 9000)
// setTimeout(() => car.stop(), 8000)
// setTimeout(() => car.resetAll(), 9000)
