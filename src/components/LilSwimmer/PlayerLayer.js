class PlayerLayer {
  constructor(track, player) {
    this.player = player;
    this.track = track;
  }

  update(delta) {
    this.player.update(delta);

    var player_x = this.player.sprite.x;
    var track_x = this.track.x;
    player_x = Math.max(player_x, track_x + 10);
    player_x = Math.min(player_x, track_x + this.track.width - 10)
    this.player.sprite.x = player_x;
  }

  draw(ctx) {
    this.player.draw(ctx);
  }
}

export default PlayerLayer
