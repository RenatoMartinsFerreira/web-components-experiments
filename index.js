const add = document.querySelector(".add");
const update = document.querySelector(".update");
const remove = document.querySelector(".remove");
let circle;

update.disabled = true;
remove.disabled = true;

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

add.onclick = function () {
  // Create a custom circle element
  circle = document.createElement("custom-circle");
  circle.setAttribute("size", "100");
  circle.setAttribute("color", "red");
  document.body.appendChild(circle);

  update.disabled = false;
  remove.disabled = false;
  add.disabled = true;
};

update.onclick = function () {
  // Randomly update circle's attributes
  circle.setAttribute("size", random(50, 200));
  circle.setAttribute(
    "color",
    `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`
  );
};

remove.onclick = function () {
  // Remove the circle
  document.body.removeChild(circle);

  update.disabled = true;
  remove.disabled = true;
  add.disabled = false;
};
