"use strict";

import {RendererBase} from 'transformime/lib/rendererbase';

var Convert = require('ansi-to-html');

export class ConsoleTextRenderer extends RendererBase {
    get mimetype() {
        return 'jupyter/console-text';
    }

    transform(text, doc) {
        // Note: data.ename and data.evalue are available too
        var el = doc.createElement('pre');

        var convert = new Convert({
            escapeXML: true,
            newLine: true
        });
        el.innerHTML = convert.toHtml(text);
        return el;
    }
}
