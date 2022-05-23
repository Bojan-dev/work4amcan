//Imports:
import * as model from './model';
import companyInfoView from './views/companyInfoView';
import switchPageView from './views/switchPageView';
import currentPageBarView from './views/currentPageBarView';
import switchJobView from './views/switchJobView';
import formValidationView from './views/formValidationView';
import goBackBtnView from './views/goBackBtnView';
import navigationBarView from './views/navigationBarView';
import successfulJobAppView from './views/successfulJobAppView';

const controlPageChange = function (e) {
  //Pushing answer to model state:
  let curAnswer;
  if (model.state.currPage > 3) return;
  if (model.state.currPage <= 1)
    curAnswer = e.target.closest('button').dataset.option;
  if (model.state.currPage === 2) {
    curAnswer = switchJobView.returnChosedJob();
  }
  if (model.state.currPage === 3) {
    curAnswer = formValidationView.formValues;
    debugger;
    if (!curAnswer) return;
    // Object.keys(formValues).length >= 3
    //   ? (curAnswer = formValues)
    //   : (curAnswer = '');
  }

  model.updateAnswers(curAnswer);

  //Change page number:
  model.changePageNumber();

  //Update page view:
  switchPageView.toggleUIClass(model.state.currPage);

  //Updating current page bar:
  currentPageBarView.updateCurrentPageBar(model.state.currPage);
};

const controlGoBackPage = function () {
  if (model.state.currPage < 1) return;

  //Remove last answer:
  model.state.answers.pop();

  //Change page number:
  model.changePageNumber('down');

  //Update page view:
  switchPageView.toggleUIClass(model.state.currPage);

  //Updating current page bar:
  currentPageBarView.updateCurrentPageBar(model.state.currPage);
};

const controlFinishBtn = function () {
  model.state.answers = [];
};

//Adding handlers:
switchPageView.addHandlerClick(controlPageChange);
goBackBtnView.addHandlerBack(controlGoBackPage);
successfulJobAppView.addHandlerFinish(controlFinishBtn);
