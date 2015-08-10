import {assert} from 'chai';
import {jsdom} from 'jsdom';
import {Transformime} from 'transformime';

import {JSTransform} from '../src/index';

describe('js transform', function() {
    beforeEach(function() {
        this.document = jsdom();
        this.t = new Transformime([
                JSTransform
            ]);
    });

    it('should have the application/javascript mimetype', function() {
        assert.equal(PDFTransform.mimetype, 'application/javascript');
    });
});
