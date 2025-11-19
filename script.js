// Small interactive bits
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('cta').addEventListener('click', () =>{
  alert('Hey! Thanks for clicking — ready to deploy? 🚀');
});

document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const status = document.getElementById('formStatus');
  status.textContent = 'Thanks — message received (demo).';
  this.reset();
});
