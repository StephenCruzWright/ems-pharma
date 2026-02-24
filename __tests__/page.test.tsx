import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '@/app/page';

describe('Home page', () => {
  it('renders core brand and contact elements', () => {
    render(<Home />);

    expect(screen.getAllByRole('img', { name: /ems pharma logo/i }).length).toBeGreaterThan(0);
    expect(screen.getByRole('heading', { level: 1, name: /ems pharma/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /our location/i })).toBeInTheDocument();
    expect(screen.getAllByText(/\+258 84 305 2440/i).length).toBeGreaterThan(0);
  });

  it('switches between english and portuguese content', async () => {
    const user = userEvent.setup();
    render(<Home />);

    expect(screen.getByRole('heading', { name: /presentation letter/i })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /português/i }));

    expect(screen.getByRole('heading', { name: /carta de apresentação/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /english/i })).toBeInTheDocument();
  });

  it('toggles FAQ items', async () => {
    const user = userEvent.setup();
    render(<Home />);

    const toggle = screen.getByRole('button', {
      name: /do you support nationwide distribution in mozambique\?/i,
    });
    expect(
      screen.getByText(
        /yes\. we actively supply maputo, beira, nampula, inhambane, pemba, and tete\./i,
      ),
    ).toBeInTheDocument();

    await user.click(toggle);
    expect(
      screen.queryByText(
        /yes\. we actively supply maputo, beira, nampula, inhambane, pemba, and tete\./i,
      ),
    ).not.toBeInTheDocument();
  });
});
