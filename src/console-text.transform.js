"use strict";

var ansi_up = require('ansi_up');

export function consoleTextTransform(mimetype, value, document) {
    var el = document.createElement('pre');
    var esc = ansi_up.escape_for_html(value);
    el.innerHTML = ansi_up.ansi_to_html(esc);
    return el;
}


consoleTextTransform.mimetype = 'jupyter/console-text';

// export consoleTextTransform;
// import {consoleTextTransform} from './src/console-text.transform';
// import './src/console-text.transform';
