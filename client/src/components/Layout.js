import React from 'react'
import {Row, Col,Container} from 'react-bootstrap'
import FormPost from './FormPost'

function Layout() {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={12} xs={12} md={12} xl={12}><FormPost /></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Layout
