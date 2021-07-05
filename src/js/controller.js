//Imports:
import * as model from './model';
import companyInfoView from './views/companyInfoView';
import switchPageView from './views/switchPageView';
import currentPageBarView from './views/currentPageBarView';
import switchJobView from './views/switchJobView';
import formValidationView from './views/formValidationView';
import goBackBtnView from './views/goBackBtnView';

const init = function () {
  switchPageView.addHandlerClick(model.changePage);
  switchJobView.addHandlerClick();
  formValidationView.addHandlerSubmit();
};

init();

// allPages.forEach((container) => {
//   container.classList.add('hidden');
//   container.style.height = '0';
// });
