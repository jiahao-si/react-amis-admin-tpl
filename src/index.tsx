import * as React from 'react';
import { render } from 'react-dom';
import App from './App';

export function bootstrap(mountTo: HTMLElement) {
  render(<App />, mountTo);
}

bootstrap(document.getElementById('root')!);
