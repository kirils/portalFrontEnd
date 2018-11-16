import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../../css/shared-styles.js';
import '../../components/worbli-footer.js';
import '../../components/side-bar/worbli-snapshot.js';
import '@polymer/app-route/app-location.js';
import '../../worbli-env.js';

class ReviewRoute extends PolymerElement {
  static get template() {
    return html`
          <style include="shared-styles">
        :host {
          display: block;
        }
        iframe {
          margin-top: 50px;
          margin-bottom: 50px;
        }
        .split {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
        .side {
          width: 280px;
          padding-right: 30px;
        }
        .main {
          flex-grow: 1;
          max-width: 830px;
          background: #FFF;
          border-radius: 3px;
          box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          -webkit-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          -moz-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
        }
        .container {
          position: relative;
          background: #FFF;
          border-radius: 3px;
          box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          -webkit-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          -moz-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          margin-bottom: 18px;
            }
        .navigation {
          color: #3a3e46;
          font-size: 11px;
          font-weight: 600;
          line-height: 16px;
          padding: 13px 12px;
          border-bottom: 1px solid #f5f5f5;
          background: none;
          text-shadow: none;
        }
        .navigation:hover {
          background-color: #F6F6F7;
        }
        .selected {
          color: black;
          background-color: #F6F6F7;
        }
        .footer {
          display: block;
          height: 63px;
          border-top: 1px solid #f5f5f5;
          text-align: right;
        }
        h1 {
          color: var(--blue-text);
          font-weight: 600;
          margin-bottom: 12px;
          font-size: 13px;
          border-bottom: 1px solid #f5f5f5;
          padding: 12px;
        }
        h2 {
          color: var(--blue-text);
          font-size: 21px;
          font-weight: 600;
          margin-top: 12px;
          margin-bottom: 12px;
        }
        .container a {
          text-decoration: none;
        }
        button {
          display: inline-block;
          vertical-align: middle;
          background: #4f7eb8;
          border: 1px solid #4b77ad;
          border-radius: 3px;
          box-shadow: none;
          text-shadow: none;
          color: #fff;
          font-weight: bold;
          font-size: 12px;
          padding: 0 13px;
          line-height: 29px;
          text-align: center;
          margin: 16px;
          cursor: pointer;
        }
        .input-area {
          display: flex;
        }
        .section-name {
          display: inline-block;
          min-width: 200px;
          padding: 12px;
          font-size: 15px;
          color: #6f727d;
          font-weight: normal;
        }
        .form-inputs {
          display: inline-block;
          padding: 12px;
        }
        label {
          display: block;
          font-size: 12px;
          color: #393d4d;
          font-weight: 600;
          padding: 17px 0 7px;
          width: 340px;
        }
        .label{
            font-size: 12px;
            color: #393d4d;
            font-weight: 600; 
            text-transform: capitalize; 
        }
        input {
          width: 307px;
          background: #f8f8f8;
          border: 1px solid #d1d5d7;
          border-radius: 2px;
          margin: 0;
          padding: 5px 7px;
          line-height: 19px;
          border: 1px solid #D9DBDE;
          border-radius: 3px;
          font-size: 13px;
          color: #393D4D;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.02), 0 1px 0 rgba(255, 255, 255, 0.075);
          -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.02), 0 1px 0 rgba(255, 255, 255, 0.075);
          -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.02),0 1px 0 rgba(255, 255, 255, 0.075);
        }
        .comment {
          display: block;
          line-height: 18px;
          color: #9da1ab;
          padding: 9px 0 0;
          margin: 0 0 -2px 0;
          font-size: 12px;
        }
        hr {
          display: block;
          border-top: 1px solid #f5f5f5;
        }
        .dropdown {
          background-color: #f8f8f8;
          border-color: #d1d5d7;
          -webkit-appearance: none;
          appearance: none;
          -moz-appearance: none;
          -moz-appearance: none;
          line-height: 15px;
          padding: 5px 5px 5px 7px;
          -webkit-padding-end: 20px;
          height: 31px;
          font-size: 13px;
          border: 1px solid #D9DBDE;
          border-radius: 3px;
          background: url(./images/dropdown.gif) no-repeat;
          background-size: 18px 22px;
          background-position: 100% 50%;
          width: 320px;
        }
        .error{
          color: #E54D53;
        }
        .notReady{
          cursor: not-allowed;
          opacity: 0.3;
        }
        .steps{

          margin-left: 40px;
        }
        .step-text {
          margin-left: 17px;
          color: #D8D8D8;
          font-weight:600;
        }
        .step-text div {
          text-align: center;
          display:inline-block;
          width:78px;
        }
        .step{
          color:#272727;
        }
        .sidebar{
          padding-bottom: 12px;
          background: #FFF;
          border-radius: 3px;
          box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          -webkit-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          -moz-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
        }
        .dropdown-short{
          width:100px;
        }
        .intro{
          padding: 12px;
        }
        .button {
          display: block;
          box-shadow: inset 0 0 0 1px #c8d6e8;
          padding: 6px;
          border-radius: 3px;
          text-align: center;
          padding-top: 12px;
          height: 25px;
          margin: 0 12px 0 12px;
          text-decoration: none;
          color: #4978b3;
          font-size: 12px;
          font-weight: 600;
          width: 290px;
        }
        .text{
          text-transform: capitalize;
        }
        .upper {
          text-transform: uppercase;
        }

      </style>
      
      <!-- Google Tag Manager (noscript) -->
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KGVQG5T"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      <!-- End Google Tag Manager (noscript) -->

      <!-- Global site tag (gtag.js) - Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-117118714-1"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-117118714-1');
      </script>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <worbli-env api-path="{{apiPath}}""></worbli-env>
      <div class="split">
        <div class="side">
        <div class="container">
            <a href="/dashboard/profile"><div class="navigation ">Application</div></a>
            <a href="/dashboard/review"><div class="navigation selected">Review</div></a>
            <a href="/dashboard/status"><div class="navigation">Status</div></a>
            <a href="/dashboard/account"><div class="navigation">Account</div></a>
            <a href="/dashboard/sharedrop"><div class="navigation">Sharedrop</div></a>
            <a href="/dashboard/password"><div class="navigation">Password</div></a>
          </div>
        </div>

        <div class="main">
          <h1>Review</h1>
          <p class="intro">Please review your applicant data and make sure that it is correct before submitting the application. We will be checking the validity of your identity against public record databases based on the documents you submitted. Thank you!</p>
          <hr>
          <div class="input-area">
            <div class="section-name">Applicant</div>
            <div class="form-inputs">
              <p class="label">{{nameFirst}} {{nameMiddle}} {{nameLast}} </p>
            </div>
          </div>
          <hr>
          <div class="input-area">
            <div class="section-name">Address</div>
                <div class="form-inputs">
                    <p class="label">{{addressNumber}} {{addressOne}} </p>
                    <p class="label">{{addressTwoError}} </p>
                    <p class="label">{{addressCity}} </p>
                    <p class="label">{{addressRegion}} </p>
                    <p class="label">{{addressZip}} </p>
                    <p class="label">{{addressCountry}} </p>
                </div>
            </div>
            <hr>
            <div class="input-area">
                <div class="section-name">Phone</div>
                <div class="form-inputs">
                    <p class="label">+ {{phoneCode}} {{phoneMobile}} </p>
                </div>
            </div>
            <hr>
            <div class="input-area">
                <div class="section-name">Date Of Birth</div>
                <div class="form-inputs">
                    <p class="label"> {{dobDay}}/{{dobMonth}}/{{dobYear}} </p>
                </div>
            </div>
            <hr>
            <div class="input-area">
                <div class="section-name">Gender</div>
                <div class="form-inputs">
                    <p class="label"> {{gender}} </p>
                </div>
            </div>
            <hr>
            <div class="input-area">
                <div class="section-name">Documents</div>
                <div class="form-inputs">
                    <p class="label"> 3{{documentCount}} </p>
                </div>
            </div>
            <div class="footer">
              <button type="button" on-click="_saveProfile">Submit Application</button>
            </div>

        </div>
      </div>
      </br></br>
      <worbli-footer name="footer"></worbli-footer>
    `;
  }

