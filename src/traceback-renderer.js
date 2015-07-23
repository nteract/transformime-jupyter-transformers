"use strict";

import {ConsoleTextRenderer} from './console-text-renderer';

export class TracebackRenderer extends ConsoleTextRenderer {
    get mimetype() {
        return 'jupyter/traceback';
    }

    transform(data, doc) {
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
        return super.transform(text, doc);
    }
}
