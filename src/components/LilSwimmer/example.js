// INIT
var cnv = document.getElementById("canvas");
var ctx = cnv.getContext("2d");
TinyPixView.maxFps = 60;
TinyPixView.maxLayers = 5;
TinyPixView.init(ctx);
TinyPixRenderer.init(ctx, cnv, TinyPixView);
// END INIT

// STARTUP

var bg = new BGLayer();

var STARLINES_WIDTH = 400;
var STARLINES_HEIGHT = 480;
var STARLINE_LENGTH = 16;
var track = new TrackLayer(STARLINES_WIDTH, STARLINES_HEIGHT);
var offset_left = (cnv.width - STARLINES_WIDTH) / 2;
track.x = offset_left;
var offset_top = (cnv.height - STARLINES_HEIGHT) / 2;
track.y = offset_top;
for (var i = 4; i < STARLINES_WIDTH; i += 8) {
	var r1 = Math.floor(Math.random() * STARLINES_HEIGHT);
	var s = new Starline(i, r1, STARLINE_LENGTH, 1);
	s.velTop = 0.15;
	s.velBottom = 0.15;
	track.starlines.push(s);
}

var PLAYER_HIT_COUNT = 0;
var player = new Player();
var pl = new PlayerLayer(track);
pl.player = player;

var obsticals = new ObsticalLayer();
setTimeout(function () {
	obsticals.init(5);
}, 5000);

TinyPixView.registerLayer(bg)
TinyPixView.registerLayer(track);
TinyPixView.registerLayer(obsticals);
TinyPixView.registerLayer(pl);
TinyPixView.unpause(TinyPixRenderer);
// END STARTUP

// CONTROLS
var LEFT_DOWN = false;
var RIGHT_DOWN = false;
$(document).keydown(ctrl_keydown);
$(document).keyup(ctrl_keyup);
function ctrl_keydown(e) {
	if (e.keyCode == 37) {
		LEFT_DOWN = true;
	}
	else if (e.keyCode == 39) {
		RIGHT_DOWN = true;
	}

	// test keys
	else if (e.keyCode == 90) // z
		player.onZDown();
	else if (e.keyCode == 88) // x
		player.onXDown();
}
function ctrl_keyup(e) {
	if (e.keyCode == 37) {
		LEFT_DOWN = false;
	}
	else if (e.keyCode == 39) {
		RIGHT_DOWN = false;
	}
}

$(window).blur(function () {
	TinyPixView.pause();
});
$(window).focus(function () {
	TinyPixView.unpause(TinyPixRenderer);
});
// END CONTROLS

// LAYERS






// END LAYERS

// GAME OBJECTS



// END GAME OBJECTS
