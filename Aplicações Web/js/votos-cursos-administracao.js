function setVoteCookieAd() {
    const now = new Date();
    const expirationDate = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());
    document.cookie = "voted=true; expires=" + expirationDate.toUTCString() + "; path=/";
  }
  
  function hasVoted() {
    return document.cookie.split(";").some((cookie) => cookie.trim().startsWith("voted="));
  }
  
  function updateVotes(ratingAdmin) {
    if (localStorage.getItem(ratingAdmin)) {
      const votes = parseInt(localStorage.getItem(ratingAdmin));
      localStorage.setItem(ratingAdmin, votes + 1);
    } else {
      localStorage.setItem(ratingAdmin, 1);
    }
  }
  
  function displayVotes() {
    const votesList = document.getElementById("votes-list");
    votesList.innerHTML = "";
  
    for (let i = 0; i <= 5; i++) {
      const votes = localStorage.getItem(i) || 0;
      const listItem = document.createElement("li");
      listItem.textContent = `Nota ${i}: ${votes} votos`;
      votesList.appendChild(listItem);
    }
  }
  
  const ratingInputs = document.querySelectorAll('input[name="rating"]');
  ratingInputs.forEach((input) => {
    input.addEventListener("change", (event) => {
      if (!hasVoted()) {
        const selectedRating = event.target.value;
        updateVotes(selectedRating);
        displayVotes();
        setVoteCookie();
      } else {
        alert("Você já votou! Apenas um voto é permitido por pessoa.");
      }
    });
  });
  
  displayVotes();