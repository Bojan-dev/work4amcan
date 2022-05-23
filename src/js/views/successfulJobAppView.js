import View from './View';

class successfullJobAppView extends View {
  _closeWindow = document.getElementById('finish-application');
  _overlay = document.querySelector('.overlay-success');
  _overlayWindow = this._closeWindow.closest('.success-message');
  _closingOptions = 1;

  constructor() {
    super();
    this._addHandlerHideWindow();
  }

  addHandlerFinish(handler) {
    this._closeWindow.addEventListener('click', handler);
  }
}

export default new successfullJobAppView();
