

function scaleHeadline() {
    var elements = document.getElementsByClassName("headline");

    for(var i = 0; i < elements.length; i++ ) {
        var element = elements[i];
        element.style['transform'] = 'scale(1.1) rotateY(15deg)';
    }
}