const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

function renderPoll(data) {
  pollAnswers.innerHTML = '';

  pollTitle.textContent = data.title;

  data.answers.forEach(answer => {
    const button = document.createElement('button');
    button.classList.add('poll__answer');
    button.textContent = answer;

    button.addEventListener('click', () => {
      alert('Спасибо, ваш голос засчитан!');
    });

    pollAnswers.appendChild(button);
  });
}

function loadPoll() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll', true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      const json = JSON.parse(xhr.responseText);

      renderPoll(json.data);
    } 
  };

  xhr.send();
}

loadPoll();