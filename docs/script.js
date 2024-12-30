
//function for sidebar in degree.html , is used to make appear or disappear the list with all the courses per year
function toggleList(id) {
    const list = document.getElementById(id);
    if (list.classList.contains('hidden')) {
      list.classList.remove('hidden');
    } else {
      list.classList.add('hidden');
    }
  }


  //function for captcha in contact.html
function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10) + 1; 
    const num2 = Math.floor(Math.random() * 10) + 1; 
    const question = `${num1} + ${num2}`;
    document.getElementById('captcha-question').innerText = question; 
    return num1 + num2; 
  
  
}
  let correctAnswer = generateCaptcha(); 
  

  document.querySelector('form').addEventListener('submit', function(event) {
    const userAnswer = parseInt(document.getElementById('captcha').value, 10); 
    if (userAnswer !== correctAnswer) { 
      alert('Captcha not correct. Retry.'); 
      event.preventDefault(); 
      correctAnswer = generateCaptcha();
    }
  });


