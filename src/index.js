import {consoleTextTransform} from './console-text.transform';
import {ScriptTransform} from './script.transform';
import {LaTeXTransform} from './latex.transform';
import markdownTransform from 'transformime-commonmark';
import {PDFTransform} from './pdf.transform';
import {SVGTransform} from './svg.transform';

export default {
    consoleTextTransform,
    markdownTransform,
    LaTeXTransform,
    PDFTransform, 
    ScriptTransform,
    SVGTransform
};
