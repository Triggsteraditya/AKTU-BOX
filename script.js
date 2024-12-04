
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.btn:nth-child(1)').addEventListener('click', function(event) {
      event.preventDefault(); 
      window.location.href = 'Notes.html'; 
    });
  
    document.querySelector('.btn:nth-child(2)').addEventListener('click', function(event) {
      event.preventDefault(); 
      window.location.href = 'firstyear.html'; 
    });
  });
  