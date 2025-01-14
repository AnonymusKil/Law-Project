// Redirect to the main page after the loader finishes
window.addEventListener('load', () => {
    setTimeout(() => {
      window.location.href = "index.html"; // Replace with the actual path to your main.html
    }, 4000); // Delay for 4 seconds
  });