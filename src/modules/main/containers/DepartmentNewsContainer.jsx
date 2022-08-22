import React from "react";
import { Col, Row } from "react-grid-system";
import styled from "styled-components";
import Button from "../../../components/button";
import EventSlider from "../../../components/event-slider";
import Heading from "../../../components/heading";
import newsImage from "../../../assets/images/secondary.jpg";
const Styled = styled.div`
  .news_container {
    .news_image {
      height: 100px;
      width: 100%;
      background: ${`url(${newsImage})`};
      object-fit: cover;
      background-size: cover;
    }
    .border {
      margin: 20px 0 20px 20px;
      width: 100%;
      height: 1px;
      background: #e3e3e3;
    }
  }
`;
const DepartmentNewsContainer = () => {
  return (
    <Styled>
      <Row
        style={{
          margin: 0,
          padding: "20px",
        }}
      >
        <Col md={12}>
          <Heading title="News" />
        </Col>
      </Row>
      <Row
        style={{
          margin: 0,
          padding: "20px 20px 0 20px",
        }}
        justify="between"
      >
        <Col
          xxxl={8}
          xxl={8}
          xl={6}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Row className="news_container" justify="center">
            <Col md={2} className="news_image"></Col>
            <Col md={8}>
              <span>August 23</span>
              <h3>Implementation of business plan for the 1st half</h3>
            </Col>
            <span className="border"></span>
          </Row>
          <Row className="news_container" justify="center">
            <Col md={2} className="news_image"></Col>
            <Col md={8}>
              <span>August 23</span>
              <h3>Implementation of business plan for the 1st half</h3>
            </Col>
            <span className="border"></span>
          </Row>
          <Row className="news_container" justify="center">
            <Col md={2} className="news_image"></Col>
            <Col md={8}>
              <span>August 23</span>
              <h3>Implementation of business plan for the 1st half</h3>
            </Col>
            <span className="border"></span>
          </Row>
          <Row className="news_container" justify="center">
            <Col md={2} className="news_image"></Col>
            <Col md={8}>
              <span>August 23</span>
              <h3>Implementation of business plan for the 1st half</h3>
            </Col>
            <span className="border"></span>
          </Row>
          <Row className="news_container" justify="center">
            <Col md={2} className="news_image"></Col>
            <Col md={8}>
              <span>August 23</span>
              <h3>Implementation of business plan for the 1st half</h3>
            </Col>
            <span className="border"></span>
          </Row>
          <Row className="news_container" justify="center">
            <Col md={2} className="news_image"></Col>
            <Col md={8}>
              <span>August 23</span>
              <h3>Implementation of business plan for the 1st half</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
                distinctio corrupti blanditiis eaque ut incidunt facilis
                inventore id aliquam?
              </p>
            </Col>
            <span className="border"></span>
          </Row>
        </Col>
        <Col xxxl={3} xxl={2.5} xl={12} lg={12} md={12} sm={12} xs={12}>
          <Button title="Contact to Department" mb="10px" ss />
          <EventSlider />
        </Col>
      </Row>
    </Styled>
  );
};

export default DepartmentNewsContainer;
