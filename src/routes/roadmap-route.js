import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';
import '../components/worbli-footer.js';
import '../components/worbli-roadmap.js';


class RoadmapRoute extends PolymerElement {
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
          padding-left: 30px;
        }
        .main {
          flex-grow: 1;
          max-width: 770px;
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
        .title {
          color: #3a3e46;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          line-height: 16px;
          padding: 13px 12px;
          border-bottom: 1px solid #f5f5f5;
          background: none;
          text-shadow: none;
        }
        h1 {
          color: var(--blue-text);
          font-weight: 600;
          margin-bottom: 12px;
        }
        h2 {
          color: var(--blue-text);
          font-size: 21px;
          font-weight: 600;
          margin-bottom: 12px;
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

      <div class="split">
        <div class="main">
          <h1>Roadmap</h1>
          <p>Help launch EOS main net in preparation for starting WORBLI’s Network</p>
          <h2>dApps</h2>
          <worbli-roadmap title="AML/KYC verification to WORBLI user accounts" status="complete"></worbli-roadmap>
          <worbli-roadmap title="Facilitate the launch of dApps on WORBLI" status="inprogress"></worbli-roadmap>
          <worbli-roadmap title="Gamma Bank MVP" status="testing"></worbli-roadmap>
          <worbli-roadmap title="Test Gamma Bank MVP" status="testing"></worbli-roadmap>
          <worbli-roadmap title="Alternative Product Development on WORBLI. Insurance, DEX’s and more are in the pipeline to be developed." status="inprogress"></worbli-roadmap>
          <worbli-roadmap title="Hire world class executive team to develop and launch Gamma Bank" status="inprogress"></worbli-roadmap>
          <worbli-roadmap title="Launch Gamma Bank in global markets (Africa, Latin America, Australia and Europe)" status="inprogress"></worbli-roadmap>
          <h2>Network</h2>
          <worbli-roadmap title="Help launch EOS main net in preparation for starting WORBLI’s Network" status="complete"></worbli-roadmap>
          <worbli-roadmap title="Confirm Block Producers & Block Producer Back Ups" status="complete"></worbli-roadmap>
          <worbli-roadmap title="Conduct WORBLI Network AirGrab" status="inprogress"></worbli-roadmap>
          <worbli-roadmap title="Launch WORBLI, the EOS Friendly (soft) Fork" status="complete"></worbli-roadmap>
          <worbli-roadmap title="List WORBLI’s (WBI) Token on multiple digital asset exchanges" status="inprogress"></worbli-roadmap>
          <worbli-roadmap title="Begin development and support of additional applications to be developed and deployed on WORBLI" status="inprogress"></worbli-roadmap>
          <worbli-roadmap title="Develop long-term strategic, financial and marketing plans" status="inprogress"></worbli-roadmap>
          <worbli-roadmap title="Commence Network Launch and AirGrab marketing and content campaigns" status="testing"></worbli-roadmap>
          <worbli-roadmap title="Develop correspondent banking relationships in the US" status="inprogress"></worbli-roadmap>
          <worbli-roadmap title="Ramp up global marketing efforts" status="inprogress"></worbli-roadmap>
          <worbli-roadmap title="Pursue additional strategic partnerships with digital currency exchanges " status="testing"></worbli-roadmap>
          <worbli-roadmap title="Add additional Block Producers to Worbli Network" status="inprogress"></worbli-roadmap>          
          <h2>Governance</h2>
          <worbli-roadmap title="Publish WORBLI Network governance processes and engage WORBLI community in ongoing governance efforts" status="testing"></worbli-roadmap>
          <worbli-roadmap title="Complete White Paper & Business Plan" status="complete"></worbli-roadmap>
          <worbli-roadmap title="Commence lobbying efforts and developing relationships with US governance bodies (SEC, IRS, Federal Reserve, OCC)" status="inprogress"></worbli-roadmap>
          <worbli-roadmap title="Recruit and hire additional technical, business and administrative team members" status="complete"></worbli-roadmap>
          <worbli-roadmap title="Develop correspondent banking relationships in the US" status="inprogress"></worbli-roadmap>
          <worbli-roadmap title="Secure global correspondent banking relationships" status="testing"></worbli-roadmap>
          <worbli-roadmap title="Incorporate WORBLI Foundation in a favourable regulatory environment (Switzerland, Bermuda, Malta, Panama, Singapore)" status="complete"></worbli-roadmap>
          <worbli-roadmap title="Seek additional funding through private investment sources" status="inprogress"></worbli-roadmap>
          <worbli-roadmap title="Finalize strategic, marketing and operational plans" status="testing"></worbli-roadmap>
          <worbli-roadmap title="Continue recruiting and hiring for WORBLI team" status="inprogress"></worbli-roadmap>
        </div>
        <div class="side">
        <div class="container">
            <div class="title">White Paper</div>
        </div>
        <div class="container">
            <div class="title">Our Partners</div>
        </div>
        </div>
      </div>
      <worbli-footer name="footer"></worbli-footer>
    `;
  }
} window.customElements.define('roadmap-route', RoadmapRoute);
