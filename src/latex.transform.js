"use strict";

var katex = require('katex');

export function LaTeXTransform(mimetype, latex, document) {
    var el = document.createElement('div');
    if (typeof MathJaX !== "undefined") {
        el.textContent = latex;
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, node]);
    } else {
        el.innerHTML = katex.renderToString(latex);
    }
    return el;
}

LaTeXTransform.mimetype = 'text/latex';
