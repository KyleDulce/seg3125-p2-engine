import { useState } from 'react';
import { Breadcrumb, Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Account from './signuppages/Account';
import License from './signuppages/License';
import Personal from './signuppages/Personal';
import Verify from './signuppages/Verify';

export default function Signup() {
    const [selectedSection, setSection] = useState(0);

    return (
        <>
            <Container className="mx-auto my-5 childrenNormalText" style={{width: "500px"}}>
                <div style={{padding: "20px"}}>
                    <Row>
                        <h2 className='title'>Create an Account</h2>
                    </Row>
                    <Row>
                        <Link to="../signin">Already have an account? Sign in now</Link>
                    </Row>
                </div>
                <div style={inputArea}>
                    <Row>
                        <Breadcrumb className='my-0'>
                            <Breadcrumb.Item linkProps={{onClick: () => setSection(0)}} active={selectedSection === 0}>Account</Breadcrumb.Item>
                            <Breadcrumb.Item linkProps={{onClick: () => setSection(1)}} active={selectedSection === 1}>Personal Information</Breadcrumb.Item>
                            <Breadcrumb.Item linkProps={{onClick: () => setSection(2)}} active={selectedSection === 2}>License</Breadcrumb.Item>
                            <Breadcrumb.Item linkProps={{onClick: () => setSection(3)}} active={selectedSection === 3}>Verify</Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                    <hr className='my-0'/>
                    <Row className='mt-3'>
                        {selectedSection === 0 &&
                            (<Account />)
                        }
                        {selectedSection === 1 &&
                            (<Personal />)
                        }
                        {selectedSection === 2 &&
                            (<License />)
                        }
                        {selectedSection === 3 &&
                            (<Verify />)
                        }
                    </Row>
                    

                    <Row className='mt-3' style={{width: "100%"}}>
                        <Col>
                            {selectedSection !== 0 &&
                                (<Button className='accentSolidButton' onClick={() => setSection(selectedSection - 1)}>Go Back</Button>)
                            }
                        </Col>
                        <Col>
                            {selectedSection !== 3 &&
                                (<Button className='float-end accentSolidButton' onClick={() => setSection(selectedSection + 1)}>Next</Button>)
                            }
                            {selectedSection === 3 &&
                                (<Link to="../completed-signup"><Button className='float-end accentSolidButton'>Submit</Button></Link>)
                            }
                        </Col>
                    </Row>
                </div>
                
            </Container>
        </>
    )
};

const inputArea = {
    border: "3px solid black",
    borderRadius: "10px",
    padding: "20px"
}