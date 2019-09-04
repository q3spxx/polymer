import { LitElement, html, property } from 'lit-element';
import { styles } from './buttons.styles';

class Button extends LitElement {
    @property({ type: Array }) options: string[] = [];

    static get styles() {
        return styles;
    }

    private isOpen = false;

    private toggleOpen() {
        this.isOpen = !this.isOpen;
        this.requestUpdate();
    }

    private handleClick = () => {
        this.toggleOpen();
    };

    private handleSelect = (name: string) => () => {
        let event = new CustomEvent('on-select', {
            detail: {
                name,
            },
        });
        this.dispatchEvent(event);
        this.toggleOpen();
    };

    get renderDropdown() {
        const { options } = this;
        return html`
            <ul class="dropdown">
                ${options.map(
                    name => html`
                        <li style=${'--list-element-color: ' + name} @click=${this.handleSelect(name)}>${name}</li>
                    `
                )}
            </ul>
        `;
    }

    render() {
        return html`
            <div class="wrapper">
                <button @click=${this.handleClick}><slot></slot></button>
                <div class="dropdown-anchor">
                    ${this.isOpen ? this.renderDropdown : ''}
                </div>
            </div>
        `;
    }
}

customElements.define('lit-button', Button);
