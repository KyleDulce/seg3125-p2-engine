import React from "react";
import { Form } from "react-bootstrap";

export default class Personal extends React.Component {

    render() {
        return (
            <>
                <h3 className="title">Personal Information</h3>
                <Form>
                    <Form.Group className="mt-1" style={{width: "400px"}}>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="Email" placeholder="Email"/>
                    </Form.Group>
                    <Form.Group className="mt-3" style={{width: "400px"}}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder="Username"/>
                    </Form.Group>
                    <Form.Group className="mt-3" style={{width: "400px"}}>
                        <Form.Label>Telephone</Form.Label>
                        <Form.Control placeholder="Username"/>
                    </Form.Group>
                </Form>
            </>
        )
    }
}