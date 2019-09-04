import React, { PureComponent } from 'react';
import './modal.component';
import '../button/button.component';

interface Props {
    open: boolean;
    mode: string;
    onClick?(message: string): void;
}

interface LitProps {
    open?: boolean;
    mode: string;
    onclick?: (message: string) => void | undefined;
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'lit-modal': LitProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}

export class ModalComponent extends PureComponent<Props> {
    private elementRef = React.createRef<HTMLElement>();

    private handleClick = (event: CustomEvent<{ name: string }>) => {
        console.log("TCL: ModalComponent -> privatehandleClick -> event", event)
        const { onClick } = this.props;
        if (onClick) {
            onClick(event.detail.name);
        }
    };

    componentDidMount() {
        if (this.elementRef.current) {
            this.elementRef.current.addEventListener('health-click', this.handleClick);
        }
    }

    componentWillUnmount() {
        if (this.elementRef.current) {
            this.elementRef.current.removeEventListener('health-click', this.handleClick);
        }
    }

    render() {
        const { children, open, mode } = this.props;
        return open ? (
            <lit-modal ref={this.elementRef} open mode={mode}>
                {children}
            </lit-modal>
        ) : (
            <lit-modal ref={this.elementRef} mode={mode}>
                {children}
            </lit-modal>
        );
    }
}
