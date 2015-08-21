//var Pitch = require('/pitch');

function Note(pitch, duration) {
  var n = {
    pitch: pitch,
    duration: duration
  };
  return n;
};

module.exports = Note;
