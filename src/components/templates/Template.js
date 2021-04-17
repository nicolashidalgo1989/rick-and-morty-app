import { Container, Row, Col } from 'react-bootstrap';

const Template = ( {children}) => {
    return ( 
                    
        <Container>

            <Row>
                
                <Col>
                
                    { children }
                
                </Col>
            
            </Row>

        </Container> 

    )
}

export default Template;
