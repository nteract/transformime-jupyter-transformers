"use strict";

var katex = require('katex');

export class LaTeXTransformer {
    get mimetype() {
        return 'text/latex';
    }

    transform(latex, doc) {
        var el = doc.createElement('div');
        el.innerHTML = katex.renderToString(latex);
        return el;
    }
}
