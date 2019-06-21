import * as Consts from "./consts"

class ParticleObstacle {
  constructor(x, y, radius, speed, player, offsetTop) {
    this.x = x
    this.y = y
    this.radius = radius
    this.speed = speed
    this.color = "#00FF00"
    this.offscreen = false
    this.hitflag = false
    this.player = player
    this.player_radius = player.sprite.nucleus.max_radius
    this.offsetTop = offsetTop
  }

  update(delta) {
    const { player } = this
    const ps = player.speed
    const diff = ps - this.speed
    this.y += diff * delta

    const dplayer = Math.sqrt(
      Math.pow(player.sprite.x - this.x, 2) +
        Math.pow(player.sprite.y - this.y, 2)
    )

    if (dplayer < this.radius + this.player_radius) {
      if (this.hitflag === false) {
        this.hitflag = true
        this.player.hit_count++ // TODO: replace with global state
        this.color = "#FF0000"
      }
    } else {
      this.hitflag = false
      this.color = "#00FF00"
    }

    if (
      this.y < -3 * this.radius ||
      this.y > 3 * this.radius + this.offsetTop + Consts.STARLINES_HEIGHT
    ) {
      this.offscreen = true
    } else {
      this.offscreen = false
    }
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.moveTo(this.x, this.y)
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false)
    ctx.fillStyle = this.color
    ctx.fill()
  }
}

export default ParticleObstacle
