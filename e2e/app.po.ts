import { browser, by, element } from 'protractor';

export class NsNgDemoLibPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('demo-root h1')).getText();
  }
}