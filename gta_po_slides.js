const TOTAL = 12;
let current = 1;

function updateProgress() {
  const bar = document.getElementById('progress-bar');
  if (bar) bar.style.width = (current / TOTAL * 100) + '%';
}

function goSlide(dir) {
  const next = current + dir;
  if (next < 1 || next > TOTAL) return;
  document.getElementById('slide-' + current).classList.remove('active');
  current = next;
  document.getElementById('slide-' + current).classList.add('active');
  document.getElementById('counter').textContent = current + ' / ' + TOTAL;
  document.getElementById('btn-prev').disabled = (current === 1);
  document.getElementById('btn-next').disabled = (current === TOTAL);
  updateProgress();
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goSlide(1);
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   goSlide(-1);
});

// Init
updateProgress();
