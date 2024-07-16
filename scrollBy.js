const introduceBtn = document.getElementById("introduceBtn");
const introduce = document.getElementById("introduce");
const memberBtn = document.getElementById("memberBtn");
const teamMember = document.getElementById("team-member");
const commentBtn = document.getElementById("commentBtn");
const comment = document.getElementById("comment");

introduceBtn.addEventListener('click', () => {
  window.scrollBy({ top: introduce.getBoundingClientRect().top, behavior: 'smooth' });
})
memberBtn.addEventListener('click', () => {
  window.scrollBy({ top: teamMember.getBoundingClientRect().top, behavior: 'smooth' });
})
commentBtn.addEventListener('click', () => {
  window.scrollBy({ top: comment.getBoundingClientRect().top, behavior: 'smooth' });
})