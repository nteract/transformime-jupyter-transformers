import {assert} from 'chai';
import {jsdom} from 'jsdom';
import {Transformime} from 'transformime';

import {ScriptTransform} from '../src/index';

describe('script transform', function() {
    beforeEach(function() {
        this.document = jsdom();
        this.t = new Transformime([
                ScriptTransform
            ]);
    });

    it('should have the text/javascript mimetype', function() {
        assert.equal(ScriptTransform.mimetype, 'text/javascript');
    });
});
