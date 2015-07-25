"use strict";

import {ConsoleTextTransformer} from './console-text.transformer';

export class StreamTransformer extends ConsoleTextTransformer {
    get mimetype() {
        return 'jupyter/stream';
    }

    transform(data, doc) {
        // Note: data.name (stdout, stderr) should be available too
        return super.transform(data.text, doc);
    }
}
