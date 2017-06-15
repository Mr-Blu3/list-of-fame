import { GamePlayersPage } from './app.po';

describe('game-players App', function() {
  let page: GamePlayersPage;

  beforeEach(() => {
    page = new GamePlayersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
