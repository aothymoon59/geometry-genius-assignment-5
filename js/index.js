let count = 0;

// ======================== card 1  Triangle=========================================

document.getElementById("triangle-btn").addEventListener("click", function () {
  // get element value
  const triangleTitle = document.getElementById("triangle-title").innerText;
  const triangleBaseValue = getInputValueById("triangle-b");
  const triangleHeightValue = getInputValueById("triangle-h");

  // validation
  if (isNaN(triangleBaseValue) || isNaN(triangleHeightValue)) {
    alert("Invalid input. Please input number");
    return;
  } else if (triangleBaseValue <= 0 || triangleHeightValue <= 0) {
    alert("please input positive number !!!");
    return;
  }

  // set element on editing filed
  setValueById("trEditB", triangleBaseValue, "trEditH", triangleHeightValue);

  // calculate
  const triangleArea = 0.5 * triangleBaseValue * triangleHeightValue;

  // counter
  count += 1;

  // set element on calculate area
  setElement(count, triangleTitle, triangleArea.toFixed(2));
});

// ======================== card 2  Rectangle=========================================

document.getElementById("rectangle-btn").addEventListener("click", function () {
  // get element value
  const rectangleTitle = document.getElementById("rectangle-title").innerText;
  const rectangleW = getInputValueById("rectangle-w");
  const rectangleL = getInputValueById("rectangle-l");

  // validation
  if (isNaN(rectangleW) || isNaN(rectangleL)) {
    alert("Invalid input. Please input number");
    return;
  } else if (rectangleW <= 0 || rectangleL <= 0) {
    alert("please input positive number !!!");
    return;
  }

  // set element on editing filed
  setValueById("recEditW", rectangleW, "recEditL", rectangleL);

  // calculate
  const rectangleArea = rectangleW * rectangleL;

  // counter
  count += 1;

  // set element on calculate area
  setElement(count, rectangleTitle, rectangleArea.toFixed(2));
});

// ======================== card 3  Parallelogram=========================================

document
  .getElementById("parallelogram-btn")
  .addEventListener("click", function () {
    // get element value
    const parallelogramTitle = document.getElementById(
      "parallelogram-title"
    ).innerText;
    const parallelogramB = getInputValueById("parallelogram-b");
    const parallelogramH = getInputValueById("parallelogram-h");

    // validation
    if (isNaN(parallelogramB) || isNaN(parallelogramH)) {
      alert("Invalid input. Please input number");
      return;
    } else if (parallelogramB <= 0 || parallelogramH <= 0) {
      alert("please input positive number !!!");
      return;
    }

    // set element on editing filed
    setValueById("prEditB", parallelogramB, "prEditH", parallelogramH);

    // calculate
    const parallelogramArea = parallelogramB * parallelogramH;

    // counter
    count += 1;

    // set element on calculate area
    setElement(count, parallelogramTitle, parallelogramArea.toFixed(2));
  });

// ======================== card 4  Rhombus=========================================

document.getElementById("rhombus-btn").addEventListener("click", function () {
  // get element value
  const rhombusTitle = document.getElementById("rhombus-title").innerText;
  const rhombusD1 = getInputValueById("rhombus-d1");
  const rhombusD2 = getInputValueById("rhombus-d2");

  // validation
  if (isNaN(rhombusD1) || isNaN(rhombusD2)) {
    alert("Invalid input. Please input number");
    return;
  } else if (rhombusD1 <= 0 || rhombusD2 <= 0) {
    alert("please input positive number !!!");
    return;
  }

  // set element on editing filed
  setValueById("rmEditD1", rhombusD1, "rmEditD2", rhombusD2);

  // calculate
  const rhombusArea = 0.5 * rhombusD1 * rhombusD2;

  // counter
  count += 1;

  // set element on calculate area
  setElement(count, rhombusTitle, rhombusArea.toFixed(2));
});

// ======================== card 5  Pentagon=========================================

document.getElementById("pentagon-btn").addEventListener("click", function () {
  // get element value
  const pentagonTitle = document.getElementById("pentagon-title").innerText;
  const pentagonP = getInputValueById("pentagon-p");
  const pentagonB = getInputValueById("pentagon-b");

  // validation
  if (isNaN(pentagonP) || isNaN(pentagonB)) {
    alert("Invalid input. Please input number");
    return;
  } else if (pentagonP <= 0 || pentagonB <= 0) {
    alert("please input positive number !!!");
    return;
  }

  // set element on editing filed
  setValueById("pnEditP", pentagonP, "pnEditB", pentagonB);

  // calculate
  const pentagonArea = 0.5 * pentagonP * pentagonB;

  // counter
  count += 1;

  // set element on calculate area
  setElement(count, pentagonTitle, pentagonArea.toFixed(2));
});

// ======================== card 6  Ellipse=========================================

document.getElementById("ellipse-btn").addEventListener("click", function () {
  // get element value
  const ellipseTitle = document.getElementById("ellipse-title").innerText;
  const ellipseA = getInputValueById("ellipse-a");
  const ellipseB = getInputValueById("ellipse-b");

  // validation
  if (isNaN(ellipseA) || isNaN(ellipseB)) {
    alert("Invalid input. Please input number");
    return;
  } else if (ellipseA <= 0 || ellipseB <= 0) {
    alert("please input positive number !!!");
    return;
  }

  // set element on editing filed
  setValueById("elEditA", ellipseA, "elEditB", ellipseB);

  // calculate
  const pi = 3.14;
  const ellipseArea = pi * ellipseA * ellipseB;

  // counter
  count += 1;

  // set element on calculate area
  setElement(count, ellipseTitle, ellipseArea.toFixed(2));
});

//============================== blog =============================================

document.getElementById("blogBtn").addEventListener("click", function () {
  window.location.href = "blog.html";
});

//================================ random card bg ==================================
randomBgColor("randomBg");

/*---------------------------------------------------------------------------------------
================================== optional task ========================================
----------------------------------------------------------------------------------------*/

//================================ delete element ===================================

document
  .getElementById("area-calculations")
  .addEventListener("click", function (e) {
    if (e.target.className.includes("del-btn")) {
      e.target.parentNode.parentNode.parentNode.style.display = "none";
    }
  });

//================================ convert cm to meter ===================================

document
  .getElementById("area-calculations")
  .addEventListener("click", function (e) {
    if (e.target.className.includes("convert-to-m")) {
      const elementValueStr =
        e.target.parentNode.previousElementSibling.innerText;
      const elementValue = parseFloat(elementValueStr);

      const meter = (elementValue / 100).toFixed(2);
      e.target.parentNode.previousElementSibling.innerHTML = `${meter}m<sup>2</sup>`;
    }
  });
