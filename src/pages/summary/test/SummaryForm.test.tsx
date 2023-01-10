import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SummaryForm from '../SummaryForm';

test('Initial conditions', () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole('checkbox', { name: /terms and conditions/i });
  const confirmButton = screen.getByRole('button', { name: /confirm order/i });
  expect(checkbox).not.toBeChecked();
  expect(confirmButton).toBeDisabled();
});

test('Checkbox disabled button on first click and enables on second', async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);

  const checkbox = screen.getByRole('checkbox', { name: /terms and conditions/i });
  const confirmButton = screen.getByRole('button', { name: /confirm order/i });
  await user.click(checkbox);
  expect(confirmButton).toBeEnabled();
  await user.click(checkbox);
  expect(confirmButton).toBeDisabled();
});

test('popover responds to hover', async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);
  // popover starts out hidden
  const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i);
  expect(nullPopover).not.toBeInTheDocument();
  // popover appears upon mouseover of checkbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  await user.hover(termsAndConditions);
  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();
  // popover disappears when we mouse out
  await user.unhover(termsAndConditions);
  const nullPopover2 = screen.queryByText(/no ice cream will actually be delivered/i);
  expect(nullPopover2).not.toBeInTheDocument();
});
