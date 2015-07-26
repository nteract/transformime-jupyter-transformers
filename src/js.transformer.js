"use strict";

export class JSTransformer {
    get mimetype() {
        return 'application/javascript';
    }

    transform(js, doc) {
        var el = doc.createElement('script');
        el.type = 'text/javascript';
        el.appendChild(doc.createTextNode(js));
        return el;
    }
}
