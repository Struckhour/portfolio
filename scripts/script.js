function jiggle() {
    if (!isRed) {
        jig.style.transform = 'rotate(80deg)';
        console.log('this is happening!');
        isRed = true;
    } else {
        jig.style.transform = 'rotate(0deg)';
        isRed = false;
    }
}

let isRed = false;
let jig = document.getElementById('subtitle');
jig.onclick = jiggle;