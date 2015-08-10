import {assert} from 'chai';

import {consoleTextTransform,
        markdownTransform,
        LaTeXTransform,
        PDFTransform,
        ScriptTransform,
        SVGTransform} from '../';

describe("when transformime-jupyter-transformers is required", () => {
    it("imported all the relevant transforms", () => {
        assert.equal(consoleTextTransform.mimetype, 'jupyter/console-text');
        assert.equal(markdownTransform.mimetype, 'text/markdown');
        assert.equal(LaTeXTransform.mimetype, 'text/latex');
        assert.equal(PDFTransform.mimetype, 'application/pdf');
        assert.equal(SVGTransform.mimetype, 'image/svg+xml');
    });
});
