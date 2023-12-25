let start = document.querySelector(".start");
let end = document.querySelector(".end");
let myDiv = document.querySelector(".myDiv");

console.log(start);
console.log(end);
console.log(myDiv);

start.addEventListener("click", function () {
  myDiv.classList.remove("pause");
  console.log("start");
});
end.addEventListener("click", function () {
  myDiv.classList.add("pause");
  console.log("end");
});
