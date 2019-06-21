import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./consts"

class BGLayer {
  constructor(player) {
    this.color = "#000000"
    this.player = player
  }

  update(delta) {}

  draw(ctx) {
    const count = this.player.hit_count.toString(10) // TODO: global state
    const distance = Math.floor(this.player.distance_traveled).toString(10)

    ctx.fillStyle = this.color
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    ctx.font = "16px Arial"
    ctx.fillStyle = "#FFFFFF"
    ctx.fillText("HIT COUNT:", 10, 30)
    ctx.fillText(count, 10, 48)

    ctx.fillStyle = "#FFFFFF"
    ctx.fillText("Distance:", 10, 100)
    ctx.font = "12px Arial"
    ctx.fillText(distance, 10, 114)
  }
}

export default BGLayer
