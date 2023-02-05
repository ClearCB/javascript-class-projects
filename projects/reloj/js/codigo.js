function updateAll() {
    let d = new Date();

    let h = d.getHours();
    let m = d.getMinutes()
    let s = d.getSeconds();

    updateDigit(h,"a1","a2");
    updateDigit(m,"b1","b2");
    updateDigit(s,"c1","c2");

    setTimeout(updateAll, 700);
}

function updateDigit(num, id1, id2) {
    let FirstDigit = Math.floor(num / 10);
    let Lastdigit = num % 10;

    document.getElementById(id1).src = "./img/" + FirstDigit + ".png" 
    document.getElementById(id2).src = "./img/" + Lastdigit + ".png" 
}

setTimeout(updateAll, 800);