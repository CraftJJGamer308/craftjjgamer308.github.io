function sol(a, b, c) {

    if (b * b - 4 * a * c >= 0)
        return [[(-b + Math.sqrt(b * b - 4 * a * c)), (2 * a)],
        [(-b - Math.sqrt(b * b - 4 * a * c)), (2 * a)]
        ];
    else 
        return -1;
}



function prep(a) {
    if (a < 0)
        return '-';
    else
        return '+'
}

function reduction(x) {
    var a = -x[0];
    var b = x[1];
    var i = 1;

    if (a != Math.floor(a) || b != Math.floor(b))
        return prep(a / b) + Math.abs(a / b);

    while (i <= a || i <= b) {
        if (a % i == 0 && b % i == 0) {
            a /= i;
            b /= i;
        }
        i += 1;
    }

    if (b == 1)
        return prep(a) + Math.abs(a);
    else
        return prep(a / b) + Math.abs(a) + '/' + Math.abs(b);
}


function task() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    var res = document.getElementById('result');
    if (sol(a, b, c) == -1) {
        res.innerHTML = 'no solution'
        return;
    }
        
    res.innerHTML = (a + '(x' + reduction(sol(a, b, c)[0]) + ')(x' + reduction(sol2(a, b, c)[1]) + ')');
    return;
}