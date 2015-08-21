describe("Note", function() {
  var Note = require('../lib/note');
  var Pitch = require('../lib/pitch');
  var note;
  var pitch;
  var expectation;
  beforeEach(function() {
    pitch = new Pitch('Abb3').sPitch;
    note = new Note(pitch, 3);
    expectation = {
      pitch: 'Abb3',
      duration: 3
    };
  });

  it("should return the correct input", function() {
    expect(note).toEqual(expectation);
  });
});
