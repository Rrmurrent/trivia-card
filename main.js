$(document).ready(() =>{
  
$('.hint-box').on('click', () => {
  
    $('.hint').toggle('slow');
  
    })

  $('.wrong-answer-one').on('click', () => {
  $('.wrong-text-one').fadeOut('slow');  
  $('.frown').show();
    })
  
  $('.wrong-answer-two').on('click', () => {
  $('.wrong-text-two').fadeOut('slow'); 
  $('.frown').show();            
    })
  $('.wrong-answer-three').on('click', () => {
  $('.wrong-text-three').fadeOut('slow');  
  $('.frown').show();             
    })
  
  $('.correct-answer').on('click', () =>{
  $('.frown').hide();
  $('.smiley').show();
  $('.wrong-answer-one').fadeOut('fast');
  $('.wrong-answer-two').fadeOut('fast');
  $('.wrong-answer-three').fadeOut('fast');
  $('.question-text').hide();
  $('.hint').hide();
  $('.smiley').css("border", "double 20px white");
    })


  $('.smiley').on('mouseover',() => {
    $('.smiley').css("border", "double 20px gold ");
   })


  $('.smiley').on('click', () => {
    location.reload(true);
  })
  
});