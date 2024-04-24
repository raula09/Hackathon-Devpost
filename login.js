
let username = localStorage.getItem('username');


if (!username) {
  do {
    username = prompt('Your username is required:');
  } while (!username || username.trim() === '');

 
  localStorage.setItem('username', username);
}


const positions = ['Front End Developer', 'Backend Developer', 'Fullstack Developer', 'UI/UX Designer', 'Other'];


let position = localStorage.getItem('position');


if (!position || !positions.includes(position)) {
  let positionIndex;
  do {
    const positionChoice = prompt(`Please choose your position from the following options:\n\n${positions.map((pos, index) => `${index + 1}. ${pos}`).join('\n')}`);
    positionIndex = parseInt(positionChoice) - 1;
  } while (isNaN(positionIndex) || positionIndex < 0 || positionIndex >= positions.length);

 
  position = positions[positionIndex];
  localStorage.setItem('position', position);
}


if (username) {
  const guestElement = document.querySelector('.guest1');
  if (guestElement) {
    guestElement.textContent = ` ${username}`;
  }

  const guestElement2 = document.querySelector('.guest2');
  if (guestElement2) {
    guestElement2.textContent = ` ${position || 'Not provided'}`;
  }
}
