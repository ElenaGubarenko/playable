class ControlObject2D {
  constructor(object) {
    this.object = object
    this.moving = false
    this.speed = 0
    this.duration = 0
    this.distance = 0
    this.x = 0
    this.y = 0
    this.z = 0
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

    console.log(["move", this.object, this.moving, this.speed, this.duration, this.distance, this.x, this.y, this.z])

    return [this.object, this.moving, this.speed, this.duration, this.distance, this.x, this.y, this.z]
  }

  stop() {
    this.moving = false
    this.speed = 0
    this.calculateValues()

    console.log(["stop", this.object, this.moving, this.speed, this.duration, this.distance, this.x, this.y, this.z])

    return [this.object, this.moving, this.speed, this.duration, this.distance, this.x, this.y, this.z]
  }

  changeDirection(x, y, z) {
    this.x = x
    this.y = y
    this.z = z
    this.calculateValues()

    console.log(["changeDirection", this.object, this.moving, this.speed, this.duration, this.distance, this.x, this.y, this.z])

    return [this.object, this.moving, this.speed, this.duration, this.distance, this.x, this.y, this.z]
  }

  increaseSpeed(speed) {
    this.speed = this.speed + speed
    this.calculateValues()

    console.log(["increaseSpeed", this.object, this.moving, , this.speed, this.duration, this.distance, this.x, this.y, this.z])

    return [this.object, this.moving, this.speed, this.duration, this.distance, this.x, this.y, this.z]
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

    console.log(["slowDown", this.object, this.moving, , this.speed, this.duration, this.distance, this.x, this.y, this.z])

    return [this.object, this.moving, this.speed, this.duration, this.distance, this.x, this.y, this.z]
  }

  resetAll() {
    this.moving = false
    this.speed = 0
    this.duration = 0
    this.distance = 0
    this.x = 0
    this.y = 0
    this.z = 0
    this.startTime = 0
    this.currentTime = 0

    console.log(["resetAll", this.object, this.moving, , this.speed, this.duration, this.distance, this.x, this.y, this.z])

    return [this.object, this.moving, this.speed, this.duration, this.distance, this.x, this.y, this.z]
  }
}

const car = new ControlObject2D("car")

car.move()
setTimeout(() => car.increaseSpeed(50), 3000)
// car.increaseSpeed(100)
// setTimeout(() => car.stop(), 4000)
setTimeout(() => car.changeDirection(1, 3, 5), 6000)
setTimeout(() => car.slowDown(50), 8000)
// setTimeout(() => car.slowDown(50), 7000)
// setTimeout(() => car.slowDown(50), 9000)
// setTimeout(() => car.stop(), 8000)
// setTimeout(() => car.resetAll(), 9000)
