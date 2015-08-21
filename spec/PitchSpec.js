describe("Pitch", function() {
  var Pitch = require('../lib/pitch');
  var pitch;
  var octaves;

  describe("without input", function() {
    beforeEach(function() {
      randomPitch = new Pitch();
      octaves = [3, 4, 5];
    });

    it("should have a default value", function() {
      expect(randomPitch).not.toBeNull();
    });

    it("should lie within the correct octave range", function() {
      expect(octaves.indexOf(randomPitch.octave)).not.toEqual(-1);
    });
  });

  describe("with partially specified input", function() {
    //Add invalids
    it("should provide a valid letter and octave 4 when natural", function() {
      pitch = new Pitch('a');
      expect(pitch.sPitch).toEqual('A4')
    });

    it("should be correct when sharp", function() {
      pitch = new Pitch('a#');
      expect(pitch.sPitch).toEqual('A#4');
    });

    it("should be correct when flat", function() {
      pitch = new Pitch('ab');
      expect(pitch.sPitch).toEqual('Ab4');
    });

    it("should be correct when double sharp", function() {
      pitch = new Pitch('ax');
      expect(pitch.sPitch).toEqual('A##4');
    });

    it("should be correct when double flat", function() {
      pitch = new Pitch('abb');
      expect(pitch.sPitch).toEqual('Abb4');
    });
  });

  describe("with fully specified input", function() {
    beforeEach(function() {
      pitch = new Pitch('Dbb7');
    });

    it("should return a consistent value when completely specified", function() {
      var value = new Pitch('dbb7');
      expect(pitch).toEqual(value);
    });
  });

  describe("methods", function() {
    beforeEach(function() {
      pitch = new Pitch('ax6');
    });

    it("should successfully return scientific pitch", function() {
      expect(pitch.sPitch).toEqual('A##6');
    });

    it("should successfully return letters", function() {
      expect(pitch.letter).toEqual('A');
    });

    it("should successfully return the pitch class", function() {
      expect(pitch.pitchClass).toEqual('A##');
    });

    it("should successfully return the octave", function() {
      expect(pitch.octave).toEqual(6);
    });

    it("should successfully return the accidental number", function() {
      expect(pitch.accidental).toEqual(2);
    });

    it("should successfully return the MIDI pitch number", function() {
      expect(pitch.absolutePitch).toEqual(95);
    });

    it("should successfully return the frequency in herz", function() {
      expect(pitch.herz).toEqual(1975.533205024496);
    });
  });
});
