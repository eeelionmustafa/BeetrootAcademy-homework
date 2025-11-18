function compareNumbers(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}

function factorial(n) {
    if (n < 0) return null; 
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

function makeNumber(a, b, c) {
    return a * 100 + b * 10 + c;
}

function rectangleArea(width, length = width) {
    return width * length;
}

function isPerfect(num) {
    if (num <= 1) return false;
    
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) sum += i;
    }
    return sum === num;
}


function toSeconds(h, m, s) {
    return h * 3600 + m * 60 + s;
}

function fromSeconds(totalSeconds) {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    return formatTime(h, m, s);
}

function dateDifference(h1, m1, s1, h2, m2, s2) {
    const time1 = toSeconds(h1, m1, s1);
    const time2 = toSeconds(h2, m2, s2);

    const diff = Math.abs(time1 - time2);

    return fromSeconds(diff);
}

