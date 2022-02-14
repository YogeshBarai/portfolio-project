import React from 'react';
import { useAPI } from '../api/apiContent';
import { PortfolioImage } from './PortfolioImage';
import { Container, Row, Col } from 'react-bootstrap';

const Homepage = () => {
    const { data } = useAPI();

    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="mt-5 align-center">Hello! I'm <span className='first-name'>{data.name}</span></h1>
                    <h5 key={0} className='summary'>{data.summary}</h5>
                    <p key={1} className='introduction mt-4'>{data.introduction}</p>
                </Col>
                <Col>
                    {<PortfolioImage key={0} index={0} className='align-self-center mr-3 img-sized' picUrls={data.image} alt='Image' />}
                </Col>
            </Row>
        </Container>
    )
}
export default Homepage;