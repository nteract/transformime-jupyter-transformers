import markdownTransform from 'transformime-commonmark';
import {consoleTextTransform} from './console-text.transform';
import {LaTeXTransform} from './latex.transform';
import {PDFTransform} from './pdf.transform';
import {JSTransformer} from './js.transformer';

export default {
    consoleTextTransform,
    markdownTransform,
    LaTeXTransform,
    PDFTransform, 
    JSTransformer
};
