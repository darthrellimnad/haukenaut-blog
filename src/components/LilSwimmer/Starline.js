import { CANVAS_HEIGHT } from "./consts"

class Starline {
  constructor(_x, _top, _baseLength, _width, player) {
    this.x = _x
    this.top = _top + 0.0
    this.bottom = _top + _baseLength + 0.0
    this.width = _width
    this.baseLength = _baseLength
    this.velTop = 0.0
    this.velBottom = 0.0
    this.color = "#0000FF"
    this.lengthMod = 0
    this.player = player
    this.rand = Math.random() * 80
  }

  update(delta) {
    const { player, rand } = this
    if (this.top > CANVAS_HEIGHT) {
      this.top = 0 - this.baseLength - rand
      this.bottom = 0 - rand
    } else {
      this.top += delta * (this.velTop + player.speed * 0.6)
      this.bottom += delta * (this.velBottom + player.speed * 0.6)
      this.lengthMod = player.speed * 40
    }

    var avgvelMod = Math.floor(
      ((this.velTop + this.velBottom) / 2 + player.speed) * 100
    )
    var red = Math.min(avgvelMod, 255)
    var blue = Math.max(255 - avgvelMod, 0)

    var hred = red < 16 ? "0" + red.toString(16) : red.toString(16)
    var hblue = blue < 16 ? "0" + blue.toString(16) : blue.toString(16)

    this.color = "#" + hred + "88" + hblue
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.moveTo(this.x, this.top)
    ctx.lineTo(this.x, this.bottom + this.lengthMod)
    ctx.lineWidth = this.width
    ctx.strokeStyle = this.color
    ctx.stroke()
  }
}

export default Starline
