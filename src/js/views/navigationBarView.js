class NavigationBarView {
  parentElement = document.querySelector('header');

  constructor() {
    document.addEventListener('scroll', () => {
      scrollY > 30
        ? this.parentElement.classList.add('header-update')
        : this.parentElement.classList.remove('header-update');
    });
  }
}

export default new NavigationBarView();
