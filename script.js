const form = document.querySelector('form');
const result = document.querySelector('.result');

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

form.addEventListener('submit', submitHandler);
