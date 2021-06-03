import View from './View';

class LeftBackgroundView extends View {
  _parentElement = document.querySelector('.background-lines');

  constructor() {
    super();
    this.render();
  }

  _generateMarkup() {
    return `<div class="lines-handler">
              <div class="line"></div>
              <div class="line"></div>
            </div>
            <div class="lines-handler">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
            </div>
            <div class="lines-handler">
              <div class="line"></div>
              <div class="line"></div>
            </div>`;
  }
}

export default new LeftBackgroundView();
