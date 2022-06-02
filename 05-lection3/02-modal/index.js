(function () {
  const close = document.getElementById('modal-close');
  const modal = document.getElementById('modal');
  const modalOpen = document.getElementById('modal-open');
  const background = document.getElementById('blackout')

  if (!close || !modalOpen || !modal) {
    return;
  }

  modalOpen.addEventListener('click', () => {
    modal.style.display = 'block';
    document.body.overflow = 'hidden';
    background.style.display = 'block';
  });

  close.addEventListener('click', () => {
    modal.style.display = 'none';
    background.style.display = 'none';
    document.body.overflow = 'initial';
  });
})();
