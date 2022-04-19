const btn = document.querySelectorAll(".button-rates");
const rate = document.querySelector(".selected-ratings");
const submit = document.getElementById("btn-submit");
const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
let rateScore = 3;

function onSubmit() {
  container1.classList.add("hide");
  container2.classList.remove("hide");
  rate.querySelector("span").textContent = rateScore;
}
submit.addEventListener("click", onSubmit);

btn.forEach((button) => {
  button.addEventListener("click", addClass);
});

function addClass(e) {
  if (e.target.classList.contains("active")) {
    e.target.classList.toggle("active");
  } else {
    btn.forEach((e) => e.classList.remove("active"));
  }
  e.target.classList.add("active");

  rateScore = e.target.textContent;
}
