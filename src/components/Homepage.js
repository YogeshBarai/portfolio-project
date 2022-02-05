import React from 'react';
import { useAPI } from '../api/apiContent';
import PortfolioImage from './PortfolioImage';
import { Container, Row, Col } from 'react-bootstrap';

const Homepage = () => {

    const FetchNames = () => {
        const { data, isLoading } = useAPI();

        const names = data.map(eachPortfolio => {
            return eachPortfolio.name;

        });

        return names;
    }

    const FetchSummarys = () => {
        const { data, isLoading } = useAPI();

        const summarys = data.map(eachPortfolio => {
            return eachPortfolio.summary;

        });

        return summarys;
    }

    const FetchPics = () => {
        const { data, isLoading } = useAPI();

        const pics = data.map(eachPortfolio => {
            return eachPortfolio.image;

        });

        return pics;
    }

    const FetchIntro = () => {
        const { data, isLoading } = useAPI();

        const intros = data.map(eachPortfolio => {
            return eachPortfolio.introduction;

        });

        return intros;
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="mt-5 align-center">Hello! I'm <span className='first-name'>{FetchNames().map((eachName) => {
                        const spaceIndex = String(eachName).indexOf(' ');
                        const firstName = String(eachName).substring(0, spaceIndex);
                        return firstName;
                    })}</span></h1>
                    {FetchSummarys().map(eachSummary => {
                        return <h5 className='summary'>{eachSummary}</h5>
                    })}
                    {FetchIntro().map(eachIntro => {
                        return <p className='introduction mt-4'>{eachIntro}</p>
                    })}
                </Col>
                <Col>
                    {FetchPics().map(eachPic => {
                        return <PortfolioImage className='align-self-center mr-3 img-sized' picUrls={eachPic} alt='Image' />
                    })}
                </Col>
            </Row>
        </Container>
    )
}
export default Homepage;