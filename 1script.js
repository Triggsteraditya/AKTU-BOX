
document.addEventListener('DOMContentLoaded', function() {
    // First Year Button
    document.querySelector('a[href="firstyear.html"]').addEventListener('click', function(event) {
      event.preventDefault();
      window.location.href = 'firstyear.html'; 
    });
  
    // Second Year Button
    document.querySelector('a[href="secondyear.html"]').addEventListener('click', function(event) {
      event.preventDefault(); 
      window.location.href = 'secondyear.html'; 
    });
  
    // Third Year Button
    document.querySelector('a[href="thirdyear.html"]').addEventListener('click', function(event) {
      event.preventDefault(); 
      window.location.href = 'thirdyear.html'; 
    });
  
    // Fourth Year Button
    document.querySelector('a[href="fourthyear.html"]').addEventListener('click', function(event) {
      event.preventDefault(); 
      window.location.href = 'fourthyear.html'; 
    });
  });
  