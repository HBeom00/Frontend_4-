const closeBtn = document.querySelector('.closeBtn');
const modal = document.getElementById('modal_container');
const memberContents = document.querySelectorAll('.member_content');


const members = [
    {
        name: '신희범',
        mbti: 'ISFP',
        age: 23,
        advantages: '끈기 있다.',
        style: '꼼꼼하다.',
        tmi: '더위를 많이 타서 여름이 힘들다...',
        imgSrc: 'images/shin.jpg'
    },
    {
        name: '김하영',
        mbti: 'ISFJ',
        age: 26,
        advantages: '해야하는 일에 대해 계획성 있게 처리 가능해요',
        style: '겁이 많지만 악바리로 해내는 스타일',
        tmi: '빨래를 했는데 비가 옵니다...',
        imgSrc: 'images/kim.jpeg'
    },
    {
        name: '송재헌',
        mbti: 'ISTJ',
        age: 28,
        advantages: '궁금증이 정말 많아서 이것저것 도전해본다.',
        style: '비전공자라 굉장히 꼼꼼하게 찾아보지만 결국엔 GPT 의 도움을 받는다.',
        tmi: '24시간 에어컨 틀고 있어서 전기세가 걱정됩니다. 그리고 지금 음악 듣고 싶네요.',
        imgSrc: 'images/song.jpg'
    },
    {
        name: '서영진',
        mbti: 'ESFJ',
        age: 30,
        advantages: '가끔씩 나서길 좋아한다..! 그래서 분위기를 좋게 만든다.',
        style: 'chat gpt와 대화를 잘 나눈다....?ㅎㅎ',
        tmi: '맛있는 거 먹으면서 살 찔 때가 제일 좋아...',
        imgSrc: 'images/seo.jpg'
    },
    {
        name: '이지영',
        mbti: 'ISFJ',
        age: 30,
        advantages: '마음먹은건 어떻게 해서든 꼭 해내요!',
        style: '계획적이고 체계적인걸 좋아하는 스타일',
        tmi: '강아지가 편식을 해요... 배가 불렀나봐요..',
        imgSrc: 'images/lee.jpg'
    },
]



memberContents.forEach((memberContent, idx) => {
    memberContent.addEventListener('click', () => {
        modal.style.display = "block";

        // 멤버 사진
        const imgBox = document.getElementById('member_image');
        imgBox.innerHTML =
            `
            <div id="member_image">
                <img src="${members[idx].imgSrc}">
            </div>
        `
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







