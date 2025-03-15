import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import useAuthStore from './authStore'; // Import the auth store

test('renders login button and allows login', () => {
  render(<App />);
  
  // Check for login button
  const loginButton = screen.getByText(/login/i);
  expect(loginButton).toBeInTheDocument();

  // Simulate login
  fireEvent.click(loginButton);

  // Check for counter after login
  const counterText = screen.getByText(/counter:/i);
  expect(counterText).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<App />);
  
  // Simulate login
  const loginButton = screen.getByText(/login/i);
  fireEvent.click(loginButton);

  // Check for counter text
  const counterText = screen.getByText(/counter:/i);
  expect(counterText).toBeInTheDocument();
});
