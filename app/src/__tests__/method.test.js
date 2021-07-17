import React from 'react';
import { screen, render } from "@testing-library/react";
import Method from '../components/Nav/Method'

test('expect body to render', () => { 
  render(<Method/>);
  const methodType = screen.getByRole('input')
  expect(methodType).toBeInTheDocument();
});