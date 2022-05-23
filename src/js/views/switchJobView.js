import View from './View';
import illinoisIllustration from 'url:../../img/illinois-illustration.png';
import northeasternUsa from 'url:../../img/northeastern-usa.png';

class SwitchJobView extends View {
  _parentElement = document.getElementById('driving-jobs-body-content');
  _switchBtns = Array.from(document.querySelectorAll('.switch-job'));
  _btnsToSwitch = this._switchBtns.filter((btn) =>
    btn.closest('#driving-jobs-btns')
  );
  _jobInfo = [
    {
      job: `localdriver`,
      pic: illinoisIllustration,
      picAtr: 'Illinois illustration',
      title: `LOCAL DRIVER IN ILLINOIS AREA`,
      description: `Local truck drivers transport goods over short distances, usually in light trucks or vans. Drivers' workdays begin at the terminal or warehouse, where they get their assignments and delivery forms. They may load their trucks themselves or have helpers.`,
      hours: `8-10h a day`,
      salary: `$26 per hour`,
      benefits: `Normal working time, a set routine, excellent work/life balance, health`,
    },
    {
      job: `regionaldriver`,
      pic: northeasternUsa,
      picAtr: 'Northeaster USA map',
      title: `REGIONAL DRIVER IN NORTHEASTERN USA`,
      description: `Regional truck drivers haul freight within a specific area of the country. That creates jobs that are just right for drivers still looking to hit the open road while staying close enough to home to get there weekly or more.`,
      hours: `few days - a week`,
      salary: `$32 per hour`,
      benefits: `Experience the country, regular scheduling, bigger salary`,
    },
    {
      job: `yardspotter`,
      pic: illinoisIllustration,
      picAtr: 'Illinois illustration',
      title: `YARD SPOTTER IN ILLINOIS AREA`,
      description: `Yard spotter help to transfer trailers from one truck to another and direct the drivers in entering and exiting the yard safely. Just like a spotter, a yard spotter may help with organizing the warehouse, helping to load and unload product from the trailers, and performing other general maintenance tasks as needed.`,
      hours: `8-10h a day`,
      salary: `$18 per hour`,
      benefits: `Normal working time, a set routine, excellent work/life balance, health`,
    },
  ];

  constructor() {
    super();
    this._addHandlerClick();
  }

  _addHandlerClick() {
    this._switchBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const toSwitchBtn = this._btnsToSwitch.find(
          (btn) => this.textContentTrim(btn) === this.textContentTrim(e.target)
        );
        this._btnsToSwitch.map((btn) => btn.classList.remove('active-job-btn'));
        toSwitchBtn.classList.add('active-job-btn');
        this.render(this._jobInfo[toSwitchBtn.dataset.info]);
      });
    });
  }

  _generateMarkup(content) {
    return `<div class="job-title">
    <h5>${content.title}</h5>
    <img
      src="${content.pic}"
      alt="${content.picAtr}"
    />
  </div>
  <div class="red-separation-line"></div>
  <div class="job-each-description">
    <div class="job-description-title">
      <div>
        <div></div>
        <p>Job description:</p>
      </div>
      <i class="fas fa-lg fa-file-alt"></i>
    </div>
    <p class="job-description-text">
      ${content.description}
    </p>
    <div></div>
  </div>
  <div class="job-each-description">
    <div class="job-description-title">
      <div>
        <div></div>
        <p>Average working hours: ${content.hours}</p>
      </div>
      <i class="fas fa-lg fa-clock"></i>
    </div>
    <div></div>
  </div>
  <div class="job-each-description">
    <div class="job-description-title">
      <div>
        <div></div>
        <p>Average salary: ${content.salary}</p>
      </div>
      <i class="fas fa-lg fa-comment-dollar"></i>
    </div>
    <div></div>
  </div>
  <div class="job-each-description">
    <div class="job-description-title">
      <div>
        <div></div>
        <p>
          Benefits: ${content.benefits}
        </p>
      </div>
      <i class="fas fa-lg fa-plus-circle"></i>
    </div>
    <div></div>
  </div>`;
  }

  returnChosedJob() {
    const clickedBtn = this._btnsToSwitch.find((btn) =>
      btn.classList.contains('active-job-btn')
    );

    return this.textContentTrim(clickedBtn);
  }
}

export default new SwitchJobView();
