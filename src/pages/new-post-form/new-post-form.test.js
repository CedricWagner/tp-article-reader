import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NewPostForm from './new-post-form';

test('should render NewPostForm page', async () => {
    render(<BrowserRouter><NewPostForm /></BrowserRouter>);
    
    const postTitle = await screen.findByText(/Nouvel article/i);
    expect(postTitle).toBeInTheDocument();
});

test('should call "addPostAction" function when button is clicked', async () => {
    const onSubmit = jest.fn();

    render(<NewPostForm addPostAction={onSubmit}/>);

    fireEvent.click(screen.getByText(/Ajouter/i));
    
    expect(onSubmit).toHaveBeenCalled();
});

test('should have correct values stored in "post" object when form is submitted', async () => {
    
    let post = {};

    function addPostActionMock(_post) {
        post = _post
    }

    render(<NewPostForm addPostAction={addPostActionMock}/>);
    
    const nameInput = screen.getByPlaceholderText(/Titre/i);
    const bodyInput = screen.getByPlaceholderText(/Contenu/i);
    
    fireEvent.change(nameInput, { target: { value: "Mon titre" } });
    fireEvent.change(bodyInput, { target: { value: "Mon Contenu" } });
    fireEvent.click(screen.getByText(/Ajouter/i));
    
    expect(post.title).toBe('Mon titre')
    expect(post.body).toBe('Mon Contenu')
    expect(post.userId).toBe(1)
});