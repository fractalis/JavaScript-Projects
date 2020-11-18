$(document).ready(function() {

    let noteObj = {
        notebookTitle: 'My notes',
        notes: []
    };
    let noteStr = JSON.stringify(noteObj);
    localStorage.setItem('notes', noteStr);

    let parsedObj = JSON.parse(localStorage.getItem('notes'));

    $('#targetContainer').html(parsedObj.notebookTitle);
});