  static get properties() {
    return {
      complete: {
        type: Boolean,
        value: false,
      },
      started: {
        type: Boolean,
        value: false,
      },
      readonly: {
        type: Text,
      },
      apiPath: {
        type: Text,
      },
      kycToken2: {
        type: Text,
      },
      showIframe: {
        type: Boolean,
        value: false,
      }
    };
  }

  ready() {
    super.ready();
    this._getData();
  }
  _saveProfile(){
    this.set('route.path', '/dashboard/status/')
  }


  _getData(){
    const token = localStorage.getItem("token");
    if(token) {
      const url = `${this.apiPath}/user/profile/`;
      fetch(url, {
        method: 'GET',
        headers: {'Authorization': `Bearer ${token}`},
      })
      .then((response) => {return response.json()})
      .then(response => {
        if(response.data === true){
          this.nameFirst = response.profile.name_first || "";
          this.nameMiddle = response.profile.name_middle || "";
          this.nameLast = response.profile.name_last || "";
          this.addressNumber = response.profile.address_number || "";
          this.addressOne = response.profile.address_one || "";
          this.addressTwo = response.profile.address_two || "";
          this.addressCity = response.profile.address_city || "";
          this.addressRegion = response.profile.address_region || "";
          this.addressZip = response.profile.address_zip || "";
          if(response.profile && response.profile.address_country){
            this.addressCountry = response.profile.address_country.toUpperCase() || "";
          }
          this.phoneCode = response.profile.phone_code || "";
          this.phoneMobile = response.profile.phone_mobile || "";
          if(response.profile && response.profile.date_birth){
            this.dobYear = new Date(response.profile.date_birth).getFullYear() || "";
            this.dobMonth = new Date(response.profile.date_birth).getMonth() || "";
            this.dobDay = new Date(response.profile.date_birth).getDay() || "";
          }
          this.gender = response.profile.gender || "";
        }
      })
      .catch(error => {
        console.log(error)
      });
    } else {this.set('route.path', '/')}
  }


} window.customElements.define('review-route', ReviewRoute);