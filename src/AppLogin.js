import { LitElement, html, css } from 'lit';
import './login-lit';

export class AppLogin extends LitElement {
  static get properties() {
    return {
      success: { type: Boolean },
    };
  }

  static get styles() {
    return css`
      login-lit {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80vh;
        margin: 0;
      }
    `;
  }

  render() {
    return html`
      ${ this.success ?
        html`<h1>Bienvenido</h1>`
          :
        html`<login-lit @sigin=${this._hiddenLogin}>Error</login-lit>`}
    `;
  }

  _hiddenLogin(e) {
    this.success = e.detail;
  }
}
