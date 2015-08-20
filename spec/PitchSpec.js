describe("Pitch", function() {
  var Pitch = require('../lib/pitch');
  var pitch;
  var octaves;

  describe("random pitch", function() {
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
  describe("partially specified pitch", function() {
    //Add invalids
    it("should provide a valid letter and octave 4 when natural", function() {
      var pitch = new Pitch('a');
      expect(pitch.sPitch).toEqual('A4')
    });

    it("should be correct when sharp", function() {
      var pitch = new Pitch('a#');
      expect(pitch.sPitch).toEqual('A#4');
    });

    it("should be correct when flat", function() {
      var pitch = new Pitch('ab');
      expect(pitch.sPitch).toEqual('Ab4');
    });

    it("should be correct when double sharp", function() {
      var pitch = new Pitch('ax');
      expect(pitch.sPitch).toEqual('A##4');
    });

    it("should be correct when double flat", function() {
      var pitch = new Pitch('abb');
      expect(pitch.sPitch).toEqual('Abb4');
    });
  });
  describe("specified pitch", function() {
    var specifiedPitch = new Pitch('Dbb7');
    it("should return a consistent value when completely specified", function() {
      var value = new Pitch('Dbb7');
      expect(specifiedPitch).toEqual(value);
    });
  });
});
