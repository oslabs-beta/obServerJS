import React from 'react';
import { screen, render } from "@testing-library/react";
import Tab from '../components/Tab/Tab'

test('expect body to render', () => { 
  render(<Tab/>);
  const tab = screen.getByRole('input')
  expect(tab).toBeInTheDocument();
});