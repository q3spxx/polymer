import { LitElement, html, property } from 'lit-element';
import { styles } from './dropdown.styles';

class Dropdown extends LitElement {
    @property({ type: Array }) options: string[] = [];
    @property({ type: Boolean }) open: false;

    static get styles() {
        return styles;
    }

    render() {
        const { options } = this;
        console.log("TCL: Button -> getrenderDropdown -> options", options.length)
        return !!this.open && html`
            <ul class="dropdown">
                ${options.map(
                    name => html`
                        <li style=${'--list-element-color: ' + name}>${name}</li>
                    `
                )}
            </ul>
        ` || html``;
    }
}

customElements.define('lit-dropdown', Dropdown);
