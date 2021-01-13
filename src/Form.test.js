import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Form from './Form'
import Results from './Results'

test('Starting method value is GET', () => {
    render(<Results/>);
    const method = screen.getByTestId('method');
    expect(method).toHaveTextContent('GET');    
})

test('Form exists', () =>{
    render(<Form/>)
    expect(screen.getByTestId('form')).toBeValid();
})

