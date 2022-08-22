import { get } from "lodash";
import React, { useEffect, useMemo, useState } from "react";
import { Col, Container, Row, useScreenClass } from "react-grid-system";
import styled from "styled-components";
import EventSlider from "../../../components/event-slider";
import Heading from "../../../components/heading";
import PieChart from "../../../components/piechart";
import { useStore } from "../../../store";
import mainImage from "../../../assets/images/main-image.jpg";
import secondaryImage from "../../../assets/images/secondary.jpg";
import Button from "../../../components/button";
import ReactModal from "react-modal";
import Modal from "../../../components/modal/Modal";
import Input from "../../../components/input/Input";
const Styled = styled.div`
  .quick_links_section {
    background-color: #f3f3f3;
  }
  .main_news_container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .main_news_image {
    position: relative;
    height: 300px;
    width: 100%;
    background: ${`url(${mainImage})`};
    object-fit: cover;
    background-size: cover;
  }
  .main_news_date {
    position: absolute;
    top: 0;
    right: 0;
    background: #2dc161;
    padding: 6px 14px;
    color: #fff;
  }
  .main_news_context {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3 {
      margin-bottom: 15px;
    }
    p {
      margin-bottom: 20px;
    }
    span {
      color: #2d3748;
    }
  }
  .secondary_news_context {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .secondary_news_image {
    position: relative;
    height: 140px;
    width: 100%;
    background: ${`url(${secondaryImage})`};
    object-fit: cover;
    background-size: cover;
  }
  .secondary_news_context {
    max-height: 140px;
    overflow: hidden;
    display: flex;
    h3 {
      font-size: 22px;
    }
  }
  .secondary_news_date {
    position: absolute;
    top: 0;
    right: 0;
    background: #2dc161;
    padding: 6px 14px;
    color: #fff;
  }
  .border {
    width: 100%;
    height: 1px;
    background-color: #f3f3f3;
    margin: 15px 0;
  }
  .see-all-btn {
    margin: 10px 0;
    cursor: pointer;
    color: #2dc161;
    &::after {
      content: ">";
    }
  }
  .quick_links_section {
    background: #f3f3f3;
  }
  .statics_list {
    &_item {
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      .badge {
        width: 10px;
        height: 10px;
        display: inline-block;
        border-radius: 50%;
        margin-right: 10px;
      }
      .text-bold {
        font-weight: 600;
      }
      .bg-blue {
        background: blue;
      }
      .bg-yellow {
        background: yellow;
      }
      .bg-green {
        background: green;
      }
      .bg-orange {
        background: orange;
      }
      .bg-purple {
        background: purple;
      }
    }
  }
`;
const NewsContainer = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const setBreadcrumbs = useStore((state) =>
    get(state, "setBreadcrumbs", () => {})
  );

  const breadcrumbs = useMemo(() => [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    [],
  ]);
  useEffect(() => {
    setBreadcrumbs(breadcrumbs);
  }, []);
  const screenClass = useScreenClass();
  return (
    <>
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
            padding: "0 20px",
          }}
        >
          <Col xxxl={4} xxl={3.8} xl={6} lg={12} md={12} sm={12} xs={12}>
            <div className="main_news_container">
              <div className="main_news_image">
                <div className="main_news_date">
                  <p>Today</p>
                </div>
              </div>
              <div className="main_news_context">
                <h3>Fitch affirmed the IDR rating at ‘BB-’ for Xalq Bank</h3>
                <p>
                  Fitch Ratings has affirmed the Long-term Issuer Default
                  Ratings ("IDR") of Halyk Bank of the Republic of Uzbekistan
                  ("Halyk Bank") at 'BB-'. The rating outlook is Stable.
                </p>
                <span>6 views</span>
              </div>
            </div>
          </Col>
          <Col
            xxxl={5}
            xxl={5.7}
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
            <Row className="secondary_news_container">
              <Col md={4} className="p-0">
                <div className="secondary_news_image">
                  <div className="secondary_news_date">
                    <p>Today</p>
                  </div>
                </div>
              </Col>
              <Col md={8} className="secondary_news_context">
                <h3>Updated monthly report for June prepared</h3>
                <p>
                  The Financial Reporting and Control Department prepared a
                  report on the fulfillment of the bank's financial indicators
                  for June 2022.
                </p>
                <p>6 views</p>
              </Col>
            </Row>
            <div className="border"></div>
            <Row className="secondary_news_container">
              <Col md={4} className="p-0">
                <div className="secondary_news_image">
                  <div className="secondary_news_date">
                    <p>Today</p>
                  </div>
                </div>
              </Col>
              <Col md={8} className="secondary_news_context">
                <h3>Updated monthly report for June prepared</h3>
                <p>
                  The Financial Reporting and Control Department prepared a
                  report on the fulfillment of the bank's financial indicators
                  for June 2022.
                </p>
                <p>6 views</p>
              </Col>
            </Row>
            <div className="border"></div>
            <Row className="secondary_news_container">
              <Col md={4} className="p-0">
                <div className="secondary_news_image">
                  <div className="secondary_news_date">
                    <p>Today</p>
                  </div>
                </div>
              </Col>
              <Col md={8} className="secondary_news_context">
                <h3>Updated monthly report for June prepared</h3>
                <p>
                  The Financial Reporting and Control Department prepared a
                  report on the fulfillment of the bank's financial indicators
                  for June 2022.
                </p>
                <p>6 views</p>
              </Col>
            </Row>
          </Col>
          <Col xxxl={3} xxl={2.5} xl={12} lg={12} md={12} sm={12} xs={12}>
            <Button
              mb="10px"
              title="Contact to Department"
              onClick={() => setModalOpen(true)}
            />
            <EventSlider
              style={{
                marginTop: "20px",
              }}
            />
          </Col>
        </Row>
        <Row
          style={{
            padding: "0 20px",
            margin: "20px 0",
          }}
        >
          <Col md={12}>
            <a className="see-all-btn">See all </a>
          </Col>
        </Row>
        <Row
          style={{
            margin: "40px 0 0 0",
            padding: "30px 20px 50px 20px",
            background: "#f3f3f3",
          }}
        >
          <Col md={12}>
            <Heading title="Quick Links" />
          </Col>
          <Col md={3}>
            <Button mt={"15px"} title="Managment Reporting" />
          </Col>{" "}
          <Col md={3}>
            <Button mt={"15px"} />
          </Col>{" "}
          <Col md={3}>
            <Button mt={"15px"} />
          </Col>{" "}
          <Col md={3}>
            <Button mt={"15px"} />
          </Col>{" "}
          <Col md={3}>
            <Button mt={"15px"} />
          </Col>{" "}
          <Col md={3}>
            <Button mt={"15px"} />
          </Col>{" "}
          <Col md={3}>
            <Button mt={"15px"} />
          </Col>{" "}
          <Col md={3}>
            <Button mt={"15px"} />
          </Col>
        </Row>
        <Row
          style={{
            margin: "40px 0 0 0",
            padding: "0 20px 50px 20px",
          }}
        >
          <Col md={12}>
            <Heading title="Documents" />
          </Col>
        </Row>
        <Modal isOpen={isModalOpen}>
          <Row>
            <Col md={12}>
              <h3>Subject</h3>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <input type="text" />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <h3>Description</h3>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Input />
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <Button title="Send" />
            </Col>
            <Col md={3}>
              <Button
                title="Cancel"
                color="#000"
                bg="#f3f3f3"
                onClick={() => setModalOpen(false)}
              />
            </Col>
          </Row>
        </Modal>
      </Styled>
    </>
  );
};

export default NewsContainer;
