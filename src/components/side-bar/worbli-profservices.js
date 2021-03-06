import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../../css/shared-styles.js';

class WorbliProfservices extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host{
          display:block;
        }
        div {
            flex-grow: 1;
            color: var(--grey-text);
            font-size: 12px;
        }
        .faq-text {
          font-size: 13px;
          font-weight: 200;
          line-height: 16px;
          padding: 12px;
        }
        .button{
          margin-bottom: 12px;
        }

        .support-icon{
          padding-left: 20px;
        }
        .container-paper{
          display:block;
          background-color: white;
          border-radius: 3px;
          box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          -webkit-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          -moz-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          padding-bottom: 1px;
          margin-bottom: 12px
        }
      </style>
        <div class="container-paper">
            <div class="title">Professional Services</div>
            <p class="faq-text">Leveraging our deep talent pool, launch your dApp in safe hands</p>
            <a href="/profservices/" class="button">Enquire Now</a>
        </div>
    `;
  }
  static get properties() {
    return {
      init: {
        type: String,
        observer: '_doOnfido',
      },
    };
  }

} window.customElements.define('worbli-profservices', WorbliProfservices);