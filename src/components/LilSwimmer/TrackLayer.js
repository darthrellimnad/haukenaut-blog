class TrackLayer {
  constructor(width, height) {
    this.x = 0
    this.y = 0
    this.starlines = []
    this.width = width
    this.height = height
    this.time = 0
    this.visibleTrackInterval = Math.PI
    this.lWallTX = 0
    this.lWallBX = 0
    this.rWallTX = width
    this.rWallBX = width
  }

  lWallFn(t) {
    //return Math.sin(t)*10.0;
    return 0
  }

  rWallFn(t) {
    //return this.width + Math.sin(t-Math.PI)*10.0;
    return this.width
  }

  update(delta) {
    const time = (this.time += delta)
    this.lWallTX = this.lWallFn(time / 1000)
    this.rWallTX = this.rWallFn(time / 1000)
    this.lWallBX = this.lWallFn(time / 1000 - this.visibleTrackInterval)
    this.rWallBX = this.rWallFn(time / 1000 - this.visibleTrackInterval)
    for (var i = 0, il = this.starlines.length; i < il; i++) {
      this.starlines[i].update(delta)
    }
  }

  draw(ctx) {
    ctx.save()
    ctx.translate(this.x, this.y)

    // draw left wall
    ctx.beginPath()
    ctx.moveTo(this.lWallTX, 0)
    ctx.lineTo(this.lWallBX, this.height)
    ctx.lineWidth = 2
    ctx.strokeStyle = "#FFFFFF"
    ctx.stroke()

    // draw right wall
    ctx.beginPath()
    ctx.moveTo(this.rWallTX, 0)
    ctx.lineTo(this.rWallBX, this.height)
    ctx.lineWidth = 2
    ctx.strokeStyle = "#FFFFFF"
    ctx.stroke()

    for (var i = 0, il = this.starlines.length; i < il; i++) {
      this.starlines[i].draw(ctx)
    }
    ctx.restore()
  }
}

export default TrackLayer
