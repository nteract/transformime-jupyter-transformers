"use strict";

var katex = require('katex');

export function LaTeXTransform(mimetype, latex, document) {
    var el = document.createElement('div');
    el.innerHTML = katex.renderToString(latex);
    return el;
}

LaTeXTransform.mimetype = 'text/latex';
