var character = document.getElementById("character");
var block = document.getElementById("block");

function jump() {
  if (character.classList != "animate") {
    character.classList.add("animate");
  }

  setTimeout(function () {
    character.classList.remove("animate");
  }, 650);
}

var checkDead = setInterval(() => {
  var characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  var blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );

  if (blockLeft <= 19 && blockLeft >= -10 && characterTop > 340) {
    block.style.animation = "none";
    alert("You lost");
  }
}, 5);
