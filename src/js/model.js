export const state = {
  curPage: 0,
  answers: [],
};

export const changePage = function (updatePage = 1, answers) {
  //Update curPage:
  updatePage === 1 ? state.curPage++ : state.curPage--;
  //Push page answers to the state.answers array:
  state.answers.push(answers);
  console.log(state.answers);
};
