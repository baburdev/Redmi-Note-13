const container = document.querySelector('.container');
const pic1 = document.querySelector('.pic1');
const pic2 = document.querySelector('.pic2');
const pic3 = document.querySelector('.pic3');
const pic4 = document.querySelector('.right-pic');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const img4 = document.querySelector('.img4');
const allColors = document.querySelector('.all-colors');
const blue = document.querySelector('.blue');
const white = document.querySelector('.white');
const black = document.querySelector('.black');
const allTypes = document.querySelector('.all-types');
const type1 = document.querySelector('.type1');
const type2 = document.querySelector('.type2');
const type3 = document.querySelector('.type3');
const minus = document.querySelector('.minus');
const num = document.querySelector('.number');
const plus = document.querySelector('.plus');
const link = document.querySelector('.link1');

// Increment and decrement with number

let a = 1;

plus.addEventListener('click', () => {
    a++;
    num.innerText = a;
});

minus.addEventListener('click', () => {
    if(a > 1){
        a--;
        num.innerText = a;
    } 
});

// Selecting different type of storages

type1.addEventListener('click', () => {
    type1.classList.add('all-types-new');
    type2.classList.remove('all-types-new');
    type3.classList.remove('all-types-new');
});

type2.addEventListener('click', () => {
    type2.classList.add('all-types-new');
    type1.classList.remove('all-types-new');
    type3.classList.remove('all-types-new');
});

type3.addEventListener('click', () => {
    type3.classList.add('all-types-new');
    type2.classList.remove('all-types-new');
    type1.classList.remove('all-types-new');
});

// Color changing, Selecting divs and changing the pictures

// Blue

blue.addEventListener('click', () => {
    container.classList.add('container-blue');
    container.classList.remove('container-white', 'container');

    blue.classList.add('all-colors-new');
    black.classList.remove('all-colors-new');    
    white.classList.remove('all-colors-new');
    
    img1.src = 'img/blue/front.jpg';
    img2.src = 'img/blue/back.jpg';
    img3.src = 'img/blue/side.jpg';
    img4.src = 'img/blue/phone.jpg';

    pic1.classList.remove('pics-new');
    pic2.classList.remove('pics-new');
    pic3.classList.remove('pics-new');

    link.classList.add('link-blue');
    link.classList.remove('link1', 'link-white');

    pic1.addEventListener('click', () => {
        pic1.classList.add('pics-new');
        pic2.classList.remove('pics-new');
        pic3.classList.remove('pics-new');
    
        if(img4.src == 'img/blue/front.jpg'){
            img4.src = 'img/blue/phone.jpg';
        } else {
            img4.src = 'img/blue/front.jpg';
        }
    });
    
    pic2.addEventListener('click', () => {
        pic2.classList.add('pics-new');
        pic1.classList.remove('pics-new');
        pic3.classList.remove('pics-new');
    
        if(img4.src == 'img/blue/back.jpg'){
            img4.src = 'img/blue/phone.jpg';
        } else {
            img4.src = 'img/blue/back.jpg';
        }
    });
    
    pic3.addEventListener('click', () => {
        pic3.classList.add('pics-new');
        pic1.classList.remove('pics-new');
        pic2.classList.remove('pics-new');
    
        if(img4.src == 'img/blue/side.jpg'){
            img4.src = 'img/blue/phone.jpg';
        } else {
            img4.src = 'img/blue/side.jpg';
        }
    });
    
    pic4.addEventListener('click', () => {
        pic1.classList.remove('pics-new');
        pic2.classList.remove('pics-new');
        pic3.classList.remove('pics-new');
    
        img4.src = 'img/blue/phone.jpg'
    });
});

// White

