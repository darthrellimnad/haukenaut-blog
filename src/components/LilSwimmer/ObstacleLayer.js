import * as Consts from "./consts"
import ParticleObstacle from "./ParticleObstacle"

class ObstacleLayer {
  static MAX_PARTICLES = 40

  constructor(player) {
    this.objects = []
    this.difficulty_increase_interval = 30000
    this.last_diff = 0
    this.x = 0
    this.y = 0
    this.player = player
  }

  init(num_obstacles) {
    for (var i = 0; i < num_obstacles; i++) {
      this.spawn_obstacle()
    }
  }

  spawn_obstacle() {
    var newRadius = 6 + Math.floor(Math.random() * 9)
    var newX =
      this.x +
      newRadius +
      Math.floor(Math.random() * (Consts.STARLINES_WIDTH - 2 * newRadius))
    var newSpeed = this.player.speed - Math.random() * 0.5
    newSpeed = Math.min(newSpeed, 1.6)
    this.objects.push(
      new ParticleObstacle(
        newX,
        -2 * newRadius,
        newRadius,
        newSpeed,
        this.player,
        this.y
      )
    )
  }

  update(delta) {
    var diff = Math.floor(
      this.player.distance_traveled / this.difficulty_increase_interval
    )
    if (this.last_diff < diff) {
      if (this.objects.length <= ObstacleLayer.MAX_PARTICLES) {
        this.spawn_obstacle()
      }
      this.last_diff = diff
    }

    for (var i = 0, il = this.objects.length; i < il; i++) {
      var obj = this.objects[i]
      if (obj.offscreen) {
        var newRadius = 6 + Math.floor(Math.random() * 9)
        var newX =
          this.x +
          newRadius +
          Math.floor(Math.random() * (Consts.STARLINES_WIDTH - 2 * newRadius)) // TODO: global config
        var newSpeed
        obj.x = newX
        obj.radius = newRadius

        if (obj.y < 0) {
          obj.y = 2 * obj.radius + this.y + Consts.STARLINES_HEIGHT // TODO: global config
          newSpeed = this.player.speed + Math.random() * 0.1
          obj.speed = newSpeed
        } else {
          obj.y = -2 * obj.radius
          newSpeed = this.player.speed - Math.random() * 0.4
          obj.speed = newSpeed
        }
        newSpeed = Math.min(newSpeed, 1.6)
      }
      obj.update(delta)
    }
  }

  draw(ctx) {
    for (var i = 0, il = this.objects.length; i < il; i++) {
      this.objects[i].draw(ctx)
    }
  }
}

export default ObstacleLayer
