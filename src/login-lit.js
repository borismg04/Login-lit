import {LitElement,html,css} from 'lit-element';

export class LogginLit extends LitElement {
  render () {
    return html`
      <p>Hola desde aca loggin lit</p>
    `;
  }
}

customElements.define('login-lit', LogginLit);
