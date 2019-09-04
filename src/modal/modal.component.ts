import { LitElement, html, property } from 'lit-element';
import { styles } from './modal.styles';

interface Theme {
    color?: string;
    backgroundColor?: string;
    buttonOkBgColor?: string;
    buttonOkColor?: string;
}

class Modal extends LitElement {    
    @property({ type: Boolean }) open = false;
    @property({ type: String }) mode = '';
    
    bodyDocument = document.body;

    attributeChangedCallback(name: string, oldValue: string, nextValue: string) {
        super.attributeChangedCallback(name, oldValue, nextValue);
        if (name === 'open' && nextValue) {
            this.bodyDocument.style.overflow = 'hidden';
        } 
        if (name === 'open' && !nextValue) {    
            this.bodyDocument.style.overflow = '';
        }
    }

    static get styles() {
        return styles;
    }

    private handleClick = (name: string) => () => {
        console.log("TCL: Modal -> privatehandleClick -> name", name)
        this.open = false;
        let event = new CustomEvent('health-click', {
            detail: {
                name,
            },
        });
        this.dispatchEvent(event);
        this.requestUpdate();
    };

    getColors = (): Theme => {
        const { mode } = this;
        if (mode === 'dark') {
            return { color: '#fff', backgroundColor: '#2c2f3c' };
        }
        return { color: '#2c2f3c', backgroundColor: '#fff' };
    }

    getStyles = () => `
        --modal-bg-color: ${this.getColors().backgroundColor};
        --modal-color: ${this.getColors().color};
    `

    render() {
        return !!this.open ? html`
                <div class="dialog" style=${this.getStyles()}>
                    <div class="dialog-content">
                        <header>
                            <h2>Заголовок модального окна</h2>
                        </header>
                        <main>
                            <slot></slot>
                        </main>
                        <footer>
                            <button class="dialog-ok-btn" @click=${this.handleClick('ok')}>OK</button>
                            <button class="dialog-cancel-btn" @click=${this.handleClick('cancel')}>CANCEL</button>
                        </footer>
                        <div class="dialog-close-btn" @click=${this.handleClick('close')}></div>
                    </div>
                </div>
                <div  class="overlay"></div>
            ` : html``;
    }
}

customElements.define('lit-modal', Modal);