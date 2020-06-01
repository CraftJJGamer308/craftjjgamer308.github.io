function sol1(a, b, c) {
    return [(-b + Math.sqrt(b * b - 4 * a * c)), (2 * a)];
}

function sol2(a, b, c) {
    return [(-b - Math.sqrt(b * b - 4 * a * c)), (2 * a)];
}

function prep(a) {
    if(a<0)
        return '-';
    else 
        return '+'
}

function reduction(x) {
    var a = -x[0];
    var b = x[1];
    var i = 1;

    if(a != Math.floor(a) || b != Math.floor(b))
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
        return prep(a/b) + Math.abs(a) + '/' + Math.abs(b);
}


function task() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    var res = document.getElementById('result');
    res.innerHTML=(a + '(x' + reduction(sol1(a, b, c)) + ')(x' + reduction(sol2(a, b, c)) + ')');
    return;
}