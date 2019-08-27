import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './button.react.connector';

const options = ['lol', 'check', 'cheburek'];

storiesOf('Button', module).add('with text', () => (
    <Button options={options} onSelect={name => console.log(name)}>
        Hello Button
    </Button>
));
