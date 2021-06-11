export const state = {
  curPage: 0,
  answers: [],
};

export const changePage = function (answers) {
  //Update curPage:
  state.curPage++;
  //Push page answers to the state.answers array:
  state.answers.push(answers);
};
