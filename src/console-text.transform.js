"use strict";

var Convert = require('ansi-to-html');

let consoleTextTransform = function() {
    // Stick convert in a closure so it only gets created once.

    let convert = new Convert({
        escapeXML: true,
        newLine: true
    });

    return function(mimetype, text, document) {
        var el = doc.createElement('pre');

        el.innerHTML = convert.toHtml(text);
        return el;
    }
}();

consoleTextTransform.mimetype = 'jupyter/console-text';
export consoleTextTransform;
