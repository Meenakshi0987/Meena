import { render, screen } from '@testing-library/react';
import Test from './Test.js';

test('renders learn react link', () => {
  render(<Test />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
