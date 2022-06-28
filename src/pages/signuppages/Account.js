import React from "react";
import { Form } from "react-bootstrap";

export default class Account extends React.Component {

    render() {
        return (
            <>
                <h3 className="title">Account</h3>
                <Form>
                    <Form.Group className="mt-1" style={{width: "400px"}}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="Email" placeholder="Email"/>
                    </Form.Group>
                    <Form.Group className="mt-3" style={{width: "400px"}}>
                        <Form.Label>Username</Form.Label>
                        <Form.Control placeholder="Username"/>
                    </Form.Group>
                    <Form.Group className="mt-3" style={{width: "400px"}}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"/>
                    </Form.Group>
                    <Form.Group className="mt-3" style={{width: "400px"}}>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"/>
                    </Form.Group>
                </Form>
            </>
        )
    }
}