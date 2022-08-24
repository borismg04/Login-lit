import {LitElement,html,css} from 'lit-element';

export class LogginLit extends LitElement {

  static get styles() {
    return css`
      .container {
        background-color: #cee3fd;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        text-align: center;
        color: #2a1bff;
      }
      input {
        width: 30%;
        height: 20px;
        margin: 10px;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
        box-shadow: inset 0px 0px 5px #ccc;
      }
      button {
        width: 15%;
        height: 40px;
        margin: 10px;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
        background-color: #295bff;
        color: #fff;
        font-weight: bold;
        box-shadow: inset 0px 0px 5px #ccc;
      }

      button:hover {
        background-color: #fff;
        color: #2a1bff;
      }
    `;
  }


  render () {
    return html`
      <div class="container">
        <h1>Login whith LitElement</h1>
        <input type="email" placeholder="Write your email" />
        <input type="password" placeholder="Password" />

        <button>Sign in</button>
      </div>
    `;
  }
}

customElements.define('login-lit', LogginLit);
