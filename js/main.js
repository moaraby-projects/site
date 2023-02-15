//selectors
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

//click menu bar
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}


//scroll window
window.onscroll = () => {

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');


    //add or remove class active in nanBar
    let navLinks = document.querySelectorAll('header .navbar a');

    navLinks.forEach(link => {

        let top = scrollY;

        console.log(top)
        if (top > 890) {
            link.classList.remove('active');
            if (link.className === 'dishes') {
                link.classList.add('active')
            }
        } else {
            link.classList.remove('active');
            if (link.className === 'home') {
                link.classList.add('active')
            }
        }
        if (top > 1900) {
            link.classList.remove('active');
            if (link.className === 'about') {
                link.classList.add('active')
            }
        }
        if (top > 2636) {
            link.classList.remove('active');
            if (link.className === 'menu') {
                link.classList.add('active')
            }
        }
        if (top > 3800) {
            link.classList.remove('active');
            if (link.className === 'review') {
                link.classList.add('active')
            }
        }
        if (top > 4000) {
            link.classList.remove('active');
            if (link.className === 'order') {
                link.classList.add('active')
            }
        }

    })
}

//click search icon
document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}
//click close foe search icon
document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}

//selector wrapper review slider
let wrapper = document.querySelector('.review .review-slider .wrapper')

let pressed = false;
let startX = 0;

//chk wrapper clicker mouseDown
wrapper.addEventListener('mousedown', function (e) {
    pressed = true;
    startX = e.clientX;
    this.style.cursor = 'grabbing';
})

//chk wrapper clicker mouseLeave
wrapper.addEventListener('mouseleave', function (e) {
    pressed = false;
})

//chk window clicker mouseUp
window.addEventListener('mouseup', function (e) {
    pressed = false;
    wrapper.style.cursor = 'grab';
})

//chk wrapper clicker mouseLeave
wrapper.addEventListener('mousemove', function (e) {
    if (!pressed) {
        return
    }

    this.scrollLeft += startX - e.clientX;
})

//selector wrapper review slider
let homeWrapper = document.querySelector('.home .home-slider .wrapper');

let btnOne = document.querySelector('.home .home-slider .before');
let btnTwo = document.querySelector('.home .home-slider .after');

btnOne.onclick = function (e) {
    homeWrapper.scrollLeft -= 1500;

    if (homeWrapper.scrollLeft = 3600) {
        homeWrapper.scrollLeft = 0;
        console.log('yes')
    }
}
btnTwo.onclick = function (e) {
    homeWrapper.scrollLeft += 1500;
}

//for window onload
window.onload = function runLoader () {
    setInterval(function loader () {
        document.querySelector('.loader-container').classList.add('runLoader')
    }, 3000)
}










//select element ::before for DOM
// let btnOne = document.querySelector('.review-slider .before');
// let btnTwo = document.querySelector('.review-slider .after');

// btnOne.onclick = function (e) {
//     wrapper.scrollLeft -= 500;
// }
// btnTwo.onclick = function (e) {
//     wrapper.scrollLeft += 500;
// }