import {assert} from 'chai';
import {jsdom} from 'jsdom';
import {Transformime} from 'transformime';

import {
        PDFTransform
    } from '../src/index';

describe('pdf transform', function() {
    beforeEach(function() {
        this.document = jsdom();
        this.t = new Transformime([
                PDFTransform
            ]);
    });

    it('should have the application/pdf mimetype', function() {
        assert.equal(PDFTransform.mimetype, 'application/pdf');
    });

    it('should output the correct HTML', function() {
        let base64PDF = "I don't have a b64'd PDF";
        let transformed = this.t.transform(
            {'application/pdf': base64PDF},
            this.document);
        return transformed.then(({el}) => {
            assert.equal(el.outerHTML, '<a target="_blank" href="data:application/pdf;base64,I don\'t have a b64\'d PDF">View PDF</a>');
        });
    });
});
