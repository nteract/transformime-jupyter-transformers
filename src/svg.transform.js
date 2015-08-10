"use strict";

export function SVGTransform(mimetype, value, document) {
    // Create a div and append SVG XML to that div as HTML.  The SVG XML 
    // includes the parent SVG tag, so all we need to do is return the first
    // child element of the div == svg element.
    var el = document.createElement('div');
    el.innerHTML = value;
    return el.firstChild;
}
SVGTransform.mimetype = 'image/svg+xml';
