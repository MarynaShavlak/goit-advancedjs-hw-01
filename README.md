# goit-advancedjs-hw-01

Домашня робота до теми «Модульність коду» курсу Advanced JavaScript.

- [Жива сторінка](https://marynashavlak.github.io/goit-advancedjs-hw-01/)

## Завдання

1. **Галерея зображень** (`src/1-gallery.html`, `src/js/1-gallery.js`) —
   галерея, розмітка якої створюється динамічно з масиву даних. Перегляд
   зображень у модальному вікні реалізовано за допомогою бібліотеки
   [SimpleLightbox](https://simplelightbox.com/), встановленої через npm. Підпис
   з атрибута `alt` з'являється знизу через 250 мс після відкриття.
2. **Форма зворотного зв'язку** (`src/2-form.html`, `src/js/2-form.js`) — дані
   полів зберігаються у `localStorage` під ключем `feedback-form-state` та
   відновлюються після перезавантаження сторінки.

## Запуск

```bash
npm install
npm run dev
```

Збірка продакшн-версії: `npm run build`. Деплой на GitHub Pages виконується
автоматично через GitHub Actions при пуші в гілку `main`.
