import markdownTransform from 'transformime-commonmark';
import {consoleTextTransform} from './console-text.transform';
import {LaTeXTransform} from './latex.transform';
import {PDFTransform} from './pdf.transform';

export default {
    consoleTextTransform,
    markdownTransform,
    LaTeXTransform,
    PDFTransform
};
