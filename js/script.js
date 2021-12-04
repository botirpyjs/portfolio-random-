// reset tugmasi
let inp = document.querySelector('.inp');

function reset() {
    inp.value = '';
}


// Random tugmasi

let belgilar = `abdefghjlkmnopqrstuvhyzwcABDEFGHJLKMNOPQRSTUVHYZWC1234567890!@#$%^&*()_+-=/|?`

function parol() {
    // var son = parseInt(Math.random() * belgilar.length);
    // console.log(belgilar.length);
    // console.log(parseInt(son));
    var i=0;
    var parol='';
    while (i<8) {
        var son = parseInt(Math.random() * belgilar.length);
        parol += belgilar[son];
        i++;
        
    }

    document.querySelector('input').value = parol;
}

let belgilar1 = `abdefghjlkmnopqrstuvhyzwcABDEFGHJLKMNOPQRSTUVHYZWC`

function parol1() {
    var i=0;
    var parol='';
    while (i<8) {
        var son = parseInt(Math.random() * belgilar1.length);
        parol += belgilar1[son];
        i++;
        
    }

    document.querySelector('input').value = parol;
}

let belgilar2 = `!@#$%^&*()_+-=/|?`

function parol2() {
    var i=0;
    var parol='';
    while (i<8) {
        var son = parseInt(Math.random() * belgilar2.length);
        parol += belgilar2[son];
        i++;
        
    }

    document.querySelector('input').value = parol;
}

let belgilar3 = `1234567890`

function parol3() {
    var i=0;
    var parol='';
    while (i<8) {
        var son = parseInt(Math.random() * belgilar3.length);
        parol += belgilar3[son];
        i++;
        
    }

    document.querySelector('input').value = parol;
}

