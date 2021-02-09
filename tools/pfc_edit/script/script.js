function prime(x) {
    var i;
    var count = 0;
    if (x == 2)
        return true;

    for (i = 1; i <= Math.sqrt(x); i += 2) {
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
    var lim = Math.floor(Math.sqrt(x));
    var str = x + " = ";
    
    var elem = document.getElementById("bar");
    

    if (x < 2) {
        document.getElementById("result").innerHTML = "UNABLE TO PRIME FACTOR " + x;
        return;
    }

    document.getElementById("result").innerHTML = "CALCULATING ...";
    while (1) {
        if (x == 1) {
            break;
        }
        if (i > lim) {
            str += (x + " × ");
            break;
        }

        if (prime(i) == true) {
            if (x % i == 0) {
                while (x % i == 0) {
                    x /= i;
                    exp += 1;
                }
                str += (i + "<sup>" + (exp != 1 ? exp : '') + "</sup>" + " × ");
                exp = 0;
            }
        }
        i += (i == 2) ? 1 : 2;
        
        //elem.style.width = i * 300 / lim + "px";

        //1234123434234091
    }

    elem.style.width = 300;
    str = str.slice(0, -2);
    document.getElementById("result").innerHTML = str;
}