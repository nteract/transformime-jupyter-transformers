import {assert} from 'chai';

import {jsdom} from 'jsdom';

import {ConsoleTextTransformer} from '../src/console-text.transformer';

describe('console text transformer', function() {
    beforeEach(function() {
        this.document = jsdom();
    });

    it('should have the jupyter/console-text mimetype', function() {
        var ht = new ConsoleTextTransformer();
        assert.equal(ht.mimetype, "jupyter/console-text");
    });
});
