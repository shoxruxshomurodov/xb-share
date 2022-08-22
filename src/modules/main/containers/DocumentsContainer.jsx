import React from "react";
import { Col, Row } from "react-grid-system";
import styled from "styled-components";
import Heading from "../../../components/heading";
import FolderIcon from "../../../assets/images/folder-icon.png";
import ExcelIcon from "../../../assets/images/excel-icon.png";
import WordIcon from "../../../assets/images/word-icon.png";
import PowerPointIcon from "../../../assets/images/powerpoint-icon.png";
import EventSlider from "../../../components/event-slider";
import Button from "../../../components/button";
const Styled = styled.div`
  .document_icon {
    width: 60px;
  }
  .document_container {
    .border {
      margin: 20px 0 20px 20px;
      width: 100%;
      height: 1px;
      background: #e3e3e3;
    }
  }
`;
const DocumentsContainer = () => {
  return (
    <Styled>
      <Row
        style={{
          margin: 0,
          padding: "20px",
        }}
      >
        <Col md={12}>
          <Heading title="Documents" />
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
          xxxl={9}
          xxl={9}
          xl={6}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Row className="document_container" justify="center">
            <Col md={2} align="end">
              <img src={FolderIcon} className="document_icon" />
            </Col>
            <Col md={10}>
              <span>August 23</span>
              <h3>Implementation of business plan for the 1st half</h3>
            </Col>
            <span className="border"></span>
          </Row>
          <Row className="document_container" justify="center">
            <Col md={2} align="end">
              <img src={WordIcon} className="document_icon" />
            </Col>
            <Col md={10}>
              <span>August 23</span>
              <h3>Implementation of business plan for the 1st half</h3>
            </Col>
            <span className="border"></span>
          </Row>
          <Row className="document_container" justify="center">
            <Col md={2} align="end">
              <img src={PowerPointIcon} className="document_icon" />
            </Col>
            <Col md={10}>
              <span>August 23</span>
              <h3>Implementation of business plan for the 1st half</h3>
            </Col>
            <span className="border"></span>
          </Row>{" "}
          <Row className="document_container" justify="center">
            <Col md={2} align="end">
              <img src={PowerPointIcon} className="document_icon" />
            </Col>
            <Col md={10}>
              <span>August 23</span>
              <h3>Implementation of business plan for the 1st half</h3>
            </Col>
            <span className="border"></span>
          </Row>{" "}
          <Row className="document_container" justify="center">
            <Col md={2} align="end">
              <img src={ExcelIcon} className="document_icon" />
            </Col>
            <Col md={10}>
              <span>August 23</span>
              <h3>Implementation of business plan for the 1st half</h3>
            </Col>
            <span className="border"></span>
          </Row>
          <Row className="document_container" justify="center">
            <Col md={2} align="end">
              <img src={ExcelIcon} className="document_icon" />
            </Col>
            <Col md={10}>
              <span>August 23</span>
              <h3>Implementation of business plan for the 1st half</h3>
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

export default DocumentsContainer;
