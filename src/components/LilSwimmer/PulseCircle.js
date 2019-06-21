class PulseCircle {
  constructor(x, y, max_radius, color, out_time, in_time) {
    this.x = x
    this.y = y
    this.max_radius = max_radius
    this.color = color
    this.out_time = out_time
    this.in_time = in_time

    this.radius = 0
    this.pulse_direction = 1
    this.anim_time = 0
  }

  update(delta) {
    this.anim_time += delta
    if (this.pulse_direction === 1) {
      if (this.anim_time >= this.out_time) {
        this.anim_time = this.anim_time % this.out_time
        this.pulse_direction *= -1
      }
    } else {
      if (this.anim_time >= this.in_time) {
        this.anim_time = this.anim_time % this.in_time
        this.pulse_direction *= -1
      }
    }

    if (this.pulse_direction === 1) {
      this.radius = this.max_radius * (this.anim_time / this.out_time)
    } else {
      this.radius =
        this.max_radius - this.max_radius * (this.anim_time / this.in_time)
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

export default PulseCircle
