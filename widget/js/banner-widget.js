define(// Dependencies
["jquery", "knockout"], // Module Implementation
function($, ko) {
  // We recommend enabling strict checking mode
  "use strict";
  // Private variables and functions can be defined here...
  var SOME_CONSTANT = 1024;
  var privateMethod = function() {
    // ...
  };
  return {
    // Widget JS
    // Some member variables...
    textInput: ko.observable(),
    // Some public methods...
    doSomethingWithInput: function() {
      //...
    }
  };
});
