import React from "react";

import {Grid, Row, Col, Container} from "react-bootstrap"

export default function CardContainer(){
    return(
        <div>
            <Container>
                Card Conatiner 
                <Row className = "show-grid">
                    <Col lg={8}>
                        <Row className="show-grid">
                            <Col md={4}>
                                hellloodjjdnj
                                dkjkdjkd
                                kv
                            </Col>
                            <Col md={4}>
                                hellloodjjdnj
                                dkjkdjkd
                                kv
                            </Col>
                            <Col md={4}>
                                hellloodjjdnj
                                dkjkdjkd
                                kv
                            </Col>
                            <Col md={4}>
                                hellloodjjdnj
                                dkjkdjkd
                                kv
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}