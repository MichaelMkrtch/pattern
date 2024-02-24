const form = document.querySelector('form');
const result = document.querySelector('.result');
const resetBtn = document.querySelector('.reset-btn');

function submitHandler(event) {
  event.preventDefault();

  const row = event.target[0].value;

  const arr = [...row.match(/[0-9]+/g)];

  const numbers = arr.map(Number);

  const total = numbers.reduce(
    (prevNumber, curNumber) => prevNumber + curNumber,
    0
  );

  result.textContent = total;
}

function resetHandler() {
  result.textContent = 0;
}

form.addEventListener('submit', submitHandler);
resetBtn.addEventListener('click', resetHandler);
