function fact(n) {
    var fact = 1;
    for (; n > 0; n--)
        fact *= n;
    return fact;
}

function p(n, r) {
    return Math.floor(fact(n) / fact(n - r));
}

function c(n, r) {
    return Math.floor(p(n, r) / fact(n));
}

function task() {
    var selMenu = document.getElementById("combSelection");
    var n = document.getElementById("n").value;
    var r = document.getElementById("r").value;
    var result = document.getElementById("result");
    var sel;
    var str = "";

    for (i = 0; i < selMenu.options.length; i++) {
        if (selMenu.options[i].selected == true) {
            sel = selMenu.options[i].value;
            break;
        }
    }

    switch (sel) {
        case 'p':
            str = "<sub>" + n + "</sub>P" + "<sub>" + r + "</sub> = " + p(n, r);
            break;
        case 'c':
            str = "<sub>" + n + "</sub>C" + "<sub>" + r + "</sub> = " + c(n, r);
            break;
        case 'h':
            str = "<sub>" + n + "</sub>H" + "<sub>" + r + "</sub> = " + c(n + r - 1, r);
            break;
        case 'pi':
            str = "<sub>" + n + "</sub>Π" + "<sub>" + r + "</sub> = " + Math.pow(n, r);
            break;
        default:
            return -1;
    }

    result.innerHTML = str;
    return 0;
}