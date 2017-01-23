import { Week2d1Page } from './app.po';

describe('week2d1 App', function() {
  let page: Week2d1Page;

  beforeEach(() => {
    page = new Week2d1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
