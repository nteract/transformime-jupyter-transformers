import {assert} from 'chai';
import {jsdom} from 'jsdom';
import {Transformime} from 'transformime';

import {SVGTransform} from '../src/index';

describe('svg transform', function() {
    beforeEach(function() {
        this.document = jsdom();
        this.t = new Transformime([
                SVGTransform
            ]);
    });

    it('should have the image/svg+xml mimetype', function() {
        assert.equal(SVGTransform.mimetype, 'image/svg+xml');
    });
});
