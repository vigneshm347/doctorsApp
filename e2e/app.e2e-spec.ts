import { DoctorPage } from './app.po';

describe('doctor App', function() {
  let page: DoctorPage;

  beforeEach(() => {
    page = new DoctorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
