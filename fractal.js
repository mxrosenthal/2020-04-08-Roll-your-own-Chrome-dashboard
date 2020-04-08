(function () {
  // Create Canvas
  var myCanvas = document.createElement("canvas");
  // myCanvas.width = document.documentElement.clientWidth;
  // myCanvas.height = document.documentElement.clientHeight;
  myCanvas.width = 600;
  myCanvas.height = 600;

  document.body.appendChild(myCanvas);
  var ctx = myCanvas.getContext("2d");

  // Start drawing
  function checkIfBelongsToMandelbrotSet(x, y) {
    var realComponentOfResult = x;
    var imaginaryComponentOfResult = y;

    for (var i = 0; i < 10; i++) {
      // Calculate the real and imaginary components of the result
      // separately
      var tempRealComponent = realComponentOfResult * realComponentOfResult
        - imaginaryComponentOfResult * imaginaryComponentOfResult
        + x;

      var tempImaginaryComponent = 2 * realComponentOfResult * imaginaryComponentOfResult
        + y;

      realComponentOfResult = tempRealComponent;
      imaginaryComponentOfResult = tempImaginaryComponent;
    }

    if (realComponentOfResult * imaginaryComponentOfResult < 5) {
      console.log('true')
      return true; // In the Mandelbrot set
    }
    console.log('false')
    return false; // Not in the set
  }

  var magnificationFactor = 200;
  var panX = 2;
  var panY = 1.5;
  for (var x = 0; x < myCanvas.width; x++) {
    for (var y = 0; y < myCanvas.height; y++) {
      var belongsToSet =
        checkIfBelongsToMandelbrotSet(x / magnificationFactor - panX,
          y / magnificationFactor - panY);
      if (belongsToSet) {
        ctx.fillRect(x, y, 1, 1); // Draw a black pixel
      }
    }
  }
})();


// (function () {
//   // Create Canvas
//   var myCanvas = document.createElement("canvas");
//   myCanvas.width = 600;
//   myCanvas.height = 600;
//   document.body.appendChild(myCanvas);
//   var ctx = myCanvas.getContext("2d");

//   // Start drawing
// })();

// function checkIfBelongsToMandelbrotSet(x, y) {
//   var realComponentOfResult = x;
//   var imaginaryComponentOfResult = y;

//   for(var i = 0; i < 10; i++) {
//        // Calculate the real and imaginary components of the result
//        // separately
//        var tempRealComponent = realComponentOfResult * realComponentOfResult
//                                - imaginaryComponentOfResult * imaginaryComponentOfResult
//                                + x;

//        var tempImaginaryComponent = 2 * realComponentOfResult * imaginaryComponentOfResult
//                                + y;

//        realComponentOfResult = tempRealComponent;
//        imaginaryComponentOfResult = tempImaginaryComponent;
//   }

//   if (realComponentOfResult * imaginaryComponentOfResult < 5)
//       return true; // In the Mandelbrot set

//   return false; // Not in the set
// }

// var magnificationFactor = 600;
// var panX = 0;
// var panY = 0;
// for (var x = 0; x < myCanvas.width; x++) {
//   for (var y = 0; y < myCanvas.height; y++) {
//     var belongsToSet =
//       checkIfBelongsToMandelbrotSet(x / magnificationFactor - panX,
//         y / magnificationFactor - panY);
//     if (belongsToSet) {
//       ctx.fillRect(x, y, 1, 1); // Draw a black pixel
//     }
//   }
// }