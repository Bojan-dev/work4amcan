import View from './View';

class CompanyInfoView extends View {
  _parentElement = document.getElementById('company-info-body');
  _openBtn = document.getElementById('more-about-company').lastElementChild;
  _closeWindow = document.getElementById('close-overlay');
  _overlay = document.querySelector('.overlay');
  _overlayWindow = document.getElementById('company-info-container');
  _closingOptions = 2;

  _allInfo = [
    {
      header: `Аbout us`,
      text: `AmCan Freight Systems is a transportation company specializing in the shipping of non-perishable goods. We have been in the industry for over 15 years, and can say with certainty that you have come to the right place, your freight being in safe hands. Our story begins in the Chicago area, later spreading to serve the entire Midwest and Florida. With our long-standing experience, we offer our clients Freight and Vehicle Transport at all times.`,
    },
    {
      header: `Regions`,
      text: `Most of AmCan’s loads originate in Illinois and are dispatched throughout the Midwest. AmCan Freight Lines is a U.S.-based trucking company and carries loads from Fargo all the way to Cleveland at the most competitive rates out there. If you are a shipper in the Midwest and need shipments anywhere in the region, then this is your opportunity to lower your transportation expenses. AmCan Freight Lines offers both Economy and Expedited shipping services.

      Our operations have led us to branch out to Florida, and we are proud to state that we now cover the entire State of Florida, as well as most areas in the Southeast region with our services.`,
    },
    {
      header: `Services`,
      text: `Our company offers a wide range of service levels for both full truckload and LTL. Whether you need to ship dry goods or specialized freight, you can count on AmCan. AmCan’s range of truck-based services are designed to provide you with plenty of choices and flexibility in moving your goods from any point in the Midwest and most of the States in the Southeast.`,
    },
    {
      header: `Safety`,
      text: `AmCan’s commitment to safety goes far beyond the legal limit. AmCan’s goal is to safely provide value-added transportation services that meet and exceed each customer’s expectations. At AmCan, we promote safety on the roads and environmental awareness with all of our drivers.`,
    },
    {
      header: `Hiring`,
      text: `It is extremely important to keep the roads safe for traveling, and AmCan is committed to doing its part. AmCan’s makes sure to hire safe non-CDL and CDL drivers. Equipped with practical over-the-road experience, our drivers inspect their equipment daily, and handle all freight with special care. Well-trained drivers at AmCan work hard to ensure safe and timely delivery of each and every shipment.`,
    },
    {
      header: `Contact`,
      text: `Accounting Manager - Maria : 847-655-2589; Operation Manager - Tatyana : 224-215-1001; Dispatch Manager - Paul : 224-215-1001; Claims - Mary : 847-565-8801; Safety Manager - Pete : 224-215-1001; Marketing Departmant - Eve : 407-604-0401;
      `,
    },
  ];

  constructor() {
    super();
    this.render();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
    this._addHandlerEscWindow();
  }

  _generateMarkup() {
    return this._allInfo
      .map(
        (obj) => `<div>
    <div class="each-info-header">
      <div></div>
      <p>${obj.header}:</p>
    </div>
    <p>
      ${obj.text}
    </p>
  </div>
  <div class="separation-line"></div>`
      )
      .join('');
  }
}

export default new CompanyInfoView();
