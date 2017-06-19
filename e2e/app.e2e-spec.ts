import { Ng4PlaygroungPage } from './app.po';

describe('ng4-playgroung App', () => {
  let page: Ng4PlaygroungPage;

  beforeEach(() => {
    page = new Ng4PlaygroungPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
