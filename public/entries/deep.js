// so deep!
require('../scss/deep.scss');

var UI = {
    main: $('.content'),
    status: $('#status-circle'),
    waitToSave: null,
};

// Delayed save
function actuallySave () {
    var items = $('.container');
    var len = items.length;
    var dataObj = new Array(len);

    for (var i=0; i<len; i++){
        dataObj[i] = $(items[i]).html();
    }

    // simulate the time of saving
    setTimeout(function () {
        // localStorage
        localStorage.opus = JSON.stringify({
            notes: dataObj,
        });

        // save status
        UI.status.removeClass('saving').addClass('saved');
    }, 2000);       // simulated save time
}

function saveIfReady() {
    UI.waitToSave = Date.now() + 3000;

    setTimeout(function () {
        var now = Date.now();
        if (now > UI.waitToSave){
            UI.status.removeClass('saved');
            UI.status.addClass('saving');
            actuallySave();
        }
    }, 3001);
}



UI.main.focus();

$('#main').on('keyup', '.container', function(){
    UI.status.removeClass('saved');
    saveIfReady();
});

UI.status.click(function(){
    UI.status.addClass('saving').removeClass('saved');
    actuallySave();
});

// load from localStorage
function loadNotes () {
    if (typeof localStorage.opus !== 'undefined'){
        var notes = JSON.parse(localStorage.opus).notes;
        var html = '';

        for (var i=0, len=notes.length; i<len; i++){
            html += '<div class=\'container\'>'+notes[i]+'</div>';
        }

        $('#main').html(html);
    }
}
loadNotes();

// searching
$('#searchbox').keyup(function () {
    var text = $('#searchbox').val();
    psy.imageBox(text, function(box){
        if (text.length > 0){
            $(box).addClass('image');
            $('#searchResults').empty().append(box);
        } else {
            $('#searchResults').empty();
        }
    }, 'img');
});

// add container button
$('#addContainer').click(function() {
    var el = document.createElement('div');
    var elHeading = document.createElement('div');
    var elContent = document.createElement('div');

    el.className = 'container';
    elHeading.className = 'heading';
    elContent.className = 'content';

    elHeading.contentEditable = elContent.contentEditable = 'true';
    elHeading.textContent = "Hey";
    elContent.innerHTML = "So...<br><ul><li>First: </li></ul>";

    el.appendChild(elHeading);
    el.appendChild(elContent);

    $('#main').append(el);
});