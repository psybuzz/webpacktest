/**
 * Login page logic
 */

require('../scss/login.scss');
var userEl = $('#userBox').focus();
var passEl = $('#passBox');
var loginFormEl = $('#login-box');
var prettyNameEl = $('#prettyName').hide();
var mainContainerEl = $('.main-container');


// Initialize view logic.
loginFormEl.on('keypress', function (e) {
    if (e.keyCode === 13) {
        if (isFormValid()) {
            prettyNameEl.text(userEl.val().trim());
            closeLoginForm(onLoginSubmit);
        }
    }
});


function isFormValid () {
    return userEl.val().length > 0 && passEl.val().length > 0;
}

// Animates elements upon successful login.
function closeLoginForm (cb) {
    prettyNameEl.delay(350).slideDown(400);
    loginFormEl
        .animate({ height: '1px' }, 80, function () {
            userEl.hide();
            passEl.hide();
        })
        .delay(1400)
        .animate({ padding: '0px 80px' }, 300, function () {
            mainContainerEl.fadeOut(cb);
            
            // open screen?
        });
}

// Acts after final animations have completed.
function onLoginSubmit () {
    window.location = '/?fromLogin=1';
}
