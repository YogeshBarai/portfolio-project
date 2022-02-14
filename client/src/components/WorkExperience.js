import React from 'react';
import { useAPI } from '../api/apiContent';
import Accordion from 'react-bootstrap/Accordion';

const WorkExperience = () => {

    const FetchWorkExp = () => {
        const { data } = useAPI();
        
        return data.workexperience;
    }

    return (
        <div className="container mt-5 mb-5" >
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <Accordion defaultActiveKey="0" flush>
                        {FetchWorkExp().map((eachWorkExp, index) => {
                                return (
                                    <Accordion.Item eventKey={index} key={index}>
                                        <Accordion.Header>{eachWorkExp.company} - {eachWorkExp.designation}</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="mb-3">
                                                <b>From Date:</b> {eachWorkExp.from_date}
                                                <span className="float-end"><b>To Date:</b> {eachWorkExp.current === 'yes' ? 'Current' : eachWorkExp.to_date}</span>
                                            </div>
                                            {eachWorkExp.responsibility}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                )
                        })}
                    </Accordion>
                </div>
            </div>
        </div>
    );
}

export default WorkExperience;