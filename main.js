const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,  
    loop: true,       
    autoplay: { delay: 5000 }, 
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const navSwiper = new Swiper(".navSwiper", {
    slidesPerView: 3,
    freeMode: true,
    spaceBetween: 10,
});

// Product filtering logic
document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", () => {
        let filter = button.getAttribute("data-filter");
        
        document.querySelectorAll(".product").forEach(item => {
            if (filter === "hammasi" || item.classList.contains(filter)) {
                item.style.display = "block"; 
            } else {
                item.style.display = "none"; 
            }
        });
    });
});

document.querySelector('[data-filter="hammasi"]').click();

// Translations for different languages
const translations = {
    uz: {
        welcome: "Xush kelibsiz",
        username: "Abdulhafiz",
        addToCart: "Savatga Qo'shish",
        all: "Hammasi",
        scooters: "Samokatlar",
        bicycles: "Velosipedlar",
        motorcycles: "Mototsikillar",
        parts: "Zapchastlar",
    },
    ru: {
        welcome: "Добро пожаловать",
        username: "Абдулхафиз",
        addToCart: "Добавить в корзину",
        all: "Все",
        scooters: "Самокаты",
        bicycles: "Велосипеды",
        motorcycles: "Мотоциклы",
        parts: "Запчасти",
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const flags = document.querySelectorAll(".flag-image");

    function changeLanguage(lang) {
        // Ensure the language exists in translations
        if (!translations[lang]) {
            lang = "uz";  
        }

        document.querySelector(".header-top__info p").textContent = translations[lang].welcome;
        document.querySelector(".header-top__info h3").textContent = translations[lang].username;
        document.querySelector(".link1").textContent = translations[lang].all;
        document.querySelector(".link2").textContent = translations[lang].scooters;
        document.querySelector(".link3").textContent = translations[lang].bicycles;
        document.querySelector(".link4").textContent = translations[lang].motorcycles;
        document.querySelector(".link5").textContent = translations[lang].parts;

        document.querySelectorAll(".addCart-button").forEach(button => {
            button.childNodes[0].textContent = translations[lang].addToCart + " ";
        });

        localStorage.setItem("language", lang);

        flags.forEach(flag => flag.classList.remove("active"));
        document.querySelector(`.flag-image[data-lang="${lang}"]`).classList.add("active");
    }

    const savedLang = localStorage.getItem("language") || "uz";
    changeLanguage(savedLang);

    flags.forEach(flag => {
        flag.addEventListener("click", function () {
            const selectedLang = this.dataset.lang;
            changeLanguage(selectedLang);
        });
    });
});
