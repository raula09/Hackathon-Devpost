function toggleModal() {
  let modal = document.getElementById('modalOverlay');
  modal.classList.toggle('active');
}

function signIn(event) {
  event.preventDefault();

  let signInButton = document.getElementById('signInButton');
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  let position = document.getElementById('position').value;

  localStorage.setItem('username', username);
  localStorage.setItem('password', password);
  localStorage.setItem('position', position);

  toggleModal();
  updateGuestInfo();
  signInButton.classList.add('hide');

  alert("Sign-in successful!");
}

function updateGuestInfo() {
  let username = localStorage.getItem('username');
  let position = localStorage.getItem('position');

  if (username && position) {
      let guestElement1 = document.querySelector('.guest1');
      if (guestElement1) {
          guestElement1.textContent = username;
      }

      let guestElement2 = document.querySelector('.guest2');
      if (guestElement2) {
          guestElement2.textContent = position;
      }
  }
}
