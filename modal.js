document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('memberModal');
  const closeBtn = document.querySelector('.close');
  const memberElements = document.querySelectorAll('.member-info');

  const members = [
    {
      name: '신희범',
      mbti: 'ISFP',
      advantages: '웹 개발에 대한 열정과 함께 디자인을 좋아하는 개발자입니다.',
      style: '',
      goal: '',
      promise: '',
      githubLink: 'https://github.com/HBeom00',
      velogLink: 'https://velog.io/@hbeom00/posts',
      imageSrc: './image/1.jpg'
    },
    {
      name: '김하영',
      mbti: 'ISFJ',
      advantages: '사용자 중심의 인터페이스 설계에 관심이 많은 디자인 개발자입니다.',
      style: '',
      goal: '',
      promise: '',
      githubLink: 'https://github.com/duddlfkd02',
      velogLink: 'https://velog.io/@duddlfkd02/posts',
      imageSrc: './image/2.jpg'
    },
    {
      name: '송재헌',
      mbti: 'ISTJ',
      advantages: '정확성과 신뢰성을 중요시하는 백엔드 개발자입니다.',
      style: '',
      goal: '',
      promise: '',
      githubLink: 'https://github.com/spmrsong',
      velogLink: 'https://pokbeg.tistory.com/',
      imageSrc: './image/3.jpg'
    },
    {
      name: '서영진',
      mbti: 'ESFJ',
      advantages: '팀워크를 중시하며 사용자의 요구에 맞는 서비스를 제공하는 개발자입니다.',
      style: '강남스타일',
      goal: '목표 생각 안 해봄',
      promise: '약속은 지켜야 약속',
      githubLink: 'https://github.com/youngjin34',
      velogLink: 'https://velog.io/@epik34/posts',
      imageSrc: './image/4.jpg'
    },
    {
      name: '이지영',
      mbti: 'ISFJ',
      advantages: '사용자의 경험을 중요시하는 프론트엔드 개발자입니다.',
      style: '',
      goal: '',
      promise: '',
      githubLink: 'https://github.com/wldud7788',
      velogLink: 'https://velog.io/@rooftop7788/posts',
      imageSrc: './image/5.jpg'
    }
  ];

  memberElements.forEach((memberElement, index) => {
    memberElement.addEventListener('click', () => {
      modal.style.display = 'block';
      const modalTitle = document.getElementById('modalTitle');
      const modalInfo = document.getElementById('modalInfo');

      modalTitle.textContent = members[index].name;

      const img = document.createElement('img');
      img.src = members[index].imageSrc;
      img.alt = members[index].name;
      modalInfo.innerHTML = '';
      modalInfo.appendChild(img);

      modalInfo.innerHTML += `
        <div><b>MBTI</b><br>${members[index].mbti}</div>
        <div><b>자신의 장점</b><br>${members[index].advantages}</div>
        <br>
        <div><b>나의 스타일</b><br>${members[index].style}</div>
        <br>
        <div><b>우리 팀의 궁극적인 목표!</b><br>${members[index].goal}</div>
        <br>
        <div><b>우리 팀의 약속</b><br>${members[index].promise}</div>
      `;
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
