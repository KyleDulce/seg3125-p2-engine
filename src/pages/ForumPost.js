import { Form, Button } from 'react-bootstrap';
import { itemsContainer } from '../util/CommonCss';

export default function ForumPost() {
    return (
        <>
            <div className='my-5' style={itemsContainer}>
                <Form className='mx-auto' style={{width: "80%"}}>
                    <h2 className='title'>Create Post</h2>
                    <div className='mx-auto normalText my-3' style={{display: "flex", flexWrap: "wrap"}}>
                        <Form.Group style={{width: "65%"}}>
                            <Form.Label>Post Title</Form.Label>
                            <Form.Control placeholder="Title" />
                        </Form.Group>
                        <Form.Group style={{width: "35%"}}>
                            <Form.Label>Post Tag</Form.Label>
                            <Form.Select>
                                <option>General Question</option>
                                <option>Discussion</option>
                                <option>Tools</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                    <Form.Group className='normalText my-3' style={{width: "100%"}}>
                        <Form.Label>Post Title</Form.Label>
                        <Form.Control as="textarea" placeholder="Type your post here" rows={10}/>
                    </Form.Group>
                    <Button className='normalText my-3 accentSolidButton'>Create Post</Button>
                </Form>
            </div>
        </>
    )
};