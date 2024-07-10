/* 
todo: objectives to find the area of the triangle and show it in the area calculation
* 1. Get the base value of the triangle
* 2. Get height value of the triangle
* 3. Convert the value to number
*/
function calculateTriangleArea() {
  const triangleBaseInputValue = Number(
    document.getElementById("triangle-base").value
  );

  const triangleHeightInputValue = Number(
    document.getElementById("triangle-height").value
  );

  const triangleArea = 0.5 * triangleBaseInputValue * triangleHeightInputValue;

  console.log(triangleArea);

  // ? Display triangle area
  const setTriangleArea = document.getElementById("triangle-area");
  setTriangleArea.innerText = triangleArea;
}

function calculateRectangleArea() {
  const rectangleHeightInputValue = Number(
    document.getElementById("rectangle-height").value
  );

  const rectangleWidthInputValue = Number(
    document.getElementById("rectangle-width").value
  );

  const rectangleArea = rectangleHeightInputValue * rectangleWidthInputValue;

  // ? Display rectangle Area
  document.getElementById("rectangle-area").innerText = rectangleArea;

  // ? Clearing the input fields
  document.getElementById("rectangle-height").value = "";
  document.getElementById("rectangle-width").value = "";
}

/**
 * todo: making a reusable function for similar tasks
 */

// ? reusable function to get the input field's values
function getInputValueById(inputFieldId) {
  const inputField = parseFloat(document.getElementById(inputFieldId).value);

  return inputField;
}

// ? reusable function to set the value of the inner text to show the area result
function setAreaResult(areaId, areaValue) {
  document.getElementById(areaId).innerText = areaValue;
}

// ? Reusable function to clear the input fields after calculating the result
function clearInputField(fieldId) {
  document.getElementById(fieldId).value = "";
}

// ! function to calculate the area of parallelogram
function calculateParallelogramArea() {
  const paraBase = getInputValueById("para-base");
  const paraHeight = getInputValueById("para-height");

  const paraArea = paraBase * paraHeight;
  setAreaResult("para-area", paraArea);
}

// ! Function to calculate the area of rhombus
function calculateRhombusArea() {
  const rhombusD1 = getInputValueById("rhombus-d1");
  const rhombusD2 = getInputValueById("rhombus-d2");

  const rhombusArea = 0.5 * rhombusD1 * rhombusD2;
  setAreaResult("rhombus-area", rhombusArea);
}

// ! Function to calculate the area of pentagon
function calculatePentagonArea() {
  const pentagonP = getInputValueById("pentagon-p");
  const pentagonB = getInputValueById("pentagon-b");

  const pentagonArea = 0.5 * pentagonP * pentagonB;
  setAreaResult("pentagon-area", pentagonArea);
  clearInputField("pentagon-p");
  clearInputField("pentagon-b");
}

// ! function to calculate the area of ellipse
function calculateEllipseArea() {
  const pi = 3.1416;
  const ellipseA = getInputValueById("ellipse-a");
  const ellipseB = getInputValueById("ellipse-b");

  const ellipseArea = pi * ellipseA * ellipseB;

  setAreaResult("ellipse-area", ellipseArea);

  clearInputField("ellipse-a");
  clearInputField("ellipse-b");
}
