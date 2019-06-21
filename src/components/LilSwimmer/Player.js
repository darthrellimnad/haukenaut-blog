import Swimmer from "./Swimmer"
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./consts"

class Player {
  static MAX_SPEED_X = 0.5
  static MIN_R = (-1 * Math.PI) / 2
  static MAX_R = Math.PI / 2
  static ROT_TO_ZERO_SPEED = Math.PI / 2160
  static TURN_SPEED = Math.PI / 720

  constructor() {
    this.sprite = new Swimmer(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 120, "#FFFFFF")
    this.speed = 0
    this.speedX = 0
    this.max_speed = 2
    this.accel = 0.00008
    this.deaccel = 0.0001
    this.hit_count = 0
    this.distance_traveled = 0
    this.leftDown = false
    this.rightDown = false
  }

  rot_to_zero(delta) {
    const { ROT_TO_ZERO_SPEED } = Player
    if (this.sprite.r < 0) {
      this.sprite.r = Math.min(this.sprite.r + ROT_TO_ZERO_SPEED * delta, 0)
    } else if (this.sprite.r > 0) {
      this.sprite.r = Math.max(this.sprite.r - ROT_TO_ZERO_SPEED * delta, 0)
    }
  }

  onZDown() {
    this.sprite.r = 0
  }

  onXDown() {
    this.sprite.r += Math.PI / 4
  }

  update(delta) {
    if (this.leftDown && this.rightDown) {
      // TODO: replace with global game state
      this.speed += delta * this.accel
      this.speed = this.speed >= this.max_speed ? this.max_speed : this.speed
      this.sprite.tailamp = 5
      this.sprite.tailspeed = 0.1
    } else {
      if (this.leftDown) {
        this.sprite.r -= Player.TURN_SPEED * delta
      }
      if (this.rightDown) {
        this.sprite.r += Player.TURN_SPEED * delta
      }
      this.speed -= delta * this.deaccel
      this.speed = this.speed <= 0 ? 0 : this.speed
      this.sprite.tailamp = 3
      this.sprite.tailspeed = 0.02
    }

    // normalize rotation
    if (this.sprite.r < 0) {
      this.sprite.r = Math.max(Player.MIN_R, this.sprite.r)
    } else if (this.sprite.r > 0) {
      this.sprite.r = Math.min(Player.MAX_R, this.sprite.r)
    }
    this.rot_to_zero(delta)

    // calculate speed on X and Y
    var speed_x =
      (Player.MAX_SPEED_X * (this.speed / this.max_speed) + 0.01) *
      (Math.abs(this.sprite.r) / (Math.PI / 2))
    if (this.sprite.r < 0) {
      speed_x *= -1
    }
    this.sprite.x += speed_x * delta

    this.distance_traveled += this.speed * delta

    this.sprite.update(delta)
  }

  draw(ctx) {
    this.sprite.draw(ctx)
  }
}

export default Player
