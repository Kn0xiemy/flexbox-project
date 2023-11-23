$(document).ready(function(){
  $('.marketing').click(function(){
    $('.self-improving')[0].scrollIntoView({ behavior: 'smooth' }); // Smooth scroll into view for the feedback section
  });
});

$(document).ready(function(){
  $('.contact-btn').click(function(){
    $('.self-improving')[0].scrollIntoView({ behavior: 'smooth' });
  });
}); // Both the arrow under the company logo and the "get in touch" buttons direct towards the feedback form

$(document).ready(function() { // Feature reveal button function
  $(".feature-btn").click(function() {
    
    $(".hidden").toggle();
  });
});

$(document).ready(function() { // when submitting text in the form - an alert appears, notifying the user the feedback is acknowledged
  $(".message-btn").click(function() {
    alert("Thank you for submitting your feedback! We will do our best to review and consider each suggestion.")
  })
})

$(document).ready(function() { // when submitting text in the form - an alert appears, notifying the user the feedback is acknowledged
  $(".contact-page-btn").click(function() {
    alert("Thanks for reaching out! We'll have someone respond to your question within 24 hours.")
  })
})


