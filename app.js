const redirectUrl = document.querySelector('#enter-button').dataset.redirect;

function redirectToUniverse() {
  window.location.href = redirectUrl;
}

document.querySelector('#enter-button').addEventListener('click', redirectToUniverse);
document.querySelector('#community-button').addEventListener('click', redirectToUniverse);
