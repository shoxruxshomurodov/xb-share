import React, { useState } from "react";
import { Col, Container, Hidden, Row } from "react-grid-system";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Aside from "../../components/aside";
import Breadcrumb from "../../components/breadcrumb";
import EventSlider from "../../components/event-slider";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar/Sidebar";

const Styled = styled.div`
  .container {
    padding: 0 50px;
  }
  .breadcrumb {
    background-color: #f3f3f3;
  }
  .page_container {
    padding-right: 50px;
  }
  @media screen and (max-width: 1280px) {
    .container {
      padding: 0 20px;
    }
    .breadcrumb {
      padding: 10px 20px;
    }
  }
  @media screen and (max-width: 768px) {
    .container {
      padding: 0 10px;
    }
    .breadcrumb {
      padding: 6px 10px;
    }
  }
`;
const MainLayout = () => {
  return (
    <Styled>
      <Container fluid>
        <Header />
        <Navbar />
        <Breadcrumb />
        <Row>
          <Hidden sm xs>
            <Aside />
          </Hidden>
          <Col>
            <Outlet />
          </Col>
          <Col
            md={1.5}
            style={{
              padding: 0,
            }}
          >
            <EventSlider />
          </Col>
        </Row>
        <Footer />
      </Container>
    </Styled>
  );
};

export default MainLayout;
