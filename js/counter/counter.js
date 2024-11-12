// function startCounter(element, start, target) {
//    let currentNumber = start;
//    const step = start > target ? -1 : 1; // Определяем направление отсчёта

//    const intervalId = setInterval(() => {
//       element.textContent = currentNumber; // Обновляем значение в DOM

//       if (currentNumber === target) {
//          clearInterval(intervalId); // Останавливаем таймер
//          console.log(`Счётчик для ${target} завершён!`);
//       }

//       currentNumber += step; // Увеличиваем или уменьшаем значение
//    }, 0.001); // Шаг 0.1 секунда для плавного изменения
// }

// // Настраиваем Intersection Observer
// const observer = new IntersectionObserver((entries) => {
//    entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//          // Если элемент виден на экране
//          const start = parseInt(entry.target.dataset.start); // Стартовое значение
//          const target = parseInt(entry.target.dataset.target); // Целевое значение
//          startCounter(entry.target, start, target); // Запускаем счётчик
//          observer.unobserve(entry.target); // Отключаем наблюдение после запуска
//       }
//    });
// });

// // Подключаем Observer ко всем элементам с классом "counter"
// const counterElements = document.querySelectorAll('.counter-element');
// counterElements.forEach((element) => observer.observe(element));

function startCounter(element, start, target) {
   let currentNumber = start;
   const isLargeNumber = Math.abs(start - target) > 500; // Условие для быстрого счётчика
   const step = start > target ? -1 : 1; // Определяем направление отсчёта
   const speed = isLargeNumber ? 0.00001 : 200; // Быстрее, если число большое

   const intervalId = setInterval(() => {
      element.textContent = currentNumber; // Обновляем значение в DOM

      if (currentNumber === target) {
         clearInterval(intervalId); // Останавливаем таймер
         console.log(`Счётчик для ${target} завершён!`);
      }

      currentNumber += step; // Увеличиваем или уменьшаем значение
   }, speed); // Скорость меняется в зависимости от величины числа
}

// Настраиваем Intersection Observer
const observer = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
         // Если элемент виден на экране
         const start = parseInt(entry.target.dataset.start); // Стартовое значение
         const target = parseInt(entry.target.dataset.target); // Целевое значение
         startCounter(entry.target, start, target); // Запускаем счётчик
         observer.unobserve(entry.target); // Отключаем наблюдение после запуска
      }
   });
});

// Подключаем Observer ко всем элементам с классом "counter"
const counterElements = document.querySelectorAll('.counter-element');
counterElements.forEach((element) => observer.observe(element));
