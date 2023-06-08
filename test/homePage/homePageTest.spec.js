describe('Open HomePage', () => {
  it('should open home page and validate the title', async () => {
    await browser.url('https://demoqa.com/');
    const pageTitle = await browser.getTitle();

    expect(pageTitle).toEqual('DEMOQA');
  });
});
