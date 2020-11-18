$(document).ready(function() {
    var jsonObject = {
        title: "How to Program in C#",
        author: "Bob Summers",
        yearPublished: "2020"
    };

    let jsonStr = JSON.stringify(jsonObject);

    $('#targetContainer').html(jsonStr);
})