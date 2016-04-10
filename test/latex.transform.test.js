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

    it('should output the correct MathJax script', function() {
        let latex = '\sum\limits_{i=0}^{\infty} \frac{1}{n^2}';
        let mathJaxScript = '<script type="math/tex">\sum\limits_{i=0}^{\infty} \frac{1}{n^2}</script>';
        let transformed =  this.t.transform(
            {'text/latex': latex},
            this.document);
        return transformed.then(({el}) => {
            assert.equal(el.outerHTML, mathJaxScript);
        });
    });

    it('should load MathJax', function() {
        let mathJaxPath = path.join(__dirname, "..", "resources");
        let headScript = '<script type="text/javascript" src="' + mathJaxPath + '/MathJax/MathJax.js?delayStartupUntil=configured"></script>'

        this.t.transform({'text/latex': 'LaTeX'}, this.document);
        let script = this.document.getElementsByTagName('script')[0].outerHTML
        return assert.equal(script, headScript);
    });
});
