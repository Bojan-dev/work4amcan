import View from './View';

class UpdatePageUIView extends View {
  _parentElement = document
    .querySelector('.container')
    .querySelector('.container-left');
  _leftMarkupPages = [
    {
      title: `Available vehicles for work`,
      text: `We have three available vehicles type at the moment. Each of them requires certain skills and documents. Find the one that is most suited for you, select it and proceed and step further to your future job.`,
      btns: [`Box-truck`, `Sprinter-van`, `Semi-truck`],
    },
    {},
    {},
    {},
  ];
  _previousPages = [];
  _leftMarkup = `
  <div class="container-left__wrapper">
    <h1>${this._leftMarkupPages[this._currPage].title}</h1>
    <div class="red-line"></div>
    <p>
      ${this._leftMarkupPages[this._currPage].text}
    </p>

    <div class="container-left__btns">
      <button class="btn choose-option">
        ${this._leftMarkupPages[this._currPage].btns[0]}
      </button>
      <button class="btn choose-option">
      ${this._leftMarkupPages[this._currPage].btns[1]}
      </button>
      <button class="btn choose-option">
      ${this._leftMarkupPages[this._currPage].btns[2]}
      </button>
    </div>
  </div>
  <div class="background-lines"><div class="background-lines">
  <div class="lines-handler">
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
  </div>
</div></div>
`;

  _generateMarkup() {
    return this._leftMarkup;
  }

  pushPrevious() {
    const prevPage = this._parentElement.innerHTML;
    this._previousPages.push(prevPage);
  }
}

export default new UpdatePageUIView();
