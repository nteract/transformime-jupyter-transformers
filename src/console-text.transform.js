"use strict";

var Convert = require('ansi-to-html');

export var consoleTextTransform = function() {
    // Stick convert in a closure so it only gets created once.

    let convert = new Convert({
        escapeXML: true,
        newLine: true
    });

    return function(mimetype, text, document) {
        var el = document.createElement('pre');

        el.innerHTML = convert.toHtml(text);
        return el;
    }
} ();


consoleTextTransform.mimetype = 'jupyter/console-text';

// export consoleTextTransform;
// import {consoleTextTransform} from './src/console-text.transform';
// import './src/console-text.transform';
