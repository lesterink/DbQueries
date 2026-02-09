// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DbQueries title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DbQueries/i);
    expect(titleElement).toBeInTheDocument();
});
