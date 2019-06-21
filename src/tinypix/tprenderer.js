class TinyPixRenderer {
  static RUNNING = "RUNNING"
  static KILLED = "KILLED"

  context = null
  tpview = null
  state = null
  delay = null
  lastUpdateTime = null

  constructor(ctx, tpv) {
    this.context = ctx
    this.tpview = tpv
    this.delay = 1000 / this.tpview.getMaxFps()
  }

  run() {
    const { tpview } = this
    const layers = tpview.getLayers() // ITinyPixLayer[]
    const maxSkips = tpview.getMaxFrameSkips() // int
    const numLayers = tpview.getNumLayers() // int -- TODO: fix to ensure that all layers are created before starting this thread!!!

    let c = null
    let renderTime // int
    let sleepTime // int
    let beginTime // long (int?)
    let framesSkipped // int
    let delta // long (int?)
    let l // ITinyPixLayer
    let i = 0 // int

    this.state = TinyPixRenderer.RUNNING

    if (!this.lastUpdateTime) {
      this.lastUpdateTime = new Date().getTime()
    }
    //var lastUpdateTime = new Date().getTime(); // long (int?) System.nanoTime() / 1000000L;

    if (this.state === TinyPixRenderer.RUNNING) {
      c = this.context
      if (!c) {
        this.state = TinyPixRenderer.KILLED
        this.lastUpdateTime = null
        return
      }
      beginTime = new Date().getTime() // System.nanoTime() / 1000000L;
      framesSkipped = 0
      i = 0
      delta = beginTime - this.lastUpdateTime
      while (i < numLayers) {
        l = layers[i]
        l.update(delta)
        l.draw(c)
        i++
      }
      renderTime = new Date().getTime() - beginTime
      sleepTime = this.delay - renderTime
      this.lastUpdateTime = beginTime

      if (sleepTime > 0) {
        setTimeout(() => this.run(), sleepTime)
        return
      }

      while (sleepTime < 0 && framesSkipped < maxSkips) {
        beginTime = new Date().getTime() //System.nanoTime() / 1000000L;
        i = 0
        delta = beginTime - this.lastUpdateTime
        while (i < numLayers) {
          l = layers[i]
          l.update(delta)
          i++
        }
        renderTime = new Date().getTime() - beginTime //(int) ((System.nanoTime() / 1000000L) - beginTime);
        sleepTime = this.delay - renderTime
        this.lastUpdateTime = beginTime
        framesSkipped++
      }
      setTimeout(() => this.run(), 0)
    } else {
      this.lastUpdateTime = null
    }
  }

  kill() {
    this.state = TinyPixRenderer.KILLED
  }

  getState() {
    return this.state
  }
}

export default TinyPixRenderer
