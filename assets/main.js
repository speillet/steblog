const map = document.querySelector('.map-panel');
const controls = document.querySelector('.layer-controls');
const layers = {
  land: {
    title: 'Reading the landscape',
    description: 'From pixels to land cover.',
    number: '01 / 03',
  },
  satellite: {
    title: 'Following change over time',
    description: 'Satellite imagery, season after season.',
    number: '02 / 03',
  },
  agents: {
    title: 'Connecting questions to maps',
    description: 'Find data. Choose tools. Analyse. Map.',
    number: '03 / 03',
  },
};

if (map && controls) {
  controls.hidden = false;
  controls.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-layer]');
    if (!button || !controls.contains(button)) return;
    const layer = layers[button.dataset.layer];
    if (!layer) return;

    map.dataset.mode = button.dataset.layer;
    for (const control of controls.querySelectorAll('button')) {
      control.setAttribute('aria-pressed', String(control === button));
    }
    document.querySelector('#layer-title').textContent = layer.title;
    document.querySelector('#layer-description').textContent = layer.description;
    document.querySelector('#layer-number').textContent = layer.number;
    document.querySelector('#layer-announcement').textContent = `${layer.title}. ${layer.description}`;
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
