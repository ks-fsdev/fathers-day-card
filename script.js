btn = document.querySelector("button");
para = document.querySelector("p");

btn.addEventListener("click", function () {
  para.classList.toggle("hide");

  if (para.classList.contains("hide")) {
    btn.innerText = "CLick to See Message!";
  } else {
    btn.innerText = "Hide Message";
  }
});
