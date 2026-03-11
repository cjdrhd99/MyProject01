
let sideContent = document.querySelector(".side_content");
let shopMenu = document.querySelector(".show_shop");
let archiveMenu = document.querySelector(".show_archive");

// console.log(sideContent);
// console.log(shopMenu);

let category = document.querySelector(".category")

// console.log(category);

category.addEventListener('click', function(){
    sideContent.classList.add('menu_block');
    shopMenu.classList.add('show_none');
    archiveMenu.classList.add('show_none');
})

let menuCloseBtn = document.querySelector(".menu_close");

menuCloseBtn.addEventListener('click', function(){
    sideContent.classList.remove('menu_block');

    sideMiddle.classList.remove('side_none');
    sideBottom.classList.remove('side_none');
    shopMenu.classList.add('show_none');
})

let shopBtn = document.querySelector(".side_shop");
let archiveBtn = document.querySelector(".side_archive");
let sideMiddle = document.querySelector(".side_middle");
let sideBottom = document.querySelector(".side_bottom");

let backArrow1 = shopMenu.firstElementChild
let backArrow2 = archiveMenu.firstElementChild

// console.log(backArrow1);
// console.log(backArrow2);
// console.log(shopBtn);
// console.log(archiveBtn);
// console.log(sideMiddle);
// console.log(sideBottom);

shopBtn.addEventListener('click', function(){
    sideMiddle.classList.add('side_none');
    sideBottom.classList.add('side_none');
    shopMenu.classList.remove('show_none');
})

archiveBtn.addEventListener('click', function(){
    sideMiddle.classList.add('side_none');
    sideBottom.classList.add('side_none');
    archiveMenu.classList.remove('show_none');
})

backArrow1.addEventListener('click', function(){
    sideMiddle.classList.remove('side_none');
    sideBottom.classList.remove('side_none');

    shopMenu.classList.add('show_none');
})

backArrow2.addEventListener('click', function(){
    sideMiddle.classList.remove('side_none');
    sideBottom.classList.remove('side_none');

    archiveMenu.classList.add('show_none');
})


let wish = document.querySelectorAll(".wish_btn")

wish.forEach((btn) => {
    // console.log(btn);

    btn.addEventListener('click', function(){
        alert("로그인 후 관심상품 등록을 해주세요.");
    })
})