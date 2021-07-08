import React from 'react';
import { screen, render } from "@testing-library/react";
import Body from '../components/Nav/Body'

test('expect body to render', () => { 
  render(<Body/>);
  const bodyInput = screen.getByRole('input')
  expect(bodyInput).toBeInTheDocument();
});