// simple site interactions
$(function(){
  // set year across pages
  const y = new Date().getFullYear();
  $('#year, #year-about, #year-projects, #year-resume').text(y);

  // nav toggle (mobile)
  $('.nav-toggle').on('click', function(){
    $('.nav').toggle();
  });

  // photo upload preview
  $('#uploadPhotoInput').on('change', function(e){
    const file = e.target.files && e.target.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = function(ev){
      $('#profilePhoto').attr('src', ev.target.result);
    };
    reader.readAsDataURL(file);
  });

  // contact form demo handling
  $('#contactForm').on('submit', function(e){
    e.preventDefault();
    const name = $(this).find('input[name="name"]').val() || 'there';
    alert(`Thanks ${name}! Your message was received (demo).`);
    this.reset();
  });
});
