function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  playerConfigOverlayEl.style.display = 'block';
  backdropEl.style.display = 'block';
}

function closePlayerConfig() {
  playerConfigOverlayEl.style.display = 'none';
  backdropEl.style.display = 'none';
  formEl.firstElementChild.classList.remove('error');
  errorsOutputEl.textContent = '';
  formEl.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get('username').trim();

  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add('error');
    errorsOutputEl.textContent = 'Please enter a valid name!';
    return;
  }

  const updatedPlayerDataEl = document.getElementById(`player-${editedPlayer}-data`);
  updatedPlayerDataEl.children[1].textContent = enteredPlayerName;

  players[editedPlayer - 1].name = enteredPlayerName;

  closePlayerConfig();
}
