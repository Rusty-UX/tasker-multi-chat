
$(document).ready(function(){

  $windowHeight   = $(window).height();
  calcHeight();

  $('.chat section').toggleClass('slider-open');

  $('.msg-input').focus(function(){
    $('.chat section').removeClass('is-focused');
    $(this).parents('section').addClass('is-focused');
  });

  $('section').click(function(){
    $('.chat section').removeClass('is-focused');
    $(this).addClass('is-focused');
    $(this).find('.msg-input').focus();
    autoScroll.call(this);
    calcHeight();
  });


  $('.msg-input').focus(function(){
    autoScroll.call(this);
    calcHeight();
  });

  $('.half .chat-meta').click(function(){
    autoScroll.call(this);
  });

  //Chat Header - Toggle Header Tabs
  $(document).on('click', '.meta-buttons .toggle', function() {
  
    $(this).parents('section').addClass('slider-open');
    var index   = $(this).index();
    var parent  = $(this).parents(".chat-slider");
    var target  = $(parent).children().eq(index+1);

    $(parent).children().not(target).removeClass("is-open");
    target.toggleClass("is-open");


    //$('.chat-meta').removeClass('.is-open');
    //$(this).parents('.chat-meta').toggleClass('is-open');
    $(parent).find('.meta-buttons .toggle').removeClass('active');
    $(this).toggleClass('active');
  
  });

  //Away interaction
  $('nav .away').click(function(){
    $('nav .channels .icon').toggleClass('status-away');
  });

  $('nav').height($windowHeight);

});

//trigger event, listen for trigger

function autoScroll(){
    var targetScroll  = $(this).parents('section').find('.chat-messages');
    var height        = targetScroll.scrollHeight;
    targetScroll.scrollTop(height);
}

function calcHeight(){
  $('.chat .chat-messages').height($windowHeight - 60);
  $('.chat .is-focused .chat-messages').height($windowHeight - 160);
}