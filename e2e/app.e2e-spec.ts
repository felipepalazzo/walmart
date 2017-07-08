import { WalmartPage } from './app.po';

describe('walmart App', () => {
  let page: WalmartPage;

  beforeEach(() => {
    page = new WalmartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
