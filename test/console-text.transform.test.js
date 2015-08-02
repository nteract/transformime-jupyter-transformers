import {assert} from 'chai';
import {jsdom} from 'jsdom';
import {Transformime} from 'transformime';

import {
        consoleTextTransform,
    } from '../src/index';

describe('console text transform', function() {
    beforeEach(function() {
        this.document = jsdom();
        this.t = new Transformime([
                consoleTextTransform,
            ]);
    });

    it('should have the jupyter/console-text mimetype', function() {
        assert.equal(consoleTextTransform.mimetype, 'jupyter/console-text');
    });

    it('should output the correct HTML', function() {
        let consoleText = 'x = 2 ** a';
        let transformed =  this.t.transform(
            {'jupyter/console-text': consoleText},
            this.document);
        return transformed.then(({el}) => {
            assert.equal(el.outerHTML, "<pre>x = 2 ** a</pre>");
            assert.equal(el.textContent, consoleText);
            assert.equal(el.localName, "pre");
        });
    });
});
