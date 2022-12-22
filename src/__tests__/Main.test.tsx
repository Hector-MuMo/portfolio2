import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from '../components/Main';

test("check start project string", () => {
    render(<Main />)
    const text = screen.getByText("Home")
    expect(text).toBeInTheDocument()
})