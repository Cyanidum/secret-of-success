
//Реализация табов

const tabsBtn = document.querySelectorAll(".questions__content");
const tabsItems = document.querySelectorAll(".popups__content");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function (e) {
        e.preventDefault();
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab")
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('active')) {
        tabsBtn.forEach(function (item) {
            item.classList.remove('active');
        });
    
        tabsItems.forEach(function (item) {
            item.classList.remove('active');
        });
    
        currentBtn.classList.add('active');
        currentTab.classList.add('active');
        }
    });
}


// Реализация swiper-slider

const firstSwiper = new Swiper("#mainSlider", {
    effect: 'slide',
    slidesPerView: 2,
    grabCursor: true,
    spaceBetween: 12,
    breakpoints: {
        900: {
            loop: false,
            slidesPerView: 6,
            spaceBetween: 0
        },
        600: {
            loop: false,
            slidesPerView: 4,
            spaceBetween: 12
        }
    }

});

// Реализация аккордиона

document.querySelectorAll('.popups__question').forEach((el) => {
    el.addEventListener('click', () => {
        let content = el.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null
        } else {
            content.style.maxHeight = content.scrollHeight + 'px'
        }
    })
});
