import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BoardResult from './BoardResult';

describe('BoardResult', () => {
  it('renders inputs and produces a destiny board result', async () => {
    const user = userEvent.setup();
    const { container } = render(<BoardResult />);

    await user.clear(screen.getByLabelText('年：'));
    await user.type(screen.getByLabelText('年：'), '1993');

    await user.clear(screen.getByLabelText('月：'));
    await user.type(screen.getByLabelText('月：'), '11');

    await user.clear(screen.getByLabelText('日：'));
    await user.type(screen.getByLabelText('日：'), '2');

    await user.selectOptions(screen.getByLabelText('時辰：'), '子時');

    await user.click(screen.getByRole('button', { name: '產生紫微命盤' }));

    const resultOutput = container.querySelector('pre');
    expect(resultOutput).toBeTruthy();

    await waitFor(() => {
      expect(resultOutput?.textContent?.trim()).not.toBe('');
    });
  });
});
