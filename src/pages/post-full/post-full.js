import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function PostFull(props) {

    const {id} = useParams();
    const [post, setPost] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id)
        // check reponse status and parse to json
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status)
            }
            return response.json()
        })
        // check content and change state
        .then((data) => {
            setPost(data)
        })
        .catch(_error => {
            setError(_error);
        });
    }, [])

    return (
        <div>
            <h2>{post.title}</h2>
            <Link to="/">Retour à la liste</Link>
            <p>
                {post.body}
            </p>
            { error && (
                <Alert variant="danger">
                    Une erreur est survenue ({error.message})
                </Alert>
            )}
        </div>
    )
}