"use strict";

/**
 * Transform base 64 encoded PDF --> <a href="data:application/pdf;base64,...">
 */
export class PDFTransformer {
    /**
     * mimetype is application/pdf
     * @return {string} application/pdf
     */
    get mimetype() {
        return 'application/pdf';
    }

    /**
     * transform a base64 encoded PDF string into the (current) Jupyter notebook
     * version of the element. This one returns a little link you can click.
     * @param  {string} base64PDF base64 encoded PDF
     * @param  {Document} doc  A DOM (e.g. window.document)
     * @return {HTMLElement}      A link element to the given PDF
     */
    transform(base64PDF, doc) {
        var a = doc.createElement('a');
        a.target = '_blank';
        a.textContent = "View PDF";
        a.href = 'data:application/pdf;base64,' + base64PDF;

        return a;
    }
}
