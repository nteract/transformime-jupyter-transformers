"use strict";

import {consoleTextTransform} from './console-text.transform';

export function tracebackTransform(mimetype, data, document) {
    let text, traceback;

    traceback = data.traceback;
    if (traceback !== undefined && traceback.length > 0) {
        text = '';
        var len = traceback.length;
        for (var i=0; i<len; i++) {
            text = text + traceback[i] + '\n';
        }
        text = text + '\n';
    }
    return consoleTextTransform(text, doc);
}

tracebackTransform.mimetype = 'jupyter/traceback';
