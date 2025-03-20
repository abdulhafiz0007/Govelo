document.addEventListener("DOMContentLoaded", function () {
    const minusBtn = document.querySelector(".minusBtn");
    const plusBtn = document.querySelector(".plusBtn");
    const quantityText = document.querySelector(".count-btn");

    let quantity = 1; 

    plusBtn.addEventListener("click", function () {
        quantity++;
        quantityText.querySelector("p").innerText = quantity; 
    });

    minusBtn.addEventListener("click", function () {
        if (quantity > 1) {
            quantity--;
            quantityText.querySelector("p").innerText = quantity; 
        }
    });

    const cartPlusBtns = document.querySelectorAll(".cart-count-div .plusBtn");
    const cartMinusBtns = document.querySelectorAll(".cart-count-div .minusBtn");
    const cartTrashBtns = document.querySelectorAll(".cart-count-div .trash-icon");
    const cartTotalPrice = document.querySelector(".cart-order-priceDiv span");

    function updateTotalPrice() {
        let total = 0;
        document.querySelectorAll(".cart-product-price").forEach((priceElement, index) => {
            let itemPrice = parseInt(priceElement.innerText.replace(" so'm", ""));
            let quantity = parseInt(cartPlusBtns[index].previousElementSibling.innerText);
            total += itemPrice * quantity;
        });
        cartTotalPrice.innerText = total + " so'm";
    }

    cartPlusBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            let quantityElement = btn.previousElementSibling;
            let currentQuantity = parseInt(quantityElement.innerText);
            quantityElement.innerText = currentQuantity + 1;
            updateTotalPrice();
        });
    });

    cartMinusBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            let quantityElement = btn.nextElementSibling;
            let currentQuantity = parseInt(quantityElement.innerText);
            if (currentQuantity > 1) {
                quantityElement.innerText = currentQuantity - 1;
                updateTotalPrice();
            }
        });
    });

    cartTrashBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            let cartItem = btn.closest(".cart-list");
            cartItem.remove();
            updateTotalPrice();
        });
    });

    document.querySelectorAll(".back-btn").forEach((btn) => {
        btn.addEventListener("click", function () {
            window.history.back();
        });
    });
});

const translations = {
    uz: {
        welcome: "Xush kelibsiz",
        username: "Abdulhafiz",
        addToCart: "Savatga Qo'shish",
        message: "Mototsikl - bu ikki g‘ildirakli motorli transport vositasi bo‘lib, shaxsiy foydalanish, sport, sayohat va hatto yuk tashish uchun ishlatiladi. Ular tezkorligi, manevrliligi va yoqilg‘i tejamkorligi bilan ajralib turadi.",
        Left: "Qoldi 1",
        back: "Orqaga",
    },
    ru: {
        welcome: "Добро пожаловать",
        username: "Абдулхафиз",
        addToCart: "Добавить в корзину",
        message: "Мотоцикл - это двухколесное мототранспортное средство, которое используется для личного пользования, занятий спортом, путешествий и даже перевозки грузов. Они характеризуются скоростью, маневренностью и топливной экономичностью.",
        Left: "Oсталось 1",
        back: "Назад",
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const flags = document.querySelectorAll(".flag-image");

    function changeLanguage(lang) {
        if (!translations[lang]) {
            lang = "uz";  
        }

        document.querySelector(".header-top__info p").textContent = translations[lang].welcome;
        document.querySelector(".header-top__info h3").textContent = translations[lang].username;
        document.querySelector(".moto-desc").textContent = translations[lang].message;
        document.querySelector(".productTitle-div p").textContent = translations[lang].Left;
        document.querySelector(".back-btn").textContent = translations[lang].back;

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

