export const state = {
  currPage: 0,
  answers: [],
};

export const changePageNumber = function (pageDirection = 'up') {
  //Update page number:
  pageDirection === 'up' ? state.currPage++ : state.currPage--;
};

export const updateAnswers = function (answer) {
  if (state.answers.length > 3) return;

  //Push page answers to the state.answers array:
  state.answers.push(answer);
  console.log(state.answers);
};
