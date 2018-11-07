
let currentSponsorIndex = 1;

function increaseSponsorIndex(){
  currentSponsorIndex = (currentSponsorIndex === 5) ? 1 : currentSponsorIndex+1;
}

function moveSponsors(){
  document.getElementById(`sponsor-${currentSponsorIndex}`).style.display =  "none";
  increaseSponsorIndex();
  document.getElementById(`sponsor-${currentSponsorIndex}`).style.display = "block";
}

if (screen.width <= 375) {
  window.setInterval(function(){
    moveSponsors();
  }, 2000);
}