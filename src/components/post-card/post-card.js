import { Button, Card } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'

export default function PostCard(props) {


    return (
        <Card className="post-card flex-fill">
            <Card.Body className="d-flex flex-column">
                <Card.Title className="flex-fill">{props.post.title}</Card.Title>
                <LinkContainer to={`/posts/${props.post.id}`} role="link">
                    <Button variant="primary">Détail</Button>
                </LinkContainer>
            </Card.Body>
        </Card>
    );
}