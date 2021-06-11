//Imports:
import * as model from './model';
import companyInfoView from './views/companyInfoView';
import switchPageView from './views/switchPageView';
import currentPageBarView from './views/currentPageBarView';

function init() {
  switchPageView.addHandlerClick(model.changePage);
}

init();
