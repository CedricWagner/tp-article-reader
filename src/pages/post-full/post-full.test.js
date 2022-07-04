import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PostFull from './post-full';
import {createMemoryHistory} from 'history'
import App from '../../App';

test('should display a message when a post does not exist', async () => {
    const history = createMemoryHistory()
    history.push('/posts/200')
    render(
        <BrowserRouter location={history.location} navigator={history}>
            <PostFull />
        </BrowserRouter>,
    )
    
    const errorMessage = await screen.findByText(/Une erreur est survenue/i);
    expect(errorMessage).toBeInTheDocument();
});