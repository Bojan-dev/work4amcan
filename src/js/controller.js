//Imports:
import * as model from './model';
import leftBackgroundView from './views/leftBackgroundView';
import companyInfoView from './views/companyInfoView';
import switchPageView from './views/changePageView';

function init() {
  switchPageView.addHandlerClick(model.changePageNum);
}

init();
