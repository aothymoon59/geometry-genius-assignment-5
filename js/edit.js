//====================================== edit value ===========================================

// edit card 1
document.getElementById("trEdit").addEventListener("click", function () {
  const trEditB = getElementValueById("trEditB");
  const trEditH = getElementValueById("trEditH");

  setInputValueById("triangle-b", trEditB, "triangle-h", trEditH);
});
// edit card 2
document.getElementById("recEdit").addEventListener("click", function () {
  const recEditW = getElementValueById("recEditW");
  const recEditL = getElementValueById("recEditL");

  setInputValueById("rectangle-w", recEditW, "rectangle-l", recEditL);
});
// edit card 3
document.getElementById("prEdit").addEventListener("click", function () {
  const prEditB = getElementValueById("prEditB");
  const prEditH = getElementValueById("prEditH");

  setInputValueById("parallelogram-b", prEditB, "parallelogram-h", prEditH);
});
// edit card 4
document.getElementById("rmEdit").addEventListener("click", function () {
  const rmEditD1 = getElementValueById("rmEditD1");
  const rmEditD2 = getElementValueById("rmEditD2");

  setInputValueById("rhombus-d1", rmEditD1, "rhombus-d2", rmEditD2);
});
// edit card 5
document.getElementById("pnEdit").addEventListener("click", function () {
  const pnEditP = getElementValueById("pnEditP");
  const pnEditB = getElementValueById("pnEditB");

  setInputValueById("pentagon-p", pnEditP, "pentagon-b", pnEditB);
});
// edit card 6
document.getElementById("elEdit").addEventListener("click", function () {
  const elEditA = getElementValueById("elEditA");
  const elEditB = getElementValueById("elEditB");

  setInputValueById("ellipse-a", elEditA, "ellipse-b", elEditB);
});

// edit save button 1
document.getElementById("trDone").addEventListener("click", function () {
  const triangleBaseValue = getInputValueById("triangle-b");
  const triangleHeightValue = getInputValueById("triangle-h");
  // set element on editing filed
  setValueById("trEditB", triangleBaseValue, "trEditH", triangleHeightValue);
});

// edit save button 2
document.getElementById("recDone").addEventListener("click", function () {
  const rectangleW = getInputValueById("rectangle-w");
  const rectangleL = getInputValueById("rectangle-l");
  // set element on editing filed
  setValueById("recEditW", rectangleW, "recEditL", rectangleL);
});

// edit save button 3
document.getElementById("prDone").addEventListener("click", function () {
  const parallelogramB = getInputValueById("parallelogram-b");
  const parallelogramH = getInputValueById("parallelogram-h");

  // set element on editing filed
  setValueById("prEditB", parallelogramB, "prEditH", parallelogramH);
});

// edit save button 4
document.getElementById("rmDone").addEventListener("click", function () {
  const rhombusD1 = getInputValueById("rhombus-d1");
  const rhombusD2 = getInputValueById("rhombus-d2");
  // set element on editing filed
  setValueById("rmEditD1", rhombusD1, "rmEditD2", rhombusD2);
});

// edit save button 5
document.getElementById("pnDone").addEventListener("click", function () {
  const pentagonP = getInputValueById("pentagon-p");
  const pentagonB = getInputValueById("pentagon-b");
  // set element on editing filed
  setValueById("pnEditP", pentagonP, "pnEditB", pentagonB);
});

// edit save button 6
document.getElementById("elDone").addEventListener("click", function () {
  const ellipseA = getInputValueById("ellipse-a");
  const ellipseB = getInputValueById("ellipse-b");
  // set element on editing filed
  setValueById("elEditA", ellipseA, "elEditB", ellipseB);
});
