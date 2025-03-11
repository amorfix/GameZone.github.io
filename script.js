// Функция для навигации между страницами
function navigateTo(pageId) {
  // Скрываем все страницы
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active");
  });

  // Показываем выбранную страницу
  document.getElementById(pageId).classList.add("active");

  // Прокручиваем вверх при смене страницы
  window.scrollTo(0, 0);
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

// Инициализация интерактивных элементов при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
  // Подсветка активной вкладки в меню
  const currentPage = window.location.hash.slice(1) || "home";
  navigateTo(currentPage);

  // Дополнительная инициализация по необходимости
});
