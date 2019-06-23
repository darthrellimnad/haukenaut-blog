import React, { useEffect } from "react"
import { TinyPixView, TinyPixRenderer } from "../../tinypix"
import BGLayer from "./BGLayer"
import Player from "./Player"
import PlayerLayer from "./PlayerLayer"
import Starline from "./Starline"
import TrackLayer from "./TrackLayer"
import ObstacleLayer from "./ObstacleLayer"
import * as Consts from "./consts"

const getKeyDownCallback = player => event => {
  const { code } = event
  switch (code) {
    case "KeyA":
    case "ArrowLeft": {
      player.leftDown = true
      return
    }
    case "KeyD":
    case "ArrowRight": {
      player.rightDown = true
      return
    }
    case "KeyZ": {
      // (test key)
      player.onZDown()
      return
    }
    case "KeyX": {
      // (testKey)
      player.onXDown()
      return
    }
    default: {
      return
    }
  }
}

const getKeyUpCallback = player => event => {
  const { code } = event
  switch (code) {
    case "KeyA":
    case "ArrowLeft": {
      player.leftDown = false
      return
    }
    case "KeyD":
    case "ArrowRight": {
      player.rightDown = false
      return
    }
    default: {
      return
    }
  }
}

const getWindowBlurCallback = view => event => {
  view.pause()
}

const getWindowFocusCallback = (view, renderer) => event => {
  view.unpause(renderer)
}

const LilSwimmer = () => {
  let canvasRef = React.createRef()

  // const [count, setCount] = useState(0);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d")
    const view = new TinyPixView(ctx)
    const renderer = new TinyPixRenderer(ctx, view)
    const player = new Player()
    const onKeyDown = getKeyDownCallback(player)
    const onKeyUp = getKeyUpCallback(player)
    const onWindowBlur = getWindowBlurCallback(view)
    const onWindowFocus = getWindowFocusCallback(view, renderer)

    gameInit(player, view, renderer)

    document.addEventListener("keydown", onKeyDown)
    document.addEventListener("keyup", onKeyUp)
    window.addEventListener("focus", onWindowBlur)
    window.addEventListener("blur", onWindowFocus)

    return () => {
      // TODO: cleanup
      view.pause()
      renderer.kill()
      document.removeEventListener("keydown", onKeyDown)
      document.removeEventListener("keyup", onKeyUp)
      window.removeEventListener("focus", onWindowBlur)
      window.removeEventListener("blur", onWindowFocus)
    }
  })

  return (
    <div style={{ width: "100%", height: "480px", position: "relative" }}>
      <canvas ref={canvasRef} width="640" height="480"></canvas>
    </div>
  )
}

export default LilSwimmer

function gameInit(player, view, renderer) {
  const {
    STARLINES_WIDTH,
    STARLINES_HEIGHT,
    STARLINE_LENGTH,
    CANVAS_HEIGHT,
    CANVAS_WIDTH,
  } = Consts

  const bg = new BGLayer(player)
  const track = new TrackLayer(STARLINES_WIDTH, STARLINES_HEIGHT)
  const pl = new PlayerLayer(track, player)
  const obstacles = new ObstacleLayer(player)
  const offset_left = (CANVAS_WIDTH - STARLINES_WIDTH) / 2
  const offset_top = (CANVAS_HEIGHT - STARLINES_HEIGHT) / 2
  track.x = obstacles.x = offset_left
  track.y = obstacles.y = offset_top

  for (let i = 4; i < STARLINES_WIDTH; i += 8) {
    const r1 = Math.floor(Math.random() * STARLINES_HEIGHT)
    const s = new Starline(i, r1, STARLINE_LENGTH, 1, player)
    s.velTop = 0.15
    s.velBottom = 0.15
    track.starlines.push(s)
  }

  setTimeout(function() {
    obstacles.init(5)
  }, 5000)

  view.registerLayer(bg)
  view.registerLayer(track)
  view.registerLayer(obstacles)
  view.registerLayer(pl)
  view.unpause(renderer)
}
