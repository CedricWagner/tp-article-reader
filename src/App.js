import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import PostCard from './components/post-card/post-card';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostList from './pages/post-list/post-list';
import PostFull from './pages/post-full/post-full';
import NewPostForm from './pages/new-post-form/new-post-form';

function App() {

    function addPostAction(post) {
        
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: post.title,
              body: post.body,
              userId: post.userId,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => {
                alert("Données envoyées !")
                console.log(json)
            });
    }

    return (
        <div className="App container">
            <h1>Liseuse d'articles</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PostList/>}/>
                    <Route path="/posts/:id" element={<PostFull/>}/>
                    <Route path="/add-post/" element={<NewPostForm addPostAction={addPostAction}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
