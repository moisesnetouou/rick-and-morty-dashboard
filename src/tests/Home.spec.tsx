import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import Dashboard from '@/pages/index.page';

describe('Home page', () => {
  it('should be able to render', () => {
    render(<Dashboard />);
  });
});
