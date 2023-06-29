function setVoteCookie() {
    const now = new Date();
    const expirationDate = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());
    document.cookie = "voted=true; expires=" + expirationDate.toUTCString() + "; path=/";
  }
  
  function hasVoted() {
    return document.cookie.split(";").some((cookie) => cookie.trim().startsWith("voted="));
  }
  
  function updateVotes(rating) {
    if (localStorage.getItem(rating)) {
      const votes = parseInt(localStorage.getItem(rating));
      localStorage.setItem(rating, votes + 1);
    } else {
      localStorage.setItem(rating, 1);
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