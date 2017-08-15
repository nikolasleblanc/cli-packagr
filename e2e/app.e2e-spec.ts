import { NgComponentLibraryPage } from './app.po';

describe('ng-component-library App', () => {
  let page: NgComponentLibraryPage;

  beforeEach(() => {
    page = new NgComponentLibraryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
