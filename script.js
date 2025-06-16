btn = document.querySelector("button");
para = document.querySelector("p");

function playMusic() {
  const audio = document.getElementById("bgMusic");
  audio.play();
}

btn.addEventListener("click", function () {
  para.classList.toggle("hide");
  playMusic();

  if (para.classList.contains("hide")) {
    btn.innerText = "CLick to See Message!";
  } else {
    btn.innerText = "Hide Message";
  }
});
