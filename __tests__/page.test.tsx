import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '@/app/page';

describe('Home page', () => {
  it('renders core brand and contact elements', () => {
    render(<Home />);

    expect(screen.getByRole('img', { name: /ems property logo/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /ems pharma/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /our location/i })).toBeInTheDocument();
    expect(screen.getByText(/\+258 84 305 2440/i)).toBeInTheDocument();
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

    const toggle = screen.getByRole('button', { name: /do you support nationwide distribution in mozambique\?/i });
    expect(screen.getByText(/yes\./i)).toBeInTheDocument();

    await user.click(toggle);
    expect(screen.queryByText(/^yes\.$/i)).not.toBeInTheDocument();
  });
});
