const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  // Get form values
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  // Validate form values
  if (username === '' || password === '') {
    alert('Please enter your username and password.');
  } else if (username !== 'example' || password !== 'password') {
    alert('Incorrect username or password. Please try again.');
  } else {
    alert('Login successful!');
    // Redirect to home page
    window.location.href = 'home.html';
  }
});
