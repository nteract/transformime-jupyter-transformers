"use strict";

import {consoleTextTransform} from './console-text.transform';

export function streamTransform(mimetype, data, document) {
    return consoleTextTransform(data.text, doc);
}

streamTransform.mimetype = 'jupyter/stream';
