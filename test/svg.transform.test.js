import {assert} from 'chai';
import {jsdom} from 'jsdom';
import {Transformime} from 'transformime';

import {SVGTransform} from '../src/index';

describe('svg transform', function() {
    beforeEach(function() {
        this.document = jsdom();
        this.t = new Transformime([SVGTransform]);
    });

    it('should have the image/svg+xml mimetype', function() {
        assert.equal(SVGTransform.mimetype, 'image/svg+xml');
    });

    it('should create an svg tag', function() {
        const svg = `
            <?xml version="1.0" standalone="no"?>
            <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
            SYSTEM "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
            <svg></svg>
        `;
        return this.t.transform({"image/svg+xml": svg}, this.document).then(
            (bundle) => {
                assert.equal(bundle.el.tagName, "svg");
            },
            (err) => { throw err; }
        );
    });
});
