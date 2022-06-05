(function () {
  const close = document.getElementById('modal-close');
  const modal = document.getElementById('modal');
  const modalOpen = document.getElementById('modal-open');

  if (!close || !modalOpen || !modal) {
    return;
  }

  modalOpen.addEventListener('click', () => {
    modal.style.display = 'flex';
    document.body.overflow = 'hidden';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.overflow = 'initial';
    }
  })

  close.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.overflow = 'initial';
  });
})();
