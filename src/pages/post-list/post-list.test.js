import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Route } from 'react-router-dom';
import { MemoryRouter, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../../App';
import PostFull from '../post-full/post-full';
import PostList from './post-list';
import {createMemoryHistory} from 'history'
import { Router } from 'react-router-dom';

test('should render PostList page', async () => {
    render(<BrowserRouter><PostList /></BrowserRouter>);
    
    const postTitle = await screen.findByText(/qui est esse/i);
    expect(postTitle).toBeInTheDocument();
});

// test('should redirect to detail on click', async () => {
//     render(<MemoryRouter initialEntries={['/']}>
//         <Routes>
//             <Route path="/" element={<PostList/>}/>
//             <Route path="/posts/:id" element={<PostFull/>}/>
//         </Routes>
//     </MemoryRouter>);
    
//     const postsLink = await screen.findAllByText(/Détail/i);
//     expect(postsLink[1]).toBeInTheDocument();

//     const secondLink = postsLink[1];
//     console.log(fireEvent.click(secondLink))
//     // userEvent.click(secondLink)

//     await waitFor(async () => {
//         const pageTitle = await screen.findByText(/Retour à la liste/i);
//         expect(pageTitle).toBeInTheDocument();
//     })

// });

