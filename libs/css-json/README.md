# Install

`npm i @dev-toolbox/css-json`

## Import

`import { CssJson } from '@dev-toolbox/css-json';`

## Usage

const cssString = '.test{color:red;}';

const options = {};
const parser = new CssJson(CssString,options);

const output = parser.parse();

console.log('output', output);

## Available Options

const defaultOptions: ICssJsonOptions = {
resultType: CssJsonResultType.ADVANCED,
seperateMultiSelectorStyles: false, //will omit this if resultType===CssJsonResultType.ADVANCED,
keyValueAttributes: false, //will omit this if resultType===CssJsonResultType.ADVANCED,
};
