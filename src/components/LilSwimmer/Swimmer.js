import PulseCircle from "./PulseCircle"

class Swimmer {
  constructor(_x, _y, _color) {
    this.x = _x
    this.y = _y
    this.r = 0
    this.color = _color
    this.tailamp = 3
    this.taillength = 20
    this.tailPos = 0.0
    this.tailspeed = 0.03
    this.taildir = 1

    this.nucleus = new PulseCircle(0, 0, 4, "#FF5555", 200, 800)
  }

  update(delta) {
    var newpos = this.tailPos + this.taildir * (this.tailspeed * delta)
    var atp = Math.abs(newpos)
    if (atp > this.tailamp) {
      var diff = atp - this.tailamp
      this.tailPos =
        this.taildir > 0 ? this.tailamp - diff : -1 * this.tailamp + diff
      this.taildir *= -1
    } else {
      this.tailPos = newpos
    }

    this.nucleus.update(delta)
  }

  draw(ctx) {
    ctx.save()
    ctx.translate(this.x, this.y)
    ctx.rotate(this.r)
    ctx.save()

    ctx.save()
    ctx.scale(1, 2)
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.arc(0, 0, 5, 0, 2 * Math.PI, false)
    ctx.fillStyle = this.color
    ctx.fill()
    ctx.restore()

    this.nucleus.draw(ctx)

    ctx.beginPath()
    var tailstart = 10
    var halfTail = this.taillength / 2
    var quarterTail = halfTail / 2
    ctx.moveTo(0, tailstart)
    ctx.quadraticCurveTo(
      this.tailPos,
      tailstart + quarterTail,
      0,
      tailstart + halfTail
    )
    ctx.quadraticCurveTo(
      -1 * this.tailPos,
      tailstart + 3 * quarterTail,
      0,
      tailstart + this.taillength
    )
    ctx.strokeStyle = this.color
    ctx.stroke()

    ctx.restore()
    ctx.restore()
  }
}

export default Swimmer
