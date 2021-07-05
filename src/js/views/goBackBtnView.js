import View from './View';

class GoBackBtnView extends View {
  _backBtn = document.getElementById('go-back-btn');

  constructor() {
    super();
    this._addHandlerBack();
  }

  _addHandlerBack() {
    this._backBtn.addEventListener('click', (e) => {
      console.log(this._currPage);
      --this._currPage;
      console.log(this._currPage);
    });
  }
}

export default new GoBackBtnView();
