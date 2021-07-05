//Imports:
import * as model from './model';
import companyInfoView from './views/companyInfoView';
import switchPageView from './views/switchPageView';
import currentPageBarView from './views/currentPageBarView';
import switchJobView from './views/switchJobView';
import formValidationView from './views/formValidationView';

function init() {
  switchPageView.addHandlerClick(model.changePage);
  switchJobView.addHandlerClick();
  formValidationView.addHandlerSubmit();
}

init();

// allPages.forEach((container) => {
//   container.classList.add('hidden');
//   container.style.height = '0';
// });

console.log(`cas`);
console.log(isFinite(`dfsa`));
