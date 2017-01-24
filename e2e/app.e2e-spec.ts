import { AllaboutgradangularPage } from './app.po';

describe('allaboutgradangular App', function() {
  let page: AllaboutgradangularPage;

  beforeEach(() => {
    page = new AllaboutgradangularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
