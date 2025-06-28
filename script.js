let nav=document.getElementById('nav');
      let button=document.getElementById('button');
      button.addEventListener('click',function(){
  if (nav.style.display=="block"){
    nav.style.display='none';
  }
  else{
     nav.style.display='block';
  }
      })
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.transform = "scale(1.05)";
          entry.target.style.transition = "transform 1s ease";
        } else {
          entry.target.style.transform = "scale(1)";
        }
      });
    });
    document.querySelectorAll('.image-item').forEach(img => {
      observer.observe(img);
    });