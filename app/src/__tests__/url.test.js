import React from 'react';
import { screen, render } from "@testing-library/react";
import Url from '../components/Nav/Url'

test('expect body to render', () => { 
  render(<Url/>);
  const url = screen.getByRole('input')
  expect(url).toBeInTheDocument();
});