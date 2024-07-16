const closeBtn = document.querySelector('.closeBtn');
const modal = document.getElementById('modal_container');
const memberContents = document.querySelectorAll('.member_content');


const members = [
    {
        name: '신희범',
        mbti: 'ISFP',
        age: 20,
        advantages: '신희범 이런걸 잘하지',
        style: '신희범 어쩌구한 스타일',
        tmi: '신희범 tmi',
        imgSrc: 'images/shin.jpg'
    },
    {
        name: '김하영',
        mbti: 'ISFJ',
        age: 27,
        advantages: '해야하는 일에 대해 계획성 있게 처리 가능해요',
        style: '겁이 많지만 악바리로 해내는 스타일',
        tmi: '빨래를 했는데 비가 옵니다...',
        imgSrc: 'images/kim.jpeg'
    },
    {
        name: '송재헌',
        mbti: 'ISTJ',
        age: 21,
        advantages: '송재헌 이런걸 잘하지',
        style: '송재헌 어쩌구한 스타일',
        tmi: '송재헌 tmi',
        imgSrc: 'images/song.jpg'
    },
    {
        name: '서영진',
        mbti: 'ESFJ',
        age: 22,
        advantages: '서영진 이런걸 잘하지',
        style: '서영진 어쩌구한 스타일',
        tmi: '서영진 tmi',
        imgSrc: 'images/seo.jpg'
    },
    {
        name: '이지영',
        mbti: 'ISFJ',
        age: 23,
        advantages: '이지영 이런걸 잘하지',
        style: '이지영 어쩌구한 스타일',
        tmi: '이지영 tmi',
        imgSrc: 'images/lee.jpg'
    },
]



memberContents.forEach((memberContent, idx) => {
    memberContent.addEventListener('click', () => {
        modal.style.display = "block";

        // 멤버 사진(진행중...)
        const memberImg = document.createElement('img');
        // memberImg.className = 'member_image';
        memberImg.src = members[idx].imgSrc;



        //멤버 이름, 나이
        const memberName = document.getElementById('member_name');
        const memberAge = document.getElementById('member_age');
        memberName.innerText = members[idx].name;
        memberAge.innerText = members[idx].age + "살";

        //멤버 내용
        const memberInfo = document.getElementById('member_content');
        memberInfo.innerHTML =
            `
                <div class="content_inner">
                    <img src="images/icon-agree.png" alt="협업" class="icon">
                    ${members[idx].style}
                </div>
                <div class="content_inner">
                    <img src="images/icon-positive.png" alt="장점" class="icon">
                    ${members[idx].advantages}
                </div>
                <div class="content_inner">
                    <img src="images/icon-tmi.png" alt="tmi" class="icon">
                    ${members[idx].tmi}
                </div >
        `
    })

    //닫기 버튼 누르면 사라짐
    closeBtn.addEventListener('click', () => {
        modal.style.display = "none";
    })
})







