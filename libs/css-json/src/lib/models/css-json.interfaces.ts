import { CssJsonResultType } from '../constants/css-json-result-type.enum';

export interface ICssJsonOptions {
  resultType: CssJsonResultType;
  seperateMultiSelectorStyles: boolean;
  keyValueAttributes: boolean;
}

export interface ICssJsonResult {
  valid: boolean;
  data: any;
}
