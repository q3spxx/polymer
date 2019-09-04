import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './button.react.connector';

const getRandom = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
const result = (lenght?: number) => new Array(lenght || 100).fill(undefined).map(el => el = getRandom());

storiesOf('Button', module).add('with text', () => (
    <>
        <Button options={result(10)} onSelect={name => console.log(name)}>
            Hello Button
        </Button>
        <Button options={result(5000)} onSelect={name => console.log(name)}>
            Hello Button
        </Button>
        <Button options={result()} onSelect={name => console.log(name)}>
            Hello Button
        </Button>
        <Button options={result()} onSelect={name => console.log(name)}>
            Hello Button
        </Button>
        <Button options={result(500)} onSelect={name => console.log(name)}>
            Hello Button
        </Button>
        <Button options={result(3000)} onSelect={name => console.log(name)}>
            Hello Button
        </Button>
        <Button options={result()} onSelect={name => console.log(name)}>
            Hello Button
        </Button>
    </>
));
