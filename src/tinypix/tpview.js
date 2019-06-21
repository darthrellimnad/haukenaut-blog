import TinyPixRenderer from "./tprenderer"

class TinyPixView {
  static DEFAULT_MAX_LAYERS = 5
  static DEFAULT_MAX_FPS = 60
  static DEFAULT_MAX_FRAME_SKIPS = 5
  static LOG_TAG = "TinyPixView"

  context = null
  renderer = null // TinyPixRenderer
  maxFps = null // int
  maxFrameSkips = null // int
  maxLayers = null // int
  numLayers = 0 // int
  layers = null // ITinyPixLayer

  constructor(ctx) {
    this.context = ctx
    this.maxFps = TinyPixView.DEFAULT_MAX_FPS
    this.maxFrameSkips = TinyPixView.DEFAULT_MAX_FRAME_SKIPS
    this.registerMaxLayers(TinyPixView.DEFAULT_MAX_LAYERS)
  }

  registerMaxLayers(n) {
    if (this.layers != null) return false
    this.maxLayers = n
    this.layers = []
    return true
  }

  registerLayer(layer) {
    // layer is ITinyPixLayer
    if (this.layers == null) return false

    var index = 0
    while (this.layers[index] != null) {
      index++
    }
    if (index >= this.maxLayers) {
      return false
    }

    this.layers[index] = layer
    this.numLayers += 1
    return true
  }

  getLayers() {
    return this.layers
  }

  getNumLayers() {
    return this.numLayers
  }

  getMaxFps() {
    return this.maxFps
  }

  getMaxFrameSkips() {
    return this.maxFrameSkips
  }

  unpause(renderer) {
    if (!this.renderer || this.renderer.getState() === TinyPixRenderer.KILLED) {
      this.renderer = renderer
    }
    this.renderer.run()
  }

  pause() {
    if (this.renderer) {
      this.renderer.kill()
    }
  }
}

export default TinyPixView
