//Imports:
import * as model from './model';
import leftBackgroundView from './views/leftBackgroundView';
import companyInfoView from './views/companyInfoView';
import changePageView from './views/changePageView';

function init() {
  changePageView.addHandlerClick(model.changePageNum);
}

init();
