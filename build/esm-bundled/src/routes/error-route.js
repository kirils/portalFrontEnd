import{PolymerElement,html}from"../worbli-portal.js";class ErrorRoute extends PolymerElement{static get template(){return html`
      <style>
        :host {
          display: block;
        }
      </style>

      Oops you hit a 404. <a href="[[rootPath]]">Head back to home.</a>
    `}}window.customElements.define("error-route",ErrorRoute);