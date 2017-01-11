import { Wpa2Page } from './app.po';

describe('wpa2 App', function() {
  let page: Wpa2Page;

  beforeEach(() => {
    page = new Wpa2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
