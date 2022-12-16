//Please put your answer here

var signupButton = $(".signup-show");

var modal = $('#signup-modal');
var closeButton = $('#close-modal');

closeButton.click(function() {
    modal.fadeOut(100);
});

signupButton.click(function() {
    modal.fadeIn(100);
});