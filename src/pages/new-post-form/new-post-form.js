import { useState } from "react";

export default function NewPostForm(props) {

    const [post, setPost] = useState({
        title: '',
        body: '',
        userId: 1,
    });

    function editPost(key, value) {
        setPost({...post, [key] : value});
    }

    function handleAddPostAction(e) {
        e.preventDefault();
        props.addPostAction({
            title: post.title,
            body: post.body,
            userId: post.userId,
        })
    }

    return (
        <form onSubmit={handleAddPostAction}>
            <h2>Nouvel article</h2>
            <div className="mb-3">
                <input type="text" placeholder="Titre" name="title" className="form-control" value={post.title}
                    onChange={(e) => editPost('title', e.target.value)}/>
            </div>

            <div className="mb-3">
                <textarea type="text" name="body" className="form-control" value={post.body}
                        onChange={(e) => editPost('body', e.target.value)} placeholder="Contenu">
                    {post.body}
                </textarea>
            </div>

            <button type="submit" className="btn btn-primary">Ajouter</button>
        </form>
    )
}