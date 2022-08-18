import React, { useState } from "react";
import { Col, Container, Hidden, Row } from "react-grid-system";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Breadcrumb from "../../components/breadcrumb";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar/Sidebar";

const Styled = styled.div`
  .container {
    padding: 0 50px;
  }
  .breadcrumb {
    padding: 10px 50px;
  }
  .breadcrumb {
    background-color: #f3f3f3;
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
  const [isOpen, setOpen] = useState(true);
  const sidebarHandler = () => {
    setOpen(!isOpen);
  };
  return (
    <Styled>
      <Container fluid>
        <Header />
        <div className="container">
          <Navbar />
        </div>
        <Breadcrumb />
        <Row className="container" justify="between">
          <Hidden sm xs>
            <Col
              md={isOpen ? 2 : 0.75}
              style={{
                borderRight: "1px solid #f3f3f3",
                paddingTop: "15px",
              }}
            >
              <Sidebar isOpen={isOpen} sidebarHandler={sidebarHandler} />
            </Col>
          </Hidden>
          <Col
            style={{
              paddingTop: "15px",
            }}
          >
            <Outlet />
          </Col>
        </Row>
        <Footer />
      </Container>
    </Styled>
  );
};

export default MainLayout;
