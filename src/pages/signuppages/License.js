import React from "react";
import { Form } from "react-bootstrap";

export default class License extends React.Component {
    
    render() {
        return (
            <>
                <h3 className="title">License</h3>
                <p>You can always change this later</p>
                <Form className="mt-1">
                    {engines.map((item) => (
                        <div className="my-2" style={{display: "flex", flexWrap: "wrap", border: "2px solid #FFDD00"}}>
                            <Form.Check type="radio" name="engine" id={item.label} label={item.label}/>
                            <div className="mx-3">
                                <p>{item.description}</p>
                            </div>
                            <div className="ms-auto me-3">
                                <p>{`Price: ${item.price}`}</p>
                            </div>
                        </div>
                    ))}
                </Form>
            </>
        )
    }
}

const engines = [
    {
        label: "Free License",
        description: "The minium number of tools to create great games",
        price: "Free!"
    },
    {
        label: "Pro License",
        description: "For the hobbyist or independent developers who wants to make some money from their games",
        price: "$15.00/Month"
    },
    {
        label: "Enterprise License",
        description: "For companies needs advanced tools and support",
        price: "$35.00/User/Month"
    }
]