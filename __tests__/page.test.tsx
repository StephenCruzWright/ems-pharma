import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '@/app/page';

describe('Home page', () => {
  it('renders key industry sections', () => {
    render(<Home />);

    expect(screen.getByRole('heading', { name: /build trust-led healthcare experiences/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /therapeutic areas/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /core capabilities/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /quality & compliance/i })).toBeInTheDocument();
  });

  it('toggles FAQ items', async () => {
    const user = userEvent.setup();
    render(<Home />);

    const toggle = screen.getByRole('button', { name: /can this site support multilingual content/i });
    expect(screen.getByText(/the next\.js app structure is ready for localization/i)).toBeInTheDocument();

    await user.click(toggle);
    expect(screen.queryByText(/the next\.js app structure is ready for localization/i)).not.toBeInTheDocument();
  });
});
