var halfsteps_from_c = {C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11};
var default_pitches = [ 'C', 'D', 'E', 'F', 'G', 'A', 'B' ];
var default_octaves = ['3', '4', '5'];
var invalid_default_sharps = ['D', 'E', 'G', 'A', 'B'];
var invalid_default_flats = ['C', 'D', 'F', 'G'];

function Pitch(input) {
  if (!input) {
    var letter = default_pitches[Math.floor(Math.random() * default_pitches.length)];
    var octave = default_octaves[Math.floor(Math.random() * default_octaves.length)];
    var default_chromas = ['#','', 'b'];
    if (invalid_default_sharps.indexOf(letter) !== -1) {
      default_chromas.shift();
    }
    if (invalid_default_flats.indexOf(letter) !== -1) {
      default_chromas.pop();
    }
    var chroma = default_chromas[Math.floor(Math.random() * default_chromas.length)];
    input = letter + chroma + octave;
  } else {
    input.toUpperCase();
  }
  var variables = /^([A-G])(b{1,2}|#{1,2}|x{1})?(\d{1,2})?$/.exec(input);
  if (variables === null) {
    throw new Error('Invalid input to the Pitch constructor: ' + input);
  } else if (!variables[3]) {
    variables[3] = 4;
  }
  if (!variables[2]) {
    variables[2] = '';
  } else if (variables[2] === 'x') {
    variables[2] = '##';
  }
  var halfSteps = variables[2].length;
  if (halfSteps > 0 && variables[2][0] === 'b') {
    halfSteps *= -1;
  }
  this.sPitch = variables[0];
  this.letter = variables[1];
  this.pitchClass = variables[1] + variables[2];
  this.octave = Number(variables[3]);
  this.accidental = halfSteps;
  this.absolutePitch = halfsteps_from_c[this.letter] + (12 * (this.octave + 1)) + this.accidental;
  console.log(this);
  Object.freeze(this);
  return this;
};

Pitch.prototype = {
  constructor: Pitch,
  toString: function() {
    return this.sPitch;
  },
  chromas: function() {
    return this.accidental;
  }
};

module.exports = Pitch;
