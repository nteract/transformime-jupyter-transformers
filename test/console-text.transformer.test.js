import {assert} from 'chai';

import {jsdom} from 'jsdom';

import {consoleTextTransform} from '../src/console-text.transform';

describe('console text transform', function() {
    beforeEach(function() {
        this.document = jsdom();
    });

    it('should have the jupyter/console-text mimetype', function() {
        assert.equal(consoleTextTransform.mimetype, "jupyter/console-text");
    });
});
