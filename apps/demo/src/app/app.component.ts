import { Component, OnInit } from '@angular/core';
import { CssJson } from '@dev-toolbox/css-json';
@Component({
  selector: 'css-json-transformer-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'demo';

  cssEditorOptions = { theme: 'vs-dark', language: 'css' };
  jsonEditorOptions = { theme: 'vs-dark', language: 'json' };

  CssString = '';
  CssString1: any = `
  .notes{
    display:flex;
    align-items:center;
    flex-grow:1;
    color:#333;
  }
  .notes:hover,
  .notes:focus{
    color:grey;
  }`;

  jsonResult: any = {};

  constructor() {}

  ngOnInit() {
    const CssString = `
    .rameez{
      color:red;
    }
    `;
    const parser = new CssJson(CssString);

    const output = parser.parse();
    this.jsonResult = output;

    console.log('output', output);
  }

  parseCssToJson() {
    const CssString = this.CssString1;
    const parser = new CssJson(CssString);

    const output = parser.parse();
    this.jsonResult = output;

    console.log('output', output);
  }

  showEvent(event: any) {
    console.log(event);
  }
}
