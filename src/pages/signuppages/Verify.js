import React from "react";
import { Table } from "react-bootstrap";

export default class Verify extends React.Component {

    render() {
        return (
            <>
                <h3>Verify your information</h3>
                <Table>
                    <thead>
                        <tr>
                            <th>Information</th>
                            <th>Answer</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Email</th>
                            <th>Placeholder</th>
                        </tr>
                        <tr>
                            <th>Username</th>
                            <th>Placeholder</th>
                        </tr>
                        <tr>
                            <th>Password</th>
                            <th>******</th>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <th>Placeholder</th>
                        </tr>
                        <tr>
                            <th>Phone Number</th>
                            <th>Placeholder</th>
                        </tr>
                        <tr>
                            <th>License</th>
                            <th>Placeholder</th>
                        </tr>
                    </tbody>
                </Table>
            </>
        )
    }
}