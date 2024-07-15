document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('memberModal');
  const closeBtn = document.querySelector('.close');
  const memberImages = document.querySelectorAll('.member-img');

  memberImages.forEach(img => {
    img.addEventListener('click', () => {
      modal.style.display = 'block';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', event => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
