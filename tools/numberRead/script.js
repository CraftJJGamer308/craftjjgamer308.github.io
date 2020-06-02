const number = ['일', '이', '삼', '사', '오', '육', '칠', '팔', '구'];
const digit = ['', '만', '억', '조', '경', '해', '자', '양', '구',
    '간', '정', '재', '극', '항하사',
    '아승기', '나유타', '불가사의', '무량대수'
];

function readNum(n) {
    var str = "";
    var digit;
    while (n.length < 4) {
        n = ['0', ...n];
    }
    if (n[0] != 0) {
        digit = n[0];
        str += number[digit - 1] + '천';
    }
    if (n[1] != 0) {
        digit = n[1];
        str += number[digit - 1] + '백';
    }
    if (n[2] != 0) {
        digit = n[2];
        str += number[digit - 1] + '십';
    }
    if (n[3] != 0) {
        digit = n[3];
        str += number[digit - 1];
    }
    return str;
}

function task() {
    document.getElementById('result').innerHTML = '';
    var num = document.getElementById('number').value;
    var splittednum = [];
    
    for (var i = num.length; i > 0; i -= 4) {
        //alert(num.substring(i, i - 4));
        splittednum.push(num.substring(i, i - 4));
    }

    splittednum.reverse();

    for (i = 0; i < splittednum.length; i++) {
        if (splittednum[i] != '0000')
            document.getElementById('result').append(readNum(splittednum[i]) + digit[splittednum.length - 1 - i] + ' ');
    }

    return 0;
}