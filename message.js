document.querySelectorAll(".back-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
        window.history.back();
    });
});


const translations = {
    uz: {
        welcome: "Xush kelibsiz",
        username: "Abdulhafiz",
        back: "Orqaga",
        contacts: "Kontaklar",
    },

    ru: {
        welcome: "Добро пожаловать",
        username: "Абдулхафиз",
        back: "Назад",
        contacts: "Контакты",
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
        document.querySelector(".back-btn").textContent = translations[lang].back;
        document.querySelector(".contacts-section__title").textContent = translations[lang].contacts;

  
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