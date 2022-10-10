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

var checkDead = setInterval(function () {
  var characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  var blockLeft = parseInt(
    window.getComputedStyle(character).getPropertyValue("left")
  );

  if (characterTop >= 350 && blockLeft > 0 && blockLeft < 20) {
    block.style.animation = none;
    alert("You Lose... haha loser");
  }

  console.log(characterTop);
}, 10);
