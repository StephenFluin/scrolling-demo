import { InfiniiteScrollPage } from './app.po';

describe('infiniite-scroll App', function() {
  let page: InfiniiteScrollPage;

  beforeEach(() => {
    page = new InfiniiteScrollPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
