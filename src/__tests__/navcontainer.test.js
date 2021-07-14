import React from 'react';
import { screen, render } from "@testing-library/react";
import NavContainer from '../components/Nav/NavContainer';
import { MainContainerContext } from '../components/Main/MainContainer';

test('expect body to render', () => { 
  render(<NavContainer/>);
  const nav = screen.getByRole('input')
  expect(nav).toBeInTheDocument();
});