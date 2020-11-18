$(document).ready(function() {
    let jsonStr = '{"title": "Advanced C#", "yearPublished": "2019", "author": "Sam Gunderson"}';

    let jsonObj = JSON.parse(jsonStr);

    let h1 = document.createElement('h1');
    let div = document.createElement('div');
    let authorSection = document.createElement('p');
    authorSection.innerHTML = `<b>${jsonObj.author}</b>`;
    div.appendChild(h1);
    div.appendChild(authorSection);

    h1.innerHTML = jsonObj.title;
    $('#targetContainer').html(div);
});