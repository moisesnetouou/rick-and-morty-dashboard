import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../pages/home';

describe('Home page', () => {
  it('should be able to render', () => {
    render(<Home />);

    expect(
      screen.getByText(
        /find in-depth information about next\.js features and api\./i,
      ),
    ).toBeInTheDocument();
  });
});
