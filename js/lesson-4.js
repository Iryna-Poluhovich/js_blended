// Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
const btnClick = document.querySelector("#alertButton");
const input = document.querySelector("#alertButton");



btnClick.addEventListener("click", showValue());

function showValue(){
    return alert(input.value);
}

// Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
// Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
document.getElementById("swapButton").addEventListener("click", function () {
    const leftInput = document.getElementById("leftSwapInput");
    const rightInput = document.getElementById("rightSwapInput");

    // Здійснюємо обмін значеннями
    const temp = leftInput.value;
    leftInput.value = rightInput.value;
    rightInput.value = temp;
  });

  // При кліку на кнопку текст параграфів змінюється на їх порядковий номер
  document.getElementById("changeBtn").addEventListener("click", function () {
    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach((p, index) => {
      p.textContent = index + 1;
    });
  });
  // Кнопка "Приховати" ховає текст і замінює назву кнопки на
// "Розкрити", при повторному натисканні текст знову стає доступним
// і кнопка набуває початкового вигляду.
const input1 = document.getElementById("passwordInput");
  const button = document.getElementById("passwordButton");

  button.addEventListener("click", function () {
    if (input1.type === "text") {
      input1.type = "password";
      button.textContent = "Розкрити";
    } else {
      input1.type = "text";
      button.textContent = "Приховати";
    }
  });

  // Кнопка "Зменшити" робить квадрат менше на 10 пікселів, кнопка
// "Збільшити" - більше на 10 пікселів.
const box = document.getElementById("box");
  const increaseBtn = document.getElementById("increase");
  const decreaseBtn = document.getElementById("decrease");

  increaseBtn.addEventListener("click", () => {
    resizeBox(10);
  });

  decreaseBtn.addEventListener("click", () => {
    resizeBox(-10);
  });

  function resizeBox(delta) {
    const currentWidth = box.offsetWidth;
    const currentHeight = box.offsetHeight;
    const newSize = Math.max(10, currentWidth + delta); // мінімум 10px

    box.style.width = newSize + "px";
    box.style.height = newSize + "px";
  }

  // Натиснувши кнопку "Подвоювати", збільшити значення у кожному елементі списку у 2 рази
  document.getElementById("double").addEventListener("click", function () {
    const items = document.querySelectorAll(".listItem");
    items.forEach(item => {
      const number = parseInt(item.textContent, 10);
      item.textContent = number * 2;
    });
  });