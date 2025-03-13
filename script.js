// Функция для навигации между страницами
function navigateTo(pageId) {
  // Скрываем все страницы
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active");
  });

  // Показываем выбранную страницу
  document.getElementById(pageId).classList.add("active");

  // Закрываем мобильное меню при переходе
  document.querySelector("nav").classList.remove("active");
  document.querySelector(".mobile-menu-toggle").classList.remove("active");

  // Прокручиваем вверх при смене страницы
  window.scrollTo(0, 0);
}

// Функция для переключения мобильного меню
function toggleMobileMenu() {
  const nav = document.querySelector("nav");
  const toggle = document.querySelector(".mobile-menu-toggle");

  nav.classList.toggle("active");
  toggle.classList.toggle("active");

  // Блокируем/разблокируем прокрутку страницы
  if (nav.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}

// Функции для отображения информации об игровых зонах
function showZoneInfo(zoneType) {
  let modalId = "";

  switch (zoneType) {
    case "pc":
      modalId = "pcZoneModal";
      break;
    case "console":
      modalId = "consoleZoneModal";
      break;
    case "vr":
      modalId = "vrZoneModal";
      break;
    case "vip":
      modalId = "vipZoneModal";
      break;
  }

  if (modalId) {
    document.getElementById(modalId).classList.add("active");
    document.body.style.overflow = "hidden"; // Блокируем прокрутку страницы
  }
}

// Функции для отображения информации о турнирах
function showTournamentInfo(tournamentType) {
  let modalId = "";

  switch (tournamentType) {
    case "csgo":
      modalId = "csgoTournamentModal";
      break;
    case "dota":
      modalId = "dotaTournamentModal";
      break;
    case "fifa":
      modalId = "fifaTournamentModal";
      break;
    case "fortnite":
      modalId = "fortniteTournamentModal";
      break;
  }

  if (modalId) {
    document.getElementById(modalId).classList.add("active");
    document.body.style.overflow = "hidden"; // Блокируем прокрутку страницы
  }
}

// Функция для закрытия модальных окон
function closeModal(modalId) {
  document.getElementById(modalId).classList.remove("active");
  document.body.style.overflow = "auto"; // Разблокируем прокрутку страницы
}

// Валидация формы обратной связи
function validateForm() {
  const nameInput = document.querySelector('input[placeholder="Ваше имя"]');
  const emailInput = document.querySelector('input[placeholder="Email"]');
  const phoneInput = document.querySelector('input[placeholder="Телефон"]');
  const messageInput = document.querySelector(
    'textarea[placeholder="Ваше сообщение"]'
  );

  let isValid = true;

  // Проверяем, что имя заполнено
  if (!nameInput.value.trim()) {
    nameInput.style.borderColor = "#ff0000";
    isValid = false;
  } else {
    nameInput.style.borderColor = "rgba(0, 255, 255, 0.3)";
  }

  // Простая проверка email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailInput.value.trim() || !emailRegex.test(emailInput.value)) {
    emailInput.style.borderColor = "#ff0000";
    isValid = false;
  } else {
    emailInput.style.borderColor = "rgba(0, 255, 255, 0.3)";
  }

  // Проверяем, что сообщение заполнено
  if (!messageInput.value.trim()) {
    messageInput.style.borderColor = "#ff0000";
    isValid = false;
  } else {
    messageInput.style.borderColor = "rgba(0, 255, 255, 0.3)";
  }

  if (isValid) {
    // Здесь можно добавить код для отправки формы
    alert("Форма отправлена! Мы скоро свяжемся с вами.");

    // Очистка полей после отправки
    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    messageInput.value = "";
  }

  return isValid;
}

// Инициализация интерактивных элементов при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
  // Подсветка активной вкладки в меню
  const currentPage = window.location.hash.slice(1) || "home";
  navigateTo(currentPage);

  // Добавляем обработчик для мобильного меню
  document
    .querySelector(".mobile-menu-toggle")
    .addEventListener("click", toggleMobileMenu);

  // Добавляем обработчик для кнопки отправки формы
  document
    .querySelector(".form-submit")
    .addEventListener("click", function (e) {
      e.preventDefault();
      validateForm();
    });

  // Закрываем мобильное меню при клике по ссылке
  document.querySelectorAll("nav ul li a").forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        toggleMobileMenu();
      }
    });
  });

  // Обработчик изменения размера окна
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      document.querySelector("nav").classList.remove("active");
      document.querySelector(".mobile-menu-toggle").classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });

  // Закрытие модального окна при клике вне содержимого
  document.querySelectorAll(".info-modal").forEach((modal) => {
    modal.addEventListener("click", function (event) {
      if (event.target === this) {
        this.classList.remove("active");
        document.body.style.overflow = "auto";
      }
    });
  });

  // Обработка клавиши Escape для закрытия модальных окон
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      document.querySelectorAll(".info-modal.active").forEach((modal) => {
        modal.classList.remove("active");
        document.body.style.overflow = "auto";
      });

      // Закрываем мобильное меню при нажатии Escape
      if (document.querySelector("nav").classList.contains("active")) {
        toggleMobileMenu();
      }
    }
  });

  // Анимация при наведении для карточек
  document.querySelectorAll(".zone-card, .tournament-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.querySelector(".card-image").style.filter = "brightness(0.7)";
    });

    card.addEventListener("mouseleave", function () {
      this.querySelector(".card-image").style.filter = "brightness(1)";
    });
  });
});
