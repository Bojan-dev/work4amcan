export const state = {
  curPage: 0,
  answers: [],
};

export const changePageNum = function () {
  state.curPage++;
  console.log(state.curPage);
};
