var Mode = require('./mode');

function Cantus(mode) {
  if (mode === 'a') {
    return mode;
  } else {
    return 'that is not a mode';
  }
};

module.exports = Cantus;
