const iteration = 5;

function mulmod(a, b, mod) {
    var x = 0, y = a % mod;
    while (b > 0) {
        if (b % 2 == 1) {
            x = (x + y) % mod;
        }
        y = (y * 2) % mod;
        b /= 2;
    }
    return x % mod;
}
/*
 * modular exponentiation
 */
function modulo(base, exponent, mod) {
    var x = 1;
    var y = base;
    while (exponent > 0) {
        if (exponent % 2 == 1)
            x = (x * y) % mod;
        y = (y * y) % mod;
        exponent = exponent / 2;
    }
    return x % mod;
}

/*
 * Miller-Rabin Primality test, iteration signifies the accuracy
 */
function Miller(p, iteration) {

    var i;
    var s;
    if (p < 2) {
        return 0;
    }
    if (p != 2 && p % 2 == 0) {
        return 0;
    }
    s = p - 1;
    while (s % 2 == 0) {
        s /= 2;
    }
    for (i = 0; i < iteration; i++) {
        var a = Math.floor(Math.random()) % (p - 1) + 1, temp = s;
        var mod = modulo(a, temp, p);
        while (temp != p - 1 && mod != 1 && mod != p - 1) {
            mod = mulmod(mod, mod, p);
            temp *= 2;
        }
        if (mod != p - 1 && temp % 2 == 0) {
            return 0;
        }
    }
    return 1;
}

function prime(x) {
    var i;
    var count = 0;

    for (i = 1; i <= Math.sqrt(x); i += 1) {
        if (x % i == 0)
            count += 1;
        if (count >= 2)
            return false;
    }
    return true;
}


function factor() {
    var x = document.getElementById("num").value,
        i = 2,
        exp = 0;
    var str = x + " = ";

    while (x != 1) {
        if (i > 1000000 ? prime(i) : Miller(i, iteration)) {
            if (x % i == 0) {
                while (x % i == 0) {
                    x /= i;
                    exp += 1;
                }
                str += (i + "<sup>" + (exp != 1 ? exp : '') + "</sup>" + " × ");
                exp = 0;
            }
        }
        i += 1;
    }

    str = str.slice(0, -2);
    document.getElementById("result").innerHTML = str;
}
