import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import PostCard from "../../components/post-card/post-card";

export default function PostList() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        // check reponse status and parse to json
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status + " : " + response.statusText)
            }
            return response.json()
        })
        // check content and change state
        .then((data) => {
            setPosts(data)
        })
        .catch(error => {
            alert('Erreur lors de la requete : ' + error)
        });
    }, [])

    return (
        <div className="row">
            <h2 className="mb-3">Liste</h2>
            <div className="mb-3">
                <LinkContainer to={`/add-post`}>
                    <Button>Ajouter un article</Button>
                </LinkContainer>
            </div>
            {posts.map((data) => (
                <div className="col-md-3 mb-5 d-flex align-items-stretch" key={data.id}>
                    <PostCard post={data} />
                </div>
            ))}
        </div>

    )
}