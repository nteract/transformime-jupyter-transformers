import {assert} from 'chai';
import {jsdom} from 'jsdom';
import {Transformime} from 'transformime';

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
        let latex = '\sum\limits_{i=0}^{\infty} \frac{1}{n^2}';
        let bigUglyLatex = '<div><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>s</mi><mi>u</mi><mi>m</mi><mi>l</mi><mi>i</mi><mi>m</mi><mi>i</mi><mi>t</mi><msubsup><mi>s</mi><mrow><mi>i</mi><mo>=</mo><mn>0</mn></mrow><mrow><mi>i</mi><mi>n</mi><mi>f</mi><mi>t</mi><mi>y</mi></mrow></msubsup><mi>r</mi><mi>a</mi><mi>c</mi><mrow><mn>1</mn></mrow><mrow><msup><mi>n</mi><mn>2</mn></msup></mrow></mrow><annotation encoding="application/x-tex">sumlimits_{i=0}^{infty} \frac{1}{n^2}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.9670159999999999em;"></span><span class="strut bottom" style="height:1.2438799999999999em;vertical-align:-0.276864em;"></span><span class="base textstyle uncramped"><span class="mord mathit">s</span><span class="mord mathit">u</span><span class="mord mathit">m</span><span class="mord mathit" style="margin-right:0.01968em;">l</span><span class="mord mathit">i</span><span class="mord mathit">m</span><span class="mord mathit">i</span><span class="mord mathit">t</span><span class="mord"><span class="mord mathit">s</span><span class="vlist"><span style="top:0.276864em;margin-left:0em;margin-right:0.05em;"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span><span class="reset-textstyle scriptstyle cramped"><span class="mord scriptstyle cramped"><span class="mord mathit">i</span><span class="mrel">=</span><span class="mord mathrm">0</span></span></span></span><span style="top:-0.480908em;margin-right:0.05em;"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span><span class="reset-textstyle scriptstyle uncramped"><span class="mord scriptstyle uncramped"><span class="mord mathit">i</span><span class="mord mathit">n</span><span class="mord mathit" style="margin-right:0.10764em;">f</span><span class="mord mathit">t</span><span class="mord mathit" style="margin-right:0.03588em;">y</span></span></span></span><span class="baseline-fix"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span>​</span></span></span><span class="mord mathit" style="margin-right:0.02778em;">r</span><span class="mord mathit">a</span><span class="mord mathit">c</span><span class="mord textstyle uncramped"><span class="mord mathrm">1</span></span><span class="mord textstyle uncramped"><span class="mord"><span class="mord mathit">n</span><span class="vlist"><span style="top:-0.363em;margin-right:0.05em;"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span><span class="reset-textstyle scriptstyle uncramped"><span class="mord mathrm">2</span></span></span><span class="baseline-fix"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span>​</span></span></span></span></span></span></span></div>';
        let transformed =  this.t.transform(
            {'text/latex': latex},
            this.document);
        return transformed.then(({el}) => {
            assert.equal(el.outerHTML, bigUglyLatex);
        });
    });
});
