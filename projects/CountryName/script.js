function updateInfo(str) {
    document.getElementById("status").innerHTML = str;
}

function game() {
    //https://ko.wikipedia.org/wiki/%EB%8C%80%EB%A5%99%EB%B3%84_%EB%82%98%EB%9D%BC_%EB%AA%A9%EB%A1%9D
    const countryNames = [
        [
            //남아메리카
            "가이아나",
            "우루과이",
            "베네수엘라",
            "칠레",
            "볼리비아",
            "콜롬비아",
            "브라질",
            "파라과이",
            "수리남",
            "페루",
            "아르헨티나",
            "포클랜드 제도",
            "에콰도르",
            "프랑스령 기아나"
        ],
        [
            //북아메리카
            "미국",
            "캐나다",
            "멕시코",
            "과테말라",
            "그레나다",
            "니카라과",
            "도미니카 공화국",
            "도미니카 연방",
            "바베이도스",
            "바하마",
            "벨리즈",
            "세인트루시아",
            "세인트빈센트 그레나딘",
            "세인트키츠 네비스",
            "아이티",
            "앤티가 바부다",
            "엘살바도르",
            "온두라스",
            "자메이카",
            "코스타리카",
            "쿠바",
            "트리니다드 토바고",
            "파나마"
        ],
        [
            //아시아
            "크래프트 제이제이 제국",
            "대한민국",
            "조선민주주의인민공화국",
            "일본",
            "몽골",
            "중화민국",
            "중화인민공화국",
            "브루나이",
            "인도네시아",
            "캄보디아",
            "라오스",
            "말레이시아",
            "미얀마",
            "필리핀",
            "싱가포르",
            "태국",
            "동티모르",
            "베트남",
            "네팔",
            "몰디브",
            "방글라데시",
            "부탄",
            "스리랑카",
            "인도",
            "파키스탄",
            "이란",
            "아프가니스탄",
            "우즈베키스탄",
            "카자흐스탄",
            "키르기스스탄",
            "타지키스탄",
            "투르크메니스탄",
            "아르차르 공화국",
            "남오세티야",
            "레바논",
            "바레인",
            "북키프로스",
            "사우디아라비아",
            "시리아",
            "아랍에미리트",
            "아르메니아",
            "아제르바이잔",
            "압하지야",
            "예멘",
            "오만",
            "요르단",
            "이라크",
            "이스라엘",
            "카타르",
            "쿠웨이트",
            "키프로스",
            "터키",
            "팔레스타인",
            "조지아"
        ],
        [
            //아프리카
            "코모로",
            "지부티",
            "에리트레아",
            "에티오피아",
            "케냐",
            "세이셸",
            "소말리아",
            "소말릴랜드",
            "탄자니아",
            "중앙아프리카 공화국",
            "콩고 민주 공화국",
            "우간다",
            "부룬디",
            "르완다",
            "남수단",
            "베냉",
            "부르키나파소",
            "카보베르데",
            "차드",
            "코트디부아르",
            "감비아",
            "가나",
            "기니",
            "기니비사우",
            "라이베리아",
            "말리",
            "모리타니",
            "니제르",
            "나이지리아",
            "세네갈",
            "시에라리온",
            "토고",
            "콩고 공화국",
            "적도 기니",
            "가봉",
            "카메룬",
            "상투메 프린시페",
            "알제리",
            "이집트",
            "리비아",
            "모로코",
            "수단",
            "튀니지",
            "사하라 아랍 민주 공화국",
            "앙골라",
            "보츠와나",
            "에스와티니",
            "레소토",
            "마다가스카르",
            "말라위",
            "모리셔스",
            "모잠비크",
            "나미비아",
            "남아프리카 공화국",
            "잠비아",
            "짐바브웨"
        ],
        [
            //유럽
            "포르투갈",
            "몰타",
            "스페인",
            "산마리노",
            "바티칸 시국",
            "세르비아",
            "몬테네그로",
            "슬로베니아",
            "그리스",
            "보스니아 헤르체고비나",
            "북마케도니아",
            "알바니아",
            "크로아티아",
            "코소보",
            "이탈리아",
            "아이슬란드",
            "영국",
            "아일랜드",
            "덴마크",
            "핀란드",
            "노르웨이",
            "스웨덴",
            "에스토니아",
            "라트비아",
            "리투아니아",
            "루마니아",
            "러시아",
            "몰도바",
            "벨라루스",
            "불가리아",
            "슬로바키아",
            "우크라이나",
            "체코",
            "폴란드",
            "헝가리",
            "프랑스",
            "룩셈부르크",
            "벨기에",
            "네덜란드",
            "독일",
            "스위스",
            "안도라",
            "모나코",
            "오스트리아",
            "리히텐슈타인"
        ],
        [
            //오세아니아
            "나우루",
            "뉴질랜드",
            "마셜 제도",
            "미크로네시아 연방",
            "바누아투",
            "사모아",
            "솔로몬 제도",
            "오스트레일리아",
            "키리바시",
            "통가",
            "투발루",
            "파푸아뉴기니",
            "팔라우",
            "피지"
        ]
    ]
    updateInfo("게임이 시작되었습니다! 나라를 입력하십시오!");
    document.getElementById("list").innerHTML = "대답한 나라 목록: <br>";
    var countryList = [];
    var continentCheckBox = document.getElementsByClassName("continent");
    var aiAnswer, playerAnswer;
    var i, j;
    var len;

    for (i = 0; i < continentCheckBox.length; i++) {
        if (continentCheckBox[i].checked) {
            for (j = 0; j < countryNames[i].length; j++)
                countryList.push(countryNames[i][j]);
        }
    }
    len = countryList.length;

    document.getElementById("quit").onclick = function () {
        //updateInfo("앙 개꿀디! 내가 이겼다! 다시할라면 '게임 시작' 버튼 다시 눌러라~~");
        updateInfo("총 " + len + "개 국가 중 " + (len - countryList.length) + "개를 맞추셨습니다. 게임을 다시 시작하려면 '게임 시작' 버튼을 다시 누르십시오.");
        document.getElementById("list").innerHTML = `대답하지 못한 국가 목록: <br>${countryList.join(', ')}`;
        window.stop();
    }

    document.getElementById("submit").onclick = function process() {
        playerAnswer = document.getElementById("answer").value;
        document.getElementById("answer").value = "";
        for (i = 0; i < countryList.length; i++) {
            if (playerAnswer == countryList[i]) {
                countryList.splice(i, 1);
                console.log(countryList)
                document.getElementById("list").append(`${playerAnswer}, `);
                if (countryList.length <= 1) {
                    document.getElementById("list").append(countryList[0]);
                    updateInfo(`당신이 ${len}개의 나라를 모두 말했습니다! 당신이 이겼습니다! 게임을 다시 시작하려면 '게임 시작' 버튼을 다시 누르십시오.`);
                    return;
                }
                updateInfo(playerAnswer + "라고요? 그러면 저는 <b>" + countryList[aiAnswer = Math.floor(Math.random() * countryList.length)] + "</b> 하겠습니다!" + ` (${(len - countryList.length) + 1}/${len})`);
                document.getElementById("list").append(`${countryList[aiAnswer]}, `);
                countryList.splice(aiAnswer, 1);
                return;
            }
        }
        updateInfo(playerAnswer + "는 존재하지 않는 나라이거나 이미 사용한 나라입니다.");
    }

    document.oninput("{ENTER}")
}

document.getElementById("answer").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submit").click();
    }
});

// window.addEventListener("load", function () {
//     var elements = document.getElementsByClassName("rainbow");
//     for (let i = 0; i < elements.length; i++) {
//         generateRainbowText(elements[i]);
//     }
// });

// function generateRainbowText(element) {
//     var text = element.innerText;
//     element.innerHTML = "";
//     for (let i = 0; i < text.length; i++) {
//         let charElem = document.createElement("span");
//         charElem.style.color = "hsl(" + (360 * i / text.length) + ",80%,50%)";
//         charElem.innerHTML = text[i];
//         element.appendChild(charElem);
//     }
// }