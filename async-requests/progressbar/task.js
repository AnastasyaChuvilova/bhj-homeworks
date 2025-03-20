const progress = document.getElementById('progress');
const form = document.getElementById('form');
const fileInput = document.getElementById('file');
const sendButton = document.getElementById('send');

form.addEventListener('submit', function (event) {
  event.preventDefault(); 

  if (fileInput.files.length === 0) {
    alert('Выберите файл для загрузки');
    return;
  }

  const formData = new FormData(form);

  const xhr = new XMLHttpRequest();

  xhr.upload.onprogress = function (event) {
    if (event.lengthComputable) {
      const percentComplete = event.loaded / event.total;
      progress.value = percentComplete;
    }
  };

  xhr.onload = function () {
    if (xhr.status === 200) {
      alert('Файл успешно загружен');
      progress.value = 0; 
    } 
  };

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);
  xhr.send(formData);
});