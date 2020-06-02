const values = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function toBase_n(n, base) {
	var i, str = "";
	n = parseInt(n);
	for (i = 1; 1; i++) {
		if (Math.pow(base, i) <= n && Math.pow(base, i + 1) > n) {
			break;
		}
	}

	for (; i >= 0; i--) {
		digit = 0;
		while (n >= Math.pow(base, i)) {
			n -= Math.pow(base, i);
			digit++;
		}
		str += values[digit];
	};
	return str;
}

function toDecimal(n, base) {
	n = n.toString();
	var len = n.length, result = 0;
	var i, j;

	for (i = len - 1; i >= 0; i--) {
		for (j = 0; j < base; j++) {
			if (values[j] == n[i]) {
				result += j * Math.pow(base, len - i - 1);
			}
		}
	}

	return result;
}

function f() {
	var n = document.getElementById("inputn").value;
	var ib = document.getElementById("inputbase").value;
	var ob = document.getElementById("outputbase").value;
	document.getElementById("result").innerHTML = toBase_n(toDecimal(n, ib), ob);
}