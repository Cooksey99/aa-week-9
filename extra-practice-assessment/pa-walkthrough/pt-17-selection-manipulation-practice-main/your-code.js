/*
Write JavaScript to accomplish all of the tasks below. Do not change any code in
the HTML or CSS files
*/

// Problem One
// Select the first square using its id. Add a button inside the square with the
// number 1 on it.

// Your code here
const probOne = document.querySelector("#problem-one");
probOne.innerHTML = "<button>1</button>";

// Problem Two
// Select the second square using class names. Change the background color to
// orange, the text color white, and the border to 5px dashed black.

// Your code here
const probTwo = document.querySelector(".square.two");
probTwo.style.backgroundColor = "orange";
probTwo.style.color = "white";
probTwo.style.border = "5px dashed black";

// Problem 3
// Select all of the squares that have a class of "plus", and double their
// width. Increase the size of the font as well.
// HINT: Check the CSS file or use your Dev Tools to find the original width and
// font-size, and then double those sizes.

// Your code here
const allPlus = document.querySelectorAll(".plus");
allPlus.forEach((ele) => {
  // console.log(ele)
  ele.style.width = "100px";
  ele.style.fontSize = "60px";
});

// Problem 4
// Select the fourth box. Give it an id of "problem-four". Remove the class of
// "square" and add a class "round". As a result, the item should turn a
// different color and shape due to code in the css file.

// Your code here
const fourthBox = document.querySelector(".four");
fourthBox.setAttribute("id", "problem-four");
fourthBox.classList.remove("square");
fourthBox.classList.add("round");

// Problem 5
// Use JavaScript to remove boxes 5, 6, and 7. Can you remove multiple boxes at
// once? Think about what element selectors you could use? How could you
// manipulate attributes so that you could remove them all at once? What other
// approaches can you think of?
// NOTE: There are many possible approaches to this. Try 2-3 approaches and
// evaluate which one achieves the goal in the best way.

// Your code here

const allSquares = document.querySelectorAll(".square");
allSquares.forEach((ele) => {
  if (ele.innerText == 5) {
    ele.classList.add("minus");
  }
});
const minus = document.querySelectorAll(".minus");
minus.forEach((ele) => {
  ele.remove();
});

// const allSquares = document.querySelectorAll(".square");
// allSquares.forEach((square, i) => {
//   if (i >= 3 && i <= 5) {
//     square.remove();
//   }
// });
