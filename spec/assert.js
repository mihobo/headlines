(function(exports) {
  function assertEquals(a, b) {
    if (a != b) {
      throw new Error("Test failed: " + a + " is not equal to " + b);
    };
  };

  function assertIsNull(a) {
    if (a === null) {
      throw new Error("Test failed: value is null");
    };
  };

  function it(text, callback) {
    callback();
    console.log("Test passed: " + text);
  };

  exports.it = it;
  exports.assertEquals = assertEquals;
  exports.assertIsNull = assertIsNull;
})(this);
