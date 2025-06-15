// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const success = document.getElementById('successMessage');

  let valid = true;
  nameError.textContent = '';
  emailError.textContent = '';
  success.textContent = '';

  if (name.value.trim() === '') {
    nameError.textContent = 'Please enter your name.';
    valid = false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email.value.trim())) {
    emailError.textContent = 'Please enter a valid email.';
    valid = false;
  }

  if (valid) {
    success.textContent = 'Form submitted successfully!';
    name.value = '';
    email.value = '';
    message.value = '';
  }
});

// To-Do List Logic
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  const taskSuccess = document.getElementById('taskSuccessMessage');

  const taskText = taskInput.value.trim();
  taskSuccess.textContent = '';

  if (taskText === '') {
    taskSuccess.textContent = 'Please enter a task.';
    taskSuccess.style.color = 'red';
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `
    ${taskText}
    <button onclick="this.parentElement.remove()">Delete</button>
  `;

  taskList.appendChild(li);
  taskInput.value = '';

  taskSuccess.textContent = 'Task added successfully!';
  taskSuccess.style.color = 'green';
}