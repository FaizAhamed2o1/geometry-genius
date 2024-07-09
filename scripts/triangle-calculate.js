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
