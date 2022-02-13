import React from 'react';
import { useAPI } from '../api/apiContent';
import { PortfolioImage } from './PortfolioImage';
import { Container, Row, Col } from 'react-bootstrap';

const Homepage = () => {
    const { data } = useAPI();

    const FetchNames = () => {
        return data.name;
    }

    const FetchSummarys = () => {
        return data.summary;
    }

    const FetchPics = () => {
        return data.image;
    }

    const FetchIntro = () => {
        return data.introduction;
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="mt-5 align-center">Hello! I'm <span className='first-name'>{FetchNames()}</span></h1>
                    <h5 key={0} className='summary'>{FetchSummarys()}</h5>
                    <p key={1} className='introduction mt-4'>{FetchIntro()}</p>
                </Col>
                <Col>
                    {<PortfolioImage key={0} index={0} className='align-self-center mr-3 img-sized' picUrls={FetchPics()} alt='Image' />}
                </Col>
            </Row>
        </Container>
    )
}
export default Homepage;