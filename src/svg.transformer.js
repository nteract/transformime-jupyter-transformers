"use strict";

export class SVGTransformer {
    get mimetype() {
        return 'image/svg+xml';
    }

    transform(svg, doc) {
        var el = doc.createElement('div');
        el.innerHTML = svg;
        return el.firstChild;
    }
}
