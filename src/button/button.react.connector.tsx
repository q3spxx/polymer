import React, { PureComponent } from 'react';
import './button.component';

interface Props {
    options?: string[];
    onSelect?(message: string): void;
}
interface LitProps {
    options?: string;
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'lit-button': LitProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}

export class Button extends PureComponent<Props> {
    private elementRef = React.createRef<HTMLElement>();

    private handleSelect = (event: CustomEvent<{ name: string }>) => {
        const { onSelect } = this.props;
        if (onSelect) {
            onSelect(event.detail.name);
        }
    };

    componentDidMount() {
        if (this.elementRef.current) {
            this.elementRef.current.addEventListener('on-select', this.handleSelect);
        }
    }

    componentWillUnmount() {
        if (this.elementRef.current) {
            this.elementRef.current.removeEventListener('on-select', this.handleSelect);
        }
    }

    render() {
        const { children, options } = this.props;
        return (
            <lit-button ref={this.elementRef} options={JSON.stringify(options)}>
                {children}
            </lit-button>
        );
    }
}
