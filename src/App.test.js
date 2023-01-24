import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct intial text and color', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', {
    name: "Change to blue"
  })
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveStyle({
    backgroundColor: 'red'
  })

  fireEvent.click(buttonElement);

  expect(buttonElement).toHaveStyle({
    backgroundColor: 'blue'
  })

  expect(buttonElement).toHaveTextContent('Change to red');

  //alternative
  expect(buttonElement.textContent).toBe('Change to red');
});
