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

    it('should create a script tag', function() {
        assert.equal(ScriptTransform.mimetype, 'text/javascript');

        var promEl = this.t.transform(
            {"text/javascript": "window.x = 1"},
            this.document);

        return promEl.then((bundle) => {
            assert.equal(bundle.el.localName, "script");
            assert.equal(bundle.el.textContent, "window.x = 1");

            // Ensure script has not been run yet
            assert.isUndefined(this.document.defaultView.x);
            // Put it on the DOM
            this.document.querySelector("body").appendChild(bundle.el);
            // Should be evaluated now
            assert.equal(this.document.defaultView.x, 1);

        });
    });
});
