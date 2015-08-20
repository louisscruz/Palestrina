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
    it("should provide a valid letter", function() {
      var pitch = new Pitch('A');
      expect(pitch.sPitch).toEqual('A4')
    });

    it("should", function() {

    });

    it("should", function() {

    })
  });
  describe("specified pitch", function() {
    var specifiedPitch = new Pitch('Dbb7');
    it("should return a consistent value when completely specified", function() {
      var value = new Pitch('Dbb7');
      expect(specifiedPitch).toEqual(value);
    });
  });
});
