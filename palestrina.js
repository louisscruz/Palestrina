var Note = require('./lib/note');
var Pitch = require('./lib/pitch');
var Interval = require('./lib/interval');
var Mode = require('./lib/mode');
var Cantus = require('./lib/cantus');
var About = require('./lib/about');

/*function Palestrina() {
  var tonic = new Pitch();
  return tonic.halfSteps();
}*/

var Palestrina = {
  pitch: Pitch,
}

Palestrina.prototype = {
  about: About,
  pitch: Pitch
}

module.exports = Palestrina;

// Palestrina.pitch();
// Palestrina.pitch('a');
// Palestrina.cantus('ionian');
