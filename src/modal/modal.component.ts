import { LitElement, html, property } from 'lit-element';
import { styles } from './modal.styles';

class Modal extends LitElement {    
    @property({ type: Boolean }) open = false;
    @property({ type: String }) mode = '';
    
    bodyDocument = document.body;

    attributeChangedCallback(name: string, oldValue: string, nextValue: string) {
        super.attributeChangedCallback(name, oldValue, nextValue);
        const isOpen = name === 'open' && nextValue;
        if (isOpen) {
            this.bodyDocument.style.overflow = 'hidden';
        } else {    
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

    render() {
        const styles = `--modal-bg-color: ${JSON.parse(this.mode).backgroundColor}; --modal-color: ${JSON.parse(this.mode).color}`;
        return !!this.open ? html`
                <div class="dialog" style=${styles}>
                    <div class="dialog__content">
                        <header>
                            <h2>Заголовок модального окна</h2>
                        </header>
                        <main>
                            <slot></slot>
                        </main>
                        <footer>
                            <button class="dialog__ok-btn" @click=${this.handleClick('ok')}>OK</button>
                            <button class="dialog__cancel-btn" @click=${this.handleClick('cancel')}>CANCEL</button>
                        </footer>
                        <div class="dialog__close-btn" @click=${this.handleClick('close')}></div>
                    </div>
                </div>
                <div  class="overlay"></div>
            ` : html``;
    }
}

customElements.define('lit-modal', Modal);