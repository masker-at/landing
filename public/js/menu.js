const headerNav = document.getElementById('header-nav');
const menuButton = document.getElementById('menu-button');

function handleMenuClick(event) {
  headerNav.classList.add('flex', 'absolute', 'rounded', 'shadow-xl', 'right-8', 'top-12', 'bg-white', 'pr-3');
  headerNav.classList.remove('hidden');

  menuButton.removeEventListener('click', handleMenuClick);
  event.stopPropagation();
  document.addEventListener('click', handleMenuClickAway);
}

function handleMenuClickAway() {
  headerNav.classList.remove('flex', 'absolute', 'rounded', 'shadow-xl', 'right-8', 'top-12', 'bg-white', 'pr-3');
  headerNav.classList.add('hidden');

  menuButton.addEventListener('click', handleMenuClick);
  document.removeEventListener('click', handleMenuClickAway);
}

menuButton.addEventListener('click', handleMenuClick);
