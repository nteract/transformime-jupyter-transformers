"use strict";

import {ConsoleTextRenderer} from './console-text-renderer';

export class StreamRenderer extends ConsoleTextRenderer {
    get mimetype() {
        return 'jupyter/stream';
    }

    transform(data, doc) {
        // Note: data.name (stdout, stderr) should be available too
        return super.transform(data.text, doc);
    }
}
