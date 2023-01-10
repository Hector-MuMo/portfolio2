import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home';

test("check start project string", () => {
    render(<Home />)
    const text = screen.getByText("Perfil")
    expect(text).toBeInTheDocument()
})