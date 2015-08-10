"use strict";

export class SVGTransformer {
    get mimetype() {
        return 'image/svg+xml';
    }

    transform(svg, doc) {
        // Create a div and append SVG XML to that div as HTML.  The SVG XML 
        // includes the parent SVG tag, so all we need to do is return the first
        // child element of the div == svg element.
        var el = doc.createElement('div');
        el.innerHTML = svg;
        return el.firstChild;
    }
}
