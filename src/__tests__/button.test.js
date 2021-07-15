import React from 'react';
import { screen, render } from "@testing-library/react";
import Button from '../components/Sidebar/Button'

test('expect body to render', () => { 
  render(<Button/>);
  const butt = screen.getByRole('input')
  expect(butt).toBeInTheDocument();
});