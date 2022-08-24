import {LitElement,html,css} from 'lit-element';

export class LogginLit extends LitElement {

  static get styles() {
    return css`
      .container {
        background-color: #ecf5ff;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        height: 350px;
        width: 450px;
        text-align: center;
        color: #483ed3;
        padding-top: 15px;
      }
      input {
        width: 60%;
        height: 15px;
        margin-top: 15px;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
        box-shadow: inset 0px 0px 5px #ccc;
      }
      button {
        width: 150px;
        height: 40px;
        margin: 20px;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
        background-color: #295bff;
        color: #fff;
        font-weight: bold;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
      }

      button:hover {
        background-color: #fff;
        color: #2a1bff;
        cursor: pointer;
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
