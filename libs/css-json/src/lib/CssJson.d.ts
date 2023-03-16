import { ICssJsonOptions, ICssJsonResult } from './models/css-json.interfaces';
export declare class CssJson {
  cssString: string;
  options: ICssJsonOptions;
  setOption: (optionKey: string, value: any) => any;
  setOptions: (
    options: {
      optionKey: string;
      value: any;
    }[]
  ) => any;
  parse: () => ICssJsonResult;
  constructor(cssString: string);
}
