import { Container, Row, Col } from 'react-bootstrap';

const Template = ( {children}) => {
    return ( 
                    
        <Container className="py-3">

            <Row>
                
                <Col>
                
                    { children }
                
                </Col>
            
            </Row>

        </Container> 

    )
}

export default Template;
