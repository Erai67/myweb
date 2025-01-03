document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  const loginId = document.getElementById('loginId').value;
  const password = document.getElementById('password').value;

  // Add pop effect on submit
  const container = document.querySelector('.container');
  container.classList.add('pop-effect');

  setTimeout(() => {
    // Validate credentials after the animation
    if (loginId === 'Bujji' && password === 'Bujji') {
      window.location.href = 'celebration.html';
    } else {
      alert('Invalid login credentials!');
      container.classList.remove('pop-effect');
    }
  }, 500); // Match the duration of the popIn animation
});
