"use strict";

var mathjaxHelper = require('mathjax-electron');

export function LaTeXTransform(mimetype, value, document) {
    var container = document.createElement('script');
    container.type = 'math/tex';
    container.innerHTML = value.replace(/<br>|\$\$|^\$|\$$|\\\(|\\\)|\\\[|\\\]/g, '');

    mathjaxHelper.loadMathJax(document);
    mathjaxHelper.mathProcessor(container);
    return container;
}

LaTeXTransform.mimetype = 'text/latex';
