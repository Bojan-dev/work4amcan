import View from './View';
import semiTruck from 'url:../../img/semi-truck.png';
import boxTruck from 'url:../../img/box-truck.png';
import sprinterVan from 'url:../../img/sprinter-van.png';
import boxTruckBlue from 'url:../../img/box-truck-blue.png';
import sprinterVanBlue from 'url:../../img/sprinter-van-blue.png';
import semiTruckBlue from 'url:../../img/semi-truck-blue.png';
import truckMechanicBlue from 'url:../../img/truck-mechanic-blue.png';
import illinoisIllustration from 'url:../../img/illinois-illustration.png';
import formTruckIllustration from 'url:../../img/form-truck-illustration.png';

class UpdatePageUIView extends View {
  _parentElement = document.querySelector('.container');
  _allPagesHTML = [
    `<div class="container-left">
  <div class="container-left__wrapper">
    <h1>Great opportunity to build your career</h1>
    <div class="red-line"></div>
    <p>
      Find yourself a job in a <span class="to-red"> fast-growing</span>
      company that is more than 10 years in the transportation business.
      Only four clicks separates you from that. Choose a region you would
      like to work on:
    </p>

    <div class="container-left__btns">
      <button class="btn choose-option">
        Illianois
        <img
          id="skyscraper-icon"
          width="50px"
          height="130px"
          src="./static/skyscraper-icon.png"
          alt="Skyscraper icon"
        />
      </button>
      <button class="btn choose-option">
        Florida
        <img
          width="110px"
          height="110px"
          src="./static/palm-trees.png"
          alt="Palm trees icon"
          class="animate__animated animate__swing"
        />
      </button>
      <button class="btn choose-option">
        Over the Road
        <img
          width="85px"
          height="110px"
          src="./static/over-the-road.png"
          alt="Over the road icon"
        />
      </button>
    </div>
  </div>
</div>
<div class="container-right">
  <img
    id="first-page-background"
    src="./static/first-page-background.png"
    alt="A truck following the road marks"
  />
</div>
<div id="current-page-bar">
  <p id="current-page">
    <span>01</span>&ThinSpace;<sup>/&ThinSpace;04</sup>
  </p>
  <div><div></div></div>
  <p>Choose working location</p>
</div>
<div id="more-about-company">
  <p>Company info:</p>
  <button><i class="fas fa-info"></i></button>
</div>`,
    `<div class="container-left">
  <div class="container-left__wrapper">
    <h1>Available vehicles for work</h1>
    <div class="red-line-arrow">
      <div class="red-line"></div>
      <svg
        width="145"
        viewBox="0 0 190 74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M188.536 40.5355C190.488 38.5829 190.488 35.4171 188.536 33.4644L156.716 1.64465C154.763 -0.307974 151.597 -0.307974 149.645 1.64465C147.692 3.59727 147.692 6.76309 149.645 8.71572L177.929 37L149.645 65.2843C147.692 67.2369 147.692 70.4027 149.645 72.3553C151.597 74.3079 154.763 74.3079 156.716 72.3553L188.536 40.5355ZM4.37114e-07 42L185 42L185 32L-4.37114e-07 32L4.37114e-07 42Z"
          fill="white"
        />
      </svg>
    </div>
    <p>
      We have three available vehicles type at the moment. Each of them
      requires certain <span class="to-red"> skills</span> and
      <span class="to-red">documents</span>. Find the one that is most
      suited for you, select it and proceed and step further to your
      future job.
    </p>

    <div class="container-left__btns">
      <button class="btn choose-option">
        Box truck
        <img
          class="veh-icons"
          width="110px"
          height="110px"
          src="${boxTruck}"
          alt="Box truck icon"
        />
      </button>
      <button class="btn choose-option">
        Sprinter van
        <img
          class="veh-icons"
          width="110px"
          height="110px"
          src="${sprinterVan}"
          alt="Palm trees icon"
        />
      </button>
      <button class="btn choose-option">
        Semi truck
        <img
          class="veh-icons"
          width="85px"
          height="110px"
          src="${semiTruck}"
          alt="Semi truck icon"
        />
      </button>
    </div>
  </div>
</div>
<div class="container-right second-page-right">
  <div class="each-vehicle">
    <img
      width="175px"
      height="95px"
      src="${boxTruckBlue}"
      alt="Box truck icon"
    />
    <h4>Box truck</h4>
    <div class="white-separation-line"></div>
    <div class="all-conditions">
      <div class="vehicle-conditions">
        <div></div>
        <p>Class of driver licence</p>
      </div>
      <div class="vehicle-conditions">
        <div></div>
        <p>Two year of experience</p>
      </div>
    </div>
  </div>
  <div class="each-vehicle">
    <img
      width="188px"
      height="95px"
      src="${sprinterVanBlue}"
      alt="Sprinter van icon"
    />
    <h4>Sprinter van</h4>
    <div class="white-separation-line"></div>
    <div class="all-conditions">
      <div class="vehicle-conditions">
        <div></div>
        <p>Class of driver licence</p>
      </div>
      <div class="vehicle-conditions">
        <div></div>
        <p>Two year of experience</p>
      </div>
    </div>
  </div>
  <div class="each-vehicle">
    <img
      width="200px"
      height="100px"
      src="${semiTruckBlue}"
      alt="Semi truck icon"
    />
    <h4>Semi truck</h4>
    <div class="white-separation-line"></div>
    <div class="all-conditions">
      <div class="vehicle-conditions">
        <div></div>
        <p>Class of driver licence</p>
      </div>
      <div class="vehicle-conditions">
        <div></div>
        <p>Two year of experience</p>
      </div>
    </div>
  </div>
  <div class="each-vehicle">
    <img
      width="200px"
      height="150px"
      src="${truckMechanicBlue}"
      alt="Truck mechanic icon"
    />
    <h4>Truck mechanic</h4>
    <div class="white-separation-line"></div>
    <div class="all-conditions">
      <div class="vehicle-conditions">
        <div></div>
        <p>Class of driver licence</p>
      </div>
      <div class="vehicle-conditions">
        <div></div>
        <p>Two year of experience</p>
      </div>
    </div>
  </div>
</div>`,
    `<div class="container-left">
<div class="container-left__wrapper">
  <h1>Last step! Select desired job</h1>
  <div class="red-line-arrow">
    <div class="red-line"></div>
    <svg
      width="145"
      viewBox="0 0 190 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M188.536 40.5355C190.488 38.5829 190.488 35.4171 188.536 33.4644L156.716 1.64465C154.763 -0.307974 151.597 -0.307974 149.645 1.64465C147.692 3.59727 147.692 6.76309 149.645 8.71572L177.929 37L149.645 65.2843C147.692 67.2369 147.692 70.4027 149.645 72.3553C151.597 74.3079 154.763 74.3079 156.716 72.3553L188.536 40.5355ZM4.37114e-07 42L185 42L185 32L-4.37114e-07 32L4.37114e-07 42Z"
        fill="white"
      />
    </svg>
  </div>
  <p>
    There are three types of drivers we looking for, local driver, yard
    spotter, and regional driver. You can choose the one that is most
    suited for you. Keep in mind that local driver and yard spotter has
    <span class="to-red">daily</span> and
    <span class="to-red">night</span> shift.
  </p>

  <div class="container-left__btns">
    <button class="btn choose-option">Local driver</button>
    <button class="btn choose-option">Regional driver</button>
    <button class="btn choose-option">Yard spotter</button>
  </div>
</div>
</div>
<div class="container-right third-page-right">
<div id="driving-jobs-btns">
  <button class="active-job-btn">Local driver</button
  ><button>Regional driver</button><button>Yard spotter</button>
</div>
<div id="driving-jobs-body">
  <div class="job-title">
    <h5>Local driver in illinois area</h5>
    <img
      src="${illinoisIllustration}"
      alt="Illinois icon"
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
      Local truck drivers transport goods over short distances, usually
      in light trucks or vans. Drivers' workdays begin at the terminal
      or warehouse, where they get their assignments and delivery forms.
      They may load their trucks themselves or have helpers.
    </p>
    <div></div>
  </div>
  <div class="job-each-description">
    <div class="job-description-title">
      <div>
        <div></div>
        <p>Average working hours: 8-10h a day</p>
      </div>
      <i class="fas fa-lg fa-clock"></i>
    </div>
    <div></div>
  </div>
  <div class="job-each-description">
    <div class="job-description-title">
      <div>
        <div></div>
        <p>Average salary: $11.80 per hour</p>
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
          Benefits: Home time, a set routine, excellent work/life
          balance, health
        </p>
      </div>
      <i class="fas fa-lg fa-plus-circle"></i>
    </div>
    <div></div>
  </div>
  <button class="submit-btn">Apply now</button>
</div>
</div>`,
    `<div class="container-left">
<div class="container-left__wrapper">
  <h1>Fill the form, we'll contact you soon!</h1>
  <div class="red-line-arrow">
    <div class="red-line"></div>
    <svg
      width="145"
      viewBox="0 0 190 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M188.536 40.5355C190.488 38.5829 190.488 35.4171 188.536 33.4644L156.716 1.64465C154.763 -0.307974 151.597 -0.307974 149.645 1.64465C147.692 3.59727 147.692 6.76309 149.645 8.71572L177.929 37L149.645 65.2843C147.692 67.2369 147.692 70.4027 149.645 72.3553C151.597 74.3079 154.763 74.3079 156.716 72.3553L188.536 40.5355ZM4.37114e-07 42L185 42L185 32L-4.37114e-07 32L4.37114e-07 42Z"
        fill="white"
      />
    </svg>
  </div>
  <p>
    After you completed the form and submit it we will view it and
    contact you as soon as possible. If everything is alright you can
    expect to <span class="to-red">start working</span> in few days.
  </p>

  <div class="container-left__btns">
    <img
      width="710px"
      height="356px"
      id="form-truck-illustration"
      src="${formTruckIllustration}"
      alt=""
    />
  </div>
</div>
</div>
<div class="container-right forth-page-right">
<form action="submit">
  <div class="form-field">
    <p>Name: *</p>
    <input
      type="text"
      placeholder="Your name here"
      onfocus="this.placeholder = ''"
      onblur="this.placeholder = 'Your name here'"
    />
  </div>
  <div class="form-field">
    <p>Phone number: *</p>
    <input
      type="text"
      placeholder="Your phone number here"
      onfocus="this.placeholder = ''"
      onblur="this.placeholder = 'Your phone number here'"
    />
  </div>
  <div class="form-field">
    <p>E-mail address: *</p>
    <input
      type="text"
      placeholder="Your e-mail address here"
      onfocus="this.placeholder = ''"
      onblur="this.placeholder = 'Your e-mail address here'"
    />
  </div>
  <div class="form-field">
    <p>Message (optional):</p>
    <input
      type="text"
      placeholder="Your message here"
      onfocus="this.placeholder = ''"
      onblur="this.placeholder = 'Your message here'"
    />
  </div>
  <button class="submit-btn">Submit</button>
</form>
</div>`,
  ];

  _generateMarkup() {
    this.updateCurrPage();
    return this._allPagesHTML[this._currPage];
  }
}

export default new UpdatePageUIView();
