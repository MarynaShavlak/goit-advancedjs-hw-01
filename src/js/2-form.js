const STORAGE_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

populateForm();

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

function handleInput(event) {
  const { name, value } = event.target;

  if (!(name in formData)) return;

  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function handleSubmit(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
  form.reset();
}

function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (!savedData) return;

  try {
    const { email = '', message = '' } = JSON.parse(savedData);

    formData.email = email;
    formData.message = message;
    form.elements.email.value = email;
    form.elements.message.value = message;
  } catch (error) {
    console.error('Failed to parse saved form data:', error.message);
  }
}
