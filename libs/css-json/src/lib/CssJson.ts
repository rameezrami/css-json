/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cssParser = require('./tools/parser.js');
// const transformer = require('./tools/strigify.js');

import { CssJsonResultType } from './constants/css-json-result-type.enum';
import { ICssJsonOptions, ICssJsonResult } from './models/css-json.interfaces';

export class CssJson {
  cssString = '';

  options: ICssJsonOptions = {
    resultType: CssJsonResultType.ADVANCED,
    seperateMultiSelectorStyles: false, //will omit this if resultType===CssJsonResultType.ADVANCED,
    keyValueAttributes: false, //will omit this if resultType===CssJsonResultType.ADVANCED,
  };

  constructor(cssString: string) {
    this.cssString = cssString;
  }
  setOptions(options: any = {}) {
    for (const optionKey in options) {
      this.options = {
        ...this.options,
        [optionKey]: options[optionKey],
      };
    }
    return this;
  }

  parse() {
    const result: ICssJsonResult = {
      valid: false,
      data: null,
    };
    let coreJson: any = null;
    try {
      coreJson = cssParser.parseCss(this.cssString, {});
    } catch (e: unknown) {
      return result;
    }

    const options: any = this.options;

    if (options.resultType === CssJsonResultType.ADVANCED) {
      result.valid = true;
      result.data = coreJson;
    } else {
      const coreJsonRules = coreJson.stylesheet.rules;
      const styles = [];

      for (let r of coreJsonRules) {
        let attributes = null;
        if (options.keyValueAttributes === true) {
          attributes = r.declarations.map((d: any) => {
            const { property, value } = d;
            return { property, value };
          });
        } else {
          attributes = {};
          for (const selector of r.declarations) {
            styles.push({ selector, attributes });
          }
        }

        const selectors = r.selectors;
        if (options.seperateMultiSelectorStyles === true) {
          for (const selector of selectors) {
            styles.push({ selector, attributes });
          }
        } else {
          styles.push({ selectors, attributes });
        }
      }
      result.valid = true;
      result.data = styles;
    }
    return result;
  }
}

// CssJson.prototype.get = function () {};