white.addEventListener('click', () => {
    container.classList.add('container-white');
    container.classList.remove('container-blue', 'container');

    white.classList.add('all-colors-new');
    black.classList.remove('all-colors-new');    
    blue.classList.remove('all-colors-new');
    
    img1.src = 'img/white/front.jpg';
    img2.src = 'img/white/back.jpg';
    img3.src = 'img/white/side.jpg';
    img4.src = 'img/white/phone.jpg';

    pic1.classList.remove('pics-new');
    pic2.classList.remove('pics-new');
    pic3.classList.remove('pics-new');

    link.classList.add('link-white');
    link.classList.remove('link-blue', 'link1');

    pic1.addEventListener('click', () => {
        pic1.classList.add('pics-new');
        pic2.classList.remove('pics-new');
        pic3.classList.remove('pics-new');
    
        if(img4.src == 'img/white/front.jpg'){
            img4.src = 'img/white/phone.jpg';
        } else {
            img4.src = 'img/white/front.jpg';
        }
    });
    
    pic2.addEventListener('click', () => {
        pic2.classList.add('pics-new');
        pic1.classList.remove('pics-new');
        pic3.classList.remove('pics-new');
    
        if(img4.src == 'img/white/back.jpg'){
            img4.src = 'img/white/phone.jpg';
        } else {
            img4.src = 'img/white/back.jpg';
        }
    });
    
    pic3.addEventListener('click', () => {
        pic3.classList.add('pics-new');
        pic1.classList.remove('pics-new');
        pic2.classList.remove('pics-new');
    
        if(img4.src == 'img/black/side.jpg'){
            img4.src = 'img/white/phone.jpg';
        } else {
            img4.src = 'img/white/side.jpg';
        }
    });
    
    pic4.addEventListener('click', () => {
        pic1.classList.remove('pics-new');
        pic2.classList.remove('pics-new');
        pic3.classList.remove('pics-new');
    
        img4.src = 'img/white/phone.jpg'
    });
});

// Black

black.addEventListener('click', () => {
    container.classList.add('container');
    container.classList.remove('container-blue', 'container-white');

    black.classList.add('all-colors-new');
    blue.classList.remove('all-colors-new');    
    white.classList.remove('all-colors-new');  
    
    img1.src = 'img/black/front.jpg';
    img2.src = 'img/black/back.jpg';
    img3.src = 'img/black/side.jpg';
    img4.src = 'img/black/phone.jpg';

    pic1.classList.remove('pics-new');
    pic2.classList.remove('pics-new');
    pic3.classList.remove('pics-new');

    link.classList.add('link1');
    link.classList.remove('link-blue', 'link-white');

    pic1.addEventListener('click', () => {
        pic1.classList.add('pics-new');
        pic2.classList.remove('pics-new');
        pic3.classList.remove('pics-new');
    
        if(img4.src == 'img/black/front.jpg'){
            img4.src = 'img/black/phone.jpg';
        } else {
            img4.src = 'img/black/front.jpg';
        }
    });
    
    pic2.addEventListener('click', () => {
        pic2.classList.add('pics-new');
        pic1.classList.remove('pics-new');
        pic3.classList.remove('pics-new');
    
        if(img4.src == 'img/black/back.jpg'){
            img4.src = 'img/black/phone.jpg';
        } else {
            img4.src = 'img/black/back.jpg';
        }
    });
    
    pic3.addEventListener('click', () => {
        pic3.classList.add('pics-new');
        pic1.classList.remove('pics-new');
        pic2.classList.remove('pics-new');
    
        if(img4.src == 'img/black/side.jpg'){
            img4.src = 'img/black/phone.jpg';
        } else {
            img4.src = 'img/black/side.jpg';
        }
    });
    
    pic4.addEventListener('click', () => {
        pic1.classList.remove('pics-new');
        pic2.classList.remove('pics-new');
        pic3.classList.remove('pics-new');
    
        img4.src = 'img/black/phone.jpg'
    });
});

// Unselect the divs after changing the color it belongs to black or #000

pic1.addEventListener('click', () => {
    pic1.classList.add('pics-new');
    pic2.classList.remove('pics-new');
    pic3.classList.remove('pics-new');

    if(img4.src == 'img/black/front.jpg'){
        img4.src = 'img/black/phone.jpg';
    } else {
        img4.src = 'img/black/front.jpg';
    }
});

pic2.addEventListener('click', () => {
    pic2.classList.add('pics-new');
    pic1.classList.remove('pics-new');
    pic3.classList.remove('pics-new');

    if(img4.src == 'img/black/back.jpg'){
        img4.src = 'img/black/phone.jpg';
    } else {
        img4.src = 'img/black/back.jpg';
    }
});

pic3.addEventListener('click', () => {
    pic3.classList.add('pics-new');
    pic1.classList.remove('pics-new');
    pic2.classList.remove('pics-new');

    if(img4.src == 'img/black/side.jpg'){
        img4.src = 'img/black/phone.jpg';
    } else {
        img4.src = 'img/black/side.jpg';
    }
});

pic4.addEventListener('click', () => {
    pic1.classList.remove('pics-new');
    pic2.classList.remove('pics-new');
    pic3.classList.remove('pics-new');

    img4.src = 'img/black/phone.jpg'
});  