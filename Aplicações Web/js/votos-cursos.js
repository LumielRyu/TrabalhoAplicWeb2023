function setVoteCookie(course) {
  const now = new Date();
  const expirationDate = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());
  document.cookie = `${course}-voted=true; expires=${expirationDate.toUTCString()}; path=/`;
}

function hasVoted(course) {
  return document.cookie.split(";").some((cookie) => cookie.trim().startsWith(`${course}-voted=`));
}

function updateVotes(course, rating) {
  if (localStorage.getItem(`${course}-${rating}`)) {
    const votes = parseInt(localStorage.getItem(`${course}-${rating}`));
    localStorage.setItem(`${course}-${rating}`, votes + 1);
  } else {
    localStorage.setItem(`${course}-${rating}`, 1);
  }
}

function displayVotes(course) {
  const votesList = document.getElementById(`${course}-votes-list`);
  votesList.innerHTML = "";

  for (let i = 0; i <= 5; i++) {
    const votes = localStorage.getItem(`${course}-${i}`) || 0;
    const listItem = document.createElement("li");
    listItem.textContent = `Nota ${i}: ${votes} votos`;
    votesList.appendChild(listItem);
  }
}

const adminRatingInputs = document.querySelectorAll('input[name="admin-rating"]');
adminRatingInputs.forEach((input) => {
  input.addEventListener("change", (event) => {
    if (!hasVoted("admin")) {
      const selectedRating = event.target.value;
      updateVotes("admin", selectedRating);
      displayVotes("admin");
      setVoteCookie("admin");
    } else {
      alert("Você já votou! Apenas um voto é permitido por pessoa.");
    }
  });
});

const biomedRatingInputs = document.querySelectorAll('input[name="biomed-rating"]');
biomedRatingInputs.forEach((input) => {
  input.addEventListener("change", (event) => {
    if (!hasVoted("biomed")) {
      const selectedRating = event.target.value;
      updateVotes("biomed", selectedRating);
      displayVotes("biomed");
      setVoteCookie("biomed");
    } else {
      alert("Você já votou! Apenas um voto é permitido por pessoa.");
    }
  });
});

const lawRatingInputs = document.querySelectorAll('input[name="law-rating"]');
lawRatingInputs.forEach((input) => {
  input.addEventListener("change", (event) => {
    if (!hasVoted("law")) {
      const selectedRating = event.target.value;
      updateVotes("law", selectedRating);
      displayVotes("law");
      setVoteCookie("law");
    } else {
      alert("Você já votou! Apenas um voto é permitido por pessoa.");
    }
  });
});

const enfermRatingInputs = document.querySelectorAll('input[name="enferm-rating"]');
enfermRatingInputs.forEach((input) => {
  input.addEventListener("change", (event) => {
    if (!hasVoted("enferm")) {
      const selectedRating = event.target.value;
      updateVotes("enferm", selectedRating);
      displayVotes("enferm");
      setVoteCookie("enferm");
    } else {
      alert("Você já votou! Apenas um voto é permitido por pessoa.");
    }
  });
});

const fisioRatingInputs = document.querySelectorAll('input[name="fisio-rating"]');
fisioRatingInputs.forEach((input) => {
  input.addEventListener("change", (event) => {
    if (!hasVoted("fisio")) {
      const selectedRating = event.target.value;
      updateVotes("fisio", selectedRating);
      displayVotes("fisio");
      setVoteCookie("fisio");
    } else {
      alert("Você já votou! Apenas um voto é permitido por pessoa.");
    }
  });
});

const medRatingInputs = document.querySelectorAll('input[name="med-rating"]');
medRatingInputs.forEach((input) => {
  input.addEventListener("change", (event) => {
    if (!hasVoted("med")) {
      const selectedRating = event.target.value;
      updateVotes("med", selectedRating);
      displayVotes("med");
      setVoteCookie("med");
    } else {
      alert("Você já votou! Apenas um voto é permitido por pessoa.");
    }
  });
});

const psicoRatingInputs = document.querySelectorAll('input[name="psico-rating"]');
psicoRatingInputs.forEach((input) => {
  input.addEventListener("change", (event) => {
    if (!hasVoted("psico")) {
      const selectedRating = event.target.value;
      updateVotes("psico", selectedRating);
      displayVotes("psico");
      setVoteCookie("psico");
    } else {
      alert("Você já votou! Apenas um voto é permitido por pessoa.");
    }
  });
});

const siRatingInputs = document.querySelectorAll('input[name="si-rating"]');
siRatingInputs.forEach((input) => {
  input.addEventListener("change", (event) => {
    if (!hasVoted("si")) {
      const selectedRating = event.target.value;
      updateVotes("si", selectedRating);
      displayVotes("si");
      setVoteCookie("si");
    } else {
      alert("Você já votou! Apenas um voto é permitido por pessoa.");
    }
  });
});

const vetRatingInputs = document.querySelectorAll('input[name="vet-rating"]');
vetRatingInputs.forEach((input) => {
  input.addEventListener("change", (event) => {
    if (!hasVoted("vet")) {
      const selectedRating = event.target.value;
      updateVotes("vet", selectedRating);
      displayVotes("vet");
      setVoteCookie("vet");
    } else {
      alert("Você já votou! Apenas um voto é permitido por pessoa.");
    }
  });
});

displayVotes("admin");
displayVotes("biomed");
displayVotes("law");
displayVotes("enferm");
displayVotes("fisio");
displayVotes("med");
displayVotes("psico");
displayVotes("si");
displayVotes("vet");