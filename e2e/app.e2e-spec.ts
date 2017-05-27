import { Home2017Page } from './app.po';

describe('home2017 App', () => {
  let page: Home2017Page;

  beforeEach(() => {
    page = new Home2017Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
