
let currentSponsorIndex = 1;

function increaseSponsorIndex() {
  currentSponsorIndex = (currentSponsorIndex === 5) ? 1 : currentSponsorIndex + 1;
}

let movementInterval;

function moveSponsors() {
  document.getElementById(`sponsor-${currentSponsorIndex}`).style.display = "none";
  increaseSponsorIndex();
  document.getElementById(`sponsor-${currentSponsorIndex}`).style.display = "block";
}

function stopMoving(){
  clearInterval(movementInterval);
}

function hideAll(){
  for (let i = 2; i < 6; i++) {
    document.getElementById(`sponsor-${i}`).style.display = "none";
  }
}


function checkResize() {
  if (screen.width <= 500) {
    hideAll();
    stopMoving();
    movementInterval = setInterval(moveSponsors, 1000);
  } else {
    stopMoving();
    for (let i = 1; i < 6; i++) {
      document.getElementById(`sponsor-${i}`).style.display = "block";
    }
  }
}