const redirectUrl = 'https://hinatawtv.freebuff.app/';

function redirectToUniverse() {
  window.location.href = redirectUrl;
}

document.querySelector('#enter-button').addEventListener('click', redirectToUniverse);
document.querySelector('#community-button').addEventListener('click', redirectToUniverse);
