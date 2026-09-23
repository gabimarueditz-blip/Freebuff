const listings = [
  { name: 'Warm oak side table', category: 'Furniture', location: 'Temescal · 0.4 mi', icon: '▰' },
  { name: 'Snake plant, thriving', category: 'Home', location: 'Longfellow · 0.7 mi', icon: '♧' },
  { name: 'City bike · needs a tune-up', category: 'Outdoors', location: 'Piedmont Ave · 1.1 mi', icon: '♢' },
  { name: 'Set of four dining chairs', category: 'Furniture', location: 'Rockridge · 1.3 mi', icon: '▤' },
  { name: 'Terracotta planter set', category: 'Home', location: 'Mosswood · 1.4 mi', icon: '◒' },
  { name: 'Camping stove + fuel', category: 'Outdoors', location: 'West Oakland · 1.8 mi', icon: '⌂' }
];
const grid = document.querySelector('#item-grid');
const emptyState = document.querySelector('#empty-state');
const count = document.querySelector('#item-count');
let activeCategory = 'All';

function renderListings() {
  const query = document.querySelector('#search').value.toLowerCase();
  const visible = listings.filter((item) => (activeCategory === 'All' || item.category === activeCategory) && `${item.name} ${item.category} ${item.location}`.toLowerCase().includes(query));
  grid.innerHTML = visible.map((item) => `<article class="item"><div class="item-image"><span>${item.icon}</span><button class="heart" aria-label="Save ${item.name}">&#9825;</button></div><div class="item-details"><h3>${item.name}</h3><div class="item-meta">${item.category} &middot; ${item.location}</div></div></article>`).join('');
  count.textContent = visible.length;
  emptyState.style.display = visible.length ? 'none' : 'block';
}

document.querySelector('#search').addEventListener('input', renderListings);
document.querySelectorAll('.filter').forEach((button) => button.addEventListener('click', () => {
  document.querySelector('.filter.active').classList.remove('active');
  button.classList.add('active');
  activeCategory = button.dataset.category;
  renderListings();
}));
grid.addEventListener('click', (event) => {
  if (event.target.classList.contains('heart')) {
    event.target.classList.toggle('saved');
    event.target.innerHTML = event.target.classList.contains('saved') ? '&#9829;' : '&#9825;';
  }
});
document.querySelector('#load-more').addEventListener('click', () => {
  document.querySelector('#search').value = '';
  activeCategory = 'All';
  document.querySelector('.filter.active').classList.remove('active');
  document.querySelector('.filter').classList.add('active');
  renderListings();
});

const dialog = document.querySelector('#post-dialog');
document.querySelectorAll('[data-open-post]').forEach((button) => button.addEventListener('click', () => dialog.showModal()));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
document.querySelector('#post-form').addEventListener('submit', (event) => {
  event.preventDefault();
  dialog.close();
  event.target.reset();
  alert('Your listing is ready to share. Thanks for keeping good things moving!');
});
renderListings();