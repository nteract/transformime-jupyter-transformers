import {assert} from 'chai';
import {jsdom} from 'jsdom';
import {Transformime} from 'transformime';
var path = require('path');

import {
        LaTeXTransform,
    } from '../src/index';

describe('latex transform', function() {
    beforeEach(function() {
        this.document = jsdom();
        this.t = new Transformime([
                LaTeXTransform,
            ]);
    });

    it('should have the text/latex mimetype', function() {
        assert.equal(LaTeXTransform.mimetype, 'text/latex');
    });

    it('should output the correct HTML', function() {
        let latex = '$$\\sum\\limits_{i=0}^{\\infty} \\frac{1}{n^2}$$';
        let mathJaxScript = '<div>$$\\sum\\limits_{i=0}^{\\infty} \\frac{1}{n^2}$$</div>';
        let transformed =  this.t.transform(
            {'text/latex': latex},
            this.document);
        return transformed.then(({el}) => {
            assert.equal(el.outerHTML, mathJaxScript);
        });
    });
});